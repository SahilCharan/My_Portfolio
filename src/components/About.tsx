import React from 'react';
import { CheckCircle2, Code, Monitor, Server, Database, Cloud, GitBranch, Lightbulb, hat-glasses } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Java', category: 'Backend', level: 90 },
    { name: 'SpringBoot', category: 'Backend', level: 85 },
    { name: 'JavaScript/TypeScript', category: 'Frontend', level: 90 },
    { name: 'React.js', category: 'Frontend', level: 88 },
    { name: 'Node.js', category: 'Backend', level: 85 },
    { name: 'Python', category: 'AI/ML', level: 92 },
    { name: 'Machine Learning', category: 'AI/ML', level: 85 },
    { name: 'Deep Learning', category: 'AI/ML', level: 80 },
    { name: 'Computer Vision', category: 'AI/ML', level: 75 },
    { name: 'Natural Language Processing', category: 'AI/ML', level: 78 },
    { name: 'MongoDB', category: 'Database', level: 80 },
    { name: 'PostgreSQL', category: 'Database', level: 75 },
    { name: 'AWS', category: 'Cloud', level: 70 },
    { name: 'Docker', category: 'DevOps', level: 70 },
    { name: 'Git', category: 'DevOps', level: 85 },
    { name: 'CI/CD', category: 'DevOps', level: 75 },
    { name: 'RESTful APIs', category: 'Backend', level: 90 },
    { name: 'GraphQL', category: 'Backend', level: 70 },
    { name: 'LLMs', category: 'GenAI', level: 80},
    { name: 'LangChain', category: 'GenAI', level: 75},
    { name: 'n8n', category: 'GenAI', level: 100},
    { name: 'Prompt Engineering', category: 'GenAI', level: 100},
    { name: 'RAG', category: 'GenAI', level: 80},
    { name: 'DSA', category: 'Backend', level: 80}
    
  ];

  const skillCategories = [
    { name: 'Frontend', icon: <Monitor className="h-6 w-6" />, color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' },
    { name: 'Backend', icon: <Server className="h-6 w-6" />, color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' },
    { name: 'Database', icon: <Database className="h-6 w-6" />, color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' },
    { name: 'DevOps', icon: <GitBranch className="h-6 w-6" />, color: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200' },
    { name: 'Cloud', icon: <Cloud className="h-6 w-6" />, color: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200' },
    { name: 'AI/ML', icon: <Lightbulb className="h-6 w-6" />, color: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' },
    { name: 'GenAI', icon: <hat-glasses className="h-6 w-6" />, color: 'bg-indigo-100 text-yellow-800 dark:bg-red-900 dark:text-pink-200' }
  ];

  const experiences = [
    {
      role: 'Founder - AI ENGINEER',
      company: 'Dwary Intech',
      description: 'Developed and deployed 12+ custom LLM-powered automation tools with Python/n8n/OpenAI, reducing manual HR and scraping tasks by up to 50%. Built recruiter assistant pipelines using RAG/LangChain, increasing candidate evaluation efficiency by 70% for 5+ enterprise clients. Delivered GenAI to 10+ clients, improving individual task speeds by 50–60%. Architected internal tools in TypeScript/React/Supabase, enabling real-time workflow tracking for teams of 10+ users.Mentored 4+ junior devs and managed 15+ freelance client projects, achieving 100% on-time delivery and high client satisfaction.'
    },
    {
      role: 'Software Developer Intern',
      company: 'CourseKhoj',
      //period: '2022 - Present',
      description: 'Developed a scalable social media analytics platform using Java and SQL, boosting user engagement by 60%. Optimized 30+ reusable backend components, increasing data processing efficiency by 120%. Led a team of 3 developers, coordinating feature releases that improved delivery speed by 30%. Integrated APIs and implemented CI/CD pipelines, reducing deployment time by 20%'
    },
    {
      role: 'Editorial Analytics Intern',
      company: 'ABP News',
      //period: '2021 - 2022',
      description: 'Automated content analysis for editorial workflows, increasing online readership by 25%. Built social media metrics tools that boosted engagement by 15%. Applied data analytics to optimize article strategy, improving engagement metrics by 20%.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="text-base text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase">About Me</p>
          <h2 className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            My Journey & Expertise
          </h2>
          <div className="mt-4 max-w-3xl mx-auto">
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm a passionate Full Stack Developer and AI enthusiast with a strong foundation in building scalable web applications and implementing AI solutions.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-12">
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  With expertise in both frontend and backend development and Machine Learning, I create seamless user experiences while ensuring robust functionality. My passion lies in creating solutions that leverage the power of modern web technologies and artificial intelligence to solve real-world problems.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Professional Experience</h3>
                <div className="space-y-10">
                  {experiences.map((exp, index) => (
                    <div key={index} className="relative pl-8 border-l-2 border-indigo-200 dark:border-indigo-800">
                      <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
                        <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                      </div>
                      <div>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                          <h4 className="text-xl font-bold text-gray-900 dark:text-white">{exp.role}</h4>
                          <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">{exp.period}</span>
                        </div>
                        <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-3">{exp.company}</p>
                        <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Skills & Technologies</h3>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {skillCategories.map((category, idx) => (
                  <div key={idx} className={`flex items-center p-3 rounded-lg ${category.color}`}>
                    {category.icon}
                    <span className="ml-2 font-medium">{category.name}</span>
                  </div>
                ))}
              </div>
              
              <div className="space-y-6">
                {skillCategories.map((category) => (
                  <div key={category.name} className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                      {category.icon}
                      <span className="ml-2">{category.name}</span>
                    </h4>
                    <div className="space-y-3">
                      {skills
                        .filter((skill) => skill.category === category.name)
                        .map((skill, idx) => (
                          <div key={idx} className="space-y-1">
                            <div className="flex justify-between">
                              <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                              <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                            </div>
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                              <div 
                                className="bg-indigo-600 dark:bg-indigo-500 h-2.5 rounded-full skill-progress" 
                                style={{ width: `${skill.level}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
