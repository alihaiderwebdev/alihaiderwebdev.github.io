// Portfolio Data Constants
import pro4Image from '../Assets/pro4.jpeg';
import telemedicineBanner from '../Assets/projectbanner.jpeg.png';

export const personalInfo = {
  name: "Ali Haider",
  title: "MERN Stack Developer",
  email: "alihaidersinfo@gamil.com",
  phone: "+92 3048258141",
  location: "Pakistan",
  bio: "Passionate MERN stack developer specializing in React.js, Node.js, and modern web technologies. Experienced in building responsive, user-friendly web applications with clean code and optimal performance.",
  resumeUrl: "#", // Add your resume URL here
  social: {
    github: "https://github.com/alihaiderwebdev",
    linkedin: "https://linkedin.com/",
    portfolio: "https://alihaiderwebdev.github.io"
  }
};

export const skills = {
  frontend: [
    "React.js",
    "JavaScript (ES6+)",
    "HTML5",
    "CSS3",
    "Responsive Design",
    "React Hooks",
    "Component Architecture"
  ],
  backend: [
    "Node.js",
    "Express.js",
    "MongoDB",
    "RESTful APIs"
  ],
  tools: [
    "Git",
    "GitHub",
    "VS Code",
    "npm/yarn",
    "Chrome DevTools"
  ],
  soft: [
    "Problem Solving",
    "Team Collaboration",
    "Communication",
    "Project Management",
    "Agile Methodology"
  ]
};

export const projects = [
  {
    id: 1,
    title: "Telemedicine Healthcare System (in-progress)",
    description: "Complete healthcare appointment booking platform with separate dashboards for Admin, Doctor, and Patient roles. Built with React frontend focusing on intuitive user experience and responsive design.",
    techStack: ["React.js", "Node.js", "MongoDB", "Express.js", "CSS3"],
    features: [
      "Multi-role authentication system",
      "Real-time appointment booking",
      "Responsive dashboard interfaces",
      "Patient management system"
    ],
    githubUrl: "https://github.com/alihaiderwebdev",
    liveUrl: "#",
    image: telemedicineBanner,
    category: "Full Stack"
  },
  {
    id: 2,
    title: "Personal Portfolio Website",
    description: "Modern, responsive portfolio website showcasing frontend development skills and projects. Built with clean React architecture and optimized for performance.",
    techStack: ["React.js", "CSS3", "JavaScript", "Responsive Design"],
    features: [
      "Fully responsive design",
      "Clean component architecture",
      "Smooth user interactions",
      "SEO optimized"
    ],
    githubUrl: "https://github.com/alihaiderwebdev",
    liveUrl: "https://alihaiderwebdev.github.io",
    image: pro4Image,
    category: "Frontend"
  }
];

export const experience = [];

export const navigation = [
  { id: 1, name: "Home", href: "#home" },
  { id: 2, name: "About", href: "#about" },
  { id: 3, name: "Skills", href: "#skills" },
  { id: 4, name: "Projects", href: "#projects" },
  { id: 5, name: "Contact", href: "#contact" }
];