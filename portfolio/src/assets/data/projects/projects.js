import diverDishImg1 from "../../../assets/data/screenshot/divershDish/img1.png";
import diverDishImg2 from "../../../assets/data/screenshot/divershDish/img2.png";
import diverDishImg3 from "../../../assets/data/screenshot/divershDish/img3.png";
import diverDishImg4 from "../../../assets/data/screenshot/divershDish/img4.png";
import diverDishImg5 from "../../../assets/data/screenshot/divershDish/img5.png";
import diverDishImg6 from "../../../assets/data/screenshot/divershDish/img6.png";
import diverDishImg7 from "../../../assets/data/screenshot/divershDish/img7.png";
import diverDishImg8 from "../../../assets/data/screenshot/divershDish/img8.png";

const projectsData = [
  {
    id: 1,
    title: "WorkSync",
    description:
      "An industry-grade employee management system for tracking work hours, salary requests, HR approvals, and admin control with responsive design.",
    features: [
      "Employee dashboard with workSheet and salary history",
      "HR dashboard to manage employee work hours and salary requests",
      "Admin dashboard to approve salary payments and manage users",
      "Role-based access control",
      "Public user message review system",
      "Responsive UI with Tailwind CSS and DaisyUI",
    ],
    techStack: [
      "React",
      "TanStack Query",
      "Tailwind CSS",
      "DaisyUI",
      "Node.js",
      "Express.js",
      "MongoDB",
      "MVC pattern",
      "Firebase Authentication",
    ],
    image: "https://i.ibb.co/yHmCdMQ/Screenshot-2025-07-26-023130.png",
    liveLink: "https://worksync-by-imran.web.app/",
    githubLink: "https://github.com/programmarimran/WorkSync-client-assignment_12",
    detailsLink: "/projects/1",
    longDescription: `WorkSync is a comprehensive employee management system designed for industries to efficiently manage work hours, salary approvals, and employee data. It provides tailored dashboards for Employees, HR, and Admin with robust role-based features and a clean responsive UI.`,
    challenges: [
      "Implementing secure role-based access with Firebase Authentication",
      "Syncing data efficiently with TanStack Query and MongoDB",
      "Designing responsive and user-friendly dashboards for different roles",
    ],
    solutions: [
      "Used Firebase for authentication and authorization",
      "Applied TanStack Query for real-time data fetching and caching",
      "Built modular React components with Tailwind CSS and DaisyUI",
    ],
    futurePlans: [
      "Add real-time chat for employees and HR/Admin",
      "Integrate advanced reporting and analytics",
      "Mobile app version for on-the-go management",
    ],
    screenshots: [
      "https://i.ibb.co/6vJ6SPQ/work-sync-dashboard.png",
      // অন্য স্ক্রিনশট ইউআরএলস এখানে দিতে পারেন
    ],
  },
  {
    id: 2,
    title: "HireNest",
    description:
      "A web app that helps users generate stunning portfolios using AI. Features include live preview, custom themes, and export to PDF.",
    features: [
      "AI-powered content suggestions",
      "Export to PDF & HTML",
      "Customizable themes",
      "Service booking & invoice generation",
    ],
    techStack: [
      "React",
      "Tailwind CSS",
      "DaisyUI",
      "Firebase",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Javascript(Es6)",
    ],
    image: "https://i.ibb.co/m7hkvnK/Screenshot-2025-06-25-145347.png",
    liveLink: "https://hire-nest-by-imran.web.app/",
    githubLink:
      "https://github.com/programmarimran/HireNest-client-assignment_11",
    detailsLink: "/projects/2",
    longDescription: `HireNest is a service marketplace platform where users can offer and hire various services. It features AI-powered portfolio generation with live previews, customizable themes, and PDF export. The platform supports secure user authentication and service booking with downloadable invoices.`,
    challenges: [
      "Integrating AI API smoothly with React UI",
      "Generating downloadable invoices with jsPDF",
      "Managing state and authentication securely",
    ],
    solutions: [
      "Used OpenAI API with debounce for content suggestions",
      "Implemented jsPDF for generating PDF invoices dynamically",
      "Applied Firebase Authentication and Context API for state management",
    ],
    futurePlans: [
      "Add real-time chat between service providers and clients",
      "Implement advanced AI features for smarter content generation",
      "Mobile app version",
    ],
    screenshots: [
      "https://i.ibb.co/m7hkvnK/Screenshot-2025-06-25-145347.png",
      // "https://i.ibb.co/xyz/another-hirenest-screenshot.png"
    ],
  },
  {
    id: 3,
    title: "DiverseDish",
    description:
      "A recipe app offering diverse dishes from multiple countries with search and filter features.",
    features: [
      "Recipe search & filter",
      "Add & update recipes",
      "Rating and reviews system",
      "Dark/light mode toggle",
    ],
    techStack: [
      "React",
      "Tailwind CSS",
      "DaisyUI",
      "Firebase",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Javascript(Es6)",
    ],
    image: "https://i.ibb.co/BVQr3GLY/Screenshot-2025-06-25-114535.png",
    liveLink: "https://diversedish.example.com",
    githubLink:
      "https://github.com/programmarimran/DiverseDish-client-assignment_10",
    detailsLink: "/projects/3",
    longDescription: `DiverseDish is a culinary recipe platform that showcases dishes from various countries, allowing users to explore, search, and add recipes. It includes features like rating and reviews, user authentication, and a pleasant UI with dark mode support.`,
    challenges: [
      "Managing recipe data synchronization with Firebase",
      "Implementing efficient search and filter logic",
      "Handling form updates and validations",
    ],
    solutions: [
      "Used Firebase Firestore for real-time data syncing",
      "Applied debounce and optimized filter functions",
      "Integrated React Hook Form for smooth validations",
    ],
    futurePlans: [
      "Add meal planning and grocery list features",
      "Enable social sharing of favorite recipes",
      "Support multi-language content",
    ],
    screenshots: [
      "https://i.ibb.co/BVQr3GLY/Screenshot-2025-06-25-114535.png",
      diverDishImg1,
      diverDishImg2,
      diverDishImg3,
      diverDishImg4,
      diverDishImg5,
      diverDishImg6,
      diverDishImg7,
      diverDishImg8,
    ],
  },
  {
    id: 4,
    title: "Curiobox",
    description:
      "A subscription box service delivering educational and knowledge-based materials for kids monthly or as one-time purchases.",
    features: [
      "Monthly subscription and one-time purchase options",
      "Curated educational kits with puzzles, booklets, and creative tools",
      "Parent and kid friendly UI",
      "Easy checkout and payment integration",
    ],
    techStack: ["React", "Tailwind CSS", "Javascript", "Es6", "Stripe API"],
    image: "https://i.ibb.co/7Nxt2pZS/Screenshot-2025-06-25-162822.png",
    liveLink: "https://curiobox-by-imran.web.app/",
    githubLink: "https://github.com/programmarimran/CurioBox-assignment_9",
    detailsLink: "/projects/4",
    longDescription: `Curiobox is a curated subscription service aimed at nurturing children's curiosity and learning through monthly boxes containing puzzles, booklets, and creative tools. It supports both monthly subscriptions and one-time purchases with seamless checkout.`,
    challenges: [
      "Designing an engaging UI for kids and parents",
      "Managing subscription payments securely",
      "Curating age-appropriate educational content",
    ],
    solutions: [
      "Used Tailwind CSS and DaisyUI for vibrant UI",
      "Integrated Stripe API for secure payments",
      "Collaborated with educators to select content",
    ],
    futurePlans: [
      "Add activity tracking and progress reports",
      "Introduce gift subscription options",
      "Mobile app with interactive AR features",
    ],
    screenshots: [
      "https://i.ibb.co/7Nxt2pZS/Screenshot-2025-06-25-162822.png",
      // "https://i.ibb.co/def/another-curiobox-screenshot.png",
    ],
  },
];

export default projectsData;
