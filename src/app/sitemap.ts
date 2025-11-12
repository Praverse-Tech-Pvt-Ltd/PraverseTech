
import { getBlogPosts } from '@/lib/blog';
import { MetadataRoute } from 'next';

const BASE_URL = 'https://www.praverse.ai';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getBlogPosts();

  const postEntries: MetadataRoute.Sitemap = posts.map(post => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.metadata.date),
    changeFrequency: 'daily',
  }));

  const staticPages = [
    '/',
    '/pharma-ai',
    '/humanoid-robotics',
    '/healthmate',
    '/about',
    '/blog',
    '/contact',
    '/privacy',
    '/terms',
  ].map(route => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
  }));

  return [
    ...staticPages,
    ...postEntries,
  ];
}
