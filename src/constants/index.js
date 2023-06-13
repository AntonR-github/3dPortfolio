import {
    backend,
    web,
    javascript,
    typescript,
    css,
    reactjs,
    nodejs,
    mongodb,
    dashboard,
    frontend,
    backend2,
    angular,
    mysql,
    php,
    autumn,
    api2,
    gym,
    dashboard2,
    portfolio,
    portfolio2,
    calculator,
    tictactoe,
    eshop,
    weather,
    fighting,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "experience",
      title: "Tech",
    },
    {
      id: "works",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
  ];

  const experiences = [
    {
      title: "Frontend Development",
      icon: frontend,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing Angular and React applications using TypeScript, Javascript and other related technologies.",
        "Ajax, JSON, RESTful web services, and API integration.",
        "CSS3, HTML5, and Bootstrap to create user-friendly web pages.",
        "Three.js to create 3D animations.",
      ],
    },
    {
      title: "Backend Development",
      icon: backend2,
      iconBg: "#383E56",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing Node.js applications using Javascript and other related technologies.",
        "PHP to create server-side applications.",
        "MongoDB and MySQL to create and manage databases.",
        "Express.js and other frameworks to create server-side applications.",
        "Docker to create and manage containers.",
        "Git to manage source code.",
      ],
    },
  ];
  
  
  const technologies = [
    {
      name: "CSS",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "PHP",
      icon: php,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Angular",
      icon: angular,
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
      name: "MySQL",
      icon: mysql,
    },
  ];
  
  const projects = [
    {
      name: "EShop Admin Dashboard",
      description:
        "Admin Dashboard - Fullstack ECommerce app using MERN stack, providing a convenient and efficient solutions for managing an online shop.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "react",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "pink-text-gradient",
        },
      ],
      image: dashboard,
      source_code_link: "https://github.com/AntonR-github/Eshop2-Dashboard",
      live_demo_link: "https://eshop2-dashboard.onrender.com/",
    },
    {
      name: "EShop Client Side",
      description:
        "Client Side - Fullstack ECommerce app using MERN stack, enabling users to browse and purchase products online.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "react",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "pink-text-gradient",
        },
      ],
      image: autumn,
      source_code_link: "https://github.com/AntonR-github/Eshop2-Client",
      live_demo_link: "https://eshop2.onrender.com/",
    },
    {
      name: "EShop Server Side",
      description:
        "Server Side - Node.js server for EShop app, using MongoDB to store data (only GitHub Code).",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "node.js",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "pink-text-gradient",
        },
      ],
      image: api2,
      source_code_link: "https://github.com/AntonR-github/Eshop2-API",
      live_demo_link: "",
    },
    {
      name: "Fitness Website",
      description:
        "Frontend app for a fitness website, using React Typescript, Vite, Framer Motion and Tailwind CSS to create a modern and responsive website.",
      tags: [
        {
          name: "typescript",
          color: "blue-text-gradient",
        },
        {
          name: "react",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "pink-text-gradient",
        },
      ],
      image: gym,
      source_code_link: "https://github.com/AntonR-github/GymWebsite",
      live_demo_link: "https://gymwebsite-aad.pages.dev/",
    },
    {
      name: "Admin Dashboard",
      description:
        "Admin dashboard allowing users to manage a sells team, view statistics, set meetings, light/dark mode and more. Created using React Javascript. Material UI and Data Grid.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "react",
          color: "green-text-gradient",
        },
        {
          name: "Material UI",
          color: "pink-text-gradient",
        },
      ],
      image: dashboard2,
      source_code_link: "https://github.com/AntonR-github/React-Dashboard",
      live_demo_link: "https://antonr-dashboard.netlify.app/",
    },
    {
      name: "Portfolio App",
      description:
        "Portfolio App to showcase projects, Created using React Typescript, MySQL database and Socket.IO (Github code only) .",
      tags: [
        {
          name: "typescript",
          color: "blue-text-gradient",
        },
        {
          name: "react",
          color: "green-text-gradient",
        },
        {
          name: "MySQL",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/AntonR-github/Portfolio---GitHub",
      live_demo_link: "",
    },
    {
      name: "Portfolio App 2",
      description:
        "Portfolio App to showcase projects, Created using React Javascript, Sanity CMS.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "react",
          color: "green-text-gradient",
        },
        {
          name: "sanity",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio2,
      source_code_link: "https://github.com/AntonR-github/Personal-portfolio",
      live_demo_link: "https://antonr-portfolio.netlify.app/",
    },
    {
      name: "Calculator App",
      description:
        "Calculator App created using React Reducer",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "react",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: calculator,
      source_code_link: "https://github.com/AntonR-github/calculator",
      live_demo_link: "https://antonr-calculator.netlify.app/",
    },
    {
      name: "Tic-Tac-Toe Game",
      description:
        "Tic-Tac-Toe Game created using AngularTS",
      tags: [
        {
          name: "typescript",
          color: "blue-text-gradient",
        },
        {
          name: "angular",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tictactoe,
      source_code_link: "https://github.com/AntonR-github/TicTacToe",
      live_demo_link: "https://tictactoe-1u1.pages.dev/",
    },
    {
      name: "Food EShop",
      description:
        "Fullstack food EShop app, allowing users to order food, add to cart, checkout, login, register, and more. Created using Angular Typescript, Node.js, MongoDB, Paypal (only github code).",
      tags: [
        {
          name: "typescript",
          color: "blue-text-gradient",
        },
        {
          name: "angular",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "pink-text-gradient",
        },
      ],
      image: eshop,
      source_code_link: "https://github.com/AntonR-github/EShop",
      live_demo_link: "",
    },
    {
      name: "Fighting Game",
      description:
        "Javascript Retro Style Fighting Game Using HTML Canvas and Animation Sprites",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: fighting,
      source_code_link: "https://github.com/AntonR-github/Fighting-Game",
      live_demo_link: "https://fighting-game-ar.netlify.app/",
    },
    {
      name: "Weather App",
      description:
        "Weather App created using Angular Typescript, OpenWeatherMap API",
      tags: [
        {
          name: "typescript",
          color: "blue-text-gradient",
        },
        {
          name: "angular",
          color: "green-text-gradient",
        },
        {
          name: "api",
          color: "pink-text-gradient",
        },
      ],
      image: weather,
      source_code_link: "https://github.com/AntonR-github/Weather-App",
      live_demo_link: "https://weather-app-by-antonr.web.app/",
    },
  ];
  
  export { services, technologies, projects, experiences };