import {
  // General
  github,
  
  // Education
  BoardIntermediate,
  BoardTechnical,
  BoardSecondary,
  Graduation ,
  
  // Tech Stack
  css,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  git,
  tailwind,
  threejs,
  Bootstrap,
  nextjs,
  vercel,
  netlify,
  antd,
  firebase,
  framermotion,
  materialUI,
  shadecn,
  expressjs,
  python,
  
  // Companies
  smit,
  stolid,
  
  // Projects
  todoapp,
  todo1,
  todo2,
  todo3,
  financeApp,
  
  // Certificates
  Simplilearn_FrontEnd,
  JavaScript_Essential_1,
  JavaScript_Essential_2,
  HackerRank_Basic,
  HackerRank_Intermediate,
  Infotech_DIT,
  ProblemSolving_Basic,
  ProblemSolving_Intermediate,
  
  // Misc
  backend,
  creator,
  mobile,
  web,
} from "../assets";


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "work",
    title: "Work",
  },
   
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
   {
    id: "achievements",
    title: "Achievements",
  },
  {
    id: "contact",
    title: "Contact",
  },

 ];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI Developer",
    icon: creator,
  },
];

const skills = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Python", icon: python },
  { name: "React JS", icon: reactjs },
  { name: "Redux", icon: redux },
  { name: "Next.js", icon: nextjs },
  { name: "Node.js", icon: nodejs },
  { name: "Express.js", icon: expressjs },
  { name: "MongoDB", icon: mongodb },
  { name: "Firebase", icon: firebase },
  { name: "Bootstrap", icon: Bootstrap }, 
 
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Material UI", icon: materialUI },
  { name: "Ant Design", icon: antd },
  { name: "ShadCN UI", icon: shadecn },
  { name: "Framer Motion", icon: framermotion },
 
  { name: "Three.js", icon: threejs },

  { name: "Git", icon: git },
  { name: "GitHub", icon: github },
  { name: "Vercel", icon: vercel },
  { name: "Netlify", icon: netlify },

 
 
];




const education = [
  {
    title: "Undergraduate - BS Computer Science",
    institution: "Dawood University of Engineering & Technology, Karachi",
    icon: Graduation , 
    iconBg: "#FFFFFF",
    date: "Aug 2025 - Present",
    points: [
      "Enrolled in the BS Computer Science program at Dawood University of Engineering & Technology.",
      "Building strong fundamentals in data structures, algorithms, and computer systems.",
      "Exploring advanced concepts in programming, databases, and software engineering to enhance technical expertise."
    ]
  },
  {
    title: "DAE in Chemical Engineering",
    institution: "Board of Technical Education Karachi",
    icon: BoardTechnical,
    iconBg: "#FFFFFF",
    date: "Oct 2022 - Oct 2025",
    points: [
      "Studying at Government College of Technology Karachi.",
      "Gained in-depth knowledge of chemical processes, thermodynamics, and material sciences.",
      "Worked on projects involving distillation, heat transfer, and process optimization."
    ]
  },
  {
    title: "Intermediate",
    institution: "Board of Intermediate Education Karachi",
    icon: BoardIntermediate,
    iconBg: "#FFFFFF",
    date: "Sep 2022 - Sep 2024",
    points: [
      "Studied at Government College for Men Karachi.",
      "Strengthened problem-solving skills through advanced Mathematics and Physics concepts.",
      "Gained practical knowledge of Mechanics, Electricity, and Calculus through theoretical and lab experiments."
    ]
  },
  {
    title: "Matriculation",
    institution: "Board of Secondary Education Karachi",
    icon: BoardSecondary,
    iconBg: "#FFFFFF",
    date: "Sep 2020 - Sep 2022",
    points: [
      "Studied at Matchless Grammar Secondary School.",
      "Developed a strong foundation in Mathematics, Physics, Chemistry, and Biology.",
      "Conducted practical experiments to understand scientific concepts and problem-solving techniques."
    ]
  }
];




