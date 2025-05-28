import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Abhilasha",
    role: "Co-Founder of NaameKaze + HR recuriter at Artech Solution ",
    image: "/image.png?auto=compress&cs=tinysrgb&w=1260&h=750",
    content: "Kumar's contributions to our machine learning pipeline were invaluable. His attention to detail and commitment to clean, maintainable code significantly improved our development workflow.",
    rating: 5
  },
  {
    name: "Jayesh Rishi",
    role: "Engineering Manager at NaameKaze",
    image: "/jayesh.png?auto=compress&cs=tinysrgb&w=1260&h=750",
    content: "Kumar's ability to quickly grasp complex problems and deliver elegant solutions is remarkable. His work on our AI-driven analytics platform demonstrated both technical excellence and innovative thinking.",
    rating: 5
  },
  {
    name: "Saurabh Kumar",
    role: "Lead Developer at NaameKaze + Engineering Lead at IND-AIR",
    image: "/shukla.png?auto=compress&cs=tinysrgb&w=1260&h=750",
    content: "Working with Kumar was a fantastic experience. His deep understanding of both frontend and backend technologies, combined with his AI expertise, brought unique perspectives to our projects.",
    rating: 5
  },
  
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-base text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase">
            Testimonials
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            What People Say
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300">
            Feedback from colleagues and clients I've had the pleasure of working with.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="absolute -top-4 left-8">
                <Quote className="w-8 h-8 text-indigo-500 dark:text-indigo-400" />
              </div>
              
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex-shrink-0">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              <blockquote className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                "{testimonial.content}"
              </blockquote>

              <div className="flex items-center">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;