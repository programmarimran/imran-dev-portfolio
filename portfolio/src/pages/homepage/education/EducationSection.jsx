import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const EducationSection = () => {
  const latestEducation = {
    degree: "B.S.S. (Honours), Political Science",
    institution: "Abdul Awal University College (NU Affiliated)",
    year: "2022 – Present",
    image:
      "https://i.ibb.co/g2vTBVD/Whats-App-Image-2025-06-24-at-23-34-28-3f6e0c5e.jpg",
  };

  const programmingCourse = {
    platform: "Programming Hero",
    track: "Complete Web Development with MERN Stack",
    duration: "March 2024 – Present",
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center  mb-10">
        Education
      </h2>

      <div className="flex flex-col  md:flex-row-reverse  items-center justify-center  p-6 rounded-xl shadow-lg">
        {/* Image Animation */}
        <motion.img
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          src={latestEducation.image}
          alt="Education"
          className="w-64 h-64 rounded-xl object-cover shadow-lg"
        />

        {/* Text Animation */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex-1 space-y-4 text-white"
        >
          <div>
            <h3 className="text-xl font-bold">{latestEducation.degree}</h3>
            <p className="text-sm text-gray-300">
              {latestEducation.institution}
            </p>
            <p className="text-sm text-gray-400">{latestEducation.year}</p>
          </div>

          <div>
            <p className="font-medium mt-2">Relevant Courses:</p>
            <h4 className="text-lg font-semibold mt-6">
              {programmingCourse.platform} Course
            </h4>
            <p className="text-sm text-gray-300">{programmingCourse.track}</p>
            <p className="text-sm text-gray-400">
              {programmingCourse.duration}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
