// LOCATION: glidex-outsourcing/app/sitemap.js

import { client } from '@/lib/sanity/client';

export default async function sitemap() {
  const baseUrl = 'https://www.glidexoutsourcing.com';

  // 1. FETCH BLOG POSTS (Dynamic Content)
  const blogPosts = await client.fetch(
    `*[_type == "post"]{
      "slug": slug.current,
      _updatedAt
    }`
  );

  const blogUrls = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post._updatedAt,
    changeFrequency: 'weekly', // Blogs change weekly
    priority: 0.8, // Blogs are high value for SEO keywords
  }));

  // 2. DEFINE STATIC ROUTES WITH SEO WEIGHTS
  const routes = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'daily', // Google should check your homepage often
      priority: 1.0, // HIGHEST PRIORITY
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9, // SERVICES ARE YOUR "MONEY PAGE" - High Priority
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
  ];

  // 3. MERGE EVERYTHING
  return [
    ...routes,
    ...blogUrls,
  ];
}
