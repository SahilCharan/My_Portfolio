import React from 'react';
import { Code2, Brain, Download, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div id="home" className="relative bg-white dark:bg-gray-900 overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800 opacity-70"></div>
        <div className="absolute inset-0 bg-[url('/profile.jpg')] bg-cover bg-center opacity-5"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="relative pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                <span className="block animate-fade-in-up">Hi, I'm Kumar Sahil</span>
                <span className="block text-indigo-600 dark:text-indigo-400 mt-2 animate-fade-in-up animation-delay-200">
                  Developer by Day, Dreamer by Night
                </span>
              </h1>
              
              <p className="mt-3 text-base text-gray-600 dark:text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 animate-fade-in-up animation-delay-400">
                Curious and hands-on full-stack developer with a solid grip on backend, frontend, and AI-powered automation. I enjoy building things that work — from scalable apps to smart assistants. Strong in Java, Python, React, and systems thinking. Currently building LLM-based tools at Dwary Intech to solve real-world business pain points. Passionate about building impactful products and solving complex problems..
              </p>
              
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start space-x-4 animate-fade-in-up animation-delay-600">
                <a
                  href="https://drive.google.com/file/d/1vXn4N8CmS8ppN0AvHY8X9nzFrGisWU_C/view?usp=sharing"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-indigo-100 hover:bg-indigo-200 dark:text-indigo-300 dark:bg-gray-800 dark:hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1"
                >
                  View Projects
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </div>
              
              <div className="mt-8 flex items-center space-x-6 sm:justify-center lg:justify-start animate-fade-in-up animation-delay-800">
                <div className="flex items-center space-x-2 text-indigo-600 dark:text-indigo-400">
                  <Code2 className="h-6 w-6" />
                  <span>Full Stack Development</span>
                </div>
                <div className="flex items-center space-x-2 text-indigo-600 dark:text-indigo-400">
                  <Brain className="h-6 w-6" />
                  <span>AI & Machine Learning</span>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 flex items-center justify-center p-8">
        <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-white dark:border-gray-800 shadow-2xl transform hover:rotate-3 transition-transform duration-500">
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-600 opacity-20 hover:opacity-10 transition-opacity duration-300"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
