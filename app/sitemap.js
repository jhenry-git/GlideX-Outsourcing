import { client } from '@/lib/sanity/client';

export default async function sitemap() {
  const baseUrl = 'https://www.glidexoutsourcing.com';

  const blogPosts = await client.fetch(
    `*[_type == "post"]{
      "slug": slug.current,
      _updatedAt
    }`
  );

  const blogUrls = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post._updatedAt,
  }));

  return [
    { url: baseUrl, lastModified: new Date() },
    ...blogUrls,
  ];
}
