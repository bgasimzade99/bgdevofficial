import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Smartphone,
  Brain,
  Database,
  Globe,
  Zap,
} from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: Smartphone,
      title: 'Mobile development',
      skills: [
        { name: 'React Native', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Expo', level: 85 },
        { name: 'iOS & Android', level: 80 },
      ],
    },
    {
      icon: Brain,
      title: 'AI & machine learning',
      skills: [
        { name: 'GPT-4 API', level: 90 },
        { name: 'ChatGLM', level: 85 },
        { name: 'AI integration', level: 95 },
        { name: 'NLP', level: 75 },
      ],
    },
    {
      icon: Database,
      title: 'Backend & database',
      skills: [
        { name: 'Firebase', level: 95 },
        { name: 'Firestore', level: 90 },
        { name: 'Authentication', level: 85 },
        { name: 'Cloud functions', level: 80 },
      ],
    },
    {
      icon: Globe,
      title: 'Web development',
      skills: [
        { name: 'React', level: 95 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Django', level: 80 },
        { name: 'SEO optimization', level: 85 },
      ],
    },
    {
      icon: Code2,
      title: 'Interface design',
      skills: [
        { name: 'Design systems', level: 90 },
        { name: 'Framer Motion', level: 90 },
        { name: 'Responsive design', level: 95 },
        { name: 'Accessibility', level: 80 },
      ],
    },
    {
      icon: Zap,
      title: 'Performance & analytics',
      skills: [
        { name: 'Real-time analytics', level: 90 },
        { name: 'Data visualization', level: 85 },
        { name: 'Performance tuning', level: 80 },
        { name: 'Cross-platform', level: 95 },
      ],
    },
  ];

  const bottomStats = [
    { icon: Smartphone, value: '3+', label: 'Mobile projects' },
    { icon: Brain, value: 'AI', label: 'Powered solutions' },
    { icon: Database, value: '95%', label: 'Firebase expertise' },
    { icon: Globe, value: '100%', label: 'Cross-platform' },
  ];

  return (
    <section id="skills" className="section-padding bg-ink-950 border-t border-white/10 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-400/[0.04] rounded-full blur-[140px]" />

      <div className="container-custom relative">
        <div className="max-w-2xl mb-16">
          <p className="label text-gold-300/80 mb-4">Expertise</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-6 text-balance">
            Depth, <span className="accent-italic text-4xl sm:text-5xl lg:text-6xl">not a buzzword list.</span>
          </h2>
          <p className="text-lg text-neutral-400 leading-relaxed">
            React Native, Firebase, and AI integrations are the core, everything else is
            chosen to serve the project, not to pad a resume.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
              whileHover={{ y: -6 }}
              className="panel panel-hover p-6 sm:p-7"
            >
              <div className="w-11 h-11 rounded-lg bg-gold-gradient flex items-center justify-center mb-6">
                <category.icon className="w-5 h-5 text-ink-950" />
              </div>

              <h3 className="text-lg font-semibold text-white mb-6">{category.title}</h3>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-neutral-300">{skill.name}</span>
                      <span className="text-xs text-neutral-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/[0.06] rounded-full h-1.5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                        className="h-full rounded-full bg-gold-gradient"
                      />
                    </div>
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
          className="panel p-8 sm:p-12 mt-8"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
            {bottomStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="w-11 h-11 rounded-lg bg-gold-gradient flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-5 h-5 text-ink-950" />
                </div>
                <div className="font-display text-2xl font-semibold text-white mb-1">{stat.value}</div>
                <div className="text-xs text-neutral-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
