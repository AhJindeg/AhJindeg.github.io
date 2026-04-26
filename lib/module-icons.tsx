import type { Root, Node, Folder } from 'fumadocs-core/page-tree';
import {
  BookOpen,
  Code2,
  FileCode2,
  LayoutPanelLeft,
  Package,
  type LucideIcon,
} from 'lucide-react';
import { firstPageUrlInFolder } from '@/lib/page-tree-nav';

/**
 * 解析首段路径
 */
export function getModulePathSegment(href: string): string {
  return href.replace(/^\/docs\/?/, '').split('/').filter(Boolean)[0] ?? '';
}

/**
 * 按分区目录名选用 Lucide 图标
 */
export function getModuleLucideIcon(segment: string): LucideIcon {
  switch (segment) {
    case 'vue':
      return Code2;
    case 'JS_TS':
    case 'js_ts':
      return FileCode2;
    case 'vscode_cursor':
      return LayoutPanelLeft;
    case 'snippet-box':
      return Package;
    default:
      return BookOpen;
  }
}

/** 供下拉菜单：直接根据 href 取图标组件 */
export function getModuleLucideIconForHref(href: string): LucideIcon {
  return getModuleLucideIcon(getModulePathSegment(href));
}

/**
 * 为 meta 中 root: true 的分区挂载与首页菜单一致的图标（写入 PageTree 的 icon 字段）
 */
function mapFolderIcons(folder: Folder): Folder {
  const children = folder.children.map(mapNodeIcons) as Folder['children'];
  const next: Folder = { ...folder, children };

  if (!folder.root) return next;

  const href = firstPageUrlInFolder(next);
  if (!href) return next;

  const Icon = getModuleLucideIconForHref(href);
  return {
    ...next,
    icon: <Icon className="size-4" />,
  };
}

function mapNodeIcons(node: Node): Node {
  if (node.type === 'separator' || node.type === 'page') return node;
  return mapFolderIcons(node);
}

export function attachModuleIconsToPageTree(tree: Root): Root {
  return {
    ...tree,
    children: tree.children.map(mapNodeIcons),
  };
}
