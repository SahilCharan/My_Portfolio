import React from 'react';
import { FileText, ArrowRight, Code2, Users, Timer, CheckCircle } from 'lucide-react';

const caseStudies = [
  {
    title: "Healthcare Chatbot Implementation",
    client: "Medical Technology Startup",
    duration: "3 months",
    challenge: "Develop an AI-powered chatbot for medical consultations with high accuracy and HIPAA compliance.",
    solution: "Implemented GPT-based NLP with custom medical knowledge base and strict security protocols.",
    impact: [
      "Reduced patient wait times by 60%",
      "Achieved 95% accuracy in preliminary diagnoses",
      "Handled 1000+ daily consultations"
    ],
    technologies: ["Python", "OpenAI API", "React", "Node.js", "MongoDB"],
    link: "/case-study/healthcare-chatbot"
  },
  {
    title: "E-commerce Platform Optimization",
    client: "Retail Giant",
    duration: "4 months",
    challenge: "Scale the existing e-commerce platform to handle 10x traffic during peak seasons.",
    solution: "Implemented microservices architecture with caching and load balancing strategies.",
    impact: [
      "Improved response time by 70%",
      "Reduced infrastructure costs by 40%",
      "Zero downtime during Black Friday"
    ],
    technologies: ["Java", "Spring Boot", "Redis", "AWS", "Docker"],
    link: "/case-study/ecommerce-optimization"
  }
];

const CaseStudies = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="text-base text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase">
            Case Studies
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Project Deep Dives
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 lg:mx-auto">
            Detailed analysis of complex projects, challenges faced, and solutions implemented.
          </p>
        </div>

        <div className="mt-12 space-y-12">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {study.title}
                  </h3>
                  <FileText className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                    <Users className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                    <span>{study.client}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                    <Timer className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                    <span>{study.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                    <Code2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                    <span>{study.technologies.length} Technologies</span>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Challenge</h4>
                    <p className="text-gray-600 dark:text-gray-300">{study.challenge}</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Solution</h4>
                    <p className="text-gray-600 dark:text-gray-300">{study.solution}</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Impact</h4>
                    <ul className="space-y-2">
                      {study.impact.map((item, i) => (
                        <li key={i} className="flex items-center text-gray-600 dark:text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={study.link}
                    className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-500"
                  >
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4 ml-1" />
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

export default CaseStudies;