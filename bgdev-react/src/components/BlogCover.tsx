import React from 'react';
import {
  Building2,
  Workflow,
  Cpu,
  TrendingUp,
  Rocket,
  type LucideIcon,
} from 'lucide-react';

interface CategoryStyle {
  icon: LucideIcon;
  gradient: string;
}

const categoryStyles: Record<string, CategoryStyle> = {
  'For SMEs': {
    icon: Building2,
    gradient: 'from-brand-700 via-brand-500 to-brand-300',
  },
  'AI & Automation': {
    icon: Workflow,
    gradient: 'from-ink-800 via-brand-700 to-brand-400',
  },
  'AI & Tech': {
    icon: Cpu,
    gradient: 'from-brand-900 via-brand-600 to-brand-300',
  },
  'SaaS & Business': {
    icon: TrendingUp,
    gradient: 'from-brand-800 via-brand-500 to-brand-200',
  },
  'Business & Leadership': {
    icon: Rocket,
    gradient: 'from-ink-900 via-brand-700 to-brand-300',
  },
};

const fallback: CategoryStyle = { icon: Cpu, gradient: 'from-brand-700 via-brand-500 to-brand-300' };

interface BlogCoverProps {
  category: string;
  className?: string;
}

/**
 * Reliable, zero-network-dependency cover art for blog cards and article
 * headers. Renders a brand-gradient panel with a large watermark icon and a
 * bold foreground icon tile, no external image hotlinks involved, so it can
 * never show up broken.
 */
const BlogCover: React.FC<BlogCoverProps> = ({ category, className = '' }) => {
  const style = categoryStyles[category] || fallback;
  const Icon = style.icon;

  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br ${style.gradient} ${className}`}
      aria-hidden="true"
    >
      <div className="absolute inset-0 dot-grid-bg opacity-20" />
      <div className="absolute inset-0 bg-ink-950/25" />
      <Icon
        className="absolute -bottom-6 -right-6 w-32 h-32 sm:w-40 sm:h-40 text-white/10"
        strokeWidth={1}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-ink-950/40 backdrop-blur-sm border border-white/20 flex items-center justify-center">
          <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" strokeWidth={1.75} />
        </div>
      </div>
    </div>
  );
};

export default BlogCover;
