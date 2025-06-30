import React from "react";
import { Link } from "react-router";

const ProjectCardDEMO = ({ project }) => {
  const { description,techStack, image, title,id } = project;
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body rounded-b-lg bg-[#5a4f85]">
        <h2 className=" text-3xl font-bold mx-auto">{title}</h2>
        <p>{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
            {techStack.map((tech, idx) => (
              <div key={idx} className="badge badge-outline">
                {tech}
              </div>
            ))}
          </div>
        <div className="card-actions justify-end">
          <Link to={`/details/${id}`}>
          <button className="btn btn-primary">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCardDEMO;
