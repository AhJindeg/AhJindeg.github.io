import { getPageImage, aiSource } from '@/lib/ai-source';
import { notFound } from 'next/navigation';
import { ImageResponse } from 'next/og';
import { generate as DefaultImage } from 'fumadocs-ui/og';

export const revalidate = false;

type AIOGRouteProps = {
  params: Promise<{
    slug: string[];
  }>;
};

export async function GET(
  _req: Request,
  { params }: AIOGRouteProps,
) {
  const { slug } = await params;
  const page = aiSource.getPage(slug.slice(0, -1));
  if (!page) notFound();

  return new ImageResponse(
    (
      <DefaultImage
        title={page.data.title}
        description={page.data.description}
        site="Arthur AJ. W."
      />
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}

export function generateStaticParams() {
  return aiSource.getPages().map((page) => ({
    lang: page.locale,
    slug: getPageImage(page).segments,
  }));
}
