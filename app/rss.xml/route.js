import { client } from '@/lib/sanity/client';
import { urlForImage } from '@/lib/sanity/image-url';

export async function GET() {
  const posts = await client.fetch(
    `*[_type == "post"] | order(_createdAt desc){
      title,
      slug,
      _createdAt,
      excerpt,
      mainImage
    }`
  );

  const feedItems = posts.map((post) => {
    const imageUrl = post.mainImage ? urlForImage(post.mainImage).url() : '';
    const imageTag = imageUrl ? `<enclosure url="${imageUrl}" type="image/jpeg"/>` : '';
    
    return `
    <item>
      <title>${post.title}</title>
      <link>https://www.glidexoutsourcing.com/blog/${post.slug.current}</link>
      <pubDate>${new Date(post._createdAt).toUTCString()}</pubDate>
      <description>${post.excerpt || ''}</description>
      ${imageTag}
    </item>`;
  }).join('');

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
      <title>GlideX Outsourcing Blog</title>
      <link>https://www.glidexoutsourcing.com/blog</link>
      <description>Latest AI, automation, and outsourcing insights</description>
      ${feedItems}
    </channel>
  </rss>`;

  return new Response(rss, { headers: { 'Content-Type': 'application/rss+xml' } });
}
