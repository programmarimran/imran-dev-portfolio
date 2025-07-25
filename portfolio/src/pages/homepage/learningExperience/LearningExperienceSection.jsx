import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const learningExperiences = [
  {
    title: "Complite Web Development Bootcamp",
    platform: "Programming Hero",
    duration: "Jan 2024 - Present",
    description:
      "Intensive training covering MERN stack development including React, Node.js, Express, MongoDB, Firebase, and modern frontend and backend workflows.",
  },
  {
    title: "JavaScript Advanced Concepts",
    platform: "Programming Hero",
    duration: "Sept 2024 - Present",
    description:
      "Deep dive into asynchronous JS, closures, prototypes, ES6+ features, and building scalable web applications.",
  },

];

const LearningExperienceSection = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center  mb-12">
        Learning Experience
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-10  p-8 rounded-xl shadow-lg ">
        {/* Image Side */}
        <motion.div
          className=" w-full flex-1 flex justify-center"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src="https://i.ibb.co/RkVL5DM1/mr-bochelly-IBKy-H0-V3rew-unsplash.jpg"
            alt="Learning Experience"
            className="rounded-lg shadow-lg object-cover w-full"
          />
        </motion.div>

        {/* Content Side */}
        <motion.div
          className=" flex-1 w-full space-y-6 text-white"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {learningExperiences.map((item, idx) => (
            <div key={idx} className=" p-5 rounded-lg shadow-md ">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-300 italic">
                {item.platform} | {item.duration}
              </p>
              <p className="mt-2 text-gray-200">{item.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LearningExperienceSection;
