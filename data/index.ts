export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Experience", link: "#experiene" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I value working closely with clients and maintaining clear lines of communication",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm highly adaptable to various time zones for communication.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast driven by a love for development",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently building a AI Resume Builder",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Netflix-GPT",
      des: "Enjoy a Netflix-like platform with secure Firebase auth, fast performance via Redux Toolkit, and personalized content recommendations from OpenAI API.",
      img: "/nf2.png",
      iconLists: ["/re.svg", "/tail.svg", "/firebase.svg", "/redux.svg"],
      link: "https://github.com/Rushikeshp2002/Netflix-GPT",
    },
    {
      id: 2,
      title: "Convoia - MERN Chat App",
      des: "Created a real-time chat app with React, Node.js, and Socket.io, featuring secure authentication and scalable architecture with bcrypt and MongoDB.",
      img: "/ca1.png",
      iconLists: ["/re.svg", "/tail.svg","node.svg","mo.svg","so2.png"],
      link: "https://github.com/Rushikeshp2002/MERN-Chat-App",
    },
    {
      id: 3,
      title: "React Admin Dashboard",
      des: "Developed a React Admin Dashboard with custom components, featuring dynamic charts from Apex Charts and animations with Framer Motion.",
      img: "/das.png",
      iconLists: ["/re.svg", "/tail.svg","fm.svg","apex.png" ],
      link: "https://github.com/Rushikeshp2002/Admin-Dashboard-React",
    },
    {
      id: 4,
      title: "Candy Crush Game",
      des: "Developed an engaging Candy Crush game with move detection, auto candy popping, and smart state management. Used TypeScript & Tailwind CSS for clean, safe code & a beautiful UI",
      img: "/candy1.png",
      iconLists: ["/re.svg", "/tail.svg", "/redux.svg", "/ts.svg"],
      link: "https://github.com/Rushikeshp2002/candy-crush-game",
    },
    {
      id: 5,
      title: "Interactlens: User Interaction Analysis and Recommendation System",
      des: "Created an e-commerce breakthrough: personalized recommendations, a client-side chatbot, and data visualization tools for trend analysis and informed decisions.",
      img: "/interact.png",
      iconLists: ["/re.svg", "/tail.svg", "/redux.svg","fm.svg"],
      link: "https://github.com/Rushikeshp2002/InteractLens",
    },
  ];

  
