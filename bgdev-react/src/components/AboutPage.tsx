import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Target,
  Users,
  Award,
  Clock,
  ShieldCheck,
  Rocket,
  MessageSquareCode,
  Wrench,
} from 'lucide-react';
import { usePageSEO } from '../utils/seo';

const ABOUT_HERO_BG =
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1800&auto=format&fit=crop';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const values = [
  {
    icon: ShieldCheck,
    title: 'Real engineering, not resold templates',
    description:
      'Every website, app, and AI integration we ship is built by our own team. No white-labeled themes, no AI-generated site dumped on a client and called finished.',
  },
  {
    icon: Target,
    title: 'Built for your growth, not our portfolio',
    description:
      'We ask what a small or medium business actually needs to convert visitors into customers, then build for that outcome, not for an awards submission.',
  },
  {
    icon: MessageSquareCode,
    title: 'AI where it earns its place',
    description:
      'Chatbots, automation, and AI-powered products like Convertonix are tools we use when they genuinely save you time or money, not because AI sells.',
  },
  {
    icon: Wrench,
    title: 'Support that outlasts the launch',
    description:
      'A website or app is a living product. We stay on for maintenance, updates, and scaling, so it keeps working a year after launch, not just at handoff.',
  },
];

const process = [
  {
    step: '01',
    title: 'Discovery & scope',
    description:
      'We learn your business, your customers, and what "success" needs to look like before a single line of code is written.',
  },
  {
    step: '02',
    title: 'Design & architecture',
    description:
      'UI/UX and technical architecture are planned together, so the product looks premium and is built to actually scale.',
  },
  {
    step: '03',
    title: 'Build & integrate',
    description:
      'Web, mobile, backend, and any AI chatbot or automation layer are built and integrated as one connected system.',
  },
  {
    step: '04',
    title: 'Launch & support',
    description:
      'We ship, monitor, and stay on for post-launch support, fixes, and iteration as your business grows.',
  },
];

const stats = [
  { icon: Users, value: '1500+', label: 'LinkedIn followers' },
  { icon: Award, value: '50+', label: 'Active projects' },
  { icon: Clock, value: '5+', label: 'Years experience' },
  { icon: Target, value: 'AI', label: 'Powered solutions' },
];

const AboutPage: React.FC = () => {
  usePageSEO({
    title: 'About BGDev: Trusted Web, Mobile & AI Development Team',
    description:
      'BGDev is a trusted IT solutions partner for small and medium businesses. Learn how our team builds websites, mobile apps, AI chatbot integrations, and AI-powered products like Convertonix.',
    path: '/about',
  });

  return (
    <div className="min-h-screen bg-ink-950 text-white">
      <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.16]"
          style={{ backgroundImage: `url(${ABOUT_HERO_BG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/40 via-ink-950/90 to-ink-950" />
        <div className="absolute inset-0 dot-grid-bg opacity-20" />
        <motion.div
          aria-hidden
          className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-brand-400/20 blur-[110px] animate-blob-a"
        />

        <div className="container-custom relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.1 }}
            className="max-w-3xl"
          >
            <motion.p variants={fadeUp} transition={{ duration: 0.5 }} className="label text-brand-300/80 mb-4">
              About BGDev
            </motion.p>
            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-balance"
            >
              A trusted IT solutions partner for{' '}
              <span className="text-gradient-brand">small and growing businesses.</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="mt-7 text-lg text-neutral-400 leading-relaxed max-w-2xl"
            >
              BGDev designs and builds custom websites, mobile apps, and AI chatbot
              integrations for SMEs that want to compete online, plus AI-powered products
              like Convertonix. We are engineers and designers first, not a reseller of
              AI-generated templates.
            </motion.p>
            <motion.div variants={fadeUp} transition={{ duration: 0.5 }} className="mt-9 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary group">
                Work with us
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link to="/#projects" className="btn-secondary">
                See our work
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding border-t border-white/10 relative">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="panel panel-hover p-5 sm:p-6 flex flex-col"
              >
                <div className="w-9 h-9 rounded-lg bg-brand-gradient flex items-center justify-center mb-4">
                  <stat.icon className="w-4 h-4 text-white" />
                </div>
                <div className="font-display text-2xl font-semibold text-white">{stat.value}</div>
                <div className="text-xs text-neutral-500 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          <div className="max-w-2xl mb-12">
            <p className="label text-brand-300/80 mb-4">What we believe</p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white text-balance">
              The values behind every project.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-24">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="panel panel-hover p-6 sm:p-8"
              >
                <div className="w-11 h-11 rounded-lg bg-brand-gradient flex items-center justify-center mb-6">
                  <value.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="max-w-2xl mb-12">
            <p className="label text-brand-300/80 mb-4">How we work</p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white text-balance">
              A clear process, from first call to launch.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {process.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="panel p-6"
              >
                <div className="font-display text-3xl text-brand-300/50 mb-4">{item.step}</div>
                <h3 className="text-base font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>

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
                <div className="w-11 h-11 rounded-lg bg-white/15 flex items-center justify-center mb-5">
                  <Rocket className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-semibold text-white mb-2">
                  Ready to grow your business online?
                </h3>
                <p className="text-white/85 max-w-lg">
                  Tell us what you are building. We will reply with a clear scope and a
                  straight answer.
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

export default AboutPage;
