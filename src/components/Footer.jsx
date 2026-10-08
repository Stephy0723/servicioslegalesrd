import React from 'react';
import './Footer.css'; // si usas estilos externos

const Footer = () => {
  return (
    <section className="contacto-mapa">
      <div className="overlay-info">
        <div className="col">
          <div className="icono">
            <i className="fas fa-clock"></i>
          </div>
          <h3>HORAS LABORALES</h3>
          <p>Lunes – Viernes: 8:00 am – 5:00 pm</p>
          <p>Sábados: 9:00 am – 1:00 pm</p>
          <p className="telefono">+1 (829)-594-0564</p>
        </div>

        <div className="col">
          <div className="icono">
            <i className="fas fa-building"></i>
          </div>
          <h3>ESTAMOS AQUÍ</h3>
          <p>Avenida Venezuela No. 113, Ensanche Ozama</p>
          <p>Santo domingo Este, Provincia Santo Domingo</p>
          <p>Phone: +1 (849) 245-7806</p>
          <p>Email:  jrylinversiines@gmail.com </p>
        </div>
      </div>

      <div className="mapa">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2421.5515058411324!2d-69.8686084814343!3d18.495653411413493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaf887b71e14db7%3A0xf2fd9a6b14065a07!2sAv.%20Venezuela%20113%2C%20Santo%20Domingo%2011501!5e1!3m2!1ses-419!2sdo!4v1754184255430!5m2!1ses-419!2sdo"
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Footer;

