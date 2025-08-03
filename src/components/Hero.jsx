// src/components/Hero.jsx
import React from 'react';
import './Hero.css';
import fondo from '../assets/fondo.jpg';


const Hero = () => {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${fondo})`,
      }}
    >
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Bienvenido a Inversiones JR & L, S.R.L.</h1>
          <h2 className="hero-subtitle">Asesoría legal, migratoria y financiera en República Dominicana</h2>
          <p>Confianza legal y financiera para tu tranquilidad</p>
        </div>
      </div>
    </section>
  );
};


export default Hero;
