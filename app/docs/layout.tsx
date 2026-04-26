import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { attachModuleIconsToPageTree } from '@/lib/module-icons';

export default function Layout({ children }: LayoutProps<'/docs'>) {
  const pageTree = attachModuleIconsToPageTree(source.pageTree);
  return (
    <DocsLayout tree={pageTree} {...baseOptions()}>
      {children}
    </DocsLayout>
  );
}
