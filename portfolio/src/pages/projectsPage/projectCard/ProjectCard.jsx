import { Link } from "react-router";

const ProjectCard = ({ project, index }) => {
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

  const isEven = index % 2 === 0;

  return (
    <div
      data-aos-anchor-placement="center-bottom"
      className={`flex flex-col md:flex-row gap-4 ${
        isEven ? "" : "md:flex-row-reverse"
      } shadow-xl rounded-box overflow-hidden p-4 mb-6`}
    >
      <figure
        data-aos={isEven ? "fade-up" : "fade-down"}
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        data-aos-duration="5000"
        className="md:w-1/2"
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-box"
        />
      </figure>

      <div
        data-aos={isEven ? "fade-down" : "fade-up"}
        data-aos-offset="300"
        data-aos-duration="5000"
        data-aos-easing="ease-in-sine"
        className="md:w-1/2 p-4 flex flex-col justify-between"
      >
        <div>
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <p className="mb-4 hidden lg:flex">{description}</p>
          <ul className="list-disc hidden lg:flex flex-col list-inside mb-4">
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

export default ProjectCard;
