import React from "react";

const AboutMe = () => {
  return (
    <div className="card max-w-md mx-auto mb-12 bg-[#5a4f85] text-gray-200 shadow-lg shadow-purple-900/50 rounded-lg">
      <div className="card-body space-y-4">
        <h2 className="text-2xl font-bold text-center text-[#d8b4fe]">
          About Me
        </h2>
        <p>
          Hello! I’m{" "}
          <span className="font-semibold text-[#d8b4fe]">
            Md Imran Hasan
          </span>
          , a passionate MERN Stack Developer based in Gazipur, Bangladesh.
        </p>
        <ul className="space-y-1">
          <li>🔭 <span className="font-medium text-[#d8b4fe]">Currently working on:</span> HireNest & Diverse Dish</li>
          <li>🌱 <span className="font-medium text-[#d8b4fe]">Learning:</span> Next.js, React Query, Firebase, JWT Auth</li>
          <li>🤝 <span className="font-medium text-[#d8b4fe]">Open to:</span> Frontend / Full-stack developer roles</li>
          <li>📬 <span className="font-medium text-[#d8b4fe]">Email:</span> programmarimran@gmail.com</li>
          <li>🌍 <span className="font-medium text-[#d8b4fe]">Location:</span> Dhaka, Bangladesh</li>
          <li>🎓 <span className="font-medium text-[#d8b4fe]">Student at:</span> Programming Hero</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
