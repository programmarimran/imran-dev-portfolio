import { FaCode, FaLaptopCode, FaTools } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="py-16 px-6 md:px-20  text-white">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          About Me
        </h2>

        {/* Description */}
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Hello! I'm <span className="font-semibold text-white">Md Imran Hasan</span>, a passionate MERN Stack Developer
          from Bangladesh. I specialize in building dynamic, responsive web
          applications using React, Node.js, Express, and MongoDB. I love solving
          real-world problems through clean UI and efficient backend systems.
        </p>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="p-6 rounded-xl bg-base-200 shadow-md hover:shadow-lg transition">
            <FaCode className="text-primary text-3xl mb-3" />
            <h3 className="text-xl font-semibold mb-2">Frontend</h3>
            <p className="text-gray-400 text-sm">
              Expert in Next.js, React.js, HTML, CSS, Tailwind, and responsive design.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-base-200 shadow-md hover:shadow-lg transition">
            <FaLaptopCode className="text-primary text-3xl mb-3" />
            <h3 className="text-xl font-semibold mb-2">Backend</h3>
            <p className="text-gray-400 text-sm">
              Node.js, Express, MongoDB with secure REST API & Clean code MVC pattern development.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-base-200 shadow-md hover:shadow-lg transition">
            <FaTools className="text-primary text-3xl mb-3" />
            <h3 className="text-xl font-semibold mb-2">Tools</h3>
            <p className="text-gray-400 text-sm">
              Git, VS Code, Firebase, Figma,Vercel, Netlify, and modern dev tools.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
