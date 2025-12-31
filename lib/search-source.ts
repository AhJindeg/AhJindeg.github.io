import { docs, blog } from 'fumadocs-mdx:collections/server';
import { loader } from 'fumadocs-core/source';
import { lucideIconsPlugin } from 'fumadocs-core/source/lucide-icons';

// 获取 docs 和 blog 的原始 source
const docsSource = docs.toFumadocsSource();
const blogSource = blog.toFumadocsSource();

// 合并两个 source 的 files 数组，并确保每个文件的路径包含正确的前缀
const docsFiles = (docsSource.files || []).map((file: any) => {
  // 确保 docs 文件的 URL 和 path 都包含 /docs 前缀
  const url = file.url || file.path || '';
  const normalizedUrl = url.startsWith('/docs') ? url : url.startsWith('/') ? `/docs${url}` : `/docs/${url}`;
  
  return {
    ...file,
    url: normalizedUrl,
    // 如果文件有 path 属性，也更新它
    ...(file.path && { path: normalizedUrl }),
  };
});

const blogFiles = (blogSource.files || []).map((file: any) => {
  // 确保 blog 文件的 URL 和 path 都包含 /blog 前缀
  const url = file.url || file.path || '';
  const normalizedUrl = url.startsWith('/blog') ? url : url.startsWith('/') ? `/blog${url}` : `/blog/${url}`;
  
  return {
    ...file,
    url: normalizedUrl,
    // 如果文件有 path 属性，也更新它
    ...(file.path && { path: normalizedUrl }),
  };
});

const mergedFiles = [...docsFiles, ...blogFiles];

// 创建合并的 source 对象
const mergedSource = {
  ...docsSource,
  files: mergedFiles,
};

// 创建合并的 source 用于搜索
export const searchSource = loader({
  baseUrl: '/',
  source: mergedSource,
  plugins: [lucideIconsPlugin()],
});
