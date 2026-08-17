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

function App() {
  return (
    <Router>
      <GitHubPagesRedirect />
      <div className="App">
        <div className="grain-overlay" aria-hidden="true" />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
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