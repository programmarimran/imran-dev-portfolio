import React from "react";
import { Link, useParams } from "react-router";
// import projectsData from "../../assets/data/projectsData";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import projectsData from "../../assets/data/projects/projects";
import ScrollToTopButton from "../../components/ScrollToTopButton/ScrollToTopButton";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectsData.find((proj) => proj.id === Number(id));

  if (!project)
    return (
      <div className=" flex flex-col items-center gap-12">
        <h1 className="text-center mt-10">Project not found.</h1>
        <Link
          to={-1}
          className="inline-flex items-center mx-auto gap-2 px-5 py-2 bg-purple-600 hover:bg-purple-700 transition rounded-md text-white font-medium"
        >
          <FaArrowLeft />Go Back 
        </Link>
      </div>
    );

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
    <div className="max-w-6xl mx-auto px-4 py-10 text-white">
      {/* Navigation */}
      <aside className="mb-8 md:flex flex-wrap sticky top-16  gap-3  z-50   md:top-22  items-center md:justify-center">
        <Link to={-1}>
          <button className=" btn btn-primary">
            <FaCircleArrowLeft /> Go Back
          </button>
        </Link>
        {sections.map((sec, idx) => (
          <button
            key={idx}
            onClick={() => scrollToSection(sec.replace(/\s/g, ""))}
            className="bg-white/10 hidden md:flex  hover:bg-purple-700 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm transition-all duration-200"
          >
            {sec}
          </button>
        ))}
      </aside>

      {/* Reusable Section Wrapper */}
      {/** Custom Component or map later if preferred **/}

      {/* Overview */}
      <motion.section
        id="Overview"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-lg mb-10 space-y-4"
      >
        <h1 className="text-4xl font-bold text-primary-content">
          {project.title}
        </h1>
        <p className="text-white/90">{project.longDescription}</p>
        <div className="space-x-4">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-green-300 hover:text-green-400"
          >
            🔗 Live Site
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-300 hover:text-blue-400"
          >
            💻 GitHub
          </a>
        </div>
      </motion.section>

      {/* Features */}
      <motion.section
        id="Features"
        initial={{ x: -25, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-lg mb-10"
      >
        <h2 className="text-3xl font-semibold mb-4 text-primary-content">
          🚀 Features
        </h2>
        <ul className="list-disc list-inside space-y-1 text-white/90">
          {project.features.map((feature, i) => (
            <li key={i}>{feature}</li>
          ))}
        </ul>
      </motion.section>

      {/* Tech Stack */}
      <motion.section
        id="TechStack"
        initial={{ x: 25, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-lg mb-10"
      >
        <h2 className="text-3xl font-semibold mb-4 text-primary-content">
          🛠 Tech Stack
        </h2>
        <div className="flex flex-wrap gap-3">
          {project.techStack.map((tech, i) => (
            <span
              key={i}
              className="bg-white/20 text-white px-4 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.section>

      {/* Challenges */}
      <motion.section
        id="Challenges"
        initial={{ y: 25, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-lg mb-10"
      >
        <h2 className="text-3xl font-semibold mb-4 text-primary-content">
          ⚔️ Challenges & Solutions
        </h2>
        <div className="space-y-4">
          {project.challenges.map((challenge, i) => (
            <div key={i} className="text-white/90">
              <p className="font-semibold">🔹 {challenge}</p>
              <p className="ml-4 text-sm text-green-200">
                ✅ {project.solutions[i]}
              </p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Future Plans */}
      <motion.section
        id="FuturePlans"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-lg mb-10"
      >
        <h2 className="text-3xl font-semibold mb-4 text-primary-content">
          📈 Future Plans
        </h2>
        <ul className="list-disc list-inside space-y-1 text-white/90">
          {project.futurePlans.map((plan, i) => (
            <li key={i}>{plan}</li>
          ))}
        </ul>
      </motion.section>

      {/* Screenshots */}
      <motion.section
        id="Screenshots"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-lg mb-10"
      >
        <h2 className="text-3xl font-semibold mb-4 text-primary-content">
          🖼 Screenshots
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {project.screenshots.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Screenshot ${i + 1}`}
              className="rounded-xl shadow-md border border-white/20 hover:scale-105 transition-all duration-300"
            />
          ))}
        </div>
      </motion.section>

      {/* Scroll to top */}
      <ScrollToTopButton />
    </div>
  );
};

export default ProjectDetails;
