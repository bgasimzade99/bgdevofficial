import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

type BrandVariant = 'header' | 'hero' | 'footer';

const styles: Record<
  BrandVariant,
  { box: string; title: string; subtitle: string; gap: string }
> = {
  header: {
    box: 'h-9 w-9 sm:h-10 sm:w-10',
    title: 'text-base sm:text-lg',
    subtitle: 'text-[9px] sm:text-[10px]',
    gap: 'gap-2.5 sm:gap-3',
  },
  hero: {
    box: 'h-14 w-14 sm:h-16 sm:w-16',
    title: 'text-xl sm:text-2xl',
    subtitle: 'text-[10px] sm:text-xs',
    gap: 'gap-3 sm:gap-4',
  },
  footer: {
    box: 'h-11 w-11',
    title: 'text-lg',
    subtitle: 'text-[10px]',
    gap: 'gap-3',
  },
};

export interface BrandLogoProps {
  variant?: BrandVariant;
  asLink?: boolean;
  title?: string;
  subtitle?: string;
  className?: string;
}

const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'header',
  asLink = true,
  title = 'BGDev',
  subtitle = 'Web & Mobile Development',
  className = '',
}) => {
  const s = styles[variant];

  const mark = (
    <motion.div
      className={`relative shrink-0 flex items-center justify-center ${s.box}`}
      whileHover={{ scale: 1.06 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
    >
      <img
        src="/logo-mark.png"
        alt=""
        role="presentation"
        className="w-full h-full object-contain drop-shadow-[0_0_14px_rgba(59,147,240,0.35)]"
      />
    </motion.div>
  );

  const wordmark = (
    <div className="flex min-w-0 flex-col text-left">
      <span className={`font-display font-semibold tracking-tight text-white ${s.title}`}>
        {title}
      </span>
      <span className={`font-medium uppercase tracking-[0.16em] text-neutral-500 ${s.subtitle}`}>
        {subtitle}
      </span>
    </div>
  );

  const row = (
    <div className={`inline-flex items-center ${s.gap}`}>
      {mark}
      {wordmark}
    </div>
  );

  const wrap = `group inline-flex rounded-lg px-1 py-1 transition-colors ${className}`;

  if (asLink) {
    return (
      <Link to="/" className={wrap}>
        <span className="sr-only">{title} Home</span>
        {row}
      </Link>
    );
  }

  return (
    <div className={wrap}>
      <span className="sr-only">{title}</span>
      {row}
    </div>
  );
};

export default BrandLogo;
