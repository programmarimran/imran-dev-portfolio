import { Link } from "react-router";

const ProjectDetailsDEMO = ({project}) => {
 
  const {
    title,
    description,
    features,
    techStack,
    image,
    liveLink,
    githubLink,
    id,
  } = project;
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
              <div key={idx} className="badge badge-outline">
                {tech}
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-3">
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
          >
            Live
          </a>
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary bg-gray-900 border-none shadow-none btn-sm"
          >
            GitHub
          </a>
          <Link
            to={`/details/${id}`}
            className="btn btn-primary btn-outline border-2 hover:bg-primary bg-[#15803d20] shadow text-white btn-sm"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsDEMO;
