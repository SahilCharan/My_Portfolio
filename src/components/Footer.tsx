import React from 'react';
import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 relative">
      <button
        onClick={scrollToTop}
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition-colors duration-300"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-6 w-6" />
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Kumar Sahil</h3>
            <p className="text-gray-400 max-w-xs">
              Full Stack Developer and AI Enthusiast building innovative solutions at the intersection of web development and artificial intelligence.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/SahilCharan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="Visit my GitHub profile"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/sahil-dwary/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="Connect with me on LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="Follow me on Twitter"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a 
                href="mailto:sahilcharandwary@gmail.com" 
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="Send me an email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors duration-300">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">About</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white transition-colors duration-300">Projects</a>
              </li>
              <li>
                <a href="#games" className="text-gray-400 hover:text-white transition-colors duration-300">Games</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-4">
              <p className="text-gray-400">
                <strong>Email:</strong><br />
                sahilcharandwary@gmail.com
              </p>
              <p className="text-gray-400">
                <strong>Location:</strong><br />
                Bangalore, India
              </p>
              <p className="text-gray-400">
                <strong>For Recruiters:</strong><br />
                Open to full-time opportunities
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Tech Stack</h3>
            <div className="grid grid-cols-3 gap-2">
              {['React', 'Node.js', 'Python', 'Java', 'Spring', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker','ML Algorithms','TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras','SQL','Pandas', 'NumPy','Matplotlib'].map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-sm text-center"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Kumar Sahil. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-4 md:mt-0 flex items-center">
            Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;