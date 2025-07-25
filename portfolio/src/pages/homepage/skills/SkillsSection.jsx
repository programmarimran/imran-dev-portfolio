import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
// Example images URLs — replace with your own logo paths or URLs
const techSkills = [
  {
    name: "MongoDB",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Firebase",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg",
  },
  {
    name: "HTML5",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
  },
  {
    name: "React",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
  },
  {
    name: "JavaScript",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
  },
  {
    name: "Node.js",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express.js",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
  },
  {
    name: "Tailwind CSS",
    img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  },
  {
    name: "DaisyUI",
    img: "https://i.ibb.co/SDn2rBcp/Screenshot-2025-06-29-025401-removebg-preview.png",
  },
  {
    name: "Vite",
    img: "https://vitejs.dev/logo.svg",
  },
   {
    name: "Next.js",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
  },
];

const SkillsSection = () => {
  return (
    <section className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl text-shadow font-bold mb-8 text-center text-white">
        Skills & Technologies
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {techSkills.map((tech) => (
          <motion.div
            key={tech.name}
            initial={{ x: 30, opacity: 0 }}
             whileHover={{ scale: 1.2, y: -5 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            className="card transform  duration-300 ease-in-out  transition-shadow hover:shadow-2xl flex flex-col items-center p-4 bg-black/90  rounded-lg shadow-2xs hover:shadow-amber-400 cursor-pointer"
          >
            <img
              src={tech.img}
              alt={tech.name}
              className="w-16 h-16 shadow-2xl shadow-green-600 object-contain mb-3"
            />
            <p className="text-lg font-semibold">{tech.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
