import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, GitFork, Star, GitPullRequest, Code2 } from 'lucide-react';
import GitHubCalendar from 'react-github-calendar';

const GitHubStats = () => {
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const username = 'SahilCharan';

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
        
        if (!response.ok) {
          throw new Error(`GitHub API request failed with status ${response.status}`);
        }
        
        const data = await response.json();
        setRepos(data);
      } catch (error: any) {
        const errorMessage = error.message || 'Failed to fetch GitHub data';
        console.error('Error fetching GitHub data:', errorMessage);
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  if (loading) {
    return (
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-red-600 dark:text-red-400 text-lg">
              {error}
            </p>
            <button 
              onClick={() => window.location.reload()}
              className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
            >
              Retry
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="text-base text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase">
            GitHub Activity
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Open Source Contributions
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 lg:mx-auto">
            My recent activity and contributions on GitHub
          </p>
        </div>

        <div className="mt-12">
          <div className="mb-12 flex justify-center">
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <GitHubCalendar 
                username={username}
                colorScheme="light"
                fontSize={16}
                blockSize={12}
                blockMargin={5}
              />
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {repos.map((repo: any) => (
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Github className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mr-2" />
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {repo.name}
                    </h3>
                  </div>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300"
                  >
                    <Code2 className="w-5 h-5" />
                  </a>
                </div>

                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                  {repo.description || 'No description available'}
                </p>

                <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                  {repo.language && (
                    <div className="flex items-center">
                      <span className="w-3 h-3 rounded-full bg-indigo-500 mr-1"></span>
                      <span>{repo.language}</span>
                    </div>
                  )}
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    <span>{repo.stargazers_count}</span>
                  </div>
                  <div className="flex items-center">
                    <GitFork className="w-4 h-4 mr-1" />
                    <span>{repo.forks_count}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubStats;