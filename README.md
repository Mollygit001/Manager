# Neo Brutalism Task Tracker

A beautiful, fully-featured personal task tracker built with React, Tailwind CSS, and Framer Motion. Features a stunning Neo Brutalism design with bold colors, chunky shadows, and smooth animations.

## 🚀 Features

### Core Functionality
- **Simple Login**: Store username in localStorage with smooth authentication flow
- **Task CRUD**: Create, read, update, and delete tasks with inline editing
- **Task Management**: Complete task information including title, description, creation date, and completion status
- **Smart Filtering**: Filter tasks by All, Completed, and Pending with live counts
- **Persistent Storage**: All data saved to localStorage for offline access

### Advanced Features
- **Search**: Real-time search through task titles, descriptions, and tags
- **Priority Levels**: High, Medium, Low priority with visual indicators
- **Due Dates**: Set and track task deadlines with overdue warnings
- **Tags System**: Organize tasks with custom tags
- **Dark Mode**: Toggle between light and dark themes
- **Responsive Design**: Optimized for mobile, tablet, and desktop

### Design & UX
- **Neo Brutalism**: Bold borders, bright colors, and high contrast design
- **Smooth Animations**: Framer Motion powered transitions and micro-interactions
- **Color Scheme**: Electric blues, hot pinks, lime greens, and vibrant oranges
- **Typography**: Clean, bold fonts with excellent readability
- **Accessibility**: High contrast ratios and keyboard navigation support

## 🎨 Design Philosophy

The app follows Neo Brutalism design principles:
- **Bold Visual Elements**: Thick borders, chunky shadows, and geometric shapes
- **High Contrast**: Vibrant colors with excellent readability
- **Flat Design**: Clean, minimal aesthetic without unnecessary decorations
- **Strong Typography**: Bold fonts that command attention
- **Consistent Spacing**: 8px grid system for perfect alignment

## 🛠️ Tech Stack

- **React** - Modern UI library with hooks
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Beautiful, customizable icons
- **Vite** - Fast build tool and development server
- **localStorage** - Client-side data persistence

## 📁 Project Structure

```
src/
├── components/
|   ├── DeleteModal.jsx     # Modal popup component for before deletion check
│   ├── Header.jsx          # Top navigation with user info and controls
│   ├── TaskForm.jsx        # Add/edit task modal form
│   ├── TaskList.jsx        # Task container with animations
│   ├── TaskItem.jsx        # Individual task component
│   ├── TaskFilter.jsx      # Filter tabs (All, Completed, Pending)
│   └── SearchBar.jsx       # Search input with real-time filtering
├── pages/
│   ├── LoginPage.jsx       # Authentication page
|   ├── index.js            # All component imports
│   └── DashboardPage.jsx   # Main app dashboard
├── utils/
│   ├── localStorage.js     # Data persistence helpers
│   └── sampleData.js       # Sample tasks for demo
├── App.jsx                 # Main app component
├── main.jsx               # React entry point
└── index.css              # Global styles and Neo Brutalism theme
```

## 🚦 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Mollygit001/TaskTaker.git
   cd TaskTaker
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## 🎯 Usage

### Getting Started
1. **Login**: Enter any username to access the app
2. **Add Tasks**: Click "ADD NEW TASK" to create your first task
3. **Manage Tasks**: Use the intuitive interface to edit, complete, or delete tasks
4. **Filter & Search**: Use the filter tabs and search bar to find specific tasks
5. **Customize**: Toggle dark mode and organize tasks with tags and priorities

### Sample Data
The app includes sample tasks on first run to demonstrate all features. You can delete these and add your own tasks.

### Data Persistence
All data is automatically saved to your browser's localStorage:
- User preferences (username, dark mode)
- All tasks and their properties
- Filter and search states

## 🌟 Key Features Explained

### Task Management
- **Create**: Add tasks with title, description, priority, due date, and tags
- **Edit**: Inline editing or modal form for comprehensive updates
- **Complete**: One-click completion with visual feedback
- **Delete**: Confirmation dialog prevents accidental deletions

### Organization
- **Priorities**: Visual indicators for High (red), Medium (yellow), Low (green)
- **Tags**: Custom tags for categorization and quick filtering
- **Due Dates**: Calendar picker with overdue warnings
- **Search**: Real-time search across all task properties

### Visual Design
- **Neo Brutalism**: Bold, confident design that stands out
- **Responsive**: Looks great on all devices
- **Animations**: Smooth transitions enhance user experience
- **Dark Mode**: Full dark theme with consistent styling

## 🎨 Color Palette

- **Primary Blue**: #0066FF - Main actions and highlights
- **Hot Pink**: #FF0066 - Secondary actions and accents
- **Lime Green**: #66FF00 - Success states and completed tasks
- **Vibrant Orange**: #FF6600 - Warnings and pending tasks
- **Electric Yellow**: #FFFF00 - Tags and special highlights
- **Deep Purple**: #6600FF - Additional accents

## 📱 Responsive Design

- **Mobile**: < 768px - Stacked layout, touch-friendly controls
- **Tablet**: 768px - 1024px - Balanced grid, optimized for touch
- **Desktop**: > 1024px - Full feature layout with sidebars

## 🔧 Customization

The app is built with customization in mind:

- **Colors**: Modify the Neo Brutalism color scheme in `tailwind.config.js`
- **Animations**: Adjust Framer Motion settings in individual components
- **Layout**: Responsive breakpoints can be modified in Tailwind classes
- **Features**: Add new task properties or filtering options easily

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **Design Inspiration**: Neo Brutalism web design movement
- **Icons**: Lucide React icon library
- **Animation**: Framer Motion for smooth interactions
- **Styling**: Tailwind CSS for rapid development

---

Built with ❤️ by Arshad zama