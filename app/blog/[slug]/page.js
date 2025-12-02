// LOCATION: app/blog/[slug]/page.js

import { client } from '../../../lib/sanity/client';
import { urlForImage } from '@/lib/sanity/image-url';
import PortableTextComponent from '@/app/components/PortableTextComponent';
import Link from 'next/link';

// 1. IMPROVED GROQ QUERY
// Added 'caption' fetching for the main image
const POST_QUERY = `*[_type == "post" && slug.current == $slug][0] {
  title,
  publishedAt,
  mainImage {
    asset->{
      _id,
      url,
    },
    alt,
    caption
  },
  body
}`;

// Fetch post
async function getPost(slug) {
  const post = await client.fetch(POST_QUERY, { slug });
  return post;
}

// Helper: Format Date nicely (e.g., "January 12, 2025")
const formatDate = (dateString) => {
  if (!dateString) return 'Date not available';
  return new Intl.DateTimeFormat('en-US', {
    dateStyle: 'long'
  }).format(new Date(dateString));
};

export default async function BlogPostPage({ params }) {
  const post = await getPost(params.slug);

  // 404 State - Centered and Clean
  if (!post) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-gray-50 px-6 text-center">
        <h1 className="text-4xl font-bold text-dark-teal mb-4">Post not found</h1>
        <p className="text-gray-600 mb-8">The article you are looking for does not exist.</p>
        <Link
          href="/blog"
          className="px-6 py-3 bg-medium-blue text-white rounded-full font-medium shadow-md hover:bg-dark-teal transition-all duration-300"
        >
          Return to Blog
        </Link>
      </div>
    );
  }

  // Generate Image URL safely with higher resolution for Hero
  const mainImageUrl = post.mainImage
    ? urlForImage(post.mainImage)?.width(1400).height(800).fit('max').auto('format').url()
    : null;

  return (
    <article className="bg-gray-50 min-h-screen pb-24 animate-fadeIn">
      {/* 6. ANIMATION UTILITY (Inline for now to ensure it works without global config) */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>

      {/* 5. BACK NAVIGATION (Sticky or Top) */}
      <div className="container mx-auto px-6 max-w-4xl pt-8 pb-6">
        <Link
          href="/blog"
          className="inline-flex items-center text-medium-blue font-medium hover:text-dark-teal transition-colors group"
        >
          <span className="bg-white p-2 rounded-full shadow-sm border border-gray-200 group-hover:shadow-md transition-all mr-3 group-hover:-translate-x-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
          </span>
          Back to all posts
        </Link>
      </div>

      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* HEADER SECTION */}
        <header className="text-center mb-10">
          {/* 3. DATE & META */}
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-500 font-medium uppercase tracking-wider mb-4">
            <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
            <span>•</span>
            <span>Blog Post</span>
          </div>

          {/* 2. TYPOGRAPHY - TITLE */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-teal mb-6 leading-tight">
            {post.title}
          </h1>
        </header>

        {/* 1. HERO IMAGE */}
        {mainImageUrl && (
          <figure className="mb-12 relative group">
            <div className="overflow-hidden rounded-2xl shadow-xl bg-gray-200 aspect-video md:aspect-[21/9] relative">
              <img
                src={mainImageUrl}
                alt={post.mainImage.alt || post.title}
                className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
                loading="eager"
              />
            </div>
            {/* 10. CAPTION */}
            {post.mainImage.caption && (
              <figcaption className="text-center text-sm text-gray-500 mt-3 italic">
                {post.mainImage.caption}
              </figcaption>
            )}
          </figure>
        )}

        {/* 4. CONTENT CONTAINER */}
        <div className="prose prose-lg prose-teal max-w-none mx-auto
          prose-headings:font-bold prose-headings:text-dark-teal
          prose-p:text-gray-700 prose-p:leading-relaxed
          prose-a:text-medium-blue prose-a:no-underline prose-a:border-b-2 prose-a:border-medium-blue/30 hover:prose-a:border-medium-blue hover:prose-a:text-dark-teal prose-a:transition-all
          prose-img:rounded-xl prose-img:shadow-md
          prose-li:text-gray-700"
        >
          <PortableTextComponent blocks={post.body} />
        </div>

        {/* FOOTER / SHARE / TAGS AREA */}
        <div className="mt-16 pt-10 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 mb-4 md:mb-0">
            Thanks for reading!
          </p>
          <div className="flex gap-4">
             {/* You can add social share buttons here later */}
             <Link
              href="/blog"
              className="text-medium-blue font-semibold hover:underline"
             >
               Read more articles &rarr;
             </Link>
          </div>
        </div>

      </div>
    </article>
  );
}
