import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Games from './components/Games';
import Testimonials from './components/Testimonials';
import GitHubStats from './components/GitHubStats';
import Blog from './components/Blog';
import CaseStudies from './components/CaseStudies';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Background3D from './components/Background3D';
import NowPlaying from './components/NowPlaying';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
      <Background3D />
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero />
      <About />
      <Projects />
      <CaseStudies />
      <Blog />
      <Games />
      <Testimonials />
      <GitHubStats />
      <Certifications />
      <Contact />
      <Footer />
      <NowPlaying />
    </div>
  );
}

export default App;