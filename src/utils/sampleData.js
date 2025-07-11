export const generateSampleTasks = () => {
  const sampleTasks = [
    {
      id: '1',
      title: 'Complete React Project',
      description: 'Finish the task tracker app with all features including dark mode, animations, and responsive design.',
      priority: 'high',
      dueDate: '2024-01-15',
      tags: ['coding', 'react', 'urgent'],
      completed: false,
      createdAt: new Date('2024-01-10').toISOString(),
    },
    {
      id: '2',
      title: 'Weekly Grocery Shopping',
      description: 'Buy groceries for the week including fresh vegetables, fruits, and pantry essentials.',
      priority: 'medium',
      dueDate: '2024-01-12',
      tags: ['shopping', 'food', 'weekly'],
      completed: true,
      createdAt: new Date('2024-01-08').toISOString(),
    },
    {
      id: '3',
      title: 'Morning Workout',
      description: '30-minute cardio session and strength training at the gym.',
      priority: 'high',
      dueDate: '2024-01-11',
      tags: ['fitness', 'health', 'morning'],
      completed: true,
      createdAt: new Date('2024-01-09').toISOString(),
    },
    {
      id: '4',
      title: 'Read Chapter 5',
      description: 'Continue reading "The Psychology of Programming" and take notes on key concepts.',
      priority: 'low',
      dueDate: '2024-01-14',
      tags: ['reading', 'education', 'programming'],
      completed: false,
      createdAt: new Date('2024-01-07').toISOString(),
    },
    {
      id: '5',
      title: 'Team Meeting Prep',
      description: 'Prepare slides and agenda for the weekly team standup meeting.',
      priority: 'medium',
      dueDate: '2024-01-13',
      tags: ['work', 'meeting', 'preparation'],
      completed: false,
      createdAt: new Date('2024-01-09').toISOString(),
    },
    {
      id: '6',
      title: 'Clean Home Office',
      description: 'Organize desk, file documents, and clean the workspace for better productivity.',
      priority: 'low',
      dueDate: '2024-01-16',
      tags: ['cleaning', 'organization', 'productivity'],
      completed: false,
      createdAt: new Date('2024-01-06').toISOString(),
    },
    {
      id: '7',
      title: 'Plan Weekend Trip',
      description: 'Research destinations, book accommodation, and create itinerary for the weekend getaway.',
      priority: 'medium',
      dueDate: '2024-01-18',
      tags: ['travel', 'planning', 'weekend'],
      completed: false,
      createdAt: new Date('2024-01-05').toISOString(),
    },
    {
      id: '8',
      title: 'Update Portfolio Website',
      description: 'Add new projects, update bio, and improve the overall design and user experience.',
      priority: 'high',
      dueDate: '2024-01-20',
      tags: ['portfolio', 'web-development', 'design'],
      completed: false,
      createdAt: new Date('2024-01-04').toISOString(),
    },
  ];

  return sampleTasks;
};