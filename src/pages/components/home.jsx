// src/Home.jsx
import React from 'react';
import styles from '../../styles/Home.module.css';
import Image from 'next/image'
import profilePic from '../../../public/images/elonPic.jpg'; // Add your profile picture

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.homeText}>
        <h1>Hello, I'm<br />
          <span>
            Alessandro Hu
          </span>
          </h1>
        <p>Welcome to my personal website. Here you'll find information about my projects and how to get in touch with me.</p>
      </div>
      <div className={styles.homeImage}>
        <Image
          src={profilePic}
          style={{
            position: 'relative',
            height: '330px',
            width: '400px',
            top: '5rem',
            borderStyle: 'solid',
            borderWidth: '5px',
            borderTop: '0px',
            borderLeft: '0px',
            borderColor: '#1e6fd9',
            transition: 'transform 0.5s ease',
          }}
          alt='Alessandro Hu'
        />
        
      </div>
    </div>
  );
};

export default Home;
