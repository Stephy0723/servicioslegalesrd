import React from 'react';
import './Header.css';
import {
  FaWhatsapp,
  FaLinkedin,
  FaInstagram,
  FaPhone,
  FaMapMarkerAlt
} from 'react-icons/fa';

const Header = () => {
  return (
    <>
      {/* Topbar profesional */}
      <div className="topbar">
        <div className="topbar-container">
          <div className="topbar-left">
            <FaMapMarkerAlt className="icon" />
            <span>Av. George Washington, 208-D Santo Domingo 10104</span>
            <span className="separator">|</span>
            <FaPhone className="icon" />
            <a href="tel:0000000000">+1 849-875-7755</a>
          </div>
          <div className="topbar-right">
            <a href="https://wa.me/0000000000" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
            <span className="separator">|</span>
            <a href="#"><FaLinkedin /></a>
            <span className="separator">|</span>
            <a href="#"><FaInstagram /></a>
            <span className="separator">|</span>
            <button className="btn-cita">Haga una cita</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

