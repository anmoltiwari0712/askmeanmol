import React from "react";
import "./Styles/ProjectCard.css";
// projects wala card hai ye

const ProjectCard = ({ title, description, imageUrl, link }) => {
  return (
    <div className="project-card">
      <img src={imageUrl} alt={title} className="project-image" />
      <div className="project-details">
        <h3 className="title">{title}</h3>
        <p className="description">{description}</p>
      </div>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <button className="link-btn">View Project</button>
      </a>
    </div>
  );
};

export default ProjectCard;
