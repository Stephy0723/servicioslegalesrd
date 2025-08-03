import React from 'react';
import './Servicio.css';
import Header from '../Header';
import Menu from '../Menu';

const Impuestos = () => {
  return (
    <>
      <Header />
      <Menu />
      <div className="banner-servicio" style={{ backgroundImage: "url('/assets/banner-servicio.jpg')" }}>
        <div className="banner-overlay">
          <h1>IMPUESTOS</h1>
          <p className="breadcrumb">Home → práctica → Impuestos</p>
        </div>
      </div>
      <div className="servicio-content">
        <h2>SERVICIOS PARA LA GESTIÓN DE IMPUESTOS</h2>
        <p>
          Cumplimiento fiscal, planificación tributaria, litigios y asesoría ante entidades gubernamentales forman parte de nuestros servicios...
        </p>
      </div>
    </>
  );
};

export default Impuestos;
