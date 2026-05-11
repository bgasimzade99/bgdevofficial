import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUp,
  Github,
  Linkedin,
  Instagram,
  Heart
} from 'lucide-react';
import BrandLogo from './BrandLogo';

// TikTok Icon Component
const TikTokIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a4.83 4.83 0 0 0-1-.1 4.85 4.85 0 0 0-4.84 4.85A4.85 4.85 0 0 0 8 19.13a4.84 4.84 0 0 0 4.58-3.22V11.5a6.27 6.27 0 0 0 5.77 3.87v-3.44a4.85 4.85 0 0 1 1.24-3.24z"/>
  </svg>
);

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    company: [
      { label: 'About Us', href: '#about' },
      { label: 'Our Services', href: '#services' },
      { label: 'Our Projects', href: '#projects' },
      { label: 'Contact', href: '#contact' }
    ],
    services: [
      { label: 'Web Development', href: '#services' },
      { label: 'Mobile Applications', href: '#services' },
      { label: 'E-Commerce', href: '#services' },
      { label: 'SEO & Marketing', href: '#services' }
    ],
    support: [
      { label: 'Help Center', href: '#' },
      { label: 'Documentation', href: '#' },
      { label: 'Technical Support', href: '#' },
      { label: 'FAQ', href: '#' }
    ]
  };

         const socialLinks = [
           { icon: Github, href: 'https://github.com/bgasimzade99', label: 'GitHub' },
           { icon: Linkedin, href: 'https://www.linkedin.com/company/bgdev', label: 'LinkedIn' },
           { icon: TikTokIcon, href: 'https://www.tiktok.com/@bgdev.official?is_from_webapp=1&sender_device=pc', label: 'TikTok' },
           { icon: Instagram, href: 'https://www.instagram.com/bgdevofficial', label: 'Instagram' }
         ];

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-blue-500/10 to-indigo-500/10 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-16"
        >
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <div className="mb-6">
                <BrandLogo variant="footer" asLink />
              </div>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                We help your business stand out in the digital world with 
                modern technologies and creative designs.
              </p>

              {/* Contact Info */}
                     <div className="space-y-3">
                       <div className="flex items-center space-x-3">
                         <Mail className="w-4 h-4 text-primary-400" />
                         <span className="text-gray-400 text-sm">bgdevofficial@gmail.com</span>
                       </div>
                       <div className="flex items-center space-x-3">
                         <Phone className="w-4 h-4 text-primary-400" />
                         <span className="text-gray-400 text-sm">+994 55 451 19 99</span>
                       </div>
                       <div className="flex items-center space-x-3">
                         <MapPin className="w-4 h-4 text-primary-400" />
                         <span className="text-gray-400 text-sm">Riga, Latvia</span>
                       </div>
                     </div>
            </motion.div>

            {/* Company Links */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold mb-6">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5, color: '#3b82f6' }}
                      className="text-gray-400 hover:text-primary-400 transition-colors duration-300 text-sm"
                    >
                      {link.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services Links */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold mb-6">Services</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5, color: '#3b82f6' }}
                      className="text-gray-400 hover:text-primary-400 transition-colors duration-300 text-sm"
                    >
                      {link.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Support Links */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold mb-6">Support</h3>
              <ul className="space-y-3">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5, color: '#3b82f6' }}
                      className="text-gray-400 hover:text-primary-400 transition-colors duration-300 text-sm"
                    >
                      {link.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Newsletter Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-8 border-t border-gray-800"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold mb-2">Follow Our News</h3>
              <p className="text-gray-400">
                Stay updated with new projects and technology updates.
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-primary-500 to-purple-600 hover:from-primary-600 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Mail className="w-4 h-4" />
                <span>Subscribe</span>
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-8 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div variants={itemVariants} className="flex space-x-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-gray-800 hover:bg-primary-500 rounded-lg flex items-center justify-center transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </motion.a>
              ))}
            </motion.div>

            <motion.button
              variants={itemVariants}
              onClick={scrollToTop}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 text-gray-400 hover:text-primary-400 transition-colors duration-300 group"
            >
              <span className="text-sm">Back to Top</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-6 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p variants={itemVariants} className="text-gray-400 text-sm">
              © 2026 BGDev. All rights reserved.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex items-center space-x-6 text-sm">
              <a href="/privacy-policy" className="text-gray-400 hover:text-primary-400 transition-colors">
                Privacy Policy
              </a>
              <a href="/terms-of-service" className="text-gray-400 hover:text-primary-400 transition-colors">
                Terms of Service
              </a>
              <a href="/cookie-policy" className="text-gray-400 hover:text-primary-400 transition-colors">
                Cookie Policy
              </a>
            </motion.div>
          </div>
          
          <motion.div
            variants={itemVariants}
            className="text-center mt-4"
          >
            <p className="text-gray-500 text-sm flex items-center justify-center space-x-1">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
              <span>by BGDev Team</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;