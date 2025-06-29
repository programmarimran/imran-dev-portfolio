import projectsData from "../../../assets/data/projects/projects";
// import ProjectCard from "../projectCard/ProjectCard";
import ProjectDetailsDEMO from "../projectsDetails/ProjectDetailsDEMO";

const Projects = () => {
  const projects = projectsData;
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-center mb-8">Projects</h1>
      {projects.map((project) => (
        <ProjectDetailsDEMO key={project.id} project={project} />
      ))}
    </div>
  );
};

export default Projects;
