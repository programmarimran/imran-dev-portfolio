import React from "react";
import projectsData from "../../../assets/data/projects/projects";

const Projects = () => {
  const projects = projectsData;
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-center mb-8">Projects</h1>
      {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  );
};

export default Projects;
