import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

const blogPosts = [
  {
    title: "Building Scalable Web Applications with React and TypeScript",
    date: "2024-03-15",
    readTime: "8 min read",
    excerpt: "Learn how to create maintainable and scalable web applications using React and TypeScript. We'll cover best practices, common pitfalls, and advanced patterns.",
    content: "# Building Scalable Web Applications\n\nIn this post, we'll explore...",
    tags: ["React", "TypeScript", "Web Development"]
  },
  {
    title: "Implementing Machine Learning Models in Production",
    date: "2024-03-10",
    readTime: "12 min read",
    excerpt: "A comprehensive guide to deploying ML models in production environments. From model serving to monitoring and maintenance.",
    content: "# ML Models in Production\n\nDeploying machine learning models...",
    tags: ["Machine Learning", "DevOps", "Python"]
  },
  {
    title: "Modern Backend Architecture with Spring Boot",
    date: "2024-03-05",
    readTime: "10 min read",
    excerpt: "Discover how to design and implement robust backend systems using Spring Boot. Including microservices, security, and performance optimization.",
    content: "# Modern Backend Architecture\n\nIn this article...",
    tags: ["Java", "Spring Boot", "Microservices"]
  }
];

const Blog = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="text-base text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase">
            Technical Blog
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Latest Articles
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 lg:mx-auto">
            Sharing insights, experiences, and knowledge about software development and technology.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-4 mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <time>{post.date}</time>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <button className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-500">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;