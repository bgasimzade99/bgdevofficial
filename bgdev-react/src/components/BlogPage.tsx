import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Clock } from 'lucide-react';
import { blogPosts, categories } from '../data/blogPosts';
import { usePageSEO } from '../utils/seo';
import BlogCoverImage from './BlogCoverImage';

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

const BlogPage: React.FC = () => {
  usePageSEO({
    title: 'BGDev Blog: AI, SaaS & Web Development Insights for SMEs',
    description:
      'Practical articles on AI chatbots, AI models, automation with n8n, SaaS trends for 2026 and 2027, and how small and medium businesses can build a website or app people trust.',
    path: '/blog',
  });

  const [activeCategory, setActiveCategory] = useState<string>('All');

  const [featured, ...rest] = blogPosts;

  const filtered = useMemo(() => {
    if (activeCategory === 'All') return rest;
    return rest.filter((post) => post.category === activeCategory);
  }, [activeCategory, rest]);

  return (
    <div className="min-h-screen bg-ink-950 text-white">
      <section className="relative pt-32 sm:pt-40 pb-16 overflow-hidden">
        <div className="absolute inset-0 dot-grid-bg opacity-20" />
        <motion.div
          aria-hidden
          className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-brand-400/20 blur-[110px] animate-blob-a"
        />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 text-xs text-brand-200 mb-6 px-3 py-1.5 rounded-full border border-brand-300/25 bg-brand-400/[0.08]">
              <BookOpen className="w-3.5 h-3.5" />
              Insights for SMEs, SaaS founders & builders
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-balance">
              Ideas on AI, SaaS, and <span className="text-gradient-brand">building a business people trust.</span>
            </h1>
            <p className="mt-7 text-lg text-neutral-400 leading-relaxed max-w-xl">
              Practical, no-hype articles on AI chatbots, automation, AI models, and
              what is actually working for small and medium businesses right now.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to={`/blog/${featured.slug}`}
              className="group relative grid lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-white/10 panel-hover"
            >
              <div className="relative h-64 lg:h-full min-h-[260px]">
                <BlogCoverImage
                  src={featured.image}
                  alt={featured.title}
                  category={featured.category}
                  className="absolute inset-0 w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent lg:hidden" />
              </div>
              <div className="p-6 sm:p-10 flex flex-col justify-center">
                <span className="label text-brand-300/80 mb-4">Featured &middot; {featured.category}</span>
                <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white mb-4 text-balance group-hover:text-brand-200 transition-colors">
                  {featured.title}
                </h2>
                <p className="text-neutral-400 leading-relaxed mb-6">{featured.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-neutral-500 mb-6">
                  <span>{formatDate(featured.date)}</span>
                  <span className="w-1 h-1 rounded-full bg-neutral-700" />
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {featured.readTime}
                  </span>
                </div>
                <span className="inline-flex items-center text-sm text-gradient-brand font-semibold">
                  Read article
                  <ArrowRight className="ml-2 w-4 h-4 text-brand-300 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3 mb-10">
            {['All', ...categories].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors duration-200 ${
                  activeCategory === cat
                    ? 'bg-brand-gradient text-white border-transparent'
                    : 'text-neutral-400 border-white/10 hover:border-white/25 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              >
                <Link
                  to={`/blog/${post.slug}`}
                  className="group flex flex-col h-full rounded-2xl overflow-hidden border border-white/10 panel-hover"
                >
                  <div className="relative h-44 overflow-hidden">
                    <BlogCoverImage
                      src={post.image}
                      alt={post.title}
                      category={post.category}
                      className="absolute inset-0 w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wide bg-ink-950/80 backdrop-blur-md border border-white/10 text-brand-200">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-5 sm:p-6 flex flex-col flex-1">
                    <h3 className="text-base font-semibold text-white mb-2.5 leading-snug group-hover:text-brand-200 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-neutral-400 text-sm leading-relaxed mb-4 flex-1">{post.excerpt}</p>
                    <div className="flex items-center gap-3 text-[11px] text-neutral-500 mt-auto pt-4 border-t border-white/10">
                      <span>{formatDate(post.date)}</span>
                      <span className="w-1 h-1 rounded-full bg-neutral-700" />
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-white/10">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-2xl overflow-hidden border border-white/10 p-8 sm:p-12"
          >
            <div className="absolute inset-0 bg-brand-gradient opacity-90" />
            <div className="absolute inset-0 dot-grid-bg opacity-10" />
            <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <h3 className="font-display text-2xl sm:text-3xl font-semibold text-white mb-2">
                  Have a project in mind?
                </h3>
                <p className="text-white/85 max-w-lg">
                  We build the websites, apps, and AI integrations we write about.
                  Let's talk about yours.
                </p>
              </div>
              <Link
                to="/contact"
                className="shrink-0 inline-flex items-center bg-white text-ink-950 font-semibold rounded-full px-6 py-3 hover:-translate-y-0.5 transition-transform"
              >
                Start a project
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
