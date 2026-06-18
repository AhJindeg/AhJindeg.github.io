import Image from 'next/image';
import {
  NavbarMenu,
  NavbarMenuContent,
  NavbarMenuLink,
} from 'fumadocs-ui/layouts/home/navbar';
import LinkNavbarMenuIcon from '@/public/link-navbar-menu-icon.png';
import { linkNavItems } from '@/lib/link-nav-items';
import { NavbarMenuTriggerButton } from './navbar-menu-trigger';

/**
 * 首页顶栏「Link」下拉：大图入口 + 各外链项目卡片（布局与 Documentation 一致）
 */
export function LinkNavbarMenu() {
  return (
    <NavbarMenu>
      <NavbarMenuTriggerButton>Link</NavbarMenuTriggerButton>
      <NavbarMenuContent className="grid w-[min(92vw,44rem)] gap-2 p-2 sm:w-auto md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 lg:gap-3">
        <div className="flex flex-col gap-2 rounded-lg border bg-fd-card p-3 md:row-span-2">
          <div className="-mx-3 -mt-3">
            <Image
              src={LinkNavbarMenuIcon}
              alt="Link"
              className="rounded-t-lg object-cover"
              style={{
                maskImage: 'linear-gradient(to bottom,white 60%,transparent)',
              }}
            />
          </div>
          <p className="font-medium">Link</p>
          <p className="text-fd-muted-foreground text-sm">
            个人小工具与 side projects。
          </p>
        </div>

        {linkNavItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavbarMenuLink
              key={item.href}
              href={item.href}
              external
              className={item.gridClass}
            >
              <Icon className="bg-fd-primary mb-2 rounded-md p-1" />
              <p className="font-medium">{item.title}</p>
              <p className="text-fd-muted-foreground text-sm">
                {item.description}
              </p>
            </NavbarMenuLink>
          );
        })}
      </NavbarMenuContent>
    </NavbarMenu>
  );
}
