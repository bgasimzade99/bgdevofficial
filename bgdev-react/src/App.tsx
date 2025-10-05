import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import CookiePolicy from './components/CookiePolicy';

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Skills />
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
      // Navigate to the redirect path
      window.history.replaceState(null, '', redirectPath);
      window.location.reload();
    }
    
    // Check if we're on GitHub Pages and have a redirect query parameter
    const githubRedirectPath = queryParams.get('/');
    
    if (githubRedirectPath) {
      // Clean up the path and navigate
      const cleanPath = githubRedirectPath.replace(/~and~/g, '&');
      window.history.replaceState(null, '', cleanPath);
      window.location.href = cleanPath;
    }
  }, [location]);
  
  return null;
}

function App() {
  return (
    <Router>
      <GitHubPagesRedirect />
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;