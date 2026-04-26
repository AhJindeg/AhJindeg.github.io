import type { Folder, Node } from 'fumadocs-core/page-tree';

/**
 * 取文件夹在导航中的默认落地 URL：优先 index，否则递归第一个子页面
 */
export function firstPageUrlInFolder(folder: Folder): string | undefined {
  if (folder.index?.url) return folder.index.url;
  return firstPageUrlInNodes(folder.children);
}

export function firstPageUrlInNodes(nodes: Node[]): string | undefined {
  for (const node of nodes) {
    if (node.type === 'separator') continue;
    if (node.type === 'page') return node.url;
    if (node.type === 'folder') {
      const url = firstPageUrlInFolder(node);
      if (url) return url;
    }
  }
  return undefined;
}
