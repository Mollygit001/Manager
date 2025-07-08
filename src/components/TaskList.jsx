import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onToggleCompletion, onEditTask, onDeleteTask }) => {
  if (tasks.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="neo-card text-center py-12"
      >
        <div className="text-6xl mb-4">📝</div>
        <h3 className="text-2xl font-bold text-black dark:text-white mb-2">
          NO TASKS FOUND
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          Create your first task or adjust your filters to see tasks here.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-4"
    >
      <AnimatePresence mode="popLayout">
        {tasks.map((task, index) => (
          <motion.div
            key={task.id}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <TaskItem
              task={task}
              onToggleCompletion={onToggleCompletion}
              onEditTask={onEditTask}
              onDeleteTask={onDeleteTask}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default TaskList;