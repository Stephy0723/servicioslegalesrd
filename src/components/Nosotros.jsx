import React from 'react';
import './Nosotros.css';

const Nosotros = () => {
  return (
    <section className="nosotros-section">
      <div className="nosotros-header">
        <h1>Nosotros</h1>
        <p className="breadcrumb">Home <span>→</span> Acerca de nosotros</p>
      </div>

      <div className="nosotros-box">
        <h2>¿Quiénes Somos?</h2>
        <p>
          En Inversiones JR & L, S.R.L., nos dedicamos a ofrecer servicios integrales de asesoría, inversión y gestión empresarial,
          con un enfoque en la innovación, la transparencia y la eficiencia.
        </p>

        <h2>Nuestra Misión</h2>
        <p>
          Brindar un servicio personalizado y estratégico en áreas clave como inversión inmobiliaria, planificación financiera,
          asesoría legal y desarrollo comercial.
        </p>

        <h2>Nuestra Visión</h2>
        <p>
          Ser reconocidos como una firma líder en servicios de inversión y consultoría, destacando por nuestra ética y compromiso.
        </p>

        <h2>¿Por qué elegirnos?</h2>
        <ul>
          <li>Experiencia multidisciplinaria</li>
          <li>Atención en español e inglés</li>
          <li>Procesos claros y confiables</li>
          <li>Asistencia legal y financiera en un solo lugar</li>
        </ul>

        <h2>Ubicación Estratégica</h2>
        <p>
          Nos encontramos en Santo Domingo Este, en una zona accesible para clientes nacionales e internacionales.
        </p>
      </div>
    </section>
  );
};

export default Nosotros;
