import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import myPhoto from "../../../assets/heroimage.jpg";
import DownloadFullCV from "../../../components/pdfCreator/DownloadFullCV";
import { BorderBeam } from "@stianlarsen/border-beam";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between gap-10 px-6 md:px-16 py-12  text-white">
      {/* Left content */}
      <div className="w-full md:w-1/2 flex flex-col gap-6">
      <h1 className="text-4xl md:text-3xl font-bold leading-tight text-shadow">
  Hi, I’m <span className="text-primary">Md Imran Hasan</span>
</h1>

        <h2 className="text-xl text-shadow font-medium text-gray-300">
          React & MERN Stack Developer
        </h2>

        <p className="text-base text-shadow text-gray-300">
          I build modern web apps using MongoDB, Express, React, and Node.js. I
          focus on clean UI and efficient backend to solve real-world problems.
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/programmarimran"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-primary text-xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/md-imran-hasan-664907354/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-primary text-xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/imranhasan72751"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-primary text-xl"
          >
            <FaTwitter/>
          </a>
        </div>

        {/* Resume Button */}
        <div className="relative inline-block">
          {/* Beam effect */}

          {/* Button */}
          <a
            href="/resume.pdf" 
            download
            className="relative z-10 mt-4 inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition"
          >
            <BorderBeam
              colorFrom="#800080"
              colorTo="#ffff00"
              size={200}
              duration={4}
              className="rounded-lg"
            />
            <FiDownload /> <DownloadFullCV />
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
