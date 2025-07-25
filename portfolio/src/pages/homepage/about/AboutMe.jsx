import { FaCode, FaLaptopCode, FaTools } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const cardVariants = {
  offscreen: { opacity: 0, y: 50 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", bounce: 0.3, duration: 0.6 },
  },
};

const About = () => {
  return (
    <section id="about" className="py-16 px-6 md:px-20  text-white">
      <div className="max-w-5xl mx-auto">
        {/* Title with motion */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-6 text-white text-center"
        >
          About Me
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-300 text-lg leading-relaxed mb-10 text-center"
        >
          Hello! I'm{" "}
          <span className="font-semibold text-white">Md Imran Hasan</span>, a
          passionate MERN Stack Developer from Bangladesh. I specialize in
          building dynamic, responsive web applications using React, Node.js,
          Express, and MongoDB. I love solving real-world problems through
          clean UI and efficient backend systems.
        </motion.p>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {/* Card 1 */}
          <motion.div
            variants={cardVariants}
             whileHover={{ scale: 1.05, y: -5 }}
            initial="offscreen"
            whileInView="onscreen"
            className="p-6 rounded-2xl bg-base-200 shadow-md hover:shadow-xl transition"
          >
            <FaCode className="text-primary text-3xl mb-3" />
            <h3 className="text-xl font-semibold mb-2">Frontend</h3>
            <p className="text-gray-400 text-sm">
              Expert in Next.js, React.js, HTML, CSS, Tailwind, and responsive design.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={cardVariants}
            initial="offscreen"
            whileInView="onscreen" 
             whileHover={{ scale: 1.05, y: -5 }}
            transition={{ delay: 0.1 }}
            className="p-6 rounded-2xl bg-base-200 shadow-md hover:shadow-xl transition"
          >
            <FaLaptopCode className="text-primary text-3xl mb-3" />
            <h3 className="text-xl font-semibold mb-2">Backend</h3>
            <p className="text-gray-400 text-sm">
              Node.js, Express, MongoDB with secure REST API & Clean code MVC pattern development.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            variants={cardVariants}
            initial="offscreen"
             whileHover={{ scale: 1.05, y: -5 }}
            whileInView="onscreen"
            transition={{ delay: 0.2 }}
            className="p-6 rounded-2xl bg-base-200 shadow-md hover:shadow-xl transition"
          >
            <FaTools className="text-primary text-3xl mb-3" />
            <h3 className="text-xl font-semibold mb-2">Tools</h3>
            <p className="text-gray-400 text-sm">
              Git, VS Code, Firebase, Figma, Vercel, Netlify, and modern dev tools.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
