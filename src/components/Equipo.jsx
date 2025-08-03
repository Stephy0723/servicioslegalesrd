import React from 'react';
import './Equipo.css';

import miembro1 from '../assets/equipo.jpg';
import miembro2 from '../assets/equipo2.jpg';
import fondo1 from '../assets/fondo1.jpg';

const equipo = [
  {
    nombre: 'Victor Polanco',
    puesto: 'Abogado Fundador',
    descripcion: 'Especialista en derecho civil, migratorio y empresarial. Experiencia nacional e internacional.',
    imagen: miembro1,
  },
  {
    nombre: 'Michael Wyss',
    puesto: 'Socio Inversionista',
    descripcion: 'Empresario suizo con 14+ años en RD. Experto en negocios internacionales y planificación.',
    imagen: miembro2,
  },
  {
    nombre: 'María González',
    puesto: 'Consultora Legal',
    descripcion: 'Asesora jurídica con enfoque en proyectos de inversión extranjera y cumplimiento normativo.',
    imagen: miembro1,
  },
];

const Equipo = () => {
  return (
    <div className="equipo-container">
      
      {/* Banner con fondo */}
      <div
        className="equipo-banner"
        style={{ backgroundImage: `url(${fondo1})` }}
      >
        <div className="banner-content">
          <h1>NUESTRO EQUIPO</h1>
          <p className="breadcrumb">
            <span>Home</span> <span className="flecha">→</span> <span className="actual">nuestro equipo</span>
          </p>
        </div>
      </div>

      {/* Sección dinámica de miembros */}
      <section className="equipo-section" id="equipo">
        <h2 className="titulo-secundario">Conoce a Nuestro Equipo</h2>
        <div className="equipo-grid">
          {equipo.map((miembro, index) => (
            <div className="card-equipo" key={index}>
              <img src={miembro.imagen} alt={miembro.nombre} />
              <h3>{miembro.nombre}</h3>
              <p className="puesto">{miembro.puesto}</p>
              <p className="descripcion">{miembro.descripcion}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Equipo;
