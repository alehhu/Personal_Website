'use client'

// src/Project.js
import React from "react";
import styles from "@/app/styles/Project.module.css";


const Project = ({ id, title, description, demoLink, imageSrc, gitUrl }) => {
  return (
    <div key={id} className={styles.project}>
      <div className={styles.image}>
        <a href={demoLink} className={styles.image}>
        <img src={imageSrc} alt={title} fetchPriority="high" width={346} height={346} />
        </a>
      </div>
      <div className={styles.projectInfo}>
        <div className={styles.projectInfoTextSection}>
          <strong >{title}</strong>
          <br />
          <p>{description}</p>
        </div>
        <button className={styles.gitButton}>
            <a href={gitUrl}>
            </a>Git
        </button>
      </div>
    </div>
  );
};

export default Project;
