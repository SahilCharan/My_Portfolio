import React, { useState } from 'react';
import { Github, ExternalLink, Filter, Code, Database, Cpu } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects', icon: <Filter className="w-4 h-4" /> },
    { id: 'web', name: 'Web Development', icon: <Code className="w-4 h-4" /> },
    { id: 'data', name: 'Data Analysis', icon: <Database className="w-4 h-4" /> },
    { id: 'ai', name: 'AI & ML', icon: <Cpu className="w-4 h-4" /> }
  ];
  
  const projects = [
    {
      title: 'My Healthcare Chatbot',
      description: 'An intelligent healthcare chatbot utilizing OpenAI\'s GPT models to provide users with medical information and assistance. Features context-aware conversations and natural language understanding.',
      tech: ['Python', 'OpenAI API', 'Streamlit', 'NLP'],
      github: 'https://github.com/SahilCharan/My-healthcare_chatbot',
      image: 'https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      category: 'ai',
      featured: true
    },
    {
      title: '2024 Ad Expenditure & Voting Trends',
      description: 'A data analysis project examining the correlation between political ad spending and voting patterns in the 2024 elections. Utilizes data visualization to present insights.',
      tech: ['Python', 'Pandas', 'Matplotlib', 'Data Analysis'],
      github: 'https://github.com/SahilCharan/2024-Ad-Expenditure-and-Voting-Trends',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      category: 'data'
    },
    {
      title: 'Indian Tech Giants Performance Analysis',
      description: 'Analyzes the financial performance of major Indian tech companies, focusing on metrics like ROE and EPS growth across various sectors.',
      tech: ['Python', 'Pandas', 'Data Visualization'],
      github: 'https://github.com/SahilCharan/Indian-Tech-Giants-Performance-Analysis',
      image: 'https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      category: 'data'
    },
    {
      title: 'Restaurant Management System',
      description: 'A comprehensive system for managing restaurant operations, including order processing, inventory management, and billing functionalities.',
      tech: ['PHP', 'MySQL', 'HTML', 'CSS'],
      github: 'https://github.com/SahilCharan/Restaurant-Management-system',
      image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      category: 'web'
    },
    {
      title: 'BigMart Sales Prediction',
      description: 'Employs machine learning algorithms to predict sales for BigMart outlets based on historical data, aiding in inventory and sales strategy planning.',
      tech: ['Python', 'Scikit-learn', 'Pandas', 'Machine Learning'],
      github: 'https://github.com/SahilCharan/BigMart-Sales-Prediction',
      image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      category: 'ai',
      featured: true
    },
    {
      title: 'Link Saver App',
      description: 'A web application that allows users to save and manage their favorite links efficiently, featuring a user-friendly interface and categorization.',
      tech: ['TypeScript', 'React', 'Tailwind CSS'],
      github: 'https://fullstacklinksaverapp.vercel.app/',
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      category: 'web'
    },
    {
      title: 'Airline Reservation System',
      description: 'A Java Spring Boot application facilitating airline ticket bookings, cancellations, and schedule management with a secure authentication system.',
      tech: ['Java', 'Spring Boot', 'MySQL', 'Thymeleaf'],
      github: '', 
      image: 'https://images.pexels.com/photos/62623/wing-plane-flying-airplane-62623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      category: 'web'
    },
    {
      title: 'Brain Tumor Detection',
      description: 'A deep learning project aimed at detecting brain tumors from MRI images, enhancing early diagnosis and treatment planning.',
      tech: ['Python', 'TensorFlow', 'Keras', 'OpenCV'],
      github: '',
      image: 'https://images.pexels.com/photos/4226119/pexels-photo-4226119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      category: 'ai',
      featured: true
    },
    {
      title: 'IND-AIR: Life Saving Jacket',
      description: 'Designed a safety system using Microcontrollers, accelerometers, gyroscopes, and GPS to detect falls with 99% accuracy. Applications activate within 100ms post-impact; research paper published in IJIRT.',
      tech: ['IoT', 'Sensors', 'Data Analysis'],
      github: 'https://ijirt.org/Article?manuscript=176335',
      image: 'https://images.pexels.com/photos/5691622/pexels-photo-5691622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      category: 'ai'
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="text-base text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase">Portfolio</p>
          <h2 className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 lg:mx-auto">
            A showcase of my work demonstrating skills in full-stack development, data analysis, and AI.
          </p>
        </div>

        {/* Featured Projects Carousel */}
        <div className="mt-12 relative">
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div 
                key={`featured-${index}`}
                className="group relative rounded-xl overflow-hidden shadow-xl transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative h-64 w-full">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-70"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="bg-indigo-600 text-white text-xs px-2 py-1 rounded-full uppercase font-semibold tracking-wider">
                      Featured
                    </span>
                    <h3 className="text-xl font-bold text-white mt-2">{project.title}</h3>
                    <div className="flex mt-2 flex-wrap gap-1">
                      {project.tech.slice(0, 2).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-white/20 text-white"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 2 && (
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-white/20 text-white">
                          +{project.tech.length - 2}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white rounded-full text-gray-900 hover:bg-indigo-600 hover:text-white transition-colors duration-300"
                      >
                        <Github className="h-6 w-6" />
                      </a>
                    )}
                    <a
                      href="#"
                      className="p-3 bg-white rounded-full text-gray-900 hover:bg-indigo-600 hover:text-white transition-colors duration-300"
                    >
                      <ExternalLink className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Project Filters */}
        <div className="mt-16 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                activeFilter === category.id
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl bg-white dark:bg-gray-800"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="flex-1 p-6 flex flex-col">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
                  <p className="mt-3 text-base text-gray-500 dark:text-gray-300 line-clamp-3">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-6 flex justify-between items-center">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                    >
                      <Github className="h-5 w-5" />
                      <span>View Code</span>
                    </a>
                  ) : (
                    <span className="text-gray-400 dark:text-gray-500 text-sm italic">Private Repository</span>
                  )}
                  <a
                    href="#"
                    className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 dark:text-indigo-200 dark:bg-indigo-900 dark:hover:bg-indigo-800"
                  >
                    Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;