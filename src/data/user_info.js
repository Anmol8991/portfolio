const info = {
  main: {
    name: "Anmol Arora",
    description:
      "I am a software engineer with expertise in full-stack web development. I have experience in building scalable, secure and reliable web applications using various frameworks and technologies. I enjoy solving complex problems and learning new skills. I am passionate about creating high-quality code that follows best practices and industry standards.",
    role: "Software Engineer",
    photo: "./Anmol_photo1.jpeg",
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
      title: "RU Operating System",
      description: `Built 3 components of a custom operating system:
      ● Multi-Threading: Created a user-level thread library, akin to the Linux pThread library, for managing worker threads with support for scheduling policies like Pre-emptive Shortest Job First (PSJF) and Multi-Level Feedback Queue (4-level MLFQ).
      ● Memory Management: Designed a 4-level page table system to translate 32-bit virtual addresses to physical addresses, bolstered by a direct-mapped Translation Lookaside Buffer (TLB) cache to optimize translation overhead.
      ● File System: Engineered a real user-level file system (RUFS) serving as an interface between the user and a virtual disk, organizing data and indexing information on the virtual disk.`,
      technologies: "https://skillicons.dev/icons?i=git,c,vim,linux,0",
      github: "https://github.com/Anmol8991/RU_Operating_System",
      // link: "https://github.com/Anmol8991/RU_Operating_System",
    },

    {
      title: "Transit Pay",
      description: `● Developed an autopay system for NJ Transit, employing NFC radars to monitor passenger itineraries and eliminating the need for manual fare collection, estimated to reduce fare evasion by 25%.
       ● Created an image recognition model with a 97% accuracy rate to track passenger counts and triggering conductor checks in case of discrepancies, bolstering system security.`,
      technologies:
        "https://skillicons.dev/icons?i=nodejs,express,kotlin,mongodb,py&perline=5&theme=",
      github: "https://github.com/Anmol8991/Transit_Pay",
      link: "https://devpost.com/software/transitpay",
    },

    {
      title: "Pac-Man Path Expedition",
      description: `● Developed AI agent to navigate the maze-like environment, akin to classic Pacman game but with a twist, avoiding pursuit by variable ghosts, reaching from one corner to the diagonally opposite another.
       ● Implemented a Monte Carlo approach, evaluating potential next moves by simulating 100 scenarios per node. Each simulation utilized an A* Search Algorithm for pathfinding through the maze, using a heuristic based on the shortest path through the maze without any ghosts.
       ● Achieved survival rates of 76% for 5 Ghosts, 45% for 25 ghosts and 23% for 45 Ghosts.`,
      technologies:
        "https://skillicons.dev/icons?i=py,git,0,0,0&perline=5&theme=",
      github: "https://github.com/Anmol8991/Pac-Man-Path-Expedition",
      // link: "https://github.com/Anmol8991/Pac-Man-Path-Expedition",
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
      // link: "https://github.com/Anmol8991/CS_553_Project",
    },
    {
      title: "The Circle of Life ",
      description: `● Devised intelligent agents for a circular network with 50 nodes, capturing prey while evading predators; optimized agent’s decision-making by calculating optimal utilities for each state using dynamic programming method.
       ● Implemented a neural network based agent with 2 hidden layers from scratch to predict the optimal utility, with a success ratio of 97% as compared to the 100% success ratio of the utility based agent. `,
      technologies: "https://skillicons.dev/icons?i=py,git,0,0,0",
      github: "https://github.com/Anmol8991/the-circle-of-life-repo-1",
      // link: "https://github.com/Anmol8991/the-circle-of-life-repo-1",
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
      title: "June 2024-Present",
    },
    {
      title: "January 2024-April 2024",
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
      cardTitle: "Cygnus Compliance, Jersey City, USA",
      cardSubtitle: "Software Developer",
      cardDetailedText: `- Architected and developed a Docker-based microservices architecture (Django, Spark, FastAPI, Redis, Postgres), migrating from an initial monolithic Django application, reducing setup time by 60% and enabling consistent cloud/on-prem deployments.
      - Developed a LangGraph-based AI agent with modular tools like RAG, and web search to support case analysts with automated investigation, cutting review time by 35%. 
      - Built a tenant-aware Text-to-SQL agent enabling analysts to query Delta Lake in plain English, reducing SQL dependency and improving result accuracy by 25% via semantic table matching; eliminated 90% of session failures through heartbeat-managed Spark sessions.
      - Enabled context-aware retrieval in a RAG-based Research Agent by standardizing ingestion of 1,000+ compliance documents (PDF, DOCX) via modular pipelines for metadata extraction, embedding, and vector store updates`,
    },
    {
      cardTitle: "Platinum Capital Partners Inc., New York, USA",
      cardSubtitle: "Backend Developer Intern",
      cardDetailedText: `- Containerized 2 Node.js micro-services: Inventory service for store-side stock entry and Order service for processing customer reservations via a Redis queue to enable asynchronous order handling.
      - Implemented stateless JWT authentication, RBAC, and centralized error-handling middleware across services; deployed the stack using Docker Compose on a Linux VM with PostgreSQL and Redis, supporting ~600 daily API calls.`,
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
      cardDetailedText: `- Reduced data source onboarding time from 6 months to 1 month (83%) by introducing a two-layer pipeline architecture using AWS Lambda that decoupled ingestion from persistence, enabling standardized integration of 50+ financial data sources.
        - Built a UI-integrated error reporting system with a form-based chatbot and ticketing API to replace email-based issue intake; reduced client resolution time by 26% through automated routing and tracking of reported issues.
        - Developed an automated Python validation framework with rule-based verification and anomaly detection for UAT; integrated with CI/CD pipelines to identify pre-release issues, eliminating over 40 hours of product team effort per month.`,
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
