// NAVIGATION ITEM
export const navItems = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "About",
    url: "#about",
  },
  {
    id: 3,
    title: "Projects",
    url: "/projects",
  },
  {
    id: 4,
    title: "Skills",
    url: "#skills",
  },
  {
    id: 5,
    title: "Experience",
    url: "#experience",
  },
  {
    id: 6,
    title: "Contact",
    url: "#contact",
  },
];

// HERO ITEM
export const heroItem = {
  id: 1,
  image_url: "/saiprabhat.png", // update this to your actual image path
  title: "hero",
  name: "Hello, I'm Sai Prabhat",
  designation: "Full Stack Developer & AI Engineer",
  experience: "1+ years",
  focus: "Next.js, FastAPI & AI Systems",
  contact: {
    title: "Contact me here",
    url: "#contact",
  },
  cv: {
    title: "View my work",
    url: "https://drive.google.com/file/d/1VZ49lHjW5jAPGstDt2sbiRzVRTBZHJbS/view?usp=sharing",
  },
  iconOne: {
    title: "GitHub",
    image_url: "",
    url: "https://github.com/Guggilam-sai-prabhat",
  },
  iconTwo: {
    title: "LinkedIn",
    image_url: "",
    url: "https://www.linkedin.com/in/guggilam-sai-prabhat-61529024a/",
  },
};


// ABOUT ITEM
export const aboutItem = {
  title: "About Me",
  btnTitle: "Know More About Me",
  url: "https://www.linkedin.com/in/guggilam-sai-prabhat-61529024a/",
  description:
    "👋 Hi, I'm Sai Prabhat — a Full Stack Developer and AI Engineer passionate about building scalable, real-time systems and intelligent web applications. I specialize in React.js, Next.js (SSR), FastAPI, TypeScript, and modern backend architectures using Redis, Neo4j, and MongoDB. Currently, I’m contributing to India’s Scientific Foundation Model at IISc Bangalore, focusing on distributed AI infrastructure and high-performance web platforms. I love solving complex problems, optimizing systems for speed, and building meaningful tech that makes an impact.",
};


// PROJECTS ITEM
export const projectsItem = {
  title: "My Projects",
  url: "/projects",
  btnTitle: "All Projects",
  projects: [
    {
      id: 1,
      title: "AI-Generated Community Platform",
      image_url: "/AI_GENERATED.png",
      description:
        "An AI-powered image generation community platform built using the MERN stack and OpenAI’s DALL·E model. Users can create images from text prompts, download them, and share their creations in a public community feed. The platform uses Cloudinary for efficient image CDN storage and MongoDB for managing user data and prompts.",
      date: new Date(2024, 5, 10),
      projectLink: "https://ai-generated-community.vercel.app/",
      github: "https://github.com/saiprabhatofficial/ai-generated-community",
      technology: [
        { id: 1, title: "React.js" },
        { id: 2, title: "Node.js" },
        { id: 3, title: "Express.js" },
        { id: 4, title: "MongoDB" },
        { id: 5, title: "OpenAI API" },
        { id: 6, title: "Cloudinary" },
      ],
    },
    {
      id: 2,
      title: "X-Clone - Social Media Application",
      image_url: "/Twitter.png",
      description:
        "A Twitter-inspired social platform built with the MERN stack, featuring user authentication, post creation, likes, comments, and real-time updates. Designed with modern UI components and optimized for performance, the app supports user engagement and community interaction seamlessly.",
      date: new Date(2024, 3, 20),
      projectLink: "https://twitter-x-clone-frontend.vercel.app/login",
      github: "https://github.com/saiprabhatofficial/x-clone",
      technology: [
        { id: 1, title: "React.js" },
        { id: 2, title: "Redux Toolkit" },
        { id: 3, title: "Node.js" },
        { id: 4, title: "Express.js" },
        { id: 5, title: "MongoDB" },
        { id: 6, title: "JWT" },
        { id: 7, title: "Tailwind CSS" },
      ],
    },
    {
      id: 3,
      title: "Restaurant Reservation System",
      image_url: "/Resturant.png",
      description:
        "A full-stack restaurant reservation web app that allows users to book tables online with real-time updates. The project ensures smooth user experience with instant availability sync and efficient backend management of bookings, using modern web technologies and clean UI design.",
      date: new Date(2023, 10, 5),
      projectLink: "https://restaurant-reservation-dun.vercel.app/",
      github: "https://github.com/saiprabhatofficial/restaurant-reservation",
      technology: [
        { id: 1, title: "React.js" },
        { id: 2, title: "Node.js" },
        { id: 3, title: "Express.js" },
        { id: 4, title: "MongoDB" },
        { id: 5, title: "Socket.io" },
        { id: 6, title: "Tailwind CSS" },
      ],
    },
  ],
};


