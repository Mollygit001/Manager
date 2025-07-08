import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Edit, Trash2, Calendar, Tag, AlertCircle, CheckCircle2 } from 'lucide-react';
import DeleteModal from './DeleteModal';

const TaskItem = ({ task, onToggleCompletion, onEditTask, onDeleteTask }) => {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'bg-red-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getPriorityIcon = (priority) => {
    switch (priority) {
      case 'high': return <AlertCircle className="w-4 h-4" />;
      case 'medium': return <AlertCircle className="w-4 h-4" />;
      case 'low': return <CheckCircle2 className="w-4 h-4" />;
      default: return null;
    }
  };

  const isOverdue = task.dueDate && new Date(task.dueDate) < new Date() && !task.completed;

  const handleDeleteConfirm = () => {
    onDeleteTask(task.id);
    setShowDeleteConfirm(false);
  };

  return (
    <motion.div
      layout
      className={`neo-card ${task.completed ? 'opacity-75' : ''} ${isOverdue ? 'border-red-500 bg-red-50 dark:bg-red-900/20' : ''
        }`}
      whileHover={{ scale: 1.01 }}
    >
      <div className="flex items-start space-x-4">
        <motion.button
          onClick={() => onToggleCompletion(task.id)}
          className={`w-6 h-6 rounded-full border-4 border-black flex items-center justify-center ${task.completed
              ? 'bg-neo-green text-black'
              : 'bg-white hover:bg-gray-100'
            }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {task.completed && <CheckCircle2 className="w-4 h-4" />}
        </motion.button>

        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h3 className={`text-xl font-bold ${task.completed
                ? 'line-through text-gray-500 dark:text-gray-400'
                : 'text-black dark:text-white'
              }`}>
              {task.title}
            </h3>

            <div className="flex items-center space-x-2">
              <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-bold text-white ${getPriorityColor(task.priority)}`}>
                {getPriorityIcon(task.priority)}
                <span>{task.priority?.toUpperCase()}</span>
              </div>

              <motion.button
                onClick={() => onEditTask(task)}
                className="p-2 text-sm text-black neo-button bg-neo-yellow"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Edit className="w-4 h-4" />
              </motion.button>

              <motion.button
                onClick={() => setShowDeleteConfirm(true)}
                className="p-2 text-sm text-white bg-red-500 neo-button"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Trash2 className="w-4 h-4" />
              </motion.button>
            </div>
          </div>

          {task.description && (
            <p className={`text-gray-600 dark:text-gray-300 mb-3 ${task.completed ? 'line-through' : ''
              }`}>
              {task.description}
            </p>
          )}

          <div className="flex flex-wrap items-center gap-3 text-sm">
            <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-400">
              <Calendar className="w-4 h-4" />
              <span>Created: {new Date(task.createdAt).toLocaleDateString()}</span>
            </div>

            {task.dueDate && (
              <div className={`flex items-center space-x-1 ${isOverdue ? 'text-red-500 font-bold' : 'text-gray-500 dark:text-gray-400'
                }`}>
                <Calendar className="w-4 h-4" />
                <span>Due: {new Date(task.dueDate).toLocaleDateString()}</span>
                {isOverdue && <span className="text-red-500">⚠️ OVERDUE</span>}
              </div>
            )}

            {task.tags && task.tags.length > 0 && (
              <div className="flex items-center space-x-2">
                <Tag className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                <div className="flex flex-wrap gap-1">
                  {task.tags.map((tag, index) => (
                    <span key={index} className="text-xs neo-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {showDeleteConfirm && (
        <DeleteModal
          taskTitle={task.title}
          onConfirm={handleDeleteConfirm}
          onCancel={() => setShowDeleteConfirm(false)}
        />
      )}
    </motion.div>
  );
};

export default TaskItem;