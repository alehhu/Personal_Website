'use client'
// src/Contact.js
import React from 'react';
import styles from '@/app/styles/Contact.module.css';
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div className={styles.contact} id="contact">
      <h1>Get in touch.</h1>
      <p>I would be happy to further discuss my experiences with you, simply shoot me an email or message me on LinkedIn! :)</p>
        <a 
          className={styles.emailLink}
          href="mailto:alehu666.dupe@gmail.com">
          alehu666.dupe@gmail.com
          </a>

      <div className={styles.socialLinks}>
        <ul>
          <li>
            <a href="mailto:alehu666.dupe@gmail.com">
              <FaEnvelope />
            </a>
          </li>
          <li>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          </li>
          <li>
          <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
