import React from "react";
import { Link } from "react-router-dom";


const ProjectCard = ({ project }) => {
    const {image, title, description, _id} = project
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl portfolio">
      <figure>
        <img src={image} alt="My Portfolio" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-white justify-between">{title}
        <Link to={`/portfolio/${_id}`}className="text-warning text-sm font-normal">Details</Link>
        </h2>
        <p>{description}</p>
        
      </div>
    </div>
  );
};

export default ProjectCard;
