import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import { getUser } from './utils/localStorage';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedUser = getUser();
    if (savedUser) {
      setUser(savedUser);
    }
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-neo-blue to-neo-pink">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-white rounded-full border-t-transparent"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen transition-colors duration-300 bg-white dark:bg-gray-900">
      {user ? (
        <DashboardPage user={user} setUser={setUser} />
      ) : (
        <LoginPage setUser={setUser} />
      )}
    </div>
  );
}

export default App;