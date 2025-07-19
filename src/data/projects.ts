export interface Project {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  url?: string;
  githubUrl?: string;
  liveUrl?: string;
  technologies: string[];
  primaryLanguage: {
    name: string;
    color: string;
  };
  stats: {
    stars: number;
    forks: number;
    watchers?: number;
  };
  isPinned: boolean;
  createdAt: string;
  updatedAt: string;
  category: "Web" | "Mobile" | "Desktop" | "Library" | "Tool" | "Game" | "AI/ML" | "API" | "Blockchain" | "Other";
  featured?: boolean;
  images?: string[];
}

export const projects: Project[] = [
  {
    id: "bhemu-social-platform",
    name: "Bhemu - Social Platform",
    description: "A comprehensive social media platform with real-time chat, posts, stories, and community features.",
    longDescription: "Bhemu is a modern social media platform built with React.js and Node.js. It features real-time messaging, post sharing, story creation, user profiles, and community building tools. The platform includes advanced features like dark/light themes, responsive design, and optimized performance.",
    githubUrl: "https://github.com/adarsh3699/Bhemu.git",
    liveUrl: "https://www.bhemu.me",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io", "JWT", "Cloudinary"],
    primaryLanguage: {
      name: "JavaScript",
      color: "bg-yellow-500"
    },
    stats: {
      stars: 45,
      forks: 12,
      watchers: 8
    },
    isPinned: true,
    createdAt: "2023-01-15",
    updatedAt: "2024-12-10",
    category: "Web",
    featured: true
  },
  {
    id: "portfolio-v2",
    name: "Portfolio Website v2",
    description: "Modern portfolio website built with Next.js, TypeScript, and Tailwind CSS with dark mode support.",
    longDescription: "A responsive and modern portfolio website showcasing my projects, skills, and experience. Built with Next.js 14, TypeScript, and Tailwind CSS. Features include GitHub integration, contact forms, and optimized performance.",
    githubUrl: "https://github.com/adarsh3699/My-New-Portfolio",
    liveUrl: "https://adarsh-portfolio-v2.vercel.app",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Vercel"],
    primaryLanguage: {
      name: "TypeScript",
      color: "bg-blue-500"
    },
    stats: {
      stars: 28,
      forks: 8,
      watchers: 5
    },
    isPinned: true,
    createdAt: "2024-11-01",
    updatedAt: "2024-12-15",
    category: "Web",
    featured: true
  },
  {
    id: "chat-app-realtime",
    name: "Real-time Chat Application",
    description: "A real-time chat application with rooms, private messaging, and file sharing capabilities.",
    longDescription: "Full-featured chat application with real-time messaging using Socket.io. Includes features like chat rooms, private messaging, file sharing, emoji support, and user presence indicators.",
    githubUrl: "https://github.com/adarsh3699/chat-app",
    liveUrl: "https://chat-app-adarsh.herokuapp.com",
    technologies: ["React.js", "Node.js", "Socket.io", "Express.js", "MongoDB"],
    primaryLanguage: {
      name: "JavaScript",
      color: "bg-yellow-500"
    },
    stats: {
      stars: 35,
      forks: 15,
      watchers: 7
    },
    isPinned: true,
    createdAt: "2023-06-20",
    updatedAt: "2024-08-22",
    category: "Web"
  },
  {
    id: "task-manager-app",
    name: "Task Manager Pro",
    description: "A comprehensive task management application with team collaboration and project tracking.",
    longDescription: "Advanced task management system with features like project organization, team collaboration, deadline tracking, file attachments, and progress analytics. Built with modern React patterns and state management.",
    githubUrl: "https://github.com/adarsh3699/task-manager",
    liveUrl: "https://taskmanager-pro-adarsh.netlify.app",
    technologies: ["React.js", "Redux", "Node.js", "PostgreSQL", "JWT", "Material-UI"],
    primaryLanguage: {
      name: "JavaScript",
      color: "bg-yellow-500"
    },
    stats: {
      stars: 22,
      forks: 9,
      watchers: 4
    },
    isPinned: true,
    createdAt: "2023-09-12",
    updatedAt: "2024-10-05",
    category: "Web"
  },
  {
    id: "weather-dashboard",
    name: "Weather Dashboard",
    description: "Beautiful weather dashboard with forecasts, maps, and location-based weather information.",
    technologies: ["React.js", "OpenWeather API", "Chart.js", "Tailwind CSS"],
    primaryLanguage: {
      name: "JavaScript",
      color: "bg-yellow-500"
    },
    stats: {
      stars: 18,
      forks: 6,
      watchers: 3
    },
    isPinned: false,
    createdAt: "2023-04-08",
    updatedAt: "2024-06-15",
    category: "Web"
  },
  {
    id: "expense-tracker",
    name: "Smart Expense Tracker",
    description: "Personal finance management app with budget tracking, expense categorization, and analytics.",
    technologies: ["React Native", "Firebase", "Chart.js", "React Navigation"],
    primaryLanguage: {
      name: "JavaScript",
      color: "bg-yellow-500"
    },
    stats: {
      stars: 31,
      forks: 11,
      watchers: 6
    },
    isPinned: false,
    createdAt: "2023-07-03",
    updatedAt: "2024-09-18",
    category: "Mobile"
  },
  {
    id: "api-testing-tool",
    name: "API Testing Tool",
    description: "Postman-like API testing tool with request collections, environment variables, and response analysis.",
    technologies: ["Electron", "React.js", "Node.js", "Axios"],
    primaryLanguage: {
      name: "TypeScript",
      color: "bg-blue-500"
    },
    stats: {
      stars: 14,
      forks: 4,
      watchers: 2
    },
    isPinned: false,
    createdAt: "2023-02-28",
    updatedAt: "2024-04-12",
    category: "Desktop"
  },
  {
    id: "code-snippet-manager",
    name: "Code Snippet Manager",
    description: "Organize and search your code snippets with syntax highlighting and tagging system.",
    technologies: ["Vue.js", "Electron", "CodeMirror", "SQLite"],
    primaryLanguage: {
      name: "Vue",
      color: "bg-green-500"
    },
    stats: {
      stars: 26,
      forks: 7,
      watchers: 5
    },
    isPinned: false,
    createdAt: "2023-11-22",
    updatedAt: "2024-11-30",
    category: "Tool"
  },
  {
    id: "blockchain-voting",
    name: "Blockchain Voting System",
    description: "Secure voting system using blockchain technology for transparent and tamper-proof elections.",
    technologies: ["Solidity", "Web3.js", "React.js", "Ethereum", "MetaMask"],
    primaryLanguage: {
      name: "Solidity",
      color: "bg-gray-600"
    },
    stats: {
      stars: 42,
      forks: 18,
      watchers: 12
    },
    isPinned: false,
    createdAt: "2023-05-15",
    updatedAt: "2024-07-08",
    category: "Blockchain"
  },
  {
    id: "ml-image-classifier",
    name: "ML Image Classifier",
    description: "Machine learning model for image classification using TensorFlow and Python.",
    technologies: ["Python", "TensorFlow", "Flask", "OpenCV", "NumPy"],
    primaryLanguage: {
      name: "Python",
      color: "bg-blue-600"
    },
    stats: {
      stars: 33,
      forks: 13,
      watchers: 8
    },
    isPinned: false,
    createdAt: "2023-08-07",
    updatedAt: "2024-10-22",
    category: "AI/ML"
  }
];

// Helper functions
export const getPinnedProjects = (): Project[] => {
  return projects.filter(project => project.isPinned);
};

export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured);
};

export const getProjectsByCategory = (category: Project['category']): Project[] => {
  return projects.filter(project => project.category === category);
};

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

export const getProjectByName = (name: string): Project | undefined => {
  return projects.find(project => project.name.toLowerCase().includes(name.toLowerCase()));
};

// Language color mapping
export const languageColors: Record<string, string> = {
  JavaScript: "bg-yellow-500",
  TypeScript: "bg-blue-500",
  Python: "bg-blue-600",
  Java: "bg-orange-500",
  "C++": "bg-blue-700",
  React: "bg-cyan-500",
  Vue: "bg-green-500",
  Angular: "bg-red-500",
  Node: "bg-green-600",
  Solidity: "bg-gray-600",
  Go: "bg-cyan-600",
  Rust: "bg-orange-700",
  PHP: "bg-purple-500",
  Ruby: "bg-red-600",
  Swift: "bg-orange-400",
  Kotlin: "bg-purple-600"
};

export default projects;
