import {
  backend,
  creator,
  mobile,
  web,
   css,
   html,
  javascript,
   smit,
  stolid,
  carrent,
  jobit,
  tripguide,
  Bootstrap,
  nextjs,
BoardIntermediate,
BoardTechnical,
BoardSecondary,
github,
  mongodb,
nodejs,
reactjs,
redux,
git,
tailwind,
typescript,
threejs,
  vercel,
  netlify,
  antd,
  firebase,
  framermotion,
  materialUI,
  shadecn,
  expressjs,
  Simplilearn
 } from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
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

const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
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

export default technologies;


const education = [
  {
    title: "Matriculation",
    institution: "Board of Secondary Education karachi",
    icon: BoardSecondary,
    iconBg: "#FFFFFF",
    date: "Sep 2020 - Sep 2022",
    points: [
      "Studied at Matchless Grammar Secondary School.",
      "Developed a strong foundation in Mathematics, Physics, Chemistry, and Biology.",
      "Conducted practical experiments to understand scientific concepts and problem-solving techniques."
]

  },
  {
    title: "Intermediate",
    institution: "Board of Intermediate Education karachi",
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
    title: "DAE in Chemical Engineering",
    institution: "Board of Technical Education karachi",
    icon: BoardTechnical,
    iconBg: "#FFFFFF",
    date: "Oct 2022 - Oct 2025",
    points: [
      "Studying at Government College of Technology Karachi",
      "Gained in-depth knowledge of chemical processes, thermodynamics, and material sciences.",
      "Worked on projects involving distillation, heat transfer, and process optimization."
    ]
    
  },
  
 
];



const experiences = [
  {
    title: "Web Development Intern",
    company_name: "Saylani Mass IT",
    icon: smit,
    iconBg: "#FFFFFF",
    date: "October 2024 - january 2025",
    points: [
      "Developed and maintained web applications using React.js and other modern technologies.",
      "Collaborated with designers, product managers, and developers to build user-friendly interfaces.",
      "Implemented responsive designs and ensured cross-browser compatibility.",
      "Participated in code reviews and improved code quality through best practices.",
      "Gained hands-on experience in frontend and backend development, enhancing problem-solving skills.",
    ],
  },
  {
    title: "Junior Frontend Developer",
    company_name: "Stolidzone Technologies",
    icon: stolid,
    iconBg: "#FFFFFF",
    date: "Jan 2025 - Feb 2025",
    points: [
      "Developed and maintained responsive web applications using React.js and modern frontend technologies.",
"Designed and built the company’s portfolio website in React, ensuring a smooth user experience and modern UI.",
"Collaborated with designers, product managers, and backend developers to create high-quality and scalable products.",
"Ensured cross-browser compatibility and optimized performance for different devices.",
"Participated in code reviews, provided feedback, and improved code quality through best practices.",
    ],
  },
  
 
];

  const certificates = [
  {
    title: "Full-Stack Developer Certification",
    provider: "Udemy",
    date: "Jan 2024",
    description: "A comprehensive full-stack developer course covering React, Node.js, and databases.",
    image: Simplilearn, // 🔥 Certificate Image
    link: "https://example.com/certificate/fullstack"
  },
  {
    title: "Frontend Web Development",
    provider: "Coursera",
    date: "Dec 2023",
    description: "An advanced course on modern frontend development with React and Tailwind.",
    image: "", // 🔥 Certificate Image
    link: ""
  }
];


const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, certificates, projects, education };
