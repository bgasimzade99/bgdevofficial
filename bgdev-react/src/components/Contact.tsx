import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  User,
  Clock,
  Instagram,
  Linkedin,
} from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to send message');
      }

      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 8000);
    } catch (error: any) {
      console.error('Error sending email:', error);
      setIsSubmitting(false);
      alert(error.message || 'Failed to send message. Please try again or contact us directly at bgdevofficial@gmail.com');
    }
  };

  const contactInfo = [
    { icon: Mail, title: 'Email', info: 'bgdevofficial@gmail.com', description: '24/7 email support' },
    { icon: Phone, title: 'Phone', info: '+994 55 451 19 99', description: 'Weekdays 09:00 – 18:00' },
    { icon: MapPin, title: 'Location', info: 'Riga, Latvia', description: 'Remote office' },
  ];

  const services = [
    'Web Development',
    'Mobile Applications',
    'AI Integration',
    'SEO & Digital Marketing',
    'Security & Maintenance',
    'Performance Optimization',
  ];

  return (
    <section id="contact" className="section-padding bg-ink-950 border-t border-white/10">
      <div className="container-custom">
        <div className="max-w-2xl mb-16">
          <p className="label text-brand-300/80 mb-4">Contact</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-6 text-balance">
            Let's talk about <span className="text-gradient-brand">your project.</span>
          </h2>
          <p className="text-lg text-neutral-400 leading-relaxed">
            Get in touch and we'll come back with a clear scope, a straight answer,
            and a free consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="panel p-6 sm:p-8"
          >
            <h3 className="text-lg font-semibold text-white mb-8">Contact information</h3>

            <div className="space-y-4">
              {contactInfo.map((info) => (
                <div
                  key={info.title}
                  className="flex items-start gap-4 p-4 border border-white/10 rounded-xl hover:border-brand-300/30 transition-colors duration-200"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-brand-gradient flex items-center justify-center">
                    <info.icon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white text-sm mb-0.5">{info.title}</h4>
                    <p className="text-neutral-300 text-sm mb-0.5">{info.info}</p>
                    <p className="text-xs text-neutral-500">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-5 border border-white/10 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-4 h-4 text-neutral-400" />
                <h4 className="font-medium text-white text-sm">Working hours</h4>
              </div>
              <div className="space-y-2 text-sm text-neutral-400">
                <div className="flex justify-between">
                  <span>Monday – Friday</span>
                  <span className="text-neutral-300">09:00 – 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="text-neutral-300">10:00 – 16:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-neutral-600">Closed</span>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-medium text-white text-sm mb-4">Social</h4>
              <div className="flex gap-3">
                {[
                  { icon: Instagram, label: 'Instagram', url: 'https://www.instagram.com/bgdevofficial' },
                  { icon: Linkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/company/bgdev' },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 border border-white/10 hover:border-white/25 rounded-lg flex items-center justify-center transition-colors duration-200"
                  >
                    <social.icon className="w-4 h-4 text-neutral-400" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="panel p-6 sm:p-8"
          >
            <h3 className="text-lg font-semibold text-white mb-8">Get a project quote</h3>

            {isSubmitted && (
              <div className="mb-6 p-4 border border-emerald-500/20 bg-emerald-500/[0.06] rounded-xl">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-0.5">Message sent</h4>
                    <p className="text-sm text-neutral-400">We'll get back to you soon.</p>
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-medium text-neutral-400 mb-2">Full name *</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-600" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-white/10 rounded-lg bg-white/[0.02] text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-brand-300/50 transition-colors duration-200"
                      placeholder="Your full name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-400 mb-2">Email *</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-600" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-white/10 rounded-lg bg-white/[0.02] text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-brand-300/50 transition-colors duration-200"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-medium text-neutral-400 mb-2">Phone</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-600" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-white/10 rounded-lg bg-white/[0.02] text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-brand-300/50 transition-colors duration-200"
                      placeholder="+1 555 123 4567"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-400 mb-2">Service type</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-white/10 rounded-lg bg-white/[0.02] text-white text-sm focus:outline-none focus:border-brand-300/50 transition-colors duration-200"
                  >
                    <option value="" className="bg-ink-900">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service} className="bg-ink-900">
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-400 mb-2">Project details *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-white/10 rounded-lg bg-white/[0.02] text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-brand-300/50 transition-colors duration-200 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand-gradient text-white font-semibold py-3.5 px-6 rounded-lg transition-transform hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Get a quote</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
