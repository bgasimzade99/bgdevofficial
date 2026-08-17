import React from 'react';
import { motion } from 'framer-motion';
import {
  Globe,
  Smartphone,
  MessageSquare,
  Cloud,
  Brain,
  Palette,
  Box,
  ClipboardList,
  Search,
  Headphones,
  ArrowRight,
  Layers,
} from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Globe,
      title: 'Web development',
      description: 'Fast, scalable web applications engineered on React, Next.js, and Django.',
      features: ['React & Next.js', 'Django backend', 'API architecture', 'SEO-ready builds'],
    },
    {
      icon: Smartphone,
      title: 'Mobile app development',
      description: 'Cross-platform iOS and Android apps from a single TypeScript codebase.',
      features: ['React Native & Expo', 'App Store & Play Store', 'Push & offline support', 'Native performance'],
    },
    {
      icon: MessageSquare,
      title: 'AI chatbot integration',
      description: 'Conversational AI woven into your product experience, not bolted on as a widget.',
      features: ['GPT-4 & ChatGLM', 'Custom knowledge bases', 'Multi-channel deployment', 'Human handoff flows'],
    },
    {
      icon: Cloud,
      title: 'SaaS platforms, end-to-end',
      description: 'From architecture to billing, full-stack SaaS products built to scale with your users.',
      features: ['Multi-tenant architecture', 'Subscription & billing', 'Auth & permissions', 'CI/CD pipelines'],
    },
    {
      icon: Brain,
      title: 'AI-powered platforms',
      description: 'Machine learning and automation embedded where they create measurable leverage.',
      features: ['LLM integration', 'Workflow automation', 'Data pipelines', 'Predictive insights'],
    },
    {
      icon: Palette,
      title: 'UI/UX & product design',
      description: 'Interfaces built around clarity and conversion, not template noise.',
      features: ['Design systems', 'User research', 'Prototyping', 'Accessibility'],
    },
    {
      icon: Box,
      title: '3D & interactive design',
      description: 'WebGL and 3D experiences that make a digital product feel physical and premium.',
      features: ['Three.js / WebGL', 'Product visualization', 'Interactive motion', 'Immersive storytelling'],
    },
    {
      icon: ClipboardList,
      title: 'IT business analysis',
      description: 'Translating business goals into technical specs before a single line of code is written.',
      features: ['Requirements mapping', 'Process audits', 'Technical roadmaps', 'Vendor evaluation'],
    },
    {
      icon: Search,
      title: 'SEO & digital marketing',
      description: 'Technical SEO and growth marketing built into the platform, not added after launch.',
      features: ['Technical SEO', 'Content strategy', 'Analytics & tracking', 'Paid & organic growth'],
    },
    {
      icon: Headphones,
      title: 'Customer support solutions',
      description: 'Support tooling and workflows that keep response times low as you scale.',
      features: ['Helpdesk integration', 'AI-assisted triage', 'SLA dashboards', 'Knowledge base setup'],
    },
  ];

  const techStack = [
    'Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'MongoDB',
    'Prisma', 'Redis', 'GraphQL', 'tRPC', 'Tailwind CSS', 'Framer Motion',
    'Docker', 'Firebase', 'Vercel', 'AWS',
  ];

  return (
    <section id="services" className="section-padding bg-ink-950 border-t border-white/10 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[420px] h-[420px] bg-brand-400/[0.06] rounded-full blur-[120px]" />

      <div className="container-custom relative">
        <div className="max-w-2xl mb-16">
          <p className="label text-brand-300/80 mb-4">Services</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-6 text-balance">
            One partner, <span className="text-gradient-brand">full-stack delivery.</span>
          </h2>
          <p className="text-lg text-neutral-400 leading-relaxed">
            Web, mobile, AI, and the strategy behind them, engineered as one coherent system
            with observability, security, and performance built in from day one.
          </p>
        </div>

        <div className="mb-16">
          <div className="flex items-center gap-2 text-neutral-500 mb-5">
            <Layers className="w-4 h-4" aria-hidden />
            <span className="label">Stack & tooling</span>
          </div>
          <div className="panel px-5 py-6 sm:px-6 sm:py-7">
            <div className="flex flex-wrap gap-2 sm:gap-2.5">
              {techStack.map((name) => (
                <span
                  key={name}
                  className="px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium text-neutral-300 border border-white/10 hover:border-brand-300/40 hover:text-brand-100 transition-colors duration-200"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
              whileHover={{ y: -6 }}
              className="panel panel-hover p-6 sm:p-7 flex flex-col"
            >
              <div className="w-11 h-11 rounded-lg bg-brand-gradient flex items-center justify-center mb-6">
                <service.icon className="w-5 h-5 text-white" />
              </div>

              <h3 className="text-lg font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-sm text-neutral-400 mb-5 leading-relaxed">{service.description}</p>

              <div className="space-y-2 mb-2 mt-auto pt-2">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-xs text-neutral-500">
                    <span className="w-1 h-1 rounded-full bg-brand-400/70" />
                    {feature}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="panel p-8 sm:p-12 text-center mt-16"
        >
          <h3 className="font-display text-2xl sm:text-3xl font-semibold text-white mb-4">
            Let's scope your next platform.
          </h3>
          <p className="text-neutral-400 max-w-xl mx-auto mb-8 leading-relaxed">
            Whatever the mix of web, mobile, AI, or design, one team owns the outcome
            end to end.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="btn-primary group">
              Get a free quote
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a href="#projects" className="btn-secondary">
              View our work
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
