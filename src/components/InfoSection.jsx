// InfoSection.jsx
import React from 'react';
import './InfoSection.css';

const InfoSection = () => {
  return (
    <section className="info-section">
      <div className="info-box emergency">
        <h3>CASOS DE EMERGENCIA</h3>
        <p>Para situaciones de emergencia, por favor, no dude en contactarnos de inmediato.</p>
        <p className="phone-text">Llámenos ahora</p>
        <p className="phone-number">+1 <strong>(849) 875-7755</strong></p>
      </div>

      <div className="info-box legal">
        <h3>¿NECESITA ASESORÍA LEGAL?</h3>
        <p>Contáctenos hoy para agendar una cita y discutir sus necesidades legales. Estamos aquí para ayudar.</p>
        <a href="#contacto" className="legal-btn">HAGA UNA CITA</a>
      </div>

      <div className="info-box hours">
        <h3>HORAS LABORALES</h3>
        <p>Lunes – Viernes</p>
        <p>8:00 am – 05:00 pm</p>
        <div className="clock-icon">🕒</div> {/* Puedes reemplazar por un SVG o ícono real */}
      </div>
    </section>
  );
};

export default InfoSection;
