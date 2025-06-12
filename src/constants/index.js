import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  nodejs,
  git,
  python,
  docker,
  carrent,
  jobit,
  tripguide,
  Maverick,
  DataSense,
  SupportSense,
  SQL,
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "AI Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name:"SQL",
    icon: SQL,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "MaverickIgnite Solutions LLP",
    icon: Maverick,
    iconBg: "#383E56",
    date: "April 2025 -  Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including Product managers, and other developers to create high-quality Applications.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  {
    title: "Web Developer",
    company_name: "MaverickIgnite",
    icon: Maverick,
    iconBg: "#383E56",
    // date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Data Science Intern",
    company_name: "MaverickIgnite Solutions LLP",
    icon: Maverick,
    iconBg: "#E6DEDD",
    date: "April 2025 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Assisting in the development and maintenance of data pipelines and workflows to support analytics and machine learning projects.",
      "Building and validating machine learning models to solve real-world problems and improve business outcomes.",
      "Participating in team meetings, code reviews, and knowledge sharing sessions to continuously improve skills and project quality.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Mudassir proved me wrong.",
    name: "Nikhatanjum",
    designation: "CFO",
    company: "TechVisionaryStudio",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Mudassir does.",
    name: "Raheman",
    designation: "Architecture",
    company: "MaverickIgnite Solutions LLP",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Mudassir optimized our website, our clients increased by 48%. We can't thank them enough!",
    name: "Naveed",
    designation: "CTO",
    company: "MaverickIgnite",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];

const projects = [
  {
    name: "Analytical Dashboard",
    description:
      "A web-based platform designed to support educational institutions by providing comprehensive tools to analyze, manage, and optimize school operations. The analytical dashboard offers real-time insights into key academic, administrative, and operational metrics.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "PostgreSQL",
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
    name: "CognitLaw",
    description:
      "CognitLaw is an AI-driven virtual legal assistant designed to simplify access to legal information and support. Powered by advanced natural language processing and machine learning, CognitLaw enables users to interact with legal content, and identify relevant legal professionals based on their location—all through a conversational.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "mongoDB",
        color: "yellow-text-gradient",
      },
      {
        name: "RAG",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Hospital Management",
    description:
      "A comprehensive Hospital Management System designed to streamline patient interactions and administrative workflows. The platform allows patients to book appointments with doctors, check real-time availability, and view consultation fees, all through a user-friendly interface.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
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
  {
  name: "DataSense",
  description:
    "DataSense is an intelligent data analytics platform developed at MaverickIgnite Solutions LLP. It empowers users to explore and analyze business data using natural language queries. Built with cutting-edge RAG (Retrieval-Augmented Generation) techniques and large language models (LLMs), DataSense translates everyday questions into accurate SQL queries to deliver actionable insights effortlessly.",
  tags: [
    {
      name: "Python",
      color: "yellow-text-gradient",
    },
    {
      name: "RAG",
      color: "green-text-gradient",
    },
    {
      name: "LLM",
      color: "blue-text-gradient",
    },
    {
      name: "Data Analytics",
      color: "pink-text-gradient",
    },
    {
      name: "Natural Language Processing",
      color: "purple-text-gradient",
    },
  ],
  image: DataSense,
    source_code_link: "https://github.com/",
},
{
  name: "SupportSense",
  description:
    "SupportSense is an AI-powered customer support automation platform developed at MaverickIgnite Solutions LLP. It leverages natural language understanding and large language models (LLMs) to automate responses, classify support tickets, and provide instant resolutions to common queries. Designed for scalability, SupportSense enhances customer experience by reducing response times and streamlining support workflows.",
  tags: [
    {
      name: "Python",
      color: "yellow-text-gradient",
    },
    {
      name: "LLM",
      color: "blue-text-gradient",
    },
    {
      name: "Customer Support",
      color: "green-text-gradient",
    },
    {
      name: "Automation",
      color: "pink-text-gradient",
    },
    {
      name: "Natural Language Processing",
      color: "purple-text-gradient",
    },
  ],
  image: SupportSense,
  source_code_link: "https://github.com/",
},

];

export { services, technologies, experiences, testimonials, projects };
