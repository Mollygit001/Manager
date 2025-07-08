import React from 'react';
import { motion } from 'framer-motion';
import { LogOut, Moon, Sun, User } from 'lucide-react';
import { clearUser } from '../utils/localStorage';

const Header = ({ user, setUser, isDarkMode, toggleDarkMode }) => {
  const handleLogout = () => {
    clearUser();
    setUser(null);
  };

  return (
    <header className="bg-gradient-to-r from-neo-blue to-neo-pink shadow-neo-lg border-b-4 border-black">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-4"
          >
            <div className="w-12 h-12 bg-neo-yellow border-4 border-black rounded-full flex items-center justify-center shadow-neo">
              <User className="w-6 h-6 text-black" />
            </div>
            <div>
              <h2 className="text-xl font-black text-white">
                WELCOME, {user.username.toUpperCase()}!
              </h2>
              <p className="text-white/80 font-medium">
                Let's crush those tasks! 💪
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-4"
          >
            <motion.button
              onClick={toggleDarkMode}
              className="neo-button bg-neo-yellow text-black hover:bg-yellow-400 p-3"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.button>

            <motion.button
              onClick={handleLogout}
              className="neo-button-secondary flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <LogOut className="w-5 h-5" />
              <span>LOGOUT</span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Header;