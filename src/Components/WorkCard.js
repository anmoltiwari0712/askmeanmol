import React from "react";
import "./Styles/WorkCard.css";
import arrow from "./Assets/right-arrow.png";
const WorkCard = ({ imageUrl, title, description, link }) => {
  return (
    <div className="work-card">
      <div className="img-div">
        <img src={imageUrl} alt={title} className="work-image" />
      </div>
      <div className="work-details">
        <h3 className="title-w">{title}</h3>
        <p className="description-w">{description}</p>
      </div>
      <div className="learn-more-btn flex">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mr-txt"
        >
          Learn More
        </a>
        <img src={arrow} alt={title} className="right-arrow mr-txt" />
      </div>
    </div>
  );
};

export default WorkCard;
