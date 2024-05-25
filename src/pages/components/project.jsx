// src/Project.js
import React from "react";
import "../../styles/Project.module.css";

const Project = ({ id, title, description, demoLink, imageSrc, gitUrl }) => {
  return (
    <div key={id} className="project">
      <div className="image">
        <a href={demoLink}>
          <img src={imageSrc} alt={title} />
        </a>
      </div>
      <div className="title">
        <strong>{title}</strong>
        <br />
        {description}
        <button>
            <a className="git-color" href={gitUrl}>
            (Git)
            </a>
        </button>
      </div>
    </div>
  );
};

export default Project;
