import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import CookiePolicy from './components/CookiePolicy';
import Chatbot from './components/Chatbot';
import SplashScreen from './components/SplashScreen';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import BlogPage from './components/BlogPage';
import BlogPost from './components/BlogPost';

function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <About />
      <Services />
      <Projects />
      <Contact />
    </>
  );
}

// GitHub Pages routing fix component
function GitHubPagesRedirect() {
  const location = useLocation();

  useEffect(() => {
    // Check for redirect parameter from static HTML files
    const queryParams = new URLSearchParams(location.search);
    const redirectPath = queryParams.get('redirect');

    if (redirectPath) {
      // Navigate to the redirect path without reload
      window.history.replaceState(null, '', redirectPath);
      // Don't reload, just let React Router handle it
      return;
    }

    // Check if we're on GitHub Pages and have a redirect query parameter
    const githubRedirectPath = queryParams.get('/');

    if (githubRedirectPath) {
      // Clean up the path and navigate
      const cleanPath = githubRedirectPath.replace(/~and~/g, '&');
      window.history.replaceState(null, '', cleanPath);
      // Don't reload, just let React Router handle it
      return;
    }
  }, [location]);

  return null;
}

// Scrolls to top on route change, or to a hash target (e.g. /#services) when present
function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      // Wait a tick for the target route's content to mount
      const timer = setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 80);
      return () => clearTimeout(timer);
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [location.pathname, location.hash]);

  return null;
}

function App() {
  return (
    <Router>
      <GitHubPagesRedirect />
      <ScrollManager />
      <SplashScreen />
      <div className="App">
        <div className="grain-overlay" aria-hidden="true" />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
        </Routes>
        <Footer />
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;