import type { Folder, Root } from 'fumadocs-core/page-tree';
import { getPageTreeRoots } from 'fumadocs-core/page-tree';
import type { ReactNode } from 'react';
import { source } from '@/lib/source';
import { firstPageUrlInFolder } from '@/lib/page-tree-nav';

/** 导航展示用：从 docs 根分区（meta.json 中 root: true 的目录）解析入口链接 */
export type NavbarModule = {
  title: string;
  href: string;
  description?: string;
};

/**
 * 将 PageTree 中的 ReactNode 标题转为纯文本（复杂节点则回退为默认值）
 */
function navText(node: ReactNode, fallback: string): string {
  if (typeof node === 'string' || typeof node === 'number') {
    return String(node);
  }
  return fallback;
}

/**
 * 从整棵 docs 树取出「根分区」文件夹（排除 PageTree 的 Root 节点本身）
 */
function listDocsRootFolders(pageTree: Root): Folder[] {
  return getPageTreeRoots(pageTree).filter(
    (n): n is Folder => 'type' in n && n.type === 'folder' && Boolean(n.root),
  );
}

/**
 * 供首页 Documentation 下拉菜单使用：与 content/docs 下各 root 模块保持一致
 */
export function getNavbarModules(): NavbarModule[] {
  const folders = listDocsRootFolders(source.pageTree);
  const modules: NavbarModule[] = [];

  for (const folder of folders) {
    const href = firstPageUrlInFolder(folder);
    if (!href) continue;

    const rawDesc =
      folder.description === undefined
        ? undefined
        : navText(folder.description, '');
    const entry: NavbarModule = {
      title: navText(folder.name, 'Documentation'),
      href,
    };
    if (rawDesc && rawDesc.length > 0) {
      entry.description = rawDesc;
    }
    modules.push(entry);
  }

  return modules;
}
