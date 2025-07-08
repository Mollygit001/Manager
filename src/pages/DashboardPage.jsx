import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Header, TaskForm, TaskList, TaskFilter, SearchBar } from './'
import { getTasks, saveTasks,saveUser, getUser } from '../utils/localStorage';
import { generateSampleTasks } from '../utils/sampleData';

const DashboardPage = ({ user, setUser }) => {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showTaskForm, setShowTaskForm] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showSessionModal, setShowSessionModal] = useState(false);
  const [logoutTimer, setLogoutTimer] = useState(null);
  const [warningTimer, setWarningTimer] = useState(null);


  useEffect(() => {
    const raw = localStorage.getItem('taskTracker_user');
    if (!raw) return;

    const data = JSON.parse(raw);
    const timeLeft = data.expiry - Date.now();

    if (timeLeft <= 0) {
      handleLogout();
    } else {
      // 1 minute before expiry, show modal
      const warnTimeout = setTimeout(() => {
        setShowSessionModal(true);
      }, timeLeft - 60 * 1000);

      // At expiry, logout
      const logoutTimeout = setTimeout(() => {
        handleLogout();
      }, timeLeft);

      setWarningTimer(warnTimeout);
      setLogoutTimer(logoutTimeout);
    }

    return () => {
      clearTimeout(warningTimer);
      clearTimeout(logoutTimer);
    };
  }, []);

  useEffect(() => {
    const savedTasks = getTasks();
    if (savedTasks && savedTasks.length > 0) {
      setTasks(savedTasks);
    } else {
      // Generate sample tasks if none exist
      const sampleTasks = generateSampleTasks();
      setTasks(sampleTasks);
      saveTasks(sampleTasks);
    }
  }, []);

  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(savedDarkMode);
    if (savedDarkMode) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  useEffect(() => {
    let filtered = [...tasks];

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(task =>
        task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        task.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        task.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Apply status filter
    if (activeFilter === 'completed') {
      filtered = filtered.filter(task => task.completed);
    } else if (activeFilter === 'pending') {
      filtered = filtered.filter(task => !task.completed);
    }

    setFilteredTasks(filtered);
  }, [tasks, activeFilter, searchTerm]);

  const handleLogout = () => {
    localStorage.removeItem('taskTracker_user');
    setUser(null); 
    clearTimeout(logoutTimer);
    clearTimeout(warningTimer);
  };


  const addTask = (newTask) => {
    const taskWithId = {
      ...newTask,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      completed: false,
    };
    const updatedTasks = [...tasks, taskWithId];
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
    setShowTaskForm(false);
  };

  const updateTask = (taskId, updates) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, ...updates } : task
    );
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
    setEditingTask(null);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  const toggleTaskCompletion = (taskId) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const taskCounts = {
    all: tasks.length,
    completed: tasks.filter(task => task.completed).length,
    pending: tasks.filter(task => !task.completed).length,
  };

  return (
    <div className="min-h-screen transition-colors duration-300 bg-white dark:bg-gray-900">
      <Header
        user={user}
        setUser={setUser}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />

      <div className="max-w-6xl px-4 py-8 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="mb-2 text-4xl font-black text-black dark:text-white">
            YOUR TASKS
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Stay organized and get things done! 🚀
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <SearchBar
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />

            <TaskFilter
              activeFilter={activeFilter}
              setActiveFilter={setActiveFilter}
              taskCounts={taskCounts}
            />

            <TaskList
              tasks={filteredTasks}
              onToggleCompletion={toggleTaskCompletion}
              onEditTask={setEditingTask}
              onDeleteTask={deleteTask}
            />
          </div>

          <div className="space-y-6">
            <motion.button
              onClick={() => setShowTaskForm(true)}
              className="w-full py-4 text-xl neo-button-success"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              + ADD NEW TASK
            </motion.button>

            <div className="neo-card">
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                TASK STATS
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Total Tasks:</span>
                  <span className="font-bold text-black dark:text-white">{taskCounts.all}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Completed:</span>
                  <span className="font-bold text-neo-green">{taskCounts.completed}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Pending:</span>
                  <span className="font-bold text-neo-orange">{taskCounts.pending}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Progress:</span>
                  <span className="font-bold text-neo-blue">
                    {taskCounts.all > 0 ? Math.round((taskCounts.completed / taskCounts.all) * 100) : 0}%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showTaskForm && (
        <TaskForm
          onAddTask={addTask}
          onClose={() => setShowTaskForm(false)}
        />
      )}

      {editingTask && (
        <TaskForm
          task={editingTask}
          onUpdateTask={(updates) => updateTask(editingTask.id, updates)}
          onClose={() => setEditingTask(null)}
        />
      )}

      {showSessionModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="max-w-md p-6 neo-card">
            <h2 className="mb-2 text-xl font-bold text-black dark:text-white">
              Session Expiring Soon
            </h2>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              You will be logged out automatically in 1 minute due to inactivity.
            </p>
            <button
              className="text-white bg-blue-600 neo-button"
              onClick={() => {
                setShowSessionModal(false);
                saveUser(user); // Reset timer
                window.location.reload(); // Refresh to re-initialize timers
              }}
            >
              Stay Logged In
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardPage;