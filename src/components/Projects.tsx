import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, 
  Github, 
  Eye, 
  Filter,
  Globe,
  ShoppingCart,
  Smartphone,
  Code2
} from 'lucide-react';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'mobile', label: 'Mobile App' },
    { id: 'ai', label: 'AI-Powered' },
    { id: 'productivity', label: 'Productivity' }
  ];

  const projects = [
    {
      id: 1,
      title: "BGFocus",
      description: "AI-powered productivity management platform. Professional focus with Pomodoro timer, task management, and AI assistant.",
      image: "/api/placeholder/600/400",
      category: "mobile",
      technologies: ["React Native", "TypeScript", "ChatGLM API", "Firebase", "Expo"],
      gradient: "from-blue-500 to-cyan-500",
      liveUrl: "#",
      githubUrl: "#",
      delay: 0,
      features: ["AI Chat Assistant", "Pomodoro Timer", "Real-time Analytics", "Cross-platform"]
    },
    {
      id: 2,
      title: "BGResume",
      description: "GPT-4 powered professional CV and proposal generator. AI-powered solutions for ATS optimization and career development.",
      image: "/api/placeholder/600/400",
      category: "ai",
      technologies: ["React Native", "GPT-4 API", "Firebase", "TypeScript", "Glassmorphism UI"],
      gradient: "from-purple-500 to-pink-500",
      liveUrl: "#",
      githubUrl: "#",
      delay: 0.1,
      features: ["GPT-4 Integration", "ATS Optimization", "Professional Templates", "Voice Input"]
    },
    {
      id: 3,
      title: "BGDev Website",
      description: "Modern and animated corporate website. Glassmorphism design with Tailwind CSS and Framer Motion.",
      image: "/api/placeholder/600/400",
      category: "web",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      gradient: "from-green-500 to-emerald-500",
      liveUrl: "#",
      githubUrl: "#",
      delay: 0.2,
      features: ["Responsive Design", "Glassmorphism", "Smooth Animations", "SEO Optimized"]
    }
  ];

  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' || project.category === activeFilter
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'web': return Globe;
      case 'mobile': return Smartphone;
      case 'ecommerce': return ShoppingCart;
      default: return Code2;
    }
  };

  return (
    <section id="projects" className="section-padding bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary-100 to-purple-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-100 to-indigo-100 rounded-full blur-3xl opacity-30"></div>
      
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
            className="inline-flex items-center px-4 py-2 bg-primary-50 border border-primary-200 rounded-full text-sm font-medium text-primary-700 mb-6"
          >
            <Code2 className="w-4 h-4 mr-2" />
            Our Projects
          </motion.div>
          
          <motion.h2
            variants={itemVariants}
            className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6"
          >
            AI-Powered
            <br />
            <span className="gradient-text">Projects</span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Through AI-powered projects like BGFocus and BGResume, we deliver innovative 
            solutions in productivity management and career development.
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-primary-500 to-purple-600 text-white shadow-lg'
                  : 'bg-white/50 backdrop-blur-sm border border-white/30 text-gray-700 hover:bg-white/70'
              }`}
            >
              <Filter className="w-4 h-4 mr-2 inline" />
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => {
              const CategoryIcon = getCategoryIcon(project.category);
              
              return (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ y: -10 }}
                  className="group relative"
                >
                  <div className="glass-card rounded-3xl overflow-hidden h-full hover:shadow-2xl transition-all duration-500 border border-white/30 hover:border-white/50">
                    {/* Project Image */}
                    <div className="relative h-48 overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-90`}></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <CategoryIcon className="w-16 h-16 text-white/80" />
                      </div>
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                        <motion.a
                          href={project.liveUrl}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                        >
                          <ExternalLink className="w-5 h-5 text-white" />
                        </motion.a>
                        <motion.a
                          href={project.githubUrl}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                        >
                          <Github className="w-5 h-5 text-white" />
                        </motion.a>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                          {project.title}
                        </h3>
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className={`p-2 bg-gradient-to-r ${project.gradient} rounded-lg`}
                        >
                          <CategoryIcon className="w-4 h-4 text-white" />
                        </motion.div>
                      </div>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Features */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">Features:</h4>
                        <div className="flex flex-wrap gap-1 mb-3">
                          {project.features?.map((feature, index) => (
                            <motion.span
                              key={index}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: index * 0.1 }}
                              className="px-2 py-1 bg-primary-50 text-primary-700 text-xs font-medium rounded-full"
                            >
                              {feature}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, index) => (
                          <motion.span
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>

                      {/* Actions */}
                      <div className="flex space-x-3">
                        <motion.a
                          href={project.liveUrl}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex-1 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-medium py-2 px-4 rounded-lg text-center transition-all duration-300 flex items-center justify-center space-x-2"
                        >
                          <Eye className="w-4 h-4" />
                          <span>View</span>
                        </motion.a>
                        
                        <motion.a
                          href={project.githubUrl}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-colors duration-300 flex items-center justify-center"
                        >
                          <Github className="w-4 h-4" />
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.div
            variants={itemVariants}
            className="glass-card p-12 rounded-3xl max-w-4xl mx-auto"
          >
            <motion.h3
              variants={itemVariants}
              className="text-3xl font-bold text-gray-900 mb-6"
            >
              Let's Build Your Project
            </motion.h3>
            
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 mb-8 leading-relaxed"
            >
              Let's develop your AI-powered mobile app or web project together. 
              Create modern solutions with React Native, Firebase, and AI integrations.
            </motion.p>
            
            <motion.a
              href="#contact"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl active:scale-95 inline-flex items-center justify-center group text-lg"
            >
              Start Project
              <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;