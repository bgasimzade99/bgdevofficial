import React from 'react';
import { motion } from 'framer-motion';

type BrandVariant = 'header' | 'hero' | 'footer';

const styles: Record<
  BrandVariant,
  { ring: string; inner: string; img: string; title: string; subtitle: string; gap: string }
> = {
  header: {
    ring: 'p-[2px]',
    inner: 'p-2 sm:p-2.5',
    img: 'h-8 w-8 sm:h-9 sm:w-9',
    title: 'text-base sm:text-lg',
    subtitle: 'text-[9px] sm:text-[10px]',
    gap: 'gap-2.5 sm:gap-3',
  },
  hero: {
    ring: 'p-[3px]',
    inner: 'p-2.5 sm:p-3 md:p-3.5',
    img: 'h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14',
    title: 'text-xl sm:text-2xl md:text-2xl',
    subtitle: 'text-[10px] sm:text-xs md:text-sm',
    gap: 'gap-3 sm:gap-4',
  },
  footer: {
    ring: 'p-[2px]',
    inner: 'p-2.5',
    img: 'h-10 w-10',
    title: 'text-lg',
    subtitle: 'text-[10px]',
    gap: 'gap-3',
  },
};

export interface BrandLogoProps {
  variant?: BrandVariant;
  /** Wrap in link to #home */
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
      className={`relative shrink-0 rounded-full ${s.ring} bg-gradient-to-br from-blue-400 via-purple-500 to-cyan-400 shadow-lg shadow-blue-500/25`}
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 420, damping: 20 }}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -inset-1.5 rounded-full bg-gradient-to-tr from-blue-500/50 via-purple-500/30 to-cyan-400/40 blur-lg opacity-50"
        animate={{
          opacity: [0.35, 0.55, 0.35],
          scale: [1, 1.08, 1],
        }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div
        className={`relative flex items-center justify-center rounded-full bg-gray-950/95 backdrop-blur-md border border-white/20 ${s.inner} shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_8px_32px_rgba(0,0,0,0.35)]`}
      >
        <motion.img
          src="/logo.png"
          alt=""
          role="presentation"
          className={`${s.img} object-contain`}
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
    </motion.div>
  );

  const wordmark = (
    <div
      className={`flex min-w-0 flex-col text-left ${variant === 'hero' ? 'space-y-0.5' : 'space-y-0'}`}
    >
      <span className={`font-bold tracking-tight text-white drop-shadow-sm ${s.title}`}>
        {title}
      </span>
      <span
        className={`font-semibold uppercase tracking-[0.18em] text-gray-400 ${s.subtitle}`}
      >
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

  const wrap = `group relative inline-flex rounded-2xl border border-transparent px-1.5 py-1 transition-colors hover:border-white/10 hover:bg-white/[0.04] ${className}`;

  if (asLink) {
    return (
      <motion.a href="#home" className={wrap} whileTap={{ scale: 0.98 }}>
        <span className="sr-only">
          {title}
          {' — Home'}
        </span>
        {row}
      </motion.a>
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
