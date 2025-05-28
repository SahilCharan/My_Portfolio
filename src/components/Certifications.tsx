import React from 'react';
import { Award, Calendar, ExternalLink } from 'lucide-react';

const certifications = [
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2024",
    credentialId: "AWS-123456",
    link: "https://www.credly.com/badges/example",
    skills: ["Cloud Architecture", "AWS Services", "Security"]
  },
  {
    name: "TensorFlow Developer Certificate",
    issuer: "Google",
    date: "2023",
    credentialId: "TF-789012",
    link: "https://www.credential.net/example",
    skills: ["Deep Learning", "Neural Networks", "Computer Vision"]
  },
  {
    name: "Java SE 11 Developer",
    issuer: "Oracle",
    date: "2023",
    credentialId: "JAVA-345678",
    link: "https://catalog.oracle.com/example",
    skills: ["Java", "Object-Oriented Programming", "Algorithms"]
  }
];

const Certifications = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="text-base text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase">
            Professional Development
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Certifications & Achievements
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 lg:mx-auto">
            Continuous learning and professional certifications that validate my expertise.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <Award className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-500"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {cert.name}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                {cert.issuer}
              </p>
              
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                <Calendar className="w-4 h-4 mr-1" />
                <span>{cert.date}</span>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {cert.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-2 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;