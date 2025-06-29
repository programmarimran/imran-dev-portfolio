import React from "react";
import ParticlesBackground from "../../../components/utilits/particlesBackground/ParticlesBackground";

const AboutMe = () => {
  return (
    <div className="card max-w-md mb-12 mx-auto bg-[#5a4f85] text-gray-200 shadow-lg shadow-purple-900/50 rounded-lg">
       <ParticlesBackground />
      <div className="card-body">
        <h2 className="card-title text-center text-[#d8b4fe] text-2xl font-bold mb-4 mx-auto">
          About Me
        </h2>
        <p>
          Hello! I’m{" "}
          <span className="font-semibold text-[#d8b4fe]">Md Imran Hasan</span>,
          a passionate MERN Stack Developer based in Gazipur, Bangladesh.
        </p>
        <p className="mt-3">
          I specialize in building scalable and efficient web applications with
          React, Node.js, Express.js, and MongoDB. Skilled in UI/UX design using
          Tailwind CSS and DaisyUI.
        </p>
        <p className="mt-3">
          Outside coding, I create content on Facebook & YouTube and enjoy
          studying the Qur'an.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;

