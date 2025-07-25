import projectsData from "../../../assets/data/projects/projects";
import ProjectCard from "../../projectsPage/projectCard/ProjectCard";
export default function ProjectSection() {
  const projects = projectsData;
  const homeProjects = projects.slice(0, 3);
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-primary mb-10">Projects</h1>
      <div className=" ">
        {homeProjects.map((project,index) => (
          <ProjectCard key={project.id} index={index} project={project} />
        ))}
      </div>
    </div>
  );
}
