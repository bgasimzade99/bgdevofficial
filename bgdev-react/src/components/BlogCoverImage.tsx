import React, { useState } from 'react';
import BlogCover from './BlogCover';

interface BlogCoverImageProps {
  src: string;
  alt: string;
  category: string;
  className?: string;
}

/**
 * Renders a real cover photo for a blog post, with a guaranteed-safe
 * fallback. If the photo URL ever fails to load (dead link, rate limit,
 * network hiccup), it swaps to the local, zero-network BlogCover instead
 * of leaving a broken image icon on the page.
 */
const BlogCoverImage: React.FC<BlogCoverImageProps> = ({ src, alt, category, className = '' }) => {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <BlogCover category={category} className={className} />;
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`object-cover ${className}`}
    />
  );
};

export default BlogCoverImage;
