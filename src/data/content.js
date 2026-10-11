export const profile = {
  name: 'Ayesha Saleem',
  role: 'BSIT Student',
  role2: 'AI Intern',
  tagline:
    'Seventh-semester BSIT student building with Python, machine learning and modern APIs. I turn data into working software — from ML models and REST APIs to interactive web experiences.',
  location: 'Lahore, Pakistan',
  email: 'ayeshasaleem1444@gmail.com',
  github: 'https://github.com/ayeshasaleem1444-droid',
  linkedin: 'https://www.linkedin.com/in/ayesha-saleem-4886533ba/',
  cv: './ayesha-saleem-cv.pdf',
  photo: './profile.jpg',
}

export const stats = [
  { n: '7', l: 'Public projects', c: 's1' },
  { n: '1', l: 'Internship completed', c: 's2' },
  { n: '2027', l: 'Graduating', c: 's3' },
]

export const marqueeItems = [
  { label: 'Python', color: '#b8f53d' },
  { label: 'Machine Learning', color: '#ff3ea5' },
  { label: 'FastAPI', color: '#3ee6ff' },
  { label: 'PostgreSQL', color: '#9d6bff' },
  { label: 'React', color: '#ffc53d' },
  { label: 'NumPy', color: '#ff7a18' },
  { label: 'pandas', color: '#ff3ea5' },
  { label: 'C++', color: '#3ee6ff' },
  { label: 'REST APIs', color: '#b8f53d' },
  { label: 'DSA', color: '#ffc53d' },
  { label: 'Three.js', color: '#9d6bff' },
  { label: 'Git & GitHub', color: '#ff7a18' },
]

export const skillGroups = [
  {
    title: 'Languages', icon: '💬', color: '#ff3ea5',
    skills: ['Python', 'C++', 'JavaScript', 'SQL', 'HTML', 'CSS'],
  },
  {
    title: 'Data & AI', icon: '🧠', color: '#3ee6ff',
    skills: ['NumPy', 'pandas', 'Machine Learning', 'Data Analysis'],
  },
  {
    title: 'Backend', icon: '⚙️', color: '#b8f53d',
    skills: ['FastAPI', 'REST APIs', 'PostgreSQL'],
  },
  {
    title: 'Frontend', icon: '🎨', color: '#ff7a18',
    skills: ['React.js', 'Three.js', 'GSAP', 'Responsive Design'],
  },
  {
    title: 'CS Core', icon: '🧩', color: '#9d6bff',
    skills: ['Data Structures & Algorithms', 'OOP', 'Database Systems'],
  },
  {
    title: 'Tools', icon: '🛠️', color: '#ffc53d',
    skills: ['Git', 'GitHub', 'VS Code'],
  },
]

export const projects = [
  {
    title: 'Phishing Detector',
    icon: '🛡️',
    description:
      'Machine-learning phishing detector: a trained classification model with a Python backend, a web app, and a browser extension that flags malicious URLs in real time.',
    tech: ['Python', 'Machine Learning', 'Web App', 'Browser Extension'],
    github: 'https://github.com/ayeshasaleem1444-droid/phishing-detector',
    demo: null,
    accent: '#ff3ea5', accent2: '#ff7a18',
    featured: true,
  },
  {
    title: 'Path Optimization — A* Search',
    icon: '🧭',
    description:
      'Interactive web application implementing the A* search algorithm to calculate the shortest path between two coordinates on a grid map.',
    tech: ['JavaScript', 'A* Algorithm', 'Data Structures'],
    github: 'https://github.com/ayeshasaleem1444-droid/path-optimization-AI',
    demo: null,
    accent: '#3ee6ff', accent2: '#9d6bff',
    featured: true,
  },
  {
    title: 'FastAPI + PostgreSQL CRUD API',
    icon: '⚡',
    description:
      'REST API with full create, read, update, and delete operations backed by a PostgreSQL database.',
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'REST APIs'],
    github: 'https://github.com/ayeshasaleem1444-droid/fastapi_postgresql',
    demo: null,
    accent: '#b8f53d', accent2: '#3ee6ff',
  },
  {
    title: 'Full-Stack To-Do App',
    icon: '✅',
    description:
      'Task-management app with a React frontend and a FastAPI + PostgreSQL backend API handling all task operations.',
    tech: ['React', 'FastAPI', 'PostgreSQL'],
    github: 'https://github.com/ayeshasaleem1444-droid/FullStackTODO',
    demo: 'https://full-stack-todo-topaz.vercel.app',
    accent: '#ff7a18', accent2: '#ffc53d',
  },
  {
    title: '3D Business Website',
    icon: '✨',
    description:
      'Premium 3D business website for a web development studio, built with Three.js scenes and GSAP-powered animations.',
    tech: ['Three.js', 'GSAP', 'JavaScript', 'HTML/CSS'],
    github: 'https://github.com/ayeshasaleem1444-droid/Week4-webdev',
    demo: null,
    accent: '#9d6bff', accent2: '#ff3ea5',
  },
  {
    title: 'Mini Projects',
    icon: '🧪',
    description:
      'A collection of small front-end mini projects and UI experiments built while sharpening core web skills.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/ayeshasaleem1444-droid/Mini-Projects',
    demo: null,
    accent: '#ffc53d', accent2: '#ff7a18',
  },
  {
    title: 'JavaScript Learning',
    icon: '📚',
    description:
      'Practice repository of JavaScript exercises covering DOM manipulation, events, localStorage, and ES6+ concepts.',
    tech: ['JavaScript', 'ES6+', 'DOM'],
    github: 'https://github.com/ayeshasaleem1444-droid/Javascript-Learning--',
    demo: null,
    accent: '#3ee6ff', accent2: '#b8f53d',
  },
]

export const experience = [
  {
    title: 'Web Development Intern',
    org: 'SafeX Solutions',
    meta: 'Skills Development Internship Program · Remote · Jul 2026 – Sep 2026',
    color: '#ff3ea5',
    points: [
      'Worked on web applications and APIs within a professional development workflow.',
      'Completed the internship program and received a Certificate of Internship in Web Development.',
    ],
  },
]

export const education = [
  {
    title: 'BS Information Technology',
    org: 'University of the Punjab, Lahore',
    meta: '7th Semester · CGPA 3.15/4.00 · Expected Graduation 2027',
    color: '#3ee6ff',
    points: [
      'Relevant coursework: Data Structures & Algorithms, Object-Oriented Programming, Database Systems, Software Engineering Methodology.',
    ],
  },
]
