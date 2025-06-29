import projectsData from "../../../assets/data/projects/projects";
import ProjectCard from "../../projectsPage/projectCard/ProjectCard";

export default function ProjectSection() {
  const projects = projectsData;
  const homeProjects = projects.slice(0, 3);
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-primary mb-10">Projects</h1>
      <div className=" grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {homeProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
