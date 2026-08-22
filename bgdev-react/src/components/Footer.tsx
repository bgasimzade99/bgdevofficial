import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUp, Linkedin, Instagram } from 'lucide-react';
import BrandLogo from './BrandLogo';

const TikTokIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a4.83 4.83 0 0 0-1-.1 4.85 4.85 0 0 0-4.84 4.85A4.85 4.85 0 0 0 8 19.13a4.84 4.84 0 0 0 4.58-3.22V11.5a6.27 6.27 0 0 0 5.77 3.87v-3.44a4.85 4.85 0 0 1 1.24-3.24z" />
  </svg>
);

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    company: [
      { label: 'About us', href: '/about' },
      { label: 'Services', href: '/#services' },
      { label: 'Work', href: '/#projects' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' },
    ],
    services: [
      { label: 'Web development', href: '/#services' },
      { label: 'Mobile applications', href: '/#services' },
      { label: 'AI integration', href: '/#services' },
      { label: 'SEO & marketing', href: '/#services' },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/company/bgdev', label: 'LinkedIn' },
    { icon: TikTokIcon, href: 'https://www.tiktok.com/@bgdev.official?is_from_webapp=1&sender_device=pc', label: 'TikTok' },
    { icon: Instagram, href: 'https://www.instagram.com/bgdevofficial', label: 'Instagram' },
  ];

  return (
    <footer className="bg-ink-950 text-white border-t border-white/10">
      <div className="container-custom">
        <div className="py-16 grid lg:grid-cols-4 md:grid-cols-2 gap-10">
          <div className="lg:col-span-1">
            <div className="mb-6">
              <BrandLogo variant="footer" asLink />
            </div>

            <p className="text-neutral-500 mb-6 leading-relaxed text-sm">
              We help your business stand out in the digital world with modern
              engineering and considered design.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-neutral-500" />
                <span className="text-neutral-400 text-sm">bgdevofficial@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-neutral-500" />
                <span className="text-neutral-400 text-sm">+994 55 451 19 99</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-neutral-500" />
                <span className="text-neutral-400 text-sm">Riga, Latvia</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-5 text-white">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-neutral-500 hover:text-white transition-colors duration-200 text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-5 text-white">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-neutral-500 hover:text-white transition-colors duration-200 text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-5 text-white">Follow</h3>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 border border-white/10 hover:border-white/25 rounded-lg flex items-center justify-center transition-colors duration-200"
                >
                  <social.icon className="w-4 h-4 text-neutral-400" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="py-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-600 text-sm">© 2026 BGDev. All rights reserved.</p>

          <div className="flex items-center gap-6 text-sm">
            <Link to="/privacy-policy" className="text-neutral-500 hover:text-white transition-colors">Privacy policy</Link>
            <Link to="/terms-of-service" className="text-neutral-500 hover:text-white transition-colors">Terms of service</Link>
            <Link to="/cookie-policy" className="text-neutral-500 hover:text-white transition-colors">Cookie policy</Link>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-neutral-500 hover:text-white transition-colors duration-200 group"
          >
            <span className="text-sm">Back to top</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
