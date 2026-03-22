
import React from 'react';
import heroImage from './logo.png'; 
import './Home.css';

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
      <div className="links">
  <a href="mailto:vanshika07sohal@gmail.com" aria-label="Email">
    <i className="fas fa-envelope"></i>
  </a>
  <a href="https://www.linkedin.com/in/vanshika-sohal-97066a323/" aria-label="LinkedIn">
    <i className="fab fa-linkedin-in"></i>
  </a>
  <a href="https://github.com/VanshikaSohal" target="_blank" aria-label="GitHub" rel="noreferrer">
    <i className="fab fa-github"></i>
  </a>
</div>

    </div>
  );
};

export default Homepage;
