'use client'

// src/Work.js
import React from 'react';
import Project from './project';
import styles from '@/app/styles/Work.module.css';

const projects = [
  { 
    id: 1,
    title: 'Project 1', 
    description: 'Description of project 1', 
    demoLink: 'https://example.com/demo1', 
    imageSrc: '/kw.jpg',
    gitUrl: '.com'
  },
  { 
    id: 2,
    title: 'Project 2', 
    description: 'Description of project 2', 
    demoLink: 'https://example.com/demo2', 
    imageSrc: '/kw.jpg',
    gitUrl: '.com'
  },
  // Add more projects as needed
];

const Work = () => {
  return (
    <div className={styles.work}>
      <h1>Projects.</h1>
      <div className={styles.projects}>
        {projects.map((project, index) => (
          <Project 
            key={index} 
            title={project.title} 
            description={project.description} 
            demoLink={project.demoLink} 
            imageSrc={project.imageSrc} 
          />
        ))}
      </div>
    </div>
  );
};

export default Work;
