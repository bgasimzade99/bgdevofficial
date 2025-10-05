import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Smartphone, 
  Brain, 
  Database, 
  Code, 
  Zap,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Smartphone,
      title: "React Native Mobile Apps",
      description: "We develop cross-platform mobile applications. Single codebase for iOS and Android.",
      features: ["React Native & TypeScript", "Expo Framework", "Cross-platform", "App Store & Play Store"],
      gradient: "from-blue-500 to-cyan-500",
      delay: 0
    },
    {
      icon: Brain,
      title: "AI Integration",
      description: "We integrate AI models like GPT-4, ChatGLM into your applications.",
      features: ["GPT-4 API", "ChatGLM Integration", "AI Chat Assistant", "Smart Insights"],
      gradient: "from-purple-500 to-pink-500",
      delay: 0.1
    },
    {
      icon: Database,
      title: "Firebase Backend",
      description: "Powerful backend solutions with Firebase, real-time database and authentication.",
      features: ["Firebase Firestore", "Authentication", "Real-time Data", "Cloud Functions"],
      gradient: "from-green-500 to-emerald-500",
      delay: 0.2
    },
    {
      icon: Globe,
      title: "Modern Web Development",
      description: "Fast and responsive web applications with React, Tailwind CSS and Django.",
      features: ["React & TypeScript", "Tailwind CSS", "Django Backend", "SEO Optimization"],
      gradient: "from-orange-500 to-red-500",
      delay: 0.3
    },
    {
      icon: Code,
      title: "Glassmorphic UI Design",
      description: "Premium user experience with modern glassmorphism design.",
      features: ["Glassmorphism", "Custom Animations", "Premium UI/UX", "Responsive Design"],
      gradient: "from-indigo-500 to-blue-500",
      delay: 0.4
    },
    {
      icon: Zap,
      title: "Real-time Analytics",
      description: "Real-time data visualization and performance analytics.",
      features: ["Real-time Charts", "Performance Analytics", "Data Visualization", "User Insights"],
      gradient: "from-yellow-500 to-orange-500",
      delay: 0.5
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
          <section id="services" className="section-padding bg-gray-800 relative overflow-hidden">
            {/* Floating Tech Icons */}
            <div className="absolute inset-0">
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -30, 0],
                    rotate: [0, 180, 360],
                    opacity: [0.1, 0.3, 0.1]
                  }}
                  transition={{
                    duration: 10 + Math.random() * 10,
                    repeat: Infinity,
                    delay: Math.random() * 5,
                    ease: "easeInOut"
                  }}
                  className="absolute text-blue-400/20"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    fontSize: `${1 + Math.random() * 2}rem`
                  }}
                >
                  {['</>', '{ }', '⚡', '🔥', '🚀', '💻', '📱', '🎨'][Math.floor(Math.random() * 8)]}
                </motion.div>
              ))}
            </div>
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-blue-500/10 to-indigo-500/10 rounded-full blur-3xl"></div>
      
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
                className="inline-flex items-center px-4 py-2 bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full text-sm font-medium text-blue-400 mb-6"
          >
            <Zap className="w-4 h-4 mr-2 text-blue-400" />
            Our Services
          </motion.div>
          
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 px-4 sm:px-0"
          >
            AI-Powered
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Technology Solutions</span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0"
          >
            We develop modern mobile and web applications with React Native, Firebase, 
            and AI integrations. Through projects like BGFocus and BGResume, we deliver 
            innovative solutions in productivity and career development.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
                 className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -15,
                scale: 1.02,
                rotateY: 5,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
              className="group relative"
            >
                     <div className="bg-white/5 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-3xl h-full hover:shadow-2xl transition-all duration-500 border border-white/10 hover:border-white/20">
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: service.delay + 0.5, duration: 0.5, type: "spring" }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-all duration-300`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                       <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: service.delay + 0.7 + featureIndex * 0.1 }}
                      className="flex items-center space-x-2"
                    >
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                             <span className="text-sm text-gray-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA */}
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: service.delay + 1 }}
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                         className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors group-hover:translate-x-1 duration-300"
                >
                  View Details
                  <ArrowRight className="ml-2 w-4 h-4" />
                </motion.button>
              </div>

              {/* Hover Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-500 -z-10`}></div>
            </motion.div>
          ))}
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
                   className="bg-white/5 backdrop-blur-sm p-12 rounded-3xl max-w-4xl mx-auto border border-white/10"
          >
            <motion.h3
              variants={itemVariants}
              className="text-3xl font-bold text-white mb-6"
            >
              Let's Build Something Great Together
            </motion.h3>
            
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-300 mb-8 leading-relaxed"
            >
              Whatever service you need, our expert team is ready to deliver 
              the perfect solution for your business.
            </motion.p>
            
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                       className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 inline-flex items-center justify-center group"
              >
                Get Free Quote
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                       className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 inline-flex items-center justify-center"
              >
                View Our Work
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;