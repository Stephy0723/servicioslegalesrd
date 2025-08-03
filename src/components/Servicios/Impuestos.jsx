import React from 'react';
import './Servicio.css';
import Header from '../Header';
import Menu from '../Menu';
import iconoImpuestos from '../../assets/iconos/impuestos.png';

const Impuestos = () => {
  return (
    <>
      <Header />
      <Menu />

      <div
        className="banner-servicio"
        style={{
          backgroundImage: "url('/assets/banner-servicio.jpg')",
        }}
      >
        <div className="banner-overlay">
          <h1>IMPUESTOS</h1>
          <p className="breadcrumb">
            <span>Home</span> &rarr; <span>práctica</span> &rarr; <strong>Impuestos</strong>
          </p>
        </div>
      </div>

      <div className="servicio-content">
        <div className="icono-servicio">
          <img src={iconoImpuestos} alt="Icono Impuestos" />
        </div>
        <h2>SERVICIOS PARA LA GESTIÓN DE IMPUESTOS</h2>
        <p>
          En nuestra firma legal, nuestro equipo altamente competente se especializa en una amplia
          gama de servicios necesarios para la gestión de los impuestos, el cumplimiento de los
          deberes fiscales...
        </p>
        {/* Aquí puedes agregar la lista de servicios si deseas */}
      </div>
    </>
  );
};

export default Impuestos;
