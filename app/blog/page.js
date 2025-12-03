// LOCATION: glidex-outsourcing/app/blog/page.js

import { client } from '../../lib/sanity/client';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock, BookOpen, AlertCircle } from 'lucide-react';

// 1. GROQ QUERY
const POSTS_QUERY = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  "excerpt": pt::text(body)[0..180] + "...",
  "readingTime": round(length(pt::text(body)) / 5 / 180 ),
  "imageUrl": mainImage.asset->url
}`;

const formatDate = (dateString) => {
  if (!dateString) return 'DATE_UNKNOWN';
  return new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(new Date(dateString));
};

async function getPosts() {
  const posts = await client.fetch(POSTS_QUERY);
  return posts;
}

export default async function BlogIndexPage() {
  const posts = await getPosts();

  // 2. DARK MODE EMPTY STATE
  if (!posts || posts.length === 0) {
    return (
      <div className="bg-[#0B1120] min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
        
        <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-md max-w-lg relative z-10">
          <AlertCircle className="w-16 h-16 text-cyan-500 mx-auto mb-6 opacity-80" />
          <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">System Update</h1>
          <p className="text-slate-400 font-mono text-sm">
            DATABASE_EMPTY: Curating high-impact operational intel. Check back shortly.
          </p>
        </div>
      </div>
    );
  }

  // 3. SPLIT POSTS (Featured vs The Rest)
  const featuredPost = posts[0];
  const recentPosts = posts.slice(1);

  return (
    <div className="bg-[#0B1120] min-h-screen text-slate-50 overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* GLOBAL BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
      </div>

      <section className="relative z-10 py-32 px-6">
        <div className="container mx-auto max-w-7xl">
          
          {/* HEADER */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-slate-800 pb-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4">
                 <div className="h-1 w-12 bg-cyan-500 rounded-full" />
                 <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase">GlideX Insights</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-4">
                Operational <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Intelligence</span>
              </h1>
              <p className="text-slate-400 text-lg max-w-xl">
                Strategic protocols for scaling your business infrastructure using remote talent units.
              </p>
            </div>
          </div>

          {/* MAIN LAYOUT: Featured (Left) | List (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            
            {/* --- LEFT COLUMN: FEATURED POST --- */}
            <div className="lg:col-span-2 group relative">
              <Link href={`/blog/${featuredPost.slug}`} className="block h-full">
                <div className="relative h-full rounded-3xl overflow-hidden border border-slate-800 bg-slate-900/50 backdrop-blur-sm transition-all duration-500 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]">
                  
                  {/* Featured Image */}
                  <div className="relative h-[400px] w-full overflow-hidden">
                    {featuredPost.imageUrl ? (
                      <img
                        src={featuredPost.imageUrl}
                        alt={featuredPost.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                        <BookOpen className="text-slate-700 w-24 h-24" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                    
                    {/* Floating Badge */}
                    <div className="absolute top-6 left-6 px-3 py-1 bg-cyan-500/20 backdrop-blur-md border border-cyan-500/50 rounded-full text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider">
                      LATEST_TRANSMISSION
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 md:p-10 relative -mt-20 z-10">
                    <div className="flex items-center gap-4 text-sm text-cyan-400 font-mono mb-4">
                      <span className="flex items-center gap-1"><Calendar size={14}/> {formatDate(featuredPost.publishedAt)}</span>
                      <span className="h-3 w-[1px] bg-slate-700" />
                      <span className="flex items-center gap-1"><Clock size={14}/> {featuredPost.readingTime || 5} MIN READ</span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight group-hover:text-cyan-50 transition-colors">
                      {featuredPost.title}
                    </h2>

                    <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-2xl">
                      {featuredPost.excerpt}
                    </p>

                    <div className="inline-flex items-center text-cyan-400 font-bold uppercase tracking-wide group-hover:text-cyan-300 transition-colors">
                      Access Full Protocol <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* --- RIGHT COLUMN: RECENT POSTS LIST --- */}
            <div className="lg:col-span-1 flex flex-col gap-4">
              <h3 className="text-slate-500 font-mono text-xs uppercase tracking-widest mb-2 pl-2">
                Previous_Logs
              </h3>
              
              {recentPosts.map((post) => (
                <Link key={post._id} href={`/blog/${post.slug}`} className="group block">
                  <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/30 hover:bg-slate-800 transition-all duration-300 hover:border-slate-700">
                    
                    <div className="flex gap-4 items-start">
                      {/* Thumbnail (Optional - keeping it small) */}
                      <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-slate-800 border border-slate-700">
                        {post.imageUrl ? (
                           <img src={post.imageUrl} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        ) : (
                           <div className="w-full h-full flex items-center justify-center bg-slate-800"><BookOpen size={16} className="text-slate-600"/></div>
                        )}
                      </div>

                      <div className="flex-grow">
                        <div className="text-cyan-500/70 text-xs font-mono mb-2 flex items-center gap-2">
                           {formatDate(post.publishedAt)}
                        </div>
                        <h4 className="text-white font-bold text-lg leading-snug mb-2 group-hover:text-cyan-200 transition-colors line-clamp-2">
                          {post.title}
                        </h4>
                        <div className="flex items-center text-xs text-slate-500 font-mono group-hover:text-cyan-400 transition-colors">
                          READ_ENTRY <ArrowRight size={12} className="ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>

                  </div>
                </Link>
              ))}

              {/* View All Button */}
              {recentPosts.length > 0 && (
                 <button className="w-full py-4 mt-4 rounded-xl border border-slate-800 text-slate-400 font-mono text-sm hover:bg-slate-900 hover:text-white transition-all uppercase tracking-widest">
                   Load_Archive
                 </button>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
