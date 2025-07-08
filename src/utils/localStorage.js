// User management
export const saveUser = (user) => {
  const data = {
    value: user,
    expiry: Date.now() + 15 * 60 * 1000, // 15 minutes in ms
  };
  localStorage.setItem('taskTracker_user', JSON.stringify(data));
};

export const getUser = () => {
  const raw = localStorage.getItem('taskTracker_user');
  if (!raw) return null;

  try {
    const data = JSON.parse(raw);
    if (Date.now() > data.expiry) {
      localStorage.removeItem('taskTracker_user');
      return null;
    }
    return data.value;
  } catch {
    localStorage.removeItem('taskTracker_user');
    return null;
  }
};

export const clearUser = () => {
  localStorage.removeItem('taskTracker_user');
};

// Task management
export const saveTasks = (tasks) => {
  localStorage.setItem('taskTracker_tasks', JSON.stringify(tasks));
};

export const getTasks = () => {
  const tasks = localStorage.getItem('taskTracker_tasks');
  return tasks ? JSON.parse(tasks) : [];
};

export const clearTasks = () => {
  localStorage.removeItem('taskTracker_tasks');
};

// Dark mode
export const saveDarkMode = (isDarkMode) => {
  localStorage.setItem('taskTracker_darkMode', JSON.stringify(isDarkMode));
};

export const getDarkMode = () => {
  const darkMode = localStorage.getItem('taskTracker_darkMode');
  return darkMode ? JSON.parse(darkMode) : false;
};