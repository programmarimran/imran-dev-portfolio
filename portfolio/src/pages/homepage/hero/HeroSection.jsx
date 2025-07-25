import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import myPhoto from "../../../assets/heroimage.jpg";

const HeroSection = () => {
  return (
    <section className="max-h-[1000px] my-12 px-6 md:px-16 py-12 rounded-2xl flex flex-col-reverse md:flex-row items-center justify-between gap-10  text-white">
      {/* Left Content */}
      <div className="w-full md:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Hi, I'm <span className="text-primary">Md Imran Hasan</span>
        </h1>

        <h2 className="text-xl font-medium text-gray-300">
          MERN Stack Developer | React Specialist
        </h2>

        <div className="mt-1">
          <img
            src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=22&duration=4000&pause=1000&color=FFFFFF&width=550&lines=Assalamu+Alaikum+👋+I'm+Imran+Hasan;Passionate+MERN+Stack+Developer;React+%7C+Node+%7C+MongoDB+%7C+Express;Problem+Solver+%7C+Team+Player"
            alt="Typing Animation"
          />
        </div>

        <p className="text-base text-gray-300 leading-relaxed">
          I design and develop modern web applications using the MERN stack.
          Passionate about building scalable solutions with clean UI and
          efficient backend.
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-10 mt-2">
          <a
            href="https://github.com/programmarimran"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-primary"
          >
            <FaGithub size={34} />
          </a>
          <a
            href="https://www.linkedin.com/in/programmarimran/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-primary"
          >
            <FaLinkedin size={34} />
          </a>
          <a
            href="https://x.com/imranhasan72751"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-primary"
          >
            <FaTwitter size={34} />
          </a>
        </div>

        {/* Resume Button */}
        <div className="mt-4">
          <a
            href="https://drive.google.com/file/d/1vXu69-GoyTvlJS1GbMuUHi2uamKpx_8K/view"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary border-none bg-gradient-to-r from-indigo-500 to-primary hover:from-primary/50 hover:to-indigo-500 gap-2"
          >
            <FiDownload /> Download Resume
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={myPhoto}
          alt="Md Imran Hasan"
          className=" w-64 h-64 md:w-94 md:h-94 rounded-full border-4 border-primary object-cover shadow-lg"
        />
      </div>
    </section>
  );
};

export default HeroSection;
