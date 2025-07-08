import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, LogIn } from 'lucide-react';
import { saveUser } from '../utils/localStorage';
import Footer from '../components/Footer';

const LoginPage = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (username.trim()) {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate loading

      const userData = {
        username: username.trim(),
        loginTime: new Date().toISOString(),
      };

      saveUser(userData);
      setUser(userData);
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-br from-neo-blue via-neo-pink to-neo-orange">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-md"
      >
        <div className="bg-white neo-card dark:bg-gray-800">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-8 text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 mb-4 border-4 border-black rounded-full bg-neo-yellow shadow-neo">
              <User className="w-8 h-8 text-black" />
            </div>
            <h1 className="mb-2 text-3xl font-black text-black dark:text-white">
              TASK TRACKER
            </h1>
            <p className="text-lg font-medium text-gray-600 dark:text-gray-300">
              Enter your username to get started
            </p>
          </motion.div>

          <motion.form
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            onSubmit={handleLogin}
            className="p-4 space-y-6"
          >
            <div>
              <label className="block mb-2 text-sm font-bold tracking-wide text-black uppercase dark:text-white">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="neo-input dark:bg-gray-700 dark:text-white"
                placeholder="Enter your username..."
                required
                disabled={isLoading}
              />
            </div>

            <motion.button
              type="submit"
              disabled={isLoading || !username.trim()}
              className={`neo-button-primary w-full flex items-center justify-center space-x-2 ${isLoading || !username.trim() ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isLoading ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-5 h-5 border-2 border-white rounded-full border-t-transparent"
                />
              ) : (
                <>
                  <LogIn className="w-5 h-5" />
                  <span>LOGIN</span>
                </>
              )}
            </motion.button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-6 text-center"
          >
            <p className="text-sm text-gray-500 dark:text-gray-400">
              No account needed! Just enter any username to start tracking your tasks.
            </p>
          </motion.div>
        </div>
      </motion.div>
    <Footer />
    </div>
  );
};

export default LoginPage;