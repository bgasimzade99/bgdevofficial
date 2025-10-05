import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Clock, Target, CheckCircle, ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Users, value: "8+", label: "LinkedIn Followers", delay: 0 },
    { icon: Award, value: "3+", label: "Active Projects", delay: 0.1 },
    { icon: Clock, value: "2+", label: "Years Experience", delay: 0.2 },
    { icon: Target, value: "AI", label: "Powered Solutions", delay: 0.3 },
  ];

  const features = [
    "React Native & TypeScript mobile applications",
    "AI integration (ChatGLM, GPT-4)",
    "Firebase backend solutions",
    "Cross-platform development (Expo)",
    "Glassmorphic UI design",
    "Real-time data visualization"
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
          <section id="about" className="section-padding bg-gray-900 relative overflow-hidden">
            {/* Parallax Background Elements */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="absolute inset-0"
            >
              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute top-10 right-10 w-40 h-40 border border-blue-400/10 rounded-full"
              />
              <motion.div
                animate={{
                  rotate: [360, 0],
                  y: [0, -20, 0]
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 5
                }}
                className="absolute bottom-20 left-10 w-32 h-32 border border-purple-400/10 rounded-lg rotate-45"
              />
            </motion.div>
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-500/10 to-indigo-500/10 rounded-full blur-3xl opacity-30"></div>
      
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
                className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-sm font-medium text-blue-400 mb-6"
          >
            <Award className="w-4 h-4 mr-2" />
            About Us
          </motion.div>
          
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 px-4 sm:px-0"
            >
              AI-Powered
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Digital Solutions</span>
            </motion.h2>
            
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0"
            >
              At BGDev, we empower businesses in the digital age with innovative web and mobile 
              solutions. We combine clean design with solid technology, creating solutions 
              with React Native, Firebase, and AI integrations.
            </motion.p>
        </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12 lg:mb-20">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              variants={itemVariants}
                    className="bg-white/5 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-3xl border border-white/10"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
                Why BGDev?
              </h3>
              
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-center space-x-3"
                  >
                        <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-300">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                variants={itemVariants}
                className="mt-8"
              >
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors group"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            {/* Stats Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                         className="bg-white/5 backdrop-blur-sm p-4 sm:p-6 rounded-2xl text-center group hover:shadow-xl transition-all duration-300 border border-white/10"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: stat.delay + 0.5, duration: 0.5, type: "spring" }}
                      className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform"
                  >
                    <stat.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: stat.delay + 0.7 }}
                      className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2"
                  >
                    {stat.value}
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: stat.delay + 0.9 }}
                      className="text-gray-300 font-medium"
                  >
                    {stat.label}
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ 
                y: [-15, 15, -15],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                  ease: [0.42, 0, 0.58, 1]
              }}
                     className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg"
            >
              <Award className="w-8 h-8 text-white" />
            </motion.div>

            <motion.div
              animate={{ 
                y: [15, -15, 15],
                rotate: [0, -5, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                  ease: [0.42, 0, 0.58, 1],
                delay: 2
              }}
                     className="absolute -bottom-8 -left-8 w-12 h-12 bg-gradient-to-r from-purple-400 to-blue-500 rounded-xl flex items-center justify-center shadow-lg"
            >
              <Target className="w-6 h-6 text-white" />
            </motion.div>
          </motion.div>
        </div>

        {/* Mission Statement */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
            variants={itemVariants}
                    className="bg-white/5 backdrop-blur-sm p-12 rounded-3xl max-w-4xl mx-auto border border-white/10"
          >
            <motion.div
              variants={itemVariants}
              className="text-6xl mb-6"
            >
              🚀
            </motion.div>
            
            <motion.h3
              variants={itemVariants}
              className="text-3xl font-bold text-white mb-6"
            >
              Our Mission
            </motion.h3>
            
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-300 leading-relaxed"
            >
              Through AI-powered projects like BGFocus and BGResume, we deliver innovative 
              solutions in productivity management and career development. Every project 
              is developed with modern technologies and AI integration.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;