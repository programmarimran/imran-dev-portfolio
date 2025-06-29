import React from "react";

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
  img: "https://i.ibb.co/SDn2rBcp/Screenshot-2025-06-29-025401-removebg-preview.png"
}
,
  {
    name: "Vite",
    img: "https://vitejs.dev/logo.svg",
  },
];


const SkillsSection = () => {
  return (
    <section className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl text-shadow font-bold mb-8 text-center text-primary">Skills & Technologies</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {techSkills.map((tech) => (
          <div
            key={tech.name}
            className="card flex flex-col items-center p-4 bg-[#5a4f85] rounded-lg shadow hover:shadow-lg transition-shadow cursor-pointer"
          >
            <img src={tech.img} alt={tech.name} className="w-16 h-16 object-contain mb-3" />
            <p className="text-lg font-semibold">{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
