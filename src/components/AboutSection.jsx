import React from 'react';
import './AboutSection.css';
import equipo from '../assets/equipo.jpg';
import equipo2 from '../assets/equipo2.jpg';

const AboutSection = () => {
  return (
    <section className="about-layout">
      {/* LADO IZQUIERDO */}
      <div className="about-left">
        <p className="small-title">NOS COMPLACE DARLE LA BIENVENIDA A</p>
        <h1 className="company-name">
          <span className="highlight-orange">INVERSIONES JR & L</span><br />
          SERVICIOS LEGALES
        </h1>

        <p>
          Trabajamos con entusiasmo junto a nuestros clientes, colaborando estrechamente con nuestros socios y aliados
          para alcanzar soluciones legales efectivas. ¡Nuestros clientes, nuestra prioridad!
        </p>

        <p>
          En JR & L, nos entusiasma proporcionar servicios legales de calidad internacional, brindando asesoría,
          acompañamiento y soporte de máxima excelencia de manera eficiente y efectiva en todo momento, de manera discreta
          en una relación de atención exclusiva a nuestros clientes, a quienes centramos nuestra labor como el corazón de
          nuestras operaciones.
        </p>

        <p>
          El fundamento de nuestra filosofía es comprender los valores e intereses de nuestros clientes y adaptar nuestros
          servicios a sus necesidades dentro de lo legalmente posible.
        </p>

        <p>
          Dedicamos el tiempo, los recursos y los esfuerzos que sean necesarios para garantizar que nuestros clientes
          aprovechen al máximo nuestro conocimiento especializado en distintas áreas de práctica legal.
        </p>

        <h3 className="services-title">Áreas de Servicios Destacadas:</h3>
        <ul className="services-list">
          <li>Consultoría jurídica y asesoría legal</li>
          <li>Asesoría en impuestos y gestión impositiva</li>
          <li>Servicios jurídicos en materia civil, contractual, inmobiliaria, corporativa, migratoria y penal</li>
          <li>Auditoría fiscal y financiera</li>
          <li>Asesoría y gestión para la inversión extranjera, emprendimiento de negocios y clausura de negocios</li>
          <li>Asesoría en regímenes de incentivos tributarios</li>
        </ul>

        <a href="#nosotros" className="btn-more">MÁS SOBRE NOSOTROS</a>
      </div>

      {/* LADO DERECHO */}
      <div className="about-right">
        <p className="intro-text">
          …una sociedad de abogados en la capital de Santo Domingo República Dominicana que ofrece una
          serie de servicios jurídicos, de asesoría en inversiones y de gestión empresarial con el compromiso
          de lograr la excelencia y la satisfacción del cliente.
        </p>

        <div className="image-row">
          <img src={equipo} alt="Equipo 1" className="about-img" />
          <img src={equipo2} alt="Equipo 2" className="about-img" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

