import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Code, Coffee, Book, Gamepad2 } from 'lucide-react';

const activities = [
  { icon: <Code className="w-5 h-5" />, text: "Building awesome web apps" },
  { icon: <Coffee className="w-5 h-5" />, text: "Learning new technologies" },
  { icon: <Book className="w-5 h-5" />, text: "Reading tech blogs" },
  { icon: <Gamepad2 className="w-5 h-5" />, text: "Playing with new frameworks" },
  { icon: <Gamepad2 className="w-5 h-5" />, text: "Listening music" }
];

export default function NowPlaying() {
  const [currentActivity, setCurrentActivity] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentActivity((prev) => (prev + 1) % activities.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 max-w-sm">
      <div className="flex items-center space-x-3">
        <div className="flex-shrink-0">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-3 h-3 bg-green-500 rounded-full"
          />
        </div>
        <motion.div
          key={currentActivity}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="flex items-center space-x-2"
        >
          {activities[currentActivity].icon}
          <span className="text-sm text-gray-700 dark:text-gray-300">
            {activities[currentActivity].text}
          </span>
        </motion.div>
      </div>
    </div>
  );
}