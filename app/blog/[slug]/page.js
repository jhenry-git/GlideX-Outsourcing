// LOCATION: glidex-outsourcing/app/blog/[slug]/page.js

import { client } from '@/lib/sanity/client';
import { urlForImage } from '@/lib/sanity/image-url';
import PortableTextComponent from '@/app/components/PortableTextComponent';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, Share2, Terminal } from 'lucide-react';

// 1. QUERY
const POST_QUERY = `*[_type == "post" && slug.current == $slug][0] {
  title,
  excerpt,
  description,
  publishedAt,
  _createdAt,
  _updatedAt,
  "readingTime": round(length(pt::text(body)) / 5 / 180 ),
  mainImage {
    asset->{ _id, url },
    alt,
    caption
  },
  body
}`;

// SEO METADATA
export async function generateMetadata({ params }) {
  const post = await client.fetch(POST_QUERY, { slug: params.slug });
  if (!post) return {};
  const imageUrl = post.mainImage ? urlForImage(post.mainImage).url() : '';

  return {
    title: post.title,
    description: post.excerpt || post.description || '',
    openGraph: {
      title: post.title,
      description: post.excerpt || '',
      url: `https://www.glidexoutsourcing.com/blog/${params.slug}`,
      images: imageUrl ? [{ url: imageUrl }] : [],
      type: 'article',
    },
  };
}

async function getPost(slug) {
  return await client.fetch(POST_QUERY, { slug });
}

const formatDate = (dateString) => {
  if (!dateString) return 'DATE_UNKNOWN';
  return new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(new Date(dateString));
};

export default async function BlogPostPage({ params }) {
  const post = await getPost(params.slug);

  // 404 STATE
  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#0B1120] px-6 text-center text-slate-200">
        <Terminal size={64} className="text-red-500 mb-6 opacity-80" />
        <h1 className="text-4xl font-bold text-white mb-2 font-mono">ERROR_404</h1>
        <p className="font-mono text-sm mb-8 text-slate-400">
          FILE_NOT_FOUND: The requested article log does not exist.
        </p>
        <Link
          href="/blog"
          className="px-6 py-3 border border-slate-700 hover:border-cyan-500 text-cyan-400 font-mono text-sm rounded transition-colors"
        >
          RETURN_TO_INDEX
        </Link>
      </div>
    );
  }

  const mainImageUrl = post.mainImage
    ? urlForImage(post.mainImage)?.width(1400).height(800).fit('max').auto('format').url()
    : null;

  const schemaImageUrl = post.mainImage ? urlForImage(post.mainImage).url() : '';

  return (
    <article className="bg-[#0B1120] min-h-screen pb-24 text-slate-200 selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">

      {/* GLOBAL BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              `linear-gradient(to right, #ffffff 1px, transparent 1px),
               linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative z-10">

        {/* TOP BAR */}
        <div className="border-b border-slate-800 bg-slate-900/80 backdrop-blur-md sticky top-0 z-50">
          <div className="container mx-auto px-6 max-w-4xl h-16 flex items-center justify-between">
            <Link
              href="/blog"
              className="group inline-flex items-center text-sm font-mono text-slate-300 hover:text-cyan-400 transition-colors"
            >
              <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
              BACK_TO_INTEL
            </Link>

            <div className="text-xs font-mono text-slate-500 hidden md:block">
              SECURE_CONNECTION_ESTABLISHED
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 max-w-4xl pt-12">

          {/* HEADER */}
          <header className="mb-12 text-center md:text-left">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-6 text-xs font-mono text-cyan-400 mb-6 uppercase tracking-wider">
              <span className="flex items-center gap-2 px-3 py-1 rounded bg-cyan-950/40 border border-cyan-900/50">
                <Calendar size={12} /> {formatDate(post.publishedAt)}
              </span>
              <span className="flex items-center gap-2 px-3 py-1 rounded bg-slate-800 border border-slate-700 text-slate-300">
                <Clock size={12} /> {post.readingTime || 5} MIN READ
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight tracking-tight drop-shadow-lg">
              {post.title}
            </h1>
          </header>

          {/* GLASS CONTAINER */}
          <div className="bg-slate-900/80 backdrop-blur-md border border-slate-700/50 rounded-3xl overflow-hidden shadow-2xl">

            {/* HERO IMAGE */}
            {mainImageUrl && (
              <div className="relative group w-full border-b border-slate-800">
                <div className="aspect-video relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60 z-10" />
                  <img
                    src={mainImageUrl}
                    alt={post.mainImage.alt || post.title}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                    loading="eager"
                  />
                </div>
              </div>
            )}

            {/* CONTENT */}
            <div className="p-8 md:p-12 lg:p-16">

              {/* ********** BODY TEXT FIX IMPLEMENTED HERE ********** */}
              <div
                className="
                  blog-body
                  prose prose-lg md:prose-xl prose-invert
                  text-white max-w-none
                  prose-headings:text-white
                  prose-p:text-white
                  prose-strong:text-white
                  prose-ul:text-white
                  prose-ol:text-white
                "
              >
                <PortableTextComponent blocks={post.body} />
              </div>
              {/* ********** END BODY FIX ********** */}

              {/* FOOTER */}
              <div className="mt-16 pt-8 border-t border-slate-800/50">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <p className="text-white font-bold mb-1">Transmission Complete</p>
                    <p className="text-sm text-slate-400">Was this protocol useful?</p>
                  </div>
                  <div className="flex gap-4">
                    <button className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-all text-sm font-medium border border-slate-700">
                      <Share2 size={16} /> Share
                    </button>
                    <Link
                      href="/blog"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white transition-all text-sm font-bold shadow-[0_0_20px_rgba(8,145,178,0.3)]"
                    >
                      Next Entry
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* STRUCTURED DATA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            image: schemaImageUrl,
            author: {
              "@type": "Organization",
              name: "GlideX Outsourcing",
            },
            datePublished: post._createdAt,
            dateModified: post._updatedAt,
          }),
        }}
      />
    </article>
  );
}
