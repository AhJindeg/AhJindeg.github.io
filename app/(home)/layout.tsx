import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions, linkItems } from '@/lib/layout.shared';
import { getHomeMobileNavItems } from '@/lib/home-mobile-nav-items';
import { DocsNavbarMenu } from './docs-navbar-menu';
import { LinkNavbarMenu } from './link-navbar-menu';

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
          type: 'main',
          on: 'nav',
          text: 'Blog',
          url: '/blog',
          active: 'nested-url',
        },
        {
          type: 'custom',
          on: 'nav',
          children: <LinkNavbarMenu />,
        },
        ...getHomeMobileNavItems(),
        ...linkItems,
      ]}
      className="[--color-fd-muted-foreground:var(--color-neutral-950)] dark:[--color-fd-muted-foreground:var(--color-slate-100)] dark:bg-neutral-950 dark:[--color-fd-background:var(--color-neutral-950)] [--color-fd-primary:var(--color-brand)]"
    >
      {children}
    </HomeLayout>
  );
}