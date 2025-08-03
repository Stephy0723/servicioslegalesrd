import React, { useState } from 'react';
import './ServiciosOfrecidos.css';
import fondo2 from '../assets/fondo2.jpg';

const servicios = [
  { titulo: 'ESPECIALIZACIÓN LEGAL', contenido: 'Contamos con un equipo de abogados y profesionales aliados especializados en diversas áreas del derecho, como derecho civil y comercial, tributario, administrativo, penal, inmobiliario, etc.' },
  { titulo: 'ASESORAMIENTO LEGAL', contenido: 'Asesoramiento en decisiones legales complejas, contratos, litigios y normativas.' },
  { titulo: 'REPRESENTACIÓN LEGAL', contenido: 'Defensa y representación ante tribunales y organismos oficiales.' },
  { titulo: 'TRANSACCIONES COMERCIALES', contenido: 'Asistencia legal en negociaciones y acuerdos de carácter comercial.' },
  { titulo: 'RESOLUCIÓN DE DISPUTAS', contenido: 'Solución de conflictos legales de forma eficaz y profesional.' },
  { titulo: 'CUMPLIMIENTO LEGAL', contenido: 'Supervisión del cumplimiento de normativas y leyes.' },
  { titulo: 'PLANIFICACIÓN PATRIMONIAL Y SUCESORIA', contenido: 'Diseño legal de estrategias para la protección del patrimonio familiar y empresarial.' },
  { titulo: 'INVESTIGACIÓN LEGAL', contenido: 'Análisis profundo de casos, legislación aplicable y jurisprudencia.' }
];

const ServiciosOfrecidos = () => {
  const [activo, setActivo] = useState(null);

  const toggle = (index) => {
    setActivo(activo === index ? null : index);
  };

  return (
    <section className="servicios-section">
      <div className="servicios-image">
        <img src={fondo2} alt="Servicios Legales" />
      </div>

      <div className="servicios-contenido">
        <h2 className="titulo-principal">¿QUÉ PODEMOS OFRECER?</h2>

        {servicios.map((item, index) => (
          <div
            className={`acordeon ${activo === index ? 'activo' : ''}`}
            key={index}
            onClick={() => toggle(index)}
          >
            <div className="encabezado-acordeon">{item.titulo}</div>
            <div className="contenido-acordeon">
              {activo === index && <p>{item.contenido}</p>}
            </div>
          </div>
        ))}

        <blockquote className="firma-frase">
          <span className="marca">P & W</span> es una firma de abogados que proporciona asesoramiento legal experto,
          representación en procedimientos legales y gestión del cumplimiento de las leyes en diversas áreas,
          contribuyendo así a la justicia y al funcionamiento efectivo del sistema legal en favor de los intereses y valores
          de nuestros clientes.
        </blockquote>
      </div>
    </section>
  );
};

export default ServiciosOfrecidos;
