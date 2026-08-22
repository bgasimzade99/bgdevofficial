import React from 'react';
import { motion } from 'framer-motion';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Clock, CheckCircle2 } from 'lucide-react';
import { getPostBySlug, getRelatedPosts } from '../data/blogPosts';
import { usePageSEO, useJsonLd } from '../utils/seo';
import BlogCoverImage from './BlogCoverImage';

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  const seoTitle = post ? `${post.title} | BGDev Blog` : 'Article | BGDev Blog';
  const seoDescription = post ? post.excerpt : 'BGDev blog article.';

  usePageSEO({
    title: seoTitle,
    description: seoDescription,
    path: post ? `/blog/${post.slug}` : '/blog',
  });

  useJsonLd(
    'blog-post-jsonld',
    post
      ? {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: post.title,
          description: post.excerpt,
          image: post.image,
          author: { '@type': 'Organization', name: 'BGDev' },
          publisher: {
            '@type': 'Organization',
            name: 'BGDev',
            logo: { '@type': 'ImageObject', url: 'https://bgdevofficial.com/logo512.png' },
          },
          datePublished: post.date,
          dateModified: post.date,
          mainEntityOfPage: `https://bgdevofficial.com/blog/${post.slug}`,
          keywords: post.tags.join(', '),
        }
      : null
  );

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const related = getRelatedPosts(post.slug, 3);

  return (
    <div className="min-h-screen bg-ink-950 text-white">
      <section className="relative pt-32 sm:pt-40 pb-10 overflow-hidden">
        <div className="absolute inset-0 dot-grid-bg opacity-20" />
        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to blog
            </Link>

            <div className="max-w-3xl">
              <span className="label text-brand-300/80 mb-4 inline-block">{post.category}</span>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-balance mb-6">
                {post.title}
              </h1>
              <div className="flex items-center gap-4 text-sm text-neutral-500">
                <span>{post.author}</span>
                <span className="w-1 h-1 rounded-full bg-neutral-700" />
                <span>{formatDate(post.date)}</span>
                <span className="w-1 h-1 rounded-full bg-neutral-700" />
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {post.readTime}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="pb-8">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative h-64 sm:h-96 rounded-2xl overflow-hidden border border-white/10"
          >
            <BlogCoverImage
              src={post.image}
              alt={post.title}
              category={post.category}
              className="absolute inset-0 w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent" />
          </motion.div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-custom grid lg:grid-cols-[minmax(0,1fr)_280px] gap-12">
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            {post.content.map((block, i) => {
              if (block.type === 'h2') {
                return (
                  <h2 key={i} className="font-display text-xl sm:text-2xl font-semibold text-white mt-10 mb-4">
                    {block.text}
                  </h2>
                );
              }
              if (block.type === 'p') {
                return (
                  <p key={i} className="text-neutral-300 leading-relaxed mb-5">
                    {block.text}
                  </p>
                );
              }
              if (block.type === 'list') {
                return (
                  <ul key={i} className="space-y-3 mb-6">
                    {block.items?.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-brand-300 mt-0.5 flex-shrink-0" />
                        <span className="text-neutral-300 text-sm sm:text-base leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                );
              }
              if (block.type === 'callout') {
                return (
                  <div key={i} className="my-8 panel p-6 border-brand-300/20">
                    <p className="text-neutral-200 text-sm sm:text-base leading-relaxed">{block.text}</p>
                  </div>
                );
              }
              return null;
            })}

            <div className="mt-10 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-neutral-500 border border-white/10 rounded-full px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-10 panel p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Ready to build this into your business?</h3>
                <p className="text-neutral-400 text-sm">
                  Tell us what you're working on and we'll give you a straight answer.
                </p>
              </div>
              <Link to="/contact" className="btn-primary shrink-0 group">
                Start a project
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </motion.article>

          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <p className="label text-neutral-500 mb-5">Related reading</p>
              <div className="space-y-5">
                {related.map((r) => (
                  <Link key={r.slug} to={`/blog/${r.slug}`} className="group block">
                    <div className="relative h-28 rounded-xl overflow-hidden border border-white/10 mb-3">
                      <BlogCoverImage
                        src={r.image}
                        alt={r.title}
                        category={r.category}
                        className="absolute inset-0 w-full h-full group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <h4 className="text-sm font-medium text-neutral-300 group-hover:text-white transition-colors leading-snug">
                      {r.title}
                    </h4>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
