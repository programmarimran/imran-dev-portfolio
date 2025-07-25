// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import projectsData from "../../../assets/data/projects/projects";
import ProjectCard from "../../projectsPage/projectCard/ProjectCard";
import { useState } from "react";

export default function ProjectSection() {
  const [click, setClick] = useState(false);
  const projects = projectsData;
  const initialProjects = projects.slice(0, 3); // Show only the first 3 projects initially
  let homeProjects;
  if (click) {
    homeProjects = projects;
  } else {
    homeProjects = initialProjects;
  }
  // const homeProjects = click ? projects : initialProjects;

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Projects
      </h1>

      <div className="">
        {homeProjects.map((project, index) => (
          <ProjectCard key={project.id} index={index} project={project} />
        ))}
      </div>

      <motion.div
        initial={{ x: 30, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
        className="mt-12 flex justify-center"
      >
        <button
          onClick={() => setClick(!click)}
          className="bg-gradient-to-r from-indigo-500 to-primary hover:from-primary/50 hover:to-indigo-500 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg transition duration-300"
        >
          {click ? "Hide Projects" : "View All Projects"}
        </button>
      </motion.div>
    </div>
  );
}