// SKILLS ITEM
export const skillsItem = [
  // --- Core Web ---
  { id: 1, title: "HTML", experience: "3+ years", proficiency: 90 },
  { id: 2, title: "CSS", experience: "3+ years", proficiency: 88 },
  { id: 3, title: "JavaScript", experience: "3+ years", proficiency: 90 },
  { id: 4, title: "TypeScript", experience: "1+ year", proficiency: 80 },

  // --- Frontend Frameworks ---
  { id: 5, title: "React.js", experience: "2+ years", proficiency: 92 },
  { id: 6, title: "Next.js", experience: "1+ year", proficiency: 85 },
  { id: 7, title: "Chakra UI", experience: "1+ year", proficiency: 82 },
  { id: 8, title: "Tailwind CSS", experience: "2+ years", proficiency: 88 },

  // --- Backend & API ---
  { id: 9, title: "Node.js", experience: "2+ years", proficiency: 87 },
  { id: 10, title: "Express.js", experience: "2+ years", proficiency: 85 },
  { id: 11, title: "FastAPI", experience: "1+ year", proficiency: 78 },

  // --- Databases ---
  { id: 12, title: "MongoDB", experience: "2+ years", proficiency: 90 },
  { id: 13, title: "PostgreSQL", experience: "1+ year", proficiency: 75 },
  { id: 14, title: "Firebase", experience: "1+ year", proficiency: 80 },

  // --- AI / ML / Data ---
  { id: 15, title: "Python", experience: "3+ years", proficiency: 92 },
  { id: 16, title: "PyTorch", experience: "1+ year", proficiency: 75 },
  { id: 17, title: "Keras", experience: "1+ year", proficiency: 78 },
  { id: 18, title: "OpenCV", experience: "1+ year", proficiency: 76 },
  { id: 19, title: "RL", experience: "1 year", proficiency: 65 },

  // --- Dev Tools ---
  { id: 20, title: "Git", experience: "3+ years", proficiency: 90 },
  { id: 21, title: "GitHub", experience: "3+ years", proficiency: 90 },
  { id: 22, title: "Linux", experience: "2+ years", proficiency: 82 },
  { id: 23, title: "Prisma", experience: "1 year", proficiency: 78 },
  { id: 24, title: "Cloudinary", experience: "1 year", proficiency: 80 },
  { id: 25, title: "Vercel", experience: "1 year", proficiency: 85 },

  // --- Design ---
  { id: 26, title: "Figma", experience: "1 year", proficiency: 75 },

  // --- Others ---
  // { id: 27, title: "Data Structures & Algorithms (Python)", experience: "2+ years", proficiency: 88 },
  { id: 28, title: "RESTful API Design", experience: "2+ years", proficiency: 85 }
];



// EXPERIENCE ITEM
export const experienceItem = [
  {
    id: 1,
    company: "ZenteIQ – IISc Bangalore",
    role: "Software Engineer",
    from: new Date(2024, 10, 1).getFullYear(), // November 2024
    to: "",
    description:
      "At ZenteIQ, IISc Bangalore, I am contributing as a Software Engineer to the Proof of Concept (PoC) for India's Scientific Foundation Model (SFM) under the National AI Mission (₹75 Cr initiative). As part of a 7-member core team, I lead backend infrastructure, data pipelines, and distributed AI service orchestration in collaboration with IISc researchers. I architect scalable full-stack systems for national security and mentorship tech platforms, integrating Redis-based real-time communication, token-rotating authentication, and graph-driven collaboration models using Neo4j. My optimizations have reduced query latency by 94% and improved frontend load times 15× through SSR migration to Next.js.",
    stack: [
      { id: 1, title: "React.js" },
      { id: 2, title: "Next.js (SSR)" },
      { id: 3, title: "TypeScript" },
      { id: 4, title: "FastAPI" },
      { id: 5, title: "Flask" },
      { id: 6, title: "MongoDB" },
      { id: 7, title: "Redis" },
      { id: 8, title: "Neo4j" },
      { id: 9, title: "WebSockets" },
      { id: 10, title: "Docker" },
      { id: 11, title: "Linux" },
    ],
  },
  {
    id: 2,
    company: "Crakcode · Remote Internship",
    role: "React.js Developer",
    from: new Date(2024, 5, 1).getFullYear(), // June 2024
    to: new Date(2024, 10, 1).getFullYear(), // November 2024
    description:
      "During my React.js Developer Internship at Crakcode, I was responsible for implementing community features like a chat page and request handling page, following company design systems. I developed a reusable global modal component to unify the UI across the platform and resolved a major session bug that caused logouts on reload, enhancing stability and retention. I also designed distinctive, intuitive UI elements that defined the platform’s modern look and feel.",
    stack: [
      { id: 1, title: "React.js" },
      { id: 2, title: "TypeScript" },
      { id: 3, title: "Tailwind CSS" },
      { id: 4, title: "Firebase" },
    ],
  },
  {
    id: 3,
    company: "Freelance Project – AI-Generated Community Platform",
    role: "Full Stack Developer (MERN)",
    from: new Date(2023, 1, 1).getFullYear(), // February 2023
    to: new Date(2024, 1, 1).getFullYear(), // February 2024
    description:
      "Developed an AI-powered community platform using the MERN stack integrating OpenAI's DALL·E API for image generation and Cloudinary for optimized media delivery. Built RESTful APIs for user management, authentication, and post handling, enabling users to share, explore, and download generated images. The system was optimized with CDN caching and modern React patterns for a seamless user experience.",
    stack: [
      { id: 1, title: "MongoDB" },
      { id: 2, title: "Express.js" },
      { id: 3, title: "React.js" },
      { id: 4, title: "Node.js" },
      { id: 5, title: "Cloudinary" },
      { id: 6, title: "OpenAI API" },
      { id: 7, title: "JWT Authentication" },
      { id: 8, title: "REST API" },
    ],
  },
];


// CONTACT ITEM
export const contactItem = {
  title: "Contact Me",
  description:
    "Looking to collaborate or have something in mind?\nLet’s talk. I’m always excited to explore new challenges and opportunities.\nUse the form below, and I’ll get back to you promptly.",
  contact_items: [
    {
      id: 1,
      title: "Email Me",
      url: "mailto:guggliamprbhat@gmail.com",
    },
    {
      id: 2,
      title: "Call Me",
      url: "tel:+91-9063518994",
    },
    {
      id: 3,
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/guggilam-sai-prabhat-61529024a",
    },
  ],
};

// COPYRIGHT ITEM
export const copyrightItem = {
  name: "GSP",
  url: "https://www.linkedin.com/in/guggilam-sai-prabhat-61529024a",
};
