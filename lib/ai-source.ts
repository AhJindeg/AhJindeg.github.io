import { aiEngineering } from 'fumadocs-mdx:collections/server';
import { type InferPageType, loader } from 'fumadocs-core/source';
import { lucideIconsPlugin } from 'fumadocs-core/source/lucide-icons';

// AI Engineering source 配置
export const aiSource = loader({
  baseUrl: '/ai-engineering',
  source: aiEngineering.toFumadocsSource(),
  plugins: [lucideIconsPlugin()],
});

export function getPageImage(page: InferPageType<typeof aiSource>) {
  const segments = [...page.slugs, 'image.png'];

  return {
    segments,
    url: `/og/ai-engineering/${segments.join('/')}`,
  };
}

export async function getLLMText(page: InferPageType<typeof aiSource>) {
  const processed = await page.data.getText('processed');

  return `# ${page.data.title}

${processed}`;
}
