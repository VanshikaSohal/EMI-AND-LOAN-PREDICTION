// Homepage.js
import React from 'react';
import './App.css'; // If specific styles are in a separate CSS, import that instead
import heroImage from './logo.png'; // Ensure logo.png is in src folder or update path

const Homepage = ({ setPage }) => {
  return (
    <div className="homepage">
      <div className="left">
        <h1 className="main-title1">EMI LOAN</h1>
        <h1 className="main-title2">PREDICTION</h1>
        <h3 className="subtitle">
          Leverage the power of AI to instantly assess your loan eligibility.
          Fast, accurate, and secure.
        </h3>
        <button className="start-button" onClick={() => setPage('form')}>
          Get Started
        </button>
      </div>
      <div className="right">
        <img src={heroImage} alt="Logo" className="hero-image" />
      </div>
    </div>
  );
};

export default Homepage;
