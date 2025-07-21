import { type Project } from './index';

export const taskManagerProData: Project = {
  id: "task-manager-pro",
  name: "Task Manager Pro",
  description: "A comprehensive task management application with real-time collaboration, built with React and Node.js featuring advanced project organization and team workflows.",
  longDescription: "Task Manager Pro is a full-stack application designed for modern teams who need powerful project management capabilities. It features real-time collaboration, advanced filtering, deadline tracking, and integration with popular development tools. The application uses WebSocket connections for instant updates and includes a robust notification system.",
  
  // Custom sorting order
  index: 2,
  
  // URLs and links
  githubUrl: "https://github.com/adarsh3699/Task-Manager-Pro",
  liveUrl: "https://task-manager-pro-demo.vercel.app",
  
  // Technical details
  technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Express", "JWT"],
  primaryLanguage: {
    name: "JavaScript",
    color: "bg-yellow-500"
  },
  
  // Classification
  category: "Web",
  isPinned: true,
  featured: true,
  
  // Dates
  createdAt: "2024-11-01",

  // All README content organized in one place
  readmeContent: {
    // Core project features
    features: [
      "Real-time collaboration with Socket.io",
      "Advanced task filtering and search",
      "Team management and permissions",
      "Deadline tracking with notifications",
      "Integration with development tools",
      "Responsive design for all devices",
      "Export tasks to various formats",
      "Custom task templates"
    ],
    
    // Technical implementation details
    techDetails: {
      framework: "React",
      styling: "CSS Modules",
      deployment: "Docker + AWS",
      performance: {
        lighthouse: 92,
        loadTime: "< 1.5s",
        coreWebVitals: "Good"
      }
    },
    
    // Installation instructions
    installation: {
      prerequisites: [
        "Node.js (v16 or higher)",
        "MongoDB (v5.0 or higher)",
        "Redis for caching",
        "Docker (optional)"
      ],
      steps: [
        "Clone the repository: git clone https://github.com/adarsh3699/Task-Manager-Pro.git",
        "Navigate to project directory: cd Task-Manager-Pro",
        "Install dependencies: npm install",
        "Set up environment variables: cp .env.example .env",
        "Start MongoDB and Redis services",
        "Run database migrations: npm run migrate",
        "Start development server: npm run dev"
      ]
    },
    
    // Environment variables
    envVariables: [
      {
        name: "DATABASE_URL",
        description: "MongoDB connection string",
        required: true
      },
      {
        name: "REDIS_URL",
        description: "Redis connection string for caching",
        required: true
      },
      {
        name: "JWT_SECRET",
        description: "Secret key for JWT token generation",
        required: true
      },
      {
        name: "SOCKET_PORT",
        description: "Port for Socket.io server",
        required: false
      }
    ],
    
    // All custom sections including contributing and license
    customSections: [
      {
        title: "Real-time Features",
        icon: "⚡",
        content: "Task Manager Pro uses Socket.io for real-time collaboration. Multiple users can work on the same project simultaneously with instant updates for task changes, comments, and status updates."
      },
      {
        title: "API Integration",
        icon: "🔌",
        content: "The application provides a RESTful API for third-party integrations. Connect with popular tools like Slack, Discord, or GitHub to streamline your workflow."
      },
      {
        title: "Team Management",
        icon: "👥",
        content: "Comprehensive team management with role-based permissions, user invitations, and project access controls. Admins can manage team members and assign different permission levels."
      },
      {
        title: "Contributing",
        icon: "🤝",
        content: "We welcome contributions! Please read our contributing guidelines before submitting PRs. Make sure to follow our coding standards and include tests for new features."
      },
      {
        title: "License",
        icon: "📄",
        content: "This project is licensed under the MIT License. See the LICENSE file for more information."
      }
    ],
  }
}; 