export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "Next Js",
        image:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACTklEQVR4Ab1XAaQqURB9DyohSykREpRIQSAlBCoECKUFCSRCBBEAaSEABQEoCIEASCwAUICALgCo83do0//9v819XX845O7VnDkzOzP7JWGaBd3C3IJpQVjAHeJ+Rs9a97vKLGrBsB1KgMhEP3FMUUwt4ENMfxr1yQIU4SSjRkbeOZtERmHk6pXQVDlnkHh9S+QLTm1hkiz4n/gzFQuny9FoFLquE+i34x+n02k0m00UCoV3BIzn3MMJrVYLtp1OJ0cS/X4f5/MZhmG8IyDsWtDfEaDIn2232/3zbrvdxuFwwGg04qRBt+VnETBNE0IIkE2n07/erdfrWK/X6Ha73Hb9ZXII3G43ivy3dNRqtZe7lUoFs9mM6oBDwCQCgquALT1FT3a5XF7qIZ/PYzgcolqtcggIIgBZAgRKB6lCRalp2uM8k8mAVMrlchwC+DEBipycE4n5fP44j8ViKJVKSCaTbAJCpgaez4vFIsjoWa/XA50FAgEkEgmEw2F2CkxZBZ5Br5tt1ITcbjd8Ph88Hg+7CBefECCsVitS4aVJcV9D/VMCVITk/Hq9YrPZyBBo2a1YMGvAcQYcj0cCtWMugcdYNhjDiBrP25mx3++x3W6RzWZZ8isfxzQLlsslJpMJpYY5jhkqcOH1ejEYDDAej9FoNOByuZxGsfqVzC7KTqcDSkkqleKsZOqX0mAwiHK5DGrJfr+fs5SqX8sjkQji8ThCoRC+v78Za7l6JagrUh3YkUuZpqgwDaecc9VYSDoV5Fg+at7n+eLN57kuE/EvzHr/Kvs31aYAAAAASUVORK5CYII=",
      },
      {
        name: "React Js",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },
      {
        name: "Redux",
        image:
          "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg",
      },
      
      {
        name: "TypeScript",
        image: "ts.svg"

      },
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
      {
        name: "TailwindCSS",
        image:"tail.svg"

      },
      {
        name: "Framer Motion",
        image:"fm.svg"

      },
      
      {
        name: "Material UI",
        image:
          "data:image/png;base64,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",
      },
      {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Firebase",
        image: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
      },
      {
        name: "Node Js",
        image: "https://nodejs.org/static/images/logo.svg",
      },
      {
        name: "Express Js",
        image:
          "express.png",
      },
      {
        name: "Flask",
        image: "flask.png",
      },
      {
        name: "MySQL",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      },
      {
        name: "Mongo DB",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
      },
      {
        name: "Socket.io",
        image:
          "so2.png",
      },
      {
        name: "Other Python Lib",
        image:
          "python.svg",
      },
      
    ],
  },
  {
    title: "Languages & Others",
    skills: [
      {
        name: "Java",
        image:
          "java.svg",
      },
      {
        name: "Python",
        image:
          "python.svg",
      },
      {
        name: "C++",
        image:
          "c++.svg",
      },
      {
        name: "Git",
        image:
          "git.svg",
      },
      {
        name: "GitHub",
        image:
          "gi.svg",
      },
      {
        name: "Figma",
        image:
          "fig.svg",
      },
      {
        name: "Netlify",
        image:
          "netli.svg",
      },
      
      {
        name: "Postman",
        image:
          "post.svg",
      },
      {
        name: "Insomnia",
        image:
          "insom.svg",
      },
      
      {
        name: "VS Code",
        image:
          "vs.svg",
      },
    ],
  },
];
  
 
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      link:"https://github.com/Rushikeshp2002/"
    },
    {
      id: 2,
      img: "/twit.svg",
      link:"https://x.com/Rushikesh_dev",
    },
    {
      id: 3,
      img: "/link.svg",
      link:"https://www.linkedin.com/in/rushikeshp2002/",
    },
  ];



  export const experiences = [
    {
      id: 0,
      img: "sppu.jpeg",
      role: "Bachelor Of Computer Engineering",
      company: "Ajeenkya D Y Patil School Of Engineering And Technology",
      date: "Aug 2020 - June 2024",
      desc: "Began my CS engineering journey at ADYPU",
      skills: [
        "C++",
        "DSA",
        "OOPS",
        "DBMS",
        
      ],
     
    },
    {
      id: 1,
      img: "GDSC.png",
      role: "30 Days of cloud - GDSC",
      company: "GDSC - Dr. D Y Patil Institute of Technology, PCMC,Maharashtra",
      date: "Sep 2022 - Oct 2022",
      desc: "Completed a 30-day BootCamp on Google Cloud Platform, focusing on hands-on labs covering cloud infrastructure, data storage, and serverless computing, enhancing practical cloud expertise.",
      skills: [
        "Cloud",
        "GCP",
        "Shell",
        "Shell",
        "CI/CD",
        "Jenkins",
      ],
     
    },
    {
      id: 2,
      img: "SIH2.webp",
      role: "Front End Developer",
      company: "Smart India Hackathon 2022",
      date: "Aug 2022,Coimbatore",
      desc: "Our team of six was honored as finalists at SIH 2022 for developing an emergency SOS application tailored for the Hearing Disabled community.",
      skills: [
        "HTML",
        "CSS",
        "Javascript",
        "BootStrap",
        "Springboot",
        "SQL",
        "IOT"
        
      ],
    },
    {
      id: 3,
      img: "lb.webp",
      role: "Web Developer Intern",
      company: "Laundry Buddy",
      date: "April 2023 - May 2023",
      desc: "Developed front-end components with React, built Node.js APIs, managed client projects, created UI designs with Figma, and resolved over 100 bugs during internship",
      skills: [
        "Reactjs",
        "Redux",
        "Javascript",
        "Figma",
        "Nodejs",
        "TailwindCSS",
        
      ],
    },
    {
      id: 4,
      img: "flip.png",
      role: "Team Lead | Front End Dev",
      company: "Fiplart Grid Hackathon 5.0",
      date: "June 2023 - Aug2023",
      desc: "Led a team of three in Flipkart Grid 5.0 Hackathon, advancing to Level 2 after clearing two rounds of tests in Level 1. Developed a recommendation system using collaborative filtering.",
      skills: [
        "Reactjs",
        "Redux",
        "TailwindCSS",
        "Framar Motion",
        "Django",
        "MySQL",
        "Machine Learning",
      ],
    },

  ];