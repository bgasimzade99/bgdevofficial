import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Rocket } from 'lucide-react';

const Hero: React.FC = () => {
  const floatingIcons = [
    { Icon: Sparkles, delay: 0, x: 20, y: 20 },
    { Icon: Zap, delay: 0.5, x: -30, y: 40 },
    { Icon: Rocket, delay: 1, x: 40, y: -20 },
  ];

  return (
          <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
            {/* Video Background */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              {/* Animated Geometric Shapes */}
              <div className="absolute inset-0">
                <motion.div
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 1],
                    opacity: [0.1, 0.3, 0.1]
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute top-20 left-20 w-32 h-32 border-2 border-blue-400/20 rounded-full"
                />
                <motion.div
                  animate={{
                    rotate: [360, 0],
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1]
                  }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 2
                  }}
                  className="absolute top-40 right-32 w-24 h-24 border-2 border-purple-400/20 rounded-lg rotate-45"
                />
                <motion.div
                  animate={{
                    y: [-50, 50, -50],
                    x: [-20, 20, -20],
                    rotate: [0, 180, 360]
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 4
                  }}
                  className="absolute bottom-32 left-1/4 w-16 h-16 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full"
                />
              </div>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-gray-900/80 to-indigo-900/70 z-10"></div>
              
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-30 z-5">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] animate-pulse"></div>
              </div>
              
              {/* Floating Particles */}
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -100, 0],
                    x: [0, Math.random() * 100 - 50, 0],
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0]
                  }}
                  transition={{
                    duration: 8 + Math.random() * 4,
                    repeat: Infinity,
                    delay: Math.random() * 5,
                    ease: "easeInOut"
                  }}
                  className="absolute w-2 h-2 bg-white/20 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`
                  }}
                />
              ))}
            </div>
      
      {/* Floating Icons */}
      {floatingIcons.map(({ Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 1, 0.7, 1],
            scale: [0, 1, 1.1, 1],
            x: [0, x, x * 0.8, x],
            y: [0, y, y * 0.8, y]
          }}
          transition={{
            duration: 4,
            delay: delay,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 text-blue-400/30"
        >
          <Icon className="w-8 h-8" />
        </motion.div>
      ))}

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="space-y-8"
          >
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight tracking-tight"
            >
              <motion.span 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-white inline-block"
              >
                The best
              </motion.span>
              <br />
              <motion.span 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.8, type: "spring", stiffness: 100 }}
                className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent inline-block"
              >
                digital experience
              </motion.span>
              <br />
              <motion.span 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="text-white inline-block"
              >
                partner
              </motion.span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-semibold text-white mb-6"
            >
              <Sparkles className="w-4 h-4 mr-2 text-blue-400" />
              AI-Powered Solutions
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl px-4 sm:px-0"
            >
              We build AI-powered mobile and web applications that drive business growth. 
              From productivity platforms to career development tools, we create digital 
              solutions that make an impact.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 px-4 sm:px-0"
            >
              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, duration: 0.6 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className="relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl active:scale-95 inline-flex items-center justify-center group text-base sm:text-lg overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative z-10">Book a consultation</span>
                <motion.div
                  className="relative z-10 ml-2"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </motion.a>
              
              <motion.a
                href="#projects"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.6 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  backgroundColor: "rgba(255, 255, 255, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
                className="relative bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-white/30 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 inline-flex items-center justify-center text-base sm:text-lg overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.8 }}
                />
                <span className="relative z-10 group-hover:text-blue-200 transition-colors">
                  View our work
                </span>
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200/50"
            >
              {[
                { number: "50+", label: "Tamamlanan Proje" },
                { number: "100%", label: "Müşteri Memnuniyeti" },
                { number: "24/7", label: "Destek Hizmeti" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold gradient-text">{stat.number}</div>
                  <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - 3D Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            <motion.div
              initial={{ rotateY: -15, rotateX: 5 }}
              animate={{ rotateY: 0, rotateX: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              whileHover={{ 
                rotateY: -5, 
                rotateX: 5,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="relative perspective-1000 preserve-3d mt-8 lg:mt-0"
            >
                    {/* Main Card */}
                    <div className="bg-white/10 backdrop-blur-xl p-4 sm:p-6 lg:p-8 rounded-3xl shadow-2xl border border-white/20">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                        <img
                          src="/logo.svg"
                          alt="BGDev Logo"
                          className="w-48 h-20 object-contain"
                        />
                    <div>
                      <h3 className="text-xl font-bold text-white">BGDev Studio</h3>
                      <p className="text-gray-300">AI-Powered Mobile & Web Solutions</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {[
                      { icon: "🤖", title: "AI-Powered", desc: "GPT-4 & ChatGLM" },
                      { icon: "📱", title: "React Native", desc: "Cross-platform" },
                      { icon: "🔥", title: "Firebase", desc: "Real-time Data" },
                      { icon: "⚡", title: "TypeScript", desc: "Type Safety" }
                    ].map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                            className="p-3 sm:p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
                      >
                        <div className="text-2xl mb-2">{feature.icon}</div>
                        <div className="font-semibold text-white">{feature.title}</div>
                        <div className="text-sm text-gray-300">{feature.desc}</div>
                      </motion.div>
                    ))}
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                          className="pt-4 border-t border-white/10"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Proje Durumu</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium text-green-600">Aktif</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ 
                  y: [-10, 10, -10],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: [0.42, 0, 0.58, 1]
                }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg"
              >
                <Sparkles className="w-8 h-8 text-white" />
              </motion.div>

              <motion.div
                animate={{ 
                  y: [10, -10, 10],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: [0.42, 0, 0.58, 1],
                  delay: 1
                }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-xl flex items-center justify-center shadow-lg"
              >
                <Zap className="w-6 h-6 text-white" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;