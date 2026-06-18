import Image from 'next/image';
import {
  NavbarMenu,
  NavbarMenuContent,
  NavbarMenuLink,
} from 'fumadocs-ui/layouts/home/navbar';
import DocsNavbarMenuIcon from '@/public/docs-navbar-menu-icon.png';
import { getNavbarModules } from '@/lib/navbar-modules';
import { getModuleLucideIconForHref } from '@/lib/module-icons';
import { NavbarMenuTriggerButton } from './navbar-menu-trigger';

/** 大屏三列网格下，右侧 2×2 单元格的定位（与 Fumadocs 文档示例一致） */
const MODULE_GRID_POSITIONS = [
  'lg:col-start-2 lg:row-start-1',
  'lg:col-start-2 lg:row-start-2',
  'lg:col-start-3 lg:row-start-1',
  'lg:col-start-3 lg:row-start-2',
];

/**
 * 首页顶栏「Documentation」下拉：大图入口 + 各 root 文档分区直达链接
 */
export function DocsNavbarMenu() {
  const modules = getNavbarModules();

  return (
    <NavbarMenu>
      <NavbarMenuTriggerButton>Documentation</NavbarMenuTriggerButton>
      <NavbarMenuContent className="grid w-[min(92vw,44rem)] gap-2 p-2 sm:w-auto md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 lg:gap-3">
        {/* 文档总览：对应 content/docs/index.mdx */}
        <NavbarMenuLink href="/docs" className="md:row-span-2">
          <div className="-mx-3 -mt-3">
            <Image
              src={DocsNavbarMenuIcon}
              alt="Docs"
              className="rounded-t-lg object-cover"
              style={{
                maskImage: 'linear-gradient(to bottom,white 60%,transparent)',
              }}
            />
          </div>
          <p className="font-medium">Introduction</p>
          <p className="text-fd-muted-foreground text-sm">
            人都有两次生命，第二次是当你意识到生命只有一次的时候。
          </p>
        </NavbarMenuLink>

        {modules.map((mod, index) => {
          const Icon = getModuleLucideIconForHref(mod.href);
          const gridClass = MODULE_GRID_POSITIONS[index] ?? '';

          return (
            <NavbarMenuLink
              key={mod.href}
              href={mod.href}
              className={gridClass}
            >
              <Icon className="bg-fd-primary mb-2 rounded-md p-1" />
              <p className="font-medium">{mod.title}</p>
              <p className="text-fd-muted-foreground text-sm">
                {mod.description ?? `Open the ${mod.title} section`}
              </p>
            </NavbarMenuLink>
          );
        })}
      </NavbarMenuContent>
    </NavbarMenu>
  );
}