const experiences = [
 
  {
    title: "Junior Frontend Developer",
    company_name: "Stolidzone Technologies",
    icon: stolid,
    iconBg: "#FFFFFF",
    date: "Jan 2025 - Feb 2025",
    points: [
      "Built and maintained responsive web applications using React.js.",
      "Designed and developed the company’s portfolio website with a modern UI/UX.",
      "Worked closely with designers and backend developers to deliver scalable products.",
    ],
  },
   {
    title: "Web Development Intern",
    company_name: "Saylani Mass IT",
    icon: smit,
    iconBg: "#FFFFFF",
    date: "October 2024 - January 2025",
    points: [
      "Developed and maintained web applications using React.js and modern technologies.",
      "Implemented responsive designs ensuring smooth cross-browser compatibility.",
      "Collaborated with team members to improve code quality and enhance problem-solving skills.",
    ],
  },
];


  const achievements = [
    {
      title: "Front-End Development",
      provider: "Simplilearn",
      date: "February 28, 2025",
      description: "Overview of front-end technologies including HTML, CSS, and JavaScript.",
      image: Simplilearn_FrontEnd, // Replace if available
   
    },
    {
      title: "JavaScript Essentials 1",
      provider: "Cisco Networking Academy",
      date: "March 4, 2025",
      description: "Fundamentals of JavaScript programming, covering syntax, functions, and basic web interactions.",
      image: JavaScript_Essential_1, // Certificate Badge
      link: "https://www.credly.com/badges/75896ac0-5995-492a-aa29-a7620be38928" // Replace with actual link
    },
    {
      title: "JavaScript Essentials 2",
      provider: "Cisco Networking Academy",
      date: "March 6, 2025",
      description: "Advanced JavaScript concepts including asynchronous programming, ES6+ features, and object-oriented principles.",
      image: JavaScript_Essential_2, // Certificate Badge
      link: "https://www.credly.com/badges/7d4d2029-1658-49f1-9a58-0a30be1dbeec" // Replace with actual link
    },
    {
      title: "JavaScript (Basic)",
      provider: "HackerRank",
      date: "March 5, 2025",
      description: "Basic JavaScript coding skills, focusing on core concepts and syntax.",
      image: HackerRank_Basic, // Basic Badge
      link: "https://www.hackerrank.com/certificates/iframe/e867083083e1" // Replace with actual link
    },
    {
      title: "JavaScript (Intermediate)",
      provider: "HackerRank",
      date: "March 15, 2025",
      description: "Intermediate JavaScript skills, covering advanced functions, closures, and object-oriented concepts.",
      image: HackerRank_Intermediate, 
      link: "https://www.hackerrank.com/certificates/e6f7612b19f6" 
    },
    {
  title: "Problem Solving (Basic)",
  provider: "HackerRank",
  date: "March 21, 2025", 
  description: "Certification for fundamental problem-solving skills using programming concepts.",
  image: ProblemSolving_Basic , 
  link: "https://www.hackerrank.com/certificates/iframe/e867083083e1" 
},
{
  title: "Problem Solving (Intermediate)",
  provider: "HackerRank",
  date: "March 15, 2025", 
  description: "Certification for intermediate-level problem-solving, algorithms, and computational thinking.",
  image: ProblemSolving_Intermediate , 
  link: "https://www.hackerrank.com/certificates/e6f7612b19f6" 
},

    {
      title: "D.I.T",
      provider: "Infotech",
      date: "Aug 31, 2023",
      description: "Diploma in Information Technology covering core IT skills.",
      image: Infotech_DIT,
      link: "", 
    },
];







const projects = [
{
  name: "Full Stack Todo App",
  description:
    "A full-stack task management web app where users can create, update, and delete tasks in real-time. Built with the MERN stack, it includes authentication, secure database storage, and a fully responsive UI with smooth interactions.",
  tags: [
    { name: "react", color: "blue-text-gradient" },
    { name: "nodejs", color: "green-text-gradient" },
    { name: "express", color: "yellow-text-gradient" },
    { name: "mongodb", color: "pink-text-gradient" },
  ],
  images: [todoapp, todo1, todo2, todo3], 
  source_code_link: "https://github.com/M-AmanSiddiqui/Todo_Frotend-JS",
  live_demo_link: "https://todo-frotend-js.vercel.app/",
},
{
  name: "CodeTec Solutions",
  description:
    "A professional portfolio website designed for CodeTec Solutions, highlighting services, projects, and expertise. Built with React, Tailwind CSS, and Framer Motion, it delivers a clean, animated, and fully responsive user interface.",
  tags: [
    { name: "react", color: "blue-text-gradient" },
    { name: "tailwind", color: "pink-text-gradient" },
    { name: "framer-motion", color: "green-text-gradient" },
  ],
  images: [], 
  source_code_link: "https://github.com/M-AmanSiddiqui/CodetecSolutions-React",
  live_demo_link: "https://codetecsolutions.vercel.app/",
},

  
{
  name: "Finance Management",
  description:
    "A personal finance tracker that helps users manage income, expenses, and balance with a clean UI. Features include transaction history, categorized tracking, and responsive design for mobile and desktop.",
  tags: [
    { name: "react", color: "blue-text-gradient" },
    { name: "tailwindcss", color: "pink-text-gradient" },
    { name: "javascript", color: "yellow-text-gradient" },
  ],
  images: [financeApp], // only one screenshot
  source_code_link: "https://github.com/M-AmanSiddiqui/Finance-Management-React",
  live_demo_link: "https://finance-management-psi.vercel.app/",
},

];


export { services, skills, experiences, achievements, projects, education };
