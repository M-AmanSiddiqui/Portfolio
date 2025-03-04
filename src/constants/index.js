import {
  
  backend,
  creator,
  mobile,
  web,
  
  css,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  Bootstrap,
  tailwind,
  typescript,
  threejs,
  smit,
  stolid,
  carrent,
  jobit,
  tripguide,
  nextjs,
  
  vercel,
  netlify,
  antd,
  firebase,
  framermotion,
  materialUI,
  shadecn,
  expressjs,
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
  {
    name: "HTML 5",
    icon: html,
  },
  
  
  {
    name: "Next js",
    icon: nextjs,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Bootstrap",
    icon: Bootstrap,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
 
  {
    name: "Vercel",
    icon: vercel,
  },

 
 

];

const education = [
  {
    title: "Matriculation",
    institution: "Board of Secondary Education karachi",
    icon: smit,
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
    icon: stolid,
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
    icon: stolid,
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

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
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

export { services, technologies, experiences, testimonials, projects, education };
