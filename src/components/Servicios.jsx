// src/components/Servicios.jsx
import React, { useState } from 'react';
import './Servicios.css';

import fondo3 from '../assets/fondo3.jpg'; // Asegúrate de que fondo3 esté en /assets

const servicios = [
  {
    titulo: 'Especialización Legal',
    descripcion:
      'Ofrecemos servicios especializados en diferentes ramas del derecho, adaptándonos a las necesidades particulares de cada cliente.',
    icono: 'gavel'
  },
  {
    titulo: 'Asesoramiento Legal',
    descripcion:
      'Proporcionamos asesoramiento legal a nuestros clientes, ya sean individuos o empresas, en cuestiones legales complejas. Esto incluye la interpretación de leyes, la evaluación de riesgos legales, y la formulación de estrategias legales.',
    icono: 'lock'
  },
  {
    titulo: 'Representación Legal',
    descripcion:
      'Brindamos representación ante tribunales y organismos administrativos, con un enfoque estratégico y personalizado para defender los intereses del cliente.',
    icono: 'user-tie'
  },
  {
    titulo: 'Transacciones Comerciales',
    descripcion:
      'Asistimos en la estructuración, redacción y negociación de contratos y acuerdos comerciales, garantizando seguridad jurídica en cada paso.',
    icono: 'chart-line'
  },
  {
    titulo: 'Resolución de Disputas',
    descripcion:
      'Ofrecemos soluciones eficaces mediante negociación, mediación, arbitraje o litigios, buscando siempre el mejor resultado posible para nuestros clientes.',
    icono: 'comments'
  }
];

const Servicios = () => {
  const [activo, setActivo] = useState(null);

  const toggle = (index) => {
    setActivo(activo === index ? null : index);
  };

  return (
    <>
      {/* Banner con imagen de fondo */}
      <div className="servicios-banner" style={{ backgroundImage: `url(${fondo3})` }}>
        <div className="banner-content">
          <h1>SERVICIOS</h1>
          <p className="breadcrumb">
            <span>Home</span> <span className="flecha">→</span> <span className="actual">servicios</span>
          </p>
        </div>
      </div>

      {/* Sección de acordeón */}
      <section className="servicios-section">
        <h2 className="titulo-seccion">¿QUÉ PODEMOS OFRECER?</h2>
        <div className="acordeon-servicios">
          {servicios.map((servicio, index) => (
            <div key={index} className="item-servicio">
              <div className="cabecera" onClick={() => toggle(index)}>
                <div className="titulo-servicio">
                  <i className={`fas fa-${servicio.icono}`}></i>
                  {servicio.titulo.toUpperCase()}
                </div>
                <div className="icono-toggle">
                  {activo === index ? (
                    <i className="fas fa-minus"></i>
                  ) : (
                    <i className="fas fa-plus"></i>
                  )}
                </div>
              </div>
              {activo === index && (
                <div className="contenido-servicio">
                  <p>{servicio.descripcion}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Servicios;

