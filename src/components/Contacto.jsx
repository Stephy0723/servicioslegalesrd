import React from 'react';
import './Contacto.css';

const Contacto = () => {
  return (
    <section className="contacto-container">
      <h2>Contáctanos</h2>
      <p className="descripcion">
        Puedes escribirnos directamente a través del siguiente formulario y te responderemos a la mayor brevedad posible.
      </p>

      <form className="formulario-contacto">
        <div className="form-row">
          <input type="text" placeholder="Nombre completo" required />
          <input type="email" placeholder="Correo electrónico" required />
        </div>

        <div className="form-row">
          <input type="tel" placeholder="Teléfono de contacto" required />
          <input type="text" placeholder="Asunto" required />
        </div>

        <div className="form-row">
          <textarea placeholder="Mensaje" rows="6" required></textarea>
        </div>

        <button type="submit">Enviar Mensaje</button>
      </form>
    </section>
  );
};

export default Contacto;
