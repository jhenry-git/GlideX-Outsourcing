// LOCATION: glidex-outsourcing/app/blog/page.js

import { client } from '../../lib/sanity/client';
import Link from 'next/link';
// import Image from 'next/image'; // Uncomment if you have valid domains configured in next.config.js

// 1. IMPROVED GROQ QUERY
// Fetches excerpt (first 150 chars of body) and image URL directly
const POSTS_QUERY = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  "excerpt": pt::text(body)[0..150] + "...",
  "imageUrl": mainImage.asset->url
}`;

// Helper for nice date formatting
const formatDate = (dateString) => {
  if (!dateString) return 'Date not available';
  return new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(new Date(dateString));
};

async function getPosts() {
  const posts = await client.fetch(POSTS_QUERY);
  return posts;
}

export default async function BlogIndexPage() {
  const posts = await getPosts();

  // 2. IMPROVED EMPTY STATE
  if (!posts || posts.length === 0) {
    return (
      <section className="py-24 px-6 bg-gray-50 min-h-[60vh] flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-dark-teal mb-4">
          GlideX Insights
        </h1>
        <p className="text-xl text-gray-600 max-w-lg mx-auto">
          We are currently curating high-impact articles for you. Check back soon for updates!
        </p>
      </section>
    );
  }

  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        
        {/* 5. IMPROVED HEADER SECTION */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-dark-teal mb-4">
            GlideX Insights: The VA Blog
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Expert tips, strategies, and insights on virtual assistance, outsourcing, and scaling your business efficiently.
          </p>
        </div>
        
        {/* 2. GRID LAYOUT & 3. CARD POLISH */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post._id} className="flex flex-col h-full group">
              <Link
                href={`/blog/${post.slug}`}
                aria-label={`Read article: ${post.title}`}
                className="flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                {/* 9. FEATURED IMAGE SUPPORT */}
                {post.imageUrl ? (
                  <div className="h-48 w-full bg-gray-200 overflow-hidden relative">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                ) : (
                  // Fallback gradient if no image exists
                  <div className="h-48 w-full bg-gradient-to-br from-medium-blue/10 to-dark-teal/10 flex items-center justify-center">
                     <span className="text-dark-teal font-medium opacity-50">GlideX Blog</span>
                  </div>
                )}

                <div className="p-8 flex flex-col flex-grow">
                  {/* 4. DATE FORMATTING */}
                  <p className="text-sm font-medium text-medium-blue mb-3">
                    {formatDate(post.publishedAt)}
                  </p>

                  <h2 className="text-2xl font-bold text-dark-teal mb-3 leading-tight group-hover:text-medium-blue transition-colors">
                    {post.title}
                  </h2>

                  {/* 1. EXCERPT */}
                  <p className="text-gray-600 mb-6 line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center text-medium-blue font-semibold mt-auto group-hover:underline decoration-2 underline-offset-4">
                    Read Article
                    <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* 10. PAGINATION PLACEHOLDER (Visual Only) */}
        {/* To implement real pagination, we'd need searchParams handling, but this shows the intent */}
        {posts.length > 9 && (
          <div className="mt-16 text-center">
            <button className="px-8 py-3 bg-white border border-gray-300 text-dark-teal font-semibold rounded-full hover:bg-gray-50 hover:shadow-md transition-all">
              Load More Articles
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
