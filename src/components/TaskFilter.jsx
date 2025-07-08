import React from 'react';
import { motion } from 'framer-motion';

const TaskFilter = ({ activeFilter, setActiveFilter, taskCounts }) => {
  const filters = [
    { key: 'all', label: 'ALL', color: 'bg-neo-blue' },
    { key: 'pending', label: 'PENDING', color: 'bg-neo-orange' },
    { key: 'completed', label: 'COMPLETED', color: 'bg-neo-green' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="mb-6"
    >
      <div className="flex flex-wrap gap-4">
        {filters.map((filter) => (
          <motion.button
            key={filter.key}
            onClick={() => setActiveFilter(filter.key)}
            className={`neo-button px-6 py-3 text-lg font-bold flex items-center space-x-2 ${
              activeFilter === filter.key
                ? `${filter.color} text-white shadow-neo-lg`
                : 'bg-white text-black hover:bg-gray-100'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>{filter.label}</span>
            <span className="bg-black text-white px-2 py-1 rounded-full text-sm">
              {taskCounts[filter.key]}
            </span>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default TaskFilter;