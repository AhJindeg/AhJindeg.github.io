import { blogSource } from '@/lib/blog-source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { attachModuleIconsToPageTree } from '@/lib/module-icons';

export default function Layout({ children }: LayoutProps<'/blog'>) {
  const pageTree = attachModuleIconsToPageTree(blogSource.pageTree);
  return (
    <DocsLayout tree={pageTree} {...baseOptions()}>
      {children}
    </DocsLayout>
  );
}
