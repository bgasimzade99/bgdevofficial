import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, MessagesSquare } from 'lucide-react';
import ContactForm from './ContactForm';
import { usePageSEO } from '../utils/seo';

const faqs = [
  {
    q: 'What kind of businesses do you work with?',
    a: 'Mostly small and medium businesses that need a website, mobile app, or AI chatbot integration to grow, along with founders building AI-powered products from scratch.',
  },
  {
    q: 'Do you build the AI features yourselves, or resell AI-generated sites?',
    a: 'We build everything ourselves. AI shows up in our work as a feature, like a chatbot or an integration such as our tool Convertonix, never as a shortcut that replaces real engineering.',
  },
  {
    q: 'How long does a typical project take?',
    a: 'A marketing website usually ships in 2 to 4 weeks. Mobile apps and AI-integrated platforms typically run 6 to 12 weeks depending on scope. You will get a clear timeline after the discovery call.',
  },
  {
    q: 'Do you offer support after launch?',
    a: 'Yes. Every project includes a post-launch support window, and we offer ongoing maintenance plans for businesses that want us to keep iterating after the initial build.',
  },
  {
    q: 'Can you integrate AI chatbots or automation like n8n into an existing site?',
    a: 'Yes, we regularly add AI chatbot support and workflow automation to existing websites and internal tools without a full rebuild.',
  },
];

const ContactPage: React.FC = () => {
  usePageSEO({
    title: 'Contact BGDev: Get a Quote for Your Website, App, or AI Project',
    description:
      'Contact BGDev to start a website, mobile app, AI chatbot integration, or AI-powered product for your business. Trusted development team based in Riga, Latvia, serving clients worldwide.',
    path: '/contact',
  });

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-ink-950 text-white">
      <section className="relative pt-32 sm:pt-40 pb-16 overflow-hidden">
        <div className="absolute inset-0 dot-grid-bg opacity-20" />
        <motion.div
          aria-hidden
          className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-brand-400/20 blur-[110px] animate-blob-a"
        />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 text-xs text-brand-200 mb-6 px-3 py-1.5 rounded-full border border-brand-300/25 bg-brand-400/[0.08]">
              <MessagesSquare className="w-3.5 h-3.5" />
              Usually reply within one business day
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-balance">
              Let's build something <span className="text-gradient-brand">your customers trust.</span>
            </h1>
            <p className="mt-7 text-lg text-neutral-400 leading-relaxed max-w-xl">
              Tell us about your business and what you need, a website, a mobile app,
              an AI chatbot, or an AI-powered product. We'll reply with a clear scope
              and a straight answer, no obligation.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-custom">
          <ContactForm />
        </div>
      </section>

      <section className="section-padding border-t border-white/10">
        <div className="container-custom">
          <div className="max-w-2xl mb-12">
            <p className="label text-brand-300/80 mb-4">FAQ</p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white text-balance">
              Questions businesses ask before working with us.
            </h2>
          </div>

          <div className="max-w-3xl space-y-3">
            {faqs.map((item, i) => (
              <motion.div
                key={item.q}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="panel overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left"
                >
                  <span className="font-medium text-white text-sm sm:text-base">{item.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-neutral-500 flex-shrink-0 transition-transform duration-200 ${
                      openFaq === i ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 -mt-1">
                    <p className="text-neutral-400 text-sm leading-relaxed">{item.a}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
