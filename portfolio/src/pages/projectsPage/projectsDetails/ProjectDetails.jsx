import React from "react";
import { useParams } from "react-router";
// import projectsData from "../../assets/data/projectsData";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import projectsData from "../../../assets/data/projects/projects";
import ScrollToTopButton from "../../../components/ScrollToTopButton/ScrollToTopButton";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectsData.find((proj) => proj.id === Number(id));

  if (!project)
    return <div className="text-center mt-10">Project not found.</div>;

  const sections = [
    "Overview",
    "Features",
    "Tech Stack",
    "Challenges",
    "Future Plans",
    "Screenshots",
  ];

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Sidebar Navigation */}
      <aside className="mb-6 flex flex-wrap gap-2 justify-center md:justify-start">
        {sections.map((sec, idx) => (
          <button
            key={idx}
            onClick={() => scrollToSection(sec.replace(/\s/g, ""))}
            className="bg-purple-100 hover:bg-purple-200 text-purple-800 px-4 py-1 rounded-full text-sm"
          >
            {sec}
          </button>
        ))}
      </aside>

      {/* Overview Section */}
      <motion.section
        id="Overview"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="space-y-4 mb-12"
      >
        <h1 className="text-3xl font-bold">{project.title}</h1>
        <p className="text-gray-700">{project.longDescription}</p>
        <div className="space-x-4">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Live Site
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            GitHub
          </a>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        id="Features"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-semibold mb-2">Features</h2>
        <ul className="list-disc list-inside text-gray-800 space-y-1">
          {project.features.map((feature, i) => (
            <li key={i}>{feature}</li>
          ))}
        </ul>
      </motion.section>

      {/* Tech Stack Section */}
      <motion.section
        id="TechStack"
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-semibold mb-2">Tech Stack</h2>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech, i) => (
            <span
              key={i}
              className="bg-gray-200 px-3 py-1 rounded-full text-sm text-gray-700"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.section>

      {/* Challenges & Solutions Section */}
      <motion.section
        id="Challenges"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-semibold mb-2">Challenges & Solutions</h2>
        <div className="space-y-4">
          {project.challenges.map((challenge, i) => (
            <div key={i}>
              <p className="font-medium">🔹 Challenge: {challenge}</p>
              <p className="ml-4 text-sm text-gray-600">
                ✅ Solution: {project.solutions[i]}
              </p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Future Plans Section */}
      <motion.section
        id="FuturePlans"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-semibold mb-2">Future Plans</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          {project.futurePlans.map((plan, i) => (
            <li key={i}>{plan}</li>
          ))}
        </ul>
      </motion.section>

      {/* Screenshot Gallery Section */}
      <motion.section
        id="Screenshots"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-2xl font-semibold mb-2">Screenshots</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {project.screenshots.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Screenshot ${i + 1}`}
              className="rounded-lg shadow-md"
            />
          ))}
        </div>
      </motion.section>
      {/* scrool to top  */}
      <ScrollToTopButton></ScrollToTopButton>
    </div>
  );
};

export default ProjectDetails;
