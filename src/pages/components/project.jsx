// src/Project.js
import React from "react";
import "../../styles/Project.module.css";
import styles from "../../styles/Project.module.css";
import Image from 'next/image';


const Project = ({ id, title, description, demoLink, imageSrc, gitUrl }) => {
  return (
    <div key={id} className={styles.project}>
      <div className={styles.image}>
        <a href={demoLink} className={styles.image}>
        <Image src={imageSrc} alt={title} layout="responsive" width={100} height={100} />
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
            
            </a>(Git)
        </button>
      </div>
    </div>
  );
};

export default Project;
