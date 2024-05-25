// src/Project.js
import React from "react";
import "../../styles/Project.module.css";
import styles from "../../styles/Project.module.css";

const Project = ({ id, title, description, demoLink, imageSrc, gitUrl }) => {
  return (
    <div key={id} className={styles.project}>
      <div className={styles.image}>
        <a href={demoLink}>
          <img src={imageSrc} alt={title} />
        </a>
      </div>
      <div className={styles.projectInfo}>
        <strong >{title}</strong>
        <br />
        <p>{description}</p>
        <button className={styles.gitButton}>
            <a href={gitUrl}>
            (Git)
            </a>
        </button>
      </div>
    </div>
  );
};

export default Project;
