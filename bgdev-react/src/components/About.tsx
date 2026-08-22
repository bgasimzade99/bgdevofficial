import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, Award, Clock, Target, Check, ArrowRight, Compass } from 'lucide-react';

const MISSION_BG = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop';

const About: React.FC = () => {
  const stats = [
    { icon: Users, value: '1500+', label: 'LinkedIn followers' },
    { icon: Award, value: '50+', label: 'Active projects' },
    { icon: Clock, value: '5+', label: 'Years experience' },
    { icon: Target, value: 'AI', label: 'Powered solutions' },
  ];

  const features = [
    'Custom websites and mobile apps for small and medium businesses',
    'AI chatbot integration for customer support',
    'AI-powered products, like our tool Convertonix',
    'Real engineering, not resold AI templates',
    'Firebase backend & real-time data',
    'Production-grade performance & SEO',
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="section-padding bg-ink-950 border-t border-white/10 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-brand-400/[0.06] rounded-full blur-[120px]" />

      <div className="container-custom relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          transition={{ staggerChildren: 0.1 }}
          className="max-w-2xl mb-16"
        >
          <motion.p variants={fadeUp} transition={{ duration: 0.5 }} className="label text-brand-300/80 mb-4">
            About
          </motion.p>
          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-6 text-balance"
          >
            IT solutions built to <span className="text-gradient-brand">grow your business.</span>
          </motion.h2>
          <motion.p variants={fadeUp} transition={{ duration: 0.5 }} className="text-lg text-neutral-400 leading-relaxed">
            BGDev is a trusted IT solutions partner for small and medium businesses.
            We build custom websites and mobile apps, integrate AI chatbots for customer
            support, and ship AI-powered products like Convertonix, real engineering that
            helps you grow, not a reseller of AI-generated templates.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="panel p-6 sm:p-8"
          >
            <h3 className="text-lg font-semibold text-white mb-6">Why BGDev</h3>
            <div className="space-y-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-brand-gradient flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-neutral-300 text-sm leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>
            <Link
              to="/about"
              className="inline-flex items-center text-sm text-gradient-brand font-semibold mt-8 group"
            >
              Learn more
              <ArrowRight className="ml-2 w-4 h-4 text-brand-300 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
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
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-2xl overflow-hidden border border-white/10"
        >
          <div
            className="absolute inset-0 bg-cover bg-center opacity-25"
            style={{ backgroundImage: `url(${MISSION_BG})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-ink-950/95 via-ink-950/90 to-ink-950/70" />
          <div className="relative p-8 sm:p-12">
            <div className="w-11 h-11 rounded-lg bg-brand-gradient flex items-center justify-center mb-6">
              <Compass className="w-5 h-5 text-white" />
            </div>
            <h3 className="font-display text-2xl font-semibold text-white mb-4">Our mission</h3>
            <p className="text-neutral-300 leading-relaxed max-w-2xl">
              We help small and medium businesses compete online with real software, not
              templates. Through AI-powered products like Convertonix, our AI file converter
              that analyzes and converts files instantly, and BGFocus, an AI productivity
              platform, we ship solutions built on modern infrastructure that still make
              sense a year after launch.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
