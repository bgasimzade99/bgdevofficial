import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Clock, LifeBuoy, BadgeCheck } from 'lucide-react';

const TrustBar: React.FC = () => {
  const items = [
    { icon: ShieldCheck, label: 'NDA & IP protection' },
    { icon: Lock, label: 'Secure delivery pipeline' },
    { icon: Clock, label: 'On-time delivery' },
    { icon: LifeBuoy, label: 'Post-launch support' },
    { icon: BadgeCheck, label: 'Full code ownership' },
  ];

  return (
    <section className="bg-ink-900 border-t border-b border-white/10 py-7">
      <div className="container-custom">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-5">
          {items.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="flex items-center gap-3"
            >
              <div className="flex-shrink-0 w-9 h-9 rounded-lg border border-white/10 bg-white/[0.02] flex items-center justify-center">
                <item.icon className="w-4 h-4 text-brand-300" />
              </div>
              <span className="text-sm text-neutral-400 leading-snug">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
