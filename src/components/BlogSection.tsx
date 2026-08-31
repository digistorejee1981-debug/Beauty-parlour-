import React, { useState } from 'react';
import { Sparkles, Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';
import { BLOG_POSTS } from '../data/parlourData';
import { BlogPost } from '../types';
import { BlogModal } from './BlogModal';

interface BlogSectionProps {
  onOpenBooking: () => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onOpenBooking }) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background soft ambient accents */}
      <div className="absolute top-1/3 left-0 w-80 h-80 rounded-full bg-pink-50 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-100 text-pink-700 text-[10px] font-bold tracking-widest uppercase mb-3 shadow-xs">
            <BookOpen className="w-3.5 h-3.5 text-pink-600" />
            <span>Beauty &amp; Skincare Journal</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
            Expert Beauty Insights <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-red-800">
              &amp; Glow Secrets
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            Read professional beauty tips, bridal makeup preparations, seasonal regimens, and healthy hair care secrets curated by our senior stylists.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              className="group relative rounded-3xl bg-white border border-pink-100/80 overflow-hidden shadow-sm hover:shadow-xl hover:border-pink-200 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Thumbnail Image */}
              <div className="relative h-48 sm:h-52 overflow-hidden bg-pink-50">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-xs text-gray-900 text-[11px] font-bold tracking-wider uppercase shadow-xs">
                  {post.category}
                </div>

                <div className="absolute bottom-3 left-3.5 flex items-center gap-1 text-[11px] text-white/90 font-medium">
                  <Calendar className="w-3.5 h-3.5 text-pink-300" />
                  <span>{post.date}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs text-pink-700 font-medium mb-2">
                    <Clock className="w-3.5 h-3.5 text-pink-600" />
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-pink-700 transition-colors leading-snug line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                {/* Read More Action */}
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <button
                    onClick={() => setSelectedPost(post)}
                    className="w-full py-2.5 px-3 rounded-full text-xs sm:text-sm font-semibold text-pink-700 bg-pink-50 hover:bg-pink-100 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>Read Full Article</span>
                    <ArrowRight className="w-3.5 h-3.5 text-pink-600 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Blog Article Reader Modal */}
      <BlogModal
        post={selectedPost}
        onClose={() => setSelectedPost(null)}
        onOpenBooking={onOpenBooking}
      />
    </section>
  );
};
