import React from 'react';
import { motion } from 'framer-motion';

const technologies = [
  { name: 'React', icon: '/icons/react.svg' },
  { name: 'Node.js', icon: '/icons/nodejs.svg' },
  { name: 'Python', icon: '/icons/python.svg' },
  { name: 'TypeScript', icon: '/icons/typescript.svg' },
  { name: 'Java', icon: '/icons/java.svg' },
  { name: 'Spring Boot', icon: '/icons/spring.svg' },
  { name: 'MongoDB', icon: '/icons/mongodb.svg' },
  { name: 'PostgreSQL', icon: '/icons/postgresql.svg' },
  { name: 'AWS', icon: '/icons/aws.svg' },
  { name: 'Docker', icon: '/icons/docker.svg' },
  { name: 'Machine Learning', icon: '/icons/docker.svg' },
  { name: 'Machine Learning Algorithms', icon: '/icons/docker.svg' },
  { name: 'SQL, Pandas, NumPy, Scikit-learn', icon: '/icons/docker.svg' },
  { name: 'TensorFlow, PyTorch, Scikit-learn, Keras', icon: '/icons/docker.svg' },
];

const TechStack = () => {
  return (
    <div className="py-12 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex overflow-hidden">
          <motion.div
            className="flex space-x-12"
            animate={{
              x: [0, -1920],
            }}
            transition={{
              x: {
                duration: 30,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              },
            }}
          >
            {[...technologies, ...technologies].map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-2 w-24"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-white dark:bg-gray-700 rounded-lg shadow-md">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  {tech.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;