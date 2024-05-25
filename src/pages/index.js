// src/index.js
import React from 'react';
import App from '../pages/app';

const Homepage = () => {
  return <App />;
};

export default Homepage;

/*
// Wrap the rendering logic in a check for the window object
if (typeof window !== 'undefined') {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

export default;
*/