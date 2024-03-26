const info = {
  main: {
    name: "Anmol Arora",
    description:
      "I am a software engineer with expertise in full-stack web development. I have experience in building scalable, secure and reliable web applications using various frameworks and technologies. I enjoy solving complex problems and learning new skills. I am passionate about creating high-quality code that follows best practices and industry standards.",
    role: "Software Engineer",
    photo: "./Anmol.jpeg",
    email: "anmol.arora8991@gmail.com",
    tracking_id: "",
  },

  socials: {
    github: "https://github.com/Anmol8991",
    linkedin: "https://www.linkedin.com/in/anmol-arora-572945188/",
  },

  skills: {
    languages: {
      description:
        "I possess proficient expertise in a diverse range of programming languages including Python, JavaScript, C, TypeScript and SQL",
      image:
        "https://skillicons.dev/icons?i=py,javascript,c,typescript,mysql,java&perline=6&theme=",
    },
    frameworks: {
      description:
        "Experienced in a versatile tech stack, including React, Express.js, Node.js, Bootstrap, Tailwind CSS and React-Native",
      image:
        "https://skillicons.dev/icons?i=react,express,nodejs,bootstrap,tailwind&perline=6&theme=",
    },
    tools: {
      description:
        "I am well-versed in utilizing various tools and platforms to enhance the development process, including Git, Github, Netlify, AWS and Postman.",
      image:
        "https://skillicons.dev/icons?i=git,github,netlify,aws,postman,0&perline=6&theme=",
    },
  },

  projects: [
    {
      title: "User Level Thread and Memory Management",
      description: `● Implemented a user-level thread library, featuring pThread mutexes to access critical sections, and a scheduler with policies including pre-emptive SJF and 4-Level MLFQ.
       ● Designed user-level page table, translating 32-bit virtual addresses to physical addresses through a 4-page multi-level structure.
       ● Optimized address translation through direct-mapped Transition Lookaside Buffer (TLB).`,
      technologies: "https://skillicons.dev/icons?i=git,c,vim,linux,0",
      github:
        "https://github.com/Anmol8991/CS518_User_Level_Thread_Library_and_Scheduler",
      link: "https://github.com/Anmol8991/CS518_User_Level_Thread_Library_and_Scheduler",
    },

    {
      title: "Transit Pay",
      description: `● Developed an autopay system for NJ Transit, employing RFID technology to monitor passenger itineraries and eliminating the need for manual fare collection, estimated to reduce fare evasion by 25%.
       ● Created an image recognition model with a 97% accuracy rate to track passenger counts and triggering conductor checks in case of discrepancies, bolstering system security.`,
      technologies:
        "https://skillicons.dev/icons?i=nodejs,express,kotlin,mongodb,py&perline=5&theme=",
      github: "https://github.com/Anmol8991/Transit_Pay",
      link: "https://devpost.com/software/transitpay",
    },

    {
      title: "Ghosts in a Maze",
      description: `● Developed intelligent maze-solving agents for complex grid-based (51x51) environments with blocked cells and ghost obstacles, employing diverse navigation strategies to avoid ghosts.
       ● Executed an optimal A* search with a heuristic derived from a relaxed version of the problem, and a Monte Carlo approach, accessing child node utilities by averaging the results of 100 simulations (1 for success, 0 for failure).
       ● Achieved survival rates of 76% for 5 Ghosts, 45% for 25 ghosts and 23% for 45 Ghosts.`,
      technologies:
        "https://skillicons.dev/icons?i=py,git,0,0,0&perline=5&theme=",
      github: "https://github.com/Anmol8991/ghost-in-the-maze-repo-1",
      link: "https://github.com/Anmol8991/ghost-in-the-maze-repo-1",
    },

    {
      title: "Workplace Wise",
      description:
        "● Architected and deployed an employee management tool, featuring attendance tracking, leave request processing, and secure token-based authentication using JWT, and managed 50 REST API end points for optimal functionality",
      technologies:
        "https://skillicons.dev/icons?i=react,bootstrap,express,nodejs,mysql&perline=5&theme=",
      github: "https://github.com/Anmol8991/EMT-react",
      link: "https://darling-raindrop-2ce390.netlify.app/",
    },
    {
      title: "Simulation and Analysis of Load Balancer",
      description:
        "● Simulated and performed tests on an epoll based concurrent load balancer implemented with various policies, including round-robin and fewest connections. These policies exhibited similar, efficient load distribution, managing up to 100-150 requests/second with a drop rate of around 4%.",
      technologies: "https://skillicons.dev/icons?i=py,git,0,0,0",
      github: "https://github.com/Anmol8991/CS_553_Project",
      link: "https://github.com/Anmol8991/CS_553_Project",
    },
    {
      title: "The Circle of Life ",
      description: `● Devised intelligent agents for a circular network with 50 nodes, capturing prey while evading predators; optimized agent’s decision-making by calculating optimal utilities for each state using dynamic programming method.
       ● Implemented a neural network based agent with 2 hidden layers from scratch to predict the optimal utility, with a success ratio of 97% as compared to the 100% success ratio of the utility based agent. `,
      technologies: "https://skillicons.dev/icons?i=py,git,0,0,0",
      github: "https://github.com/Anmol8991/the-circle-of-life-repo-1",
      link: "https://github.com/Anmol8991/the-circle-of-life-repo-1",
    },
  ],

  education: [
    {
      school: "Rutgers University, New Brunswick, New Jersey, USA",
      degree: "Master of Science in Computer Science",
      year: "2022 - 2024",
      image: "./rutgers.png",
    },
    {
      school: "Maharaja Agrasen Institute of Technology, GGSIPU, Delhi, India",
      degree: "Bachelor of Technology in Information Technology",
      year: "2016 - 2020",
      image: "./mail_logo.jpeg",
    },
  ],

  contact: {
    title: "Let's Get in Touch: ",
    description:
      "Thank you for your interest in getting in touch with me. If you have a specific question or comment, please feel free to email me directly at anmol.arora8991@gmail.com or connect with me on Linkedin using the link below.",
  },
  dates: [
    {
      title: "January 2023-Present",
    },
    {
      title: "May 2023-August 2023",
    },
    {
      title: "Sept 2020-July 2022",
    },
    {
      title: "May 2019-August 2019",
    },
  ],

  companyDetails: [
    {
      cardTitle: "Platinum Technologies, New York, USA",
      cardSubtitle: "Technical Consultant Intern",
      cardDetailedText: `- Built a React Native mobile application using Expo to address the issue of food wastage by providing a platform for 7 grocery stores to sell surplus food at discounted rates.
      - Enhanced state management for features like inventory management, user cart and user authentication using Redux, while also spearheading the deployment of the frontend application onto the Expo App Store and contributing to the backend deployment on an AWS EC2 instance.`,
    },

    {
      cardTitle: "vDOIT, Gurgaon, India",
      cardSubtitle: "Full Stack Developer Intern",
      cardDetailedText: `- Designed user-friendly web pages and optimized web functionality by implementing Redux for efficient state management and by employing React Query, resulting in a 20% reduction in load time.
        - Decoupled services by setting up a mock server to mock responses of downstream dependent services, reducing delivery time by 65%.
        - Utilized AWS Lambda, API Gateway, and Python to deploy the mock server, matching requests and extracting responses based on best-match criteria, handling 10,000 daily requests.`,
    },
    {
      cardTitle: "Ajeevi Technologies, Noida, India",
      cardSubtitle: "Full Stack Developer",
      cardDetailedText: `- Engineered dispatch optimization system of on-road units for National Highway Authority of India (NHAI), through real-time geolocation detection of accident-involved vehicles, enhancing the response time for emergency incidents by 75%.
        - Collaborated with NHAI within a structured 3-week sprint system to conceptualize business requirements, create a strategic roadmap, and integrate new features, while adhering to agile principles.
        - Managed a real-time database encompassing 5,000+ toll plazas and ambulances, leveraging MongoDB for data storage and retrieval.
        - Automated SLA reporting and billing processes, resulting in a 40% increase in transparency`,
    },
    {
      cardTitle: "Aricent, Gurgaon, India",
      cardSubtitle: "Software Intern",
      cardDetailedText: `- Revamped an Automated Data Preprocessing Tool for cleaning and visualization using REST API to improve the efficiency of employees in data extraction.
      - Incorporated different Feature Selection Techniques and Dimensional Reduction algorithms to implement the tool and improved data processing accuracy by 40%.`,
    },
  ],

  footer: "© 2024 Anmol Arora. All Rights Reserved",
};

export default info;
