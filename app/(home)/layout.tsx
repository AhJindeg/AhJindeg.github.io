import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions, linkItems } from '@/lib/layout.shared';
import { NavbarMenu, NavbarMenuTrigger } from 'fumadocs-ui/layouts/home/navbar';
import Link from 'fumadocs-core/link';
import { DocsNavbarMenu } from './docs-navbar-menu';

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <HomeLayout
      {...baseOptions()}
      links={[
        {
          type: 'custom',
          on: 'nav',
          children: <DocsNavbarMenu />,
        },
        {
          type: 'custom',
          on: 'nav',
          children: (
            <NavbarMenu>
              <NavbarMenuTrigger>
                <Link href="/blog">Blog</Link>
              </NavbarMenuTrigger>
            </NavbarMenu>
          ),
        },
        ...linkItems,
      ]}
      className="[--color-fd-muted-foreground:var(--color-neutral-950)] dark:[--color-fd-muted-foreground:var(--color-slate-100)] dark:bg-neutral-950 dark:[--color-fd-background:var(--color-neutral-950)] [--color-fd-primary:var(--color-brand)]"
    >
      {children}
    </HomeLayout>
  );
}