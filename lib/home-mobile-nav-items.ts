import type { LinkItemType } from 'fumadocs-ui/layouts/shared';
import { linkNavItems } from '@/lib/link-nav-items';

/**
 * 首页移动端折叠菜单项（on: 'menu'）。
 * NavbarMenu 动画下拉仅桌面可见（on: 'nav'），见 Fumadocs Layout Links 文档。
 */
export function getHomeMobileNavItems(): LinkItemType[] {
  return [
    {
      type: 'main',
      on: 'menu',
      text: 'Documentation',
      url: '/docs',
      active: 'nested-url',
    },
    {
      type: 'main',
      on: 'menu',
      text: 'Blog',
      url: '/blog',
      active: 'nested-url',
    },
    {
      type: 'menu',
      on: 'menu',
      text: 'Link',
      items: linkNavItems.map((item) => ({
        text: item.title,
        url: item.href,
        description: item.description,
        external: true,
      })),
    },
  ];
}
