import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield, Eye, Database, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
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
              <Shield className="w-8 h-8 text-blue-400" />
              <h1 className="text-4xl font-bold">Privacy Policy</h1>
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
              <span>Introduction</span>
            </h2>
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <p className="text-gray-300 leading-relaxed">
                At BGDev, we are committed to protecting your privacy and ensuring the security of your personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit 
                our website or use our services.
              </p>
            </div>
          </motion.div>

          {/* Information We Collect */}
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-2xl font-bold mb-4 flex items-center space-x-2">
              <Database className="w-6 h-6 text-blue-400" />
              <span>Information We Collect</span>
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                <h3 className="text-xl font-semibold mb-3 text-blue-300">Personal Information</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Name and contact information (email, phone number)</li>
                  <li>• Company information and project requirements</li>
                  <li>• Communication preferences</li>
                  <li>• Payment information (processed securely through third-party providers)</li>
                </ul>
              </div>
              
              <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                <h3 className="text-xl font-semibold mb-3 text-blue-300">Technical Information</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• IP address and device information</li>
                  <li>• Browser type and version</li>
                  <li>• Website usage data and analytics</li>
                  <li>• Cookies and similar tracking technologies</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* How We Use Information */}
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-2xl font-bold mb-4 flex items-center space-x-2">
              <Lock className="w-6 h-6 text-blue-400" />
              <span>How We Use Your Information</span>
            </h2>
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <ul className="text-gray-300 space-y-3">
                <li>• To provide and improve our web development and mobile app services</li>
                <li>• To communicate with you about projects and updates</li>
                <li>• To process payments and manage client relationships</li>
                <li>• To analyze website performance and user experience</li>
                <li>• To comply with legal obligations and protect our rights</li>
                <li>• To send marketing communications (with your consent)</li>
              </ul>
            </div>
          </motion.div>

          {/* Data Security */}
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Data Security</h2>
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <p className="text-gray-300 leading-relaxed mb-4">
                We implement appropriate technical and organizational measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction. This includes:
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• SSL encryption for data transmission</li>
                <li>• Secure data storage and access controls</li>
                <li>• Regular security audits and updates</li>
                <li>• Employee training on data protection</li>
              </ul>
            </div>
          </motion.div>

          {/* Your Rights */}
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <p className="text-gray-300 leading-relaxed mb-4">
                You have the following rights regarding your personal information:
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Access to your personal data</li>
                <li>• Correction of inaccurate information</li>
                <li>• Deletion of your data (right to be forgotten)</li>
                <li>• Data portability</li>
                <li>• Objection to processing</li>
                <li>• Withdrawal of consent</li>
              </ul>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-6 rounded-xl border border-blue-500/20">
              <p className="text-gray-300 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
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

export default PrivacyPolicy;
