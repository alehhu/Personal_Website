// src/App.js
import React from 'react';
//import "../styles/App.module.css";
import Header from './components/header';
import Home from './components/home';
import Work from './components/work';
import Contact from './components/contact';
import Footer from './components/footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <Work />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
