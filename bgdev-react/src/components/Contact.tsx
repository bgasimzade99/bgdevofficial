import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MessagesSquare } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section-padding bg-ink-950 border-t border-white/10">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-2xl overflow-hidden border border-white/10 p-8 sm:p-14"
        >
          <div className="absolute inset-0 bg-brand-gradient opacity-90" />
          <div className="absolute inset-0 dot-grid-bg opacity-10" />
          <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 text-xs text-white/90 mb-5 px-3 py-1.5 rounded-full border border-white/25 bg-white/10">
                <MessagesSquare className="w-3.5 h-3.5" />
                Usually reply within one business day
              </div>
              <h2 className="font-display text-2xl sm:text-4xl font-semibold text-white mb-4 text-balance">
                Let's talk about your project.
              </h2>
              <p className="text-white/85 leading-relaxed">
                Tell us about your business and what you need, a website, a mobile app,
                an AI chatbot, or an AI-powered product. We'll come back with a clear
                scope and a straight answer.
              </p>
            </div>
            <Link
              to="/contact"
              className="shrink-0 inline-flex items-center bg-white text-ink-950 font-semibold rounded-full px-7 py-3.5 hover:-translate-y-0.5 transition-transform group"
            >
              Start a project
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
