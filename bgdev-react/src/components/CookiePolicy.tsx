import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Cookie, Settings, Eye, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CookiePolicy: React.FC = () => {
  const navigate = useNavigate();
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
    <div className="min-h-screen bg-gray-900 text-white pt-20">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="container-custom py-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center space-x-4"
          >
            <motion.button
              onClick={() => navigate('/')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </motion.button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6"
          >
            <div className="flex items-center space-x-3 mb-4">
              <Cookie className="w-8 h-8 text-blue-400" />
              <h1 className="text-4xl font-bold">Cookie Policy</h1>
            </div>
            <p className="text-gray-400 text-lg">
              Last updated: December 2024
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="container-custom py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          {/* Introduction */}
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-2xl font-bold mb-4 flex items-center space-x-2">
              <Eye className="w-6 h-6 text-blue-400" />
              <span>What Are Cookies?</span>
            </h2>
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <p className="text-gray-300 leading-relaxed">
                Cookies are small text files that are stored on your device when you visit our website. 
                They help us provide you with a better experience by remembering your preferences and 
                analyzing how you use our site. This Cookie Policy explains how BGDev uses cookies and 
                similar technologies.
              </p>
            </div>
          </motion.div>

          {/* Types of Cookies */}
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Types of Cookies We Use</h2>
            <div className="space-y-6">
              <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                <h3 className="text-xl font-semibold mb-3 text-blue-300">Essential Cookies</h3>
                <p className="text-gray-300 mb-3">These cookies are necessary for the website to function properly.</p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Session management and security</li>
                  <li>• Form submission and validation</li>
                  <li>• Basic website functionality</li>
                  <li>• User authentication</li>
                </ul>
              </div>
              
              <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                <h3 className="text-xl font-semibold mb-3 text-blue-300">Analytics Cookies</h3>
                <p className="text-gray-300 mb-3">These cookies help us understand how visitors interact with our website.</p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Google Analytics for website traffic analysis</li>
                  <li>• Page views and user behavior tracking</li>
                  <li>• Performance monitoring and optimization</li>
                  <li>• User journey analysis</li>
                </ul>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                <h3 className="text-xl font-semibold mb-3 text-blue-300">Functional Cookies</h3>
                <p className="text-gray-300 mb-3">These cookies enhance your experience by remembering your preferences.</p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Language and region preferences</li>
                  <li>• Theme and display settings</li>
                  <li>• Form data and user inputs</li>
                  <li>• Accessibility preferences</li>
                </ul>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                <h3 className="text-xl font-semibold mb-3 text-blue-300">Marketing Cookies</h3>
                <p className="text-gray-300 mb-3">These cookies are used to deliver relevant advertisements and marketing content.</p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Social media integration</li>
                  <li>• Advertising campaign tracking</li>
                  <li>• Remarketing and retargeting</li>
                  <li>• Conversion tracking</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Cookie Duration */}
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Cookie Duration</h2>
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-blue-300 mb-3">Session Cookies</h3>
                  <p className="text-gray-300">These cookies are temporary and are deleted when you close your browser.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-300 mb-3">Persistent Cookies</h3>
                  <p className="text-gray-300">These cookies remain on your device for a set period or until you delete them.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Managing Cookies */}
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-2xl font-bold mb-4 flex items-center space-x-2">
              <Settings className="w-6 h-6 text-blue-400" />
              <span>Managing Your Cookie Preferences</span>
            </h2>
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-blue-300 mb-2">Browser Settings</h3>
                  <p className="text-gray-300 mb-3">You can control cookies through your browser settings:</p>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Chrome: Settings → Privacy and Security → Cookies</li>
                    <li>• Firefox: Options → Privacy & Security → Cookies</li>
                    <li>• Safari: Preferences → Privacy → Cookies</li>
                    <li>• Edge: Settings → Cookies and Site Permissions</li>
                  </ul>
                </div>
                
                <div className="bg-blue-500/10 p-4 rounded-lg border border-blue-500/20">
                  <p className="text-blue-300 text-sm">
                    <strong>Note:</strong> Disabling certain cookies may affect website functionality and your user experience.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Third-Party Cookies */}
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Third-Party Cookies</h2>
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <p className="text-gray-300 leading-relaxed mb-4">
                Our website may include third-party services that set their own cookies:
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Google Analytics for website analytics</li>
                <li>• Social media platforms for sharing features</li>
                <li>• Payment processors for secure transactions</li>
                <li>• Content delivery networks for performance</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                These third parties have their own privacy policies and cookie practices. 
                We recommend reviewing their policies for more information.
              </p>
            </div>
          </motion.div>

          {/* Data Protection */}
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-2xl font-bold mb-4 flex items-center space-x-2">
              <Shield className="w-6 h-6 text-blue-400" />
              <span>Data Protection</span>
            </h2>
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <p className="text-gray-300 leading-relaxed">
                We are committed to protecting your privacy and personal data. Cookie data is processed 
                in accordance with our Privacy Policy and applicable data protection laws. We implement 
                appropriate security measures to protect cookie data from unauthorized access or disclosure.
              </p>
            </div>
          </motion.div>

          {/* Updates to Policy */}
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Updates to This Policy</h2>
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <p className="text-gray-300 leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in our practices 
                or for other operational, legal, or regulatory reasons. We will notify you of any material 
                changes by posting the updated policy on our website with a new "Last updated" date.
              </p>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-6 rounded-xl border border-blue-500/20">
              <p className="text-gray-300 leading-relaxed mb-4">
                If you have any questions about our use of cookies or this Cookie Policy, please contact us:
              </p>
              <div className="space-y-2 text-gray-300">
                <p><strong>Email:</strong> bgdevofficial@gmail.com</p>
                <p><strong>Phone:</strong> +994 55 451 19 99</p>
                <p><strong>Address:</strong> Riga, Latvia</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default CookiePolicy;
