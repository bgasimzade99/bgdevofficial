import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Smartphone, 
  Brain, 
  Database, 
  Globe, 
  Zap,
  TrendingUp
} from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: Smartphone,
      title: "Mobile Development",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React Native", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Expo", level: 85 },
        { name: "iOS & Android", level: 80 }
      ]
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "GPT-4 API", level: 90 },
        { name: "ChatGLM", level: 85 },
        { name: "AI Integration", level: 95 },
        { name: "Natural Language Processing", level: 75 }
      ]
    },
    {
      icon: Database,
      title: "Backend & Database",
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Firebase", level: 95 },
        { name: "Firestore", level: 90 },
        { name: "Authentication", level: 85 },
        { name: "Cloud Functions", level: 80 }
      ]
    },
    {
      icon: Globe,
      title: "Web Development",
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "React", level: 95 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Django", level: 80 },
        { name: "SEO Optimization", level: 85 }
      ]
    },
    {
      icon: Code2,
      title: "UI/UX Design",
      color: "from-indigo-500 to-blue-500",
      skills: [
        { name: "Glassmorphism", level: 95 },
        { name: "Framer Motion", level: 90 },
        { name: "Responsive Design", level: 95 },
        { name: "Custom Animations", level: 85 }
      ]
    },
    {
      icon: Zap,
      title: "Performance & Analytics",
      color: "from-yellow-500 to-orange-500",
      skills: [
        { name: "Real-time Analytics", level: 90 },
        { name: "Data Visualization", level: 85 },
        { name: "Performance Optimization", level: 80 },
        { name: "Cross-platform", level: 95 }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <section id="skills" className="section-padding bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-blue-200/30 to-indigo-200/30 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-sm font-medium text-gray-700 mb-6"
          >
            <TrendingUp className="w-4 h-4 mr-2 text-primary-500" />
            Our Expertise
          </motion.div>
          
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 px-4 sm:px-0"
          >
            Technology
            <br />
            <span className="gradient-text">Expertise</span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0"
          >
            We are experts in React Native, Firebase, and AI integrations. 
            We develop innovative solutions with modern technologies.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              <div className="glass-card p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl h-full hover:shadow-2xl transition-all duration-500 border border-white/30 hover:border-white/50">
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.5, duration: 0.5, type: "spring" }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-all duration-300`}
                >
                  <category.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-6 group-hover:text-primary-600 transition-colors">
                  {category.title}
                </h3>

                {/* Skills */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.7 + skillIndex * 0.1 }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ 
                            delay: index * 0.1 + 0.9 + skillIndex * 0.1,
                            duration: 1,
                            ease: [0.42, 0, 0.58, 1]
                          }}
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Hover Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-500 -z-10`}></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20"
        >
          <motion.div
            variants={itemVariants}
            className="glass-card p-12 rounded-3xl max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {[
                { icon: Smartphone, value: "3+", label: "Mobile Projects", color: "from-blue-500 to-cyan-500" },
                { icon: Brain, value: "AI", label: "Powered Solutions", color: "from-purple-500 to-pink-500" },
                { icon: Database, value: "95%", label: "Firebase Expertise", color: "from-green-500 to-emerald-500" },
                { icon: Globe, value: "100%", label: "Cross-platform", color: "from-orange-500 to-red-500" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center group"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.1 + 1, duration: 0.5, type: "spring" }}
                    className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <stat.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 1.2 }}
                    className="text-3xl font-bold gradient-text mb-2"
                  >
                    {stat.value}
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 1.4 }}
                    className="text-gray-600 font-medium"
                  >
                    {stat.label}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
