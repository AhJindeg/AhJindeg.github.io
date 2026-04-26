import { aiSource } from '@/lib/ai-source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { attachModuleIconsToPageTree } from '@/lib/module-icons';

export default function Layout({ children }: LayoutProps<'/ai-engineering'>) {
  const pageTree = attachModuleIconsToPageTree(aiSource.pageTree);
  return (
    <DocsLayout tree={pageTree} {...baseOptions()}>
      {children}
    </DocsLayout>
  );
}
