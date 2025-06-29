// import ProjectCard from "./ProjectCard";

import ProjectCard from "./ProjectCard";


// const ProjectSection=()=> {
//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-2xl font-bold text-center mb-8">Projects</h1>
//       <ProjectCard />
//       {/* You can add more <ProjectCard /> here */}
//     </div>
//   );
// }
// export default  ProjectSection

// ************************************************************
// src/pages/Projects.jsx

// import projects from "../data/projects.json"; // if you saved as JSON
// or define inline:

const projects = [
  {
    id: 1,
    title: "HireNest",
    description: "A web app that helps users generate stunning portfolios using AI. Features include live preview, custom themes, and export to PDF.",
    features: [
      "AI-powered content suggestions",
      "Export to PDF & HTML",
      "Customizable themes"
    ],
    techStack: ["React", "Tailwind CSS", "DaisyUI", "OpenAI API"],
    image: "https://i.ibb.co/m7hkvnK/Screenshot-2025-06-25-145347.png",
    liveLink: "https://hire-nest-by-imran.web.app/",
    githubLink: "https://github.com/programmarimran/HireNest-client-assignment_11",
    detailsLink: "/projects/1"
  },
  {
    id: 2,
    title: "DiverDish",
    description: "A minimalistic task tracker to keep track of daily tasks, with reminders and dark mode support.",
    features: [
      "Real-time notifications",
      "Dark/light mode toggle",
      "Task categories"
    ],
    techStack: ["React", "Redux", "Tailwind CSS", "Firebase"],
   image: "https://i.ibb.co/BVQr3GLY/Screenshot-2025-06-25-114535.png",
    liveLink: "https://live-site.com",
    githubLink: "https://github.com/username/project",
    detailsLink: "/projects/2"
  },
  {
    id: 3,
    title: "QuiroBox",
    description: "A minimalistic task tracker to keep track of daily tasks, with reminders and dark mode support.",
    features: [
      "Real-time notifications",
      "Dark/light mode toggle",
      "Task categories"
    ],
    techStack: ["React", "Redux", "Tailwind CSS", "Firebase"],
   image: "https://i.ibb.co/7Nxt2pZS/Screenshot-2025-06-25-162822.png",
    liveLink: "https://live-site.com",
    githubLink: "https://github.com/username/project",
    detailsLink: "/projects/2"
  },
];

export default function ProjectSection() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-center mb-8">Projects</h1>
      {projects.map(project => (
        <ProjectCard
          key={project.id}
          {...project}
        />
      ))}
    </div>
  );
}
