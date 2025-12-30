import type { Metadata } from 'next'
import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Inter } from 'next/font/google';
import SearchDialog from '@/components/search';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "AhJindeg's Blog",
  description: "AhJindeg's Blog, AhJindeg, Arthur, Arthur AJ. W., 阿烬°, 前端技术博客",
  icons: {
    icon: '/logo.png',
  },
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider search={{
          SearchDialog
        }}>{children}</RootProvider>
      </body>
    </html>
  );
}
