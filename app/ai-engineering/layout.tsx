import { aiSource } from '@/lib/ai-source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import type { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout tree={aiSource.pageTree} {...baseOptions()}>
      {children}
    </DocsLayout>
  );
}
