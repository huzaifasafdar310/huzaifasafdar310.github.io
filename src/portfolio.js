/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Huzaifa Ali | AI & Backend Developer",
  description:
    "AI/Backend Developer and Co-Founder of Devnexes Digital Solutions. Focused on agentic AI systems, computer vision, and full-stack automation with Python, FastAPI, and React.",
  og: {
    title: "Huzaifa Ali Portfolio",
    type: "website",
    url: "https://huzaifasafdar310.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Huzaifa Ali",
  logo_name: "HuzaifaAli",
  nickname: "AI / Backend Developer & Co-Founder",
  subTitle:
    "AI/Backend Developer and Co-Founder of Devnexes Digital Solutions, a 2-person engineering studio that has delivered 6+ production applications for real clients. Focused on agentic AI systems, computer vision, and full-stack automation — building LLM-integrated, production-grade tools with Python, FastAPI, and React, from AI code-review pipelines to real-time video processing systems.",
  resumeLink: "/Huzaifa_Ali_Resume.pdf",
  portfolio_repository: "https://github.com/huzaifasafdar310",
  githubProfile: "https://github.com/huzaifasafdar310",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/huzaifasafdar310",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/huzaifaali",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Gmail",
    link: "mailto:huzaifasafdar310@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
];

const skills = {
  data: [
    {
      title: "Agentic AI & Computer Vision (AI/ML)",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing autonomous Agentic AI systems with smolagents, ReAct prompting, and multi-agent tool execution",
        "⚡ Building real-time Computer Vision pipelines using OpenCV and YOLOv8 for video processing and object detection",
        "⚡ Integrating cutting-edge LLMs via Anthropic Claude API, Groq/LLaMA, and custom AI code-review pipelines",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "OpenCV",
          fontAwesomeClassname: "simple-icons:opencv",
          style: {
            color: "#5C3EE8",
          },
        },
        {
          skillName: "Anthropic Claude API",
          fontAwesomeClassname: "simple-icons:anthropic",
          style: {
            color: "#D97757",
          },
        },
        {
          skillName: "Hugging Face",
          fontAwesomeClassname: "simple-icons:huggingface",
          style: {
            color: "#FFD21E",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "TensorFlow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Backend & Distributed Infrastructure",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Architecting scalable, asynchronous REST APIs and microservices using FastAPI, Flask, and Node.js",
        "⚡ Developing distributed task queues with Celery and ultra-fast in-memory caching with Redis",
        "⚡ Designing secure databases, cloud storage, and security pipelines with PostgreSQL, MongoDB, Supabase, Cloudflare R2, Semgrep & Bandit",
      ],
      softwareSkills: [
        {
          skillName: "FastAPI",
          fontAwesomeClassname: "simple-icons:fastapi",
          style: {
            color: "#009688",
          },
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "simple-icons:flask",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Node.js",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Celery",
          fontAwesomeClassname: "simple-icons:celery",
          style: {
            color: "#37814A",
          },
        },
        {
          skillName: "Redis",
          fontAwesomeClassname: "simple-icons:redis",
          style: {
            color: "#DC382D",
          },
        },
        {
          skillName: "Supabase",
          fontAwesomeClassname: "simple-icons:supabase",
          style: {
            color: "#3ECF8E",
          },
        },
        {
          skillName: "Cloudflare R2",
          fontAwesomeClassname: "simple-icons:cloudflare",
          style: {
            color: "#F38020",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
    {
      title: "Frontend & Automation Engineering",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive, high-performance web applications using React, Next.js, TypeScript, JavaScript, and Tailwind CSS",
        "⚡ Developing full-cycle desktop and browser automation systems using Selenium, PyAutoGUI, and SpeechRecognition",
        "⚡ Streamlining multimedia pipelines with FFmpeg and maintaining rigorous CI/CD standards with Git/GitHub",
      ],
      softwareSkills: [
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            color: "#3178C6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Next.js",
          fontAwesomeClassname: "simple-icons:nextdotjs",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Tailwind CSS",
          fontAwesomeClassname: "simple-icons:tailwindcss",
          style: {
            color: "#06B6D4",
          },
        },
        {
          skillName: "Selenium",
          fontAwesomeClassname: "simple-icons:selenium",
          style: {
            color: "#43B02A",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#F05032",
          },
        },
        {
          skillName: "FFmpeg",
          fontAwesomeClassname: "simple-icons:ffmpeg",
          style: {
            color: "#007808",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "GitHub",
      iconifyClassname: "simple-icons:github",
      style: {
        color: "#181717",
      },
      profileLink: "https://github.com/huzaifasafdar310",
    },
    {
      siteName: "LinkedIn",
      iconifyClassname: "simple-icons:linkedin",
      style: {
        color: "#0077B5",
      },
      profileLink: "https://www.linkedin.com/in/huzaifaali",
    },
    {
      siteName: "Hugging Face",
      iconifyClassname: "simple-icons:huggingface",
      style: {
        color: "#FFD21E",
      },
      profileLink: "https://huggingface.co/",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "The University of Faisalabad (TUF)",
      subtitle: "Bachelor of Science in Computer Science (BSCS)",
      logo_path: "tuf_logo.svg",
      alt_name: "TUF University",
      duration: "In Progress",
      descriptions: [
        "⚡ Enrolled in BS Computer Science focusing on Artificial Intelligence, Data Structures, Backend Architectures, and Computer Vision.",
        "⚡ Actively engineering production-grade Agentic AI systems, custom LLM tool-calling pipelines, and scalable microservices.",
        "⚡ Co-Founder & Lead Developer at Devnexes Digital Solutions, delivering enterprise client solutions alongside academic milestones.",
      ],
      website_link: "https://www.tuf.edu.pk/",
    },
    {
      title: "Punjab College",
      subtitle: "Intermediate in Computer Science (ICS)",
      logo_path: "punjab_college_logo.svg",
      alt_name: "Punjab College",
      duration: "2024 – 2026",
      descriptions: [
        "⚡ Studied foundational Computer Science, Mathematics, Physics, and programming principles.",
        "⚡ Built strong analytical problem-solving and software engineering fundamentals with hands-on development in Python and modern web technologies.",
      ],
      website_link: "https://pgc.edu/",
    },
  ],
};

const certifications = {
  title: "Licenses & Certifications",
  subtitle: "Verified credentials in Machine Learning and Agentic AI systems.",
  certifications: [
    {
      title: "Supervised Machine Learning: Regression and Classification",
      subtitle: "- DeepLearning.AI & Stanford Online",
      issue_date: "Issued Aug 2026",
      credential_id: "A48MRPLWQ88T",
      logo_path: "deeplearning_ai_logo.png",
      certificate_image: "cert_coursera_ml.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/records/A48MRPLWQ88T",
      alt_name: "DeepLearning.AI",
      color_code: "#00000099",
    },
    {
      title: "AI Agents Course (Fundamentals of Agents)",
      subtitle: "- Hugging Face",
      issue_date: "Issued Jul 2026",
      logo_path: "huggingface_logo.svg",
      certificate_image: "cert_huggingface_agents.png",
      certificate_link:
        "https://www.linkedin.com/in/huzaifaali-/overlay/Certifications/420074881/treasury/?profileId=ACoAAF4z2oUBet4Emylu09OQ-L5Wll9DUJb53nw",
      alt_name: "Hugging Face",
      color_code: "#FFD21E33",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Startup & Internship",
  description:
    "Co-Founder & Lead Developer at Devnexes Digital Solutions with a track record of delivering 6+ client applications, reusable FastAPI/Celery/Redis infrastructure, and AI/ML recommendation engines.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work & Leadership",
      work: true,
      experiences: [
        {
          title: "Co-Founder & Lead Developer",
          company: "Devnexes Digital Solutions",
          company_url: "https://github.com/huzaifasafdar310",
          logo_path: "devnexes_logo.svg",
          duration: "2024 – Present",
          location: "Lahore, Pakistan",
          description:
            "• Co-founded a 2-person software studio; lead full-cycle delivery of 6+ client applications from requirements gathering through architecture, development, and deployment.\n• Built reusable backend infrastructure (FastAPI, Celery, Redis) adopted across multiple client engagements, cutting new-project setup time by an estimated 40%.\n• Lead architecture decisions and code review across the ERP and video-processing product lines, setting the technical standards the team builds against.",
          color: "#3B82F6",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "AI/ML Intern",
          company: "DecodeLabs",
          company_url: "https://github.com/huzaifasafdar310",
          logo_path: "decodelabs_logo.svg",
          duration: "3-Month Internship, 2024",
          location: "Lahore, Pakistan",
          description:
            "Built a cosine-similarity recommendation engine in React as part of a 3-month AI/ML internship.",
          color: "#10B981",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Production-grade Agentic AI pipelines, LLM-integrated developer tools, high-throughput web scrapers, and video processing automation systems.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Highlights & Media",
  description:
    "Featured projects, technical implementations, and production systems.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "contactMail.png",
    description:
      "I am available for freelance projects, AI/Backend consulting, and engineering collaborations. Feel free to connect or drop me an email — I'd love to chat!",
  },
  blogSection: {
    title: "Devnexes Engineering Studio",
    subtitle:
      "Engineering studio delivering production-grade AI systems, full-stack automation, ERPs, and video processing pipelines.",
    link: "https://github.com/huzaifasafdar310",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Lahore, Punjab, Pakistan",
    locality: "Lahore",
    country: "Pakistan",
    region: "Punjab",
    postalCode: "",
    streetAddress: "Lahore",
    avatar_image_path: "address_image.svg",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+92 333 2536123",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
