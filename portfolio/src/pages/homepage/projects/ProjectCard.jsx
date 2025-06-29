// // src/components/ProjectCard.jsx
// import { Link } from "react-router";

// const ProjectCard=() =>{
//   return (
//     <div className="flex flex-col md:flex-row bg-base-100 shadow-xl rounded-box overflow-hidden p-4 mb-6">
//       {/* Left: Image */}
//       <figure className="md:w-1/2">
//         <img
//           src="https://via.placeholder.com/600x400"
//           alt="Project screenshot"
//           className="w-full h-full object-cover rounded-box"
//         />
//       </figure>

//       {/* Right: Content */}
//       <div className="md:w-1/2 p-4 flex flex-col justify-between">
//         <div>
//           <h2 className="text-xl font-bold mb-2">Project Title</h2>
//           <p className="mb-4">
//             Brief description Brief description Brief description Brief
//             description Brief description Brief description.
//           </p>
//           <ul className="list-disc list-inside mb-4">
//             <li>Main feature 1</li>
//             <li>Main feature 2</li>
//             <li>Main feature 3</li>
//           </ul>

//           <div className="flex flex-wrap gap-2 mb-4">
//             <div className="badge badge-outline">React</div>
//             <div className="badge badge-outline">Tailwind</div>
//             <div className="badge badge-outline">DaisyUI</div>
//             <div className="badge badge-outline">API</div>
//           </div>
//         </div>

//         <div className="flex gap-3">
//           <a href="https://live-link.com" target="_blank" className="btn btn-success btn-sm">
//             Live
//           </a>
//           <a href="https://github.com/repo" target="_blank" className="btn btn-primary btn-sm">
//             GitHub
//           </a>
//           <Link to="/details" className="btn btn-secondary btn-sm">
//             Details
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default ProjectCard

// **************************************
// src/components/ProjectCard.jsx
import { Link } from "react-router";

export default function ProjectCard({
  title,
  description,
  features,
  techStack,
  image,
  liveLink,
  githubLink,
  detailsLink
}) {
  return (
    <div className="flex flex-col md:flex-row bg-[#5a4f85] shadow-xl rounded-box overflow-hidden p-4 mb-6">
      <figure className="md:w-1/2">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-box"
        />
      </figure>

      <div className="md:w-1/2 p-4 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <p className="mb-4">{description}</p>
          <ul className="list-disc list-inside mb-4">
            {features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2 mb-4">
            {techStack.map((tech, idx) => (
              <div key={idx} className="badge badge-outline">{tech}</div>
            ))}
          </div>
        </div>
        <div className="flex gap-3">
          <a href={liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
            Live
          </a>
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary bg-gray-900 border-none shadow-none btn-sm">
            GitHub
          </a>
          <Link to={detailsLink} className="btn btn-primary btn-outline border-2 hover:bg-primary bg-[#15803d20] shadow text-white btn-sm">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}
