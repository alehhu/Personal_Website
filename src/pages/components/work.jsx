// src/Work.js
import React from 'react';
import Project from './project';
import styles from '../../styles/Work.module.css';
import imageProject01 from '../../../public/images/lelouchBritannia.jpg';

const projects = [
  { 
    title: 'Project 1', 
    description: 'Description of project 1', 
    demoLink: 'https://example.com/demo1', 
    imageSrc: '../../../public/images/lelouchBritannia.jpg',
    gitUrl: '.com'
  },
  { 
    title: 'Project 2', 
    description: 'Description of project 2', 
    demoLink: 'https://example.com/demo2', 
    imageSrc: 'path/to/image2.jpg',
    gitUrl: '.com'
  },
  // Add more projects as needed
];

const Work = () => {
  return (
    <div className={styles.work}>
      <h1>Projects</h1>
      <div className="projects">
        {projects.map((project, index) => (
          <Project 
            key={index} 
            title={project.title} 
            description={project.description} 
            demoLink={project.demoLink} 
            image={project.imageSrc} 
          />
        ))}
      </div>
    </div>
  );
};

export default Work;
