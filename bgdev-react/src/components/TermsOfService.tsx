import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, FileText, Scale, AlertTriangle, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TermsOfService: React.FC = () => {
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
              <Scale className="w-8 h-8 text-blue-400" />
              <h1 className="text-4xl font-bold">Terms of Service</h1>
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
              <FileText className="w-6 h-6 text-blue-400" />
              <span>Agreement to Terms</span>
            </h2>
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <p className="text-gray-300 leading-relaxed">
                By accessing and using BGDev's services, you agree to be bound by these Terms of Service. 
                If you do not agree to these terms, please do not use our services. These terms apply to all 
                web development, mobile app development, and related services provided by BGDev.
              </p>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Our Services</h2>
            <div className="space-y-6">
              <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                <h3 className="text-xl font-semibold mb-3 text-blue-300">Web Development</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Custom website development using React, TypeScript, and modern frameworks</li>
                  <li>• Responsive design and mobile optimization</li>
                  <li>• E-commerce solutions and content management systems</li>
                  <li>• SEO optimization and performance enhancement</li>
                </ul>
              </div>
              
              <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                <h3 className="text-xl font-semibold mb-3 text-blue-300">Mobile App Development</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Cross-platform mobile applications using React Native</li>
                  <li>• Native iOS and Android development</li>
                  <li>• AI-powered features and integrations</li>
                  <li>• Firebase backend solutions and real-time data</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Client Responsibilities */}
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-2xl font-bold mb-4 flex items-center space-x-2">
              <CheckCircle className="w-6 h-6 text-blue-400" />
              <span>Client Responsibilities</span>
            </h2>
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <ul className="text-gray-300 space-y-3">
                <li>• Provide accurate and complete project requirements</li>
                <li>• Respond to requests for feedback and approval in a timely manner</li>
                <li>• Provide necessary content, images, and materials</li>
                <li>• Make payments according to agreed terms</li>
                <li>• Respect intellectual property rights</li>
                <li>• Use services in compliance with applicable laws</li>
              </ul>
            </div>
          </motion.div>

          {/* Payment Terms */}
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Payment Terms</h2>
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-blue-300 mb-2">Payment Schedule</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• 50% deposit required to begin project</li>
                    <li>• 25% milestone payment upon completion of design phase</li>
                    <li>• 25% final payment upon project completion and delivery</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-300 mb-2">Payment Methods</h3>
                  <p className="text-gray-300">We accept bank transfers, PayPal, and other secure payment methods.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Intellectual Property */}
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  Upon full payment, you will receive ownership of the custom code and design created specifically 
                  for your project. BGDev retains rights to any pre-existing code, frameworks, or methodologies used.
                </p>
                <div className="bg-yellow-500/10 p-4 rounded-lg border border-yellow-500/20">
                  <p className="text-yellow-300 text-sm">
                    <strong>Note:</strong> Third-party libraries and frameworks remain subject to their respective licenses.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Limitation of Liability */}
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-2xl font-bold mb-4 flex items-center space-x-2">
              <AlertTriangle className="w-6 h-6 text-blue-400" />
              <span>Limitation of Liability</span>
            </h2>
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <p className="text-gray-300 leading-relaxed">
                BGDev's liability is limited to the amount paid for the specific service. We are not liable for 
                indirect damages, lost profits, or consequential damages. We provide services "as is" and make 
                no warranties beyond what is explicitly stated in our service agreement.
              </p>
            </div>
          </motion.div>

          {/* Termination */}
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Termination</h2>
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <p className="text-gray-300 leading-relaxed">
                Either party may terminate the service agreement with 30 days written notice. Upon termination, 
                you will be charged for work completed up to that point. Any materials or code created will be 
                delivered as-is, subject to payment of outstanding fees.
              </p>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-6 rounded-xl border border-blue-500/20">
              <p className="text-gray-300 leading-relaxed mb-4">
                For questions about these Terms of Service, please contact us:
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

export default TermsOfService;
