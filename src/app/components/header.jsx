'use client'
// src/Header.js
import React from 'react';
import styles from '@/app/styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <a href="/" className={styles.header.logo}>
        <h1>Alessandro.</h1>
      </a>
      <nav>
        <ul>
          <li>
            <a href="#contact">
              contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
