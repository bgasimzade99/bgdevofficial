import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, BadgeCheck } from 'lucide-react';

const HERO_BG = 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1800&auto=format&fit=crop';
const HERO_SIDE_IMG = 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop';

interface CounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
}

const Counter: React.FC<CounterProps> = ({ target, suffix = '', prefix = '' }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame: number;
    const start = performance.now();
    const duration = 1200;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {prefix}
      {value}
      {suffix}
    </span>
  );
};

const Hero: React.FC = () => {
  const techStack = ['React', 'TypeScript', 'React Native', 'AI / GPT-4', 'Firebase', 'AWS', 'Next.js', 'PostgreSQL'];
  const marqueeItems = [...techStack, ...techStack];

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-ink-950 pt-24">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.32]"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/90 to-ink-950/30" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950/30 via-transparent to-ink-950" />
      <div className="absolute inset-0 dot-grid-bg opacity-20" />

      <motion.div
        aria-hidden
        className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-brand-400/20 blur-[110px] animate-blob-a"
      />
      <motion.div
        aria-hidden
        className="absolute top-1/3 -right-24 w-[380px] h-[380px] rounded-full bg-brand-700/25 blur-[110px] animate-blob-b"
      />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-stretch pb-8 lg:pb-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3"
          >
            <div className="inline-flex items-center gap-2 text-xs text-brand-200 mb-6 px-3 py-1.5 rounded-full border border-brand-300/25 bg-brand-400/[0.08]">
              <BadgeCheck className="w-3.5 h-3.5" />
              Trusted web & mobile development agency
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-[64px] leading-[1.08] font-semibold tracking-tight text-white text-balance">
              Websites, apps, and AI tools
              <br />
              <span className="text-gradient-brand">built to grow your business.</span>
            </h1>

            <p className="mt-7 text-lg text-neutral-400 leading-relaxed max-w-lg">
              BGDev is a trusted web and mobile app development agency for small and
              growing businesses. We build custom websites, apps, and AI chatbot
              integrations, plus AI-powered products like Convertonix. Real software,
              engineered by our team, not resold AI templates.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-4">
              <a href="#projects" className="btn-primary group">
                View selected work
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a href="#contact" className="btn-secondary">
                Book a call
              </a>
            </div>

            <div className="mt-14 grid grid-cols-3 gap-6 max-w-md pt-8 border-t border-white/10">
              <div>
                <div className="font-display text-2xl sm:text-3xl font-semibold text-white">
                  <Counter target={50} suffix="+" />
                </div>
                <div className="text-xs sm:text-sm text-neutral-500 mt-1 leading-snug">Completed projects</div>
              </div>
              <div>
                <div className="font-display text-2xl sm:text-3xl font-semibold text-white">
                  <Counter target={100} suffix="%" />
                </div>
                <div className="text-xs sm:text-sm text-neutral-500 mt-1 leading-snug">Client satisfaction</div>
              </div>
              <div>
                <div className="font-display text-2xl sm:text-3xl font-semibold text-white">24/7</div>
                <div className="text-xs sm:text-sm text-neutral-500 mt-1 leading-snug">Support & maintenance</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2 relative min-h-[420px] lg:min-h-0"
          >
            <div className="relative h-full min-h-[420px] rounded-2xl overflow-hidden border border-white/10">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${HERO_SIDE_IMG})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/50 to-ink-950/10" />
              <div className="absolute inset-0 bg-gradient-to-br from-brand-900/50 via-transparent to-transparent" />

              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute top-5 right-5 flex items-center gap-2 pl-2.5 pr-3.5 py-1.5 rounded-full bg-ink-950/80 backdrop-blur-md border border-white/10"
              >
                <span className="relative flex w-2 h-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex rounded-full w-2 h-2 bg-emerald-400" />
                </span>
                <span className="text-xs text-neutral-200">Available for new projects</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.75 }}
                className="absolute top-5 left-5 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-ink-950/80 backdrop-blur-md border border-white/10 text-xs text-neutral-200"
              >
                Riga, Latvia
                <span className="w-1 h-1 rounded-full bg-brand-400" />
                Remote worldwide
              </motion.div>
            </div>

            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="absolute -bottom-8 left-4 right-4 sm:left-6 sm:right-6 rounded-2xl p-[1px] bg-brand-gradient bg-[length:200%_200%] animate-gradient-x shadow-brand-glow"
            >
              <div className="rounded-2xl bg-ink-950/95 backdrop-blur-md p-6">
                <div className="label text-neutral-500 mb-4">Recent engagement</div>
                <div className="font-display text-2xl text-white mb-1">BGFocus</div>
                <div className="text-sm text-neutral-500 mb-6">AI-powered productivity platform</div>
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="border border-white/10 rounded-lg py-3">
                    <div className="font-display text-lg text-white">3</div>
                    <div className="text-[10px] text-neutral-500 mt-1">platforms</div>
                  </div>
                  <div className="border border-white/10 rounded-lg py-3">
                    <div className="font-display text-lg text-white">AI</div>
                    <div className="text-[10px] text-neutral-500 mt-1">assistant</div>
                  </div>
                  <div className="border border-white/10 rounded-lg py-3">
                    <div className="font-display text-lg text-white">RT</div>
                    <div className="text-[10px] text-neutral-500 mt-1">analytics</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="relative border-t border-white/10 mt-20 lg:mt-16 py-6 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {marqueeItems.map((t, i) => (
            <span key={`${t}-${i}`} className="mx-6 text-neutral-600 label flex items-center gap-6">
              {t}
              <span className="w-1 h-1 rounded-full bg-brand-400/70" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
