import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import myPhoto from "../../../assets/heroimage.jpg"

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between gap-10 px-6 md:px-16 py-12 bg-gradient-to-br from-[#1e1e2f] to-[#3f3f64] text-white">
      {/* Left content */}
      <div className="w-full md:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl md:text-3xl font-bold leading-tight">
          Hi, I’m <span className="text-primary">Md Imran Hasan</span>
        </h1>
        <h2 className="text-xl font-medium text-gray-300">
          React & MERN Stack Developer
        </h2>
        {/* <p className="text-base text-gray-300">
          I build scalable and modern web applications using MongoDB, Express, React, and Node.js.
          My goal is to create clean, user-friendly interfaces and efficient backend services that solve real-world problems.
        </p> */}
        <p className="text-base text-gray-300">
  I build modern web apps using MongoDB, Express, React, and Node.js. 
  I focus on clean UI and efficient backend to solve real-world problems.
</p>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/your-github" // আপনার GitHub লিংক দিন
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-primary text-xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/your-profile" // আপনার LinkedIn লিংক দিন
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-primary text-xl"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Resume Button */}
        <div>
          <a
            href="/resume.pdf" // আপনার resume path দিন
            download
            className="mt-4 inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition"
          >
            <FiDownload /> Download Resume
          </a>
        </div>
      </div>

      {/* Right image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={myPhoto}
          alt="Md Imran Hasan"
          className="w-64 h-64 rounded-full border-4 border-primary object-cover shadow-lg"
        />
      </div>
    </section>
  );
};

export default HeroSection;
