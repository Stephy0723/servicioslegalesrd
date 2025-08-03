import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Menu.css';
import logo from '../assets/logo.jpg'; // Asegúrate que la ruta del logo es correcta

const Menu = () => {
  const [showMenu, setShowMenu] = useState(true);
  const location = useLocation();
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScrollY && currentScroll > 100) {
        setShowMenu(false);
      } else {
        setShowMenu(true);
      }
      lastScrollY = currentScroll;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`menu-container ${showMenu ? 'show' : 'hide'}`}>
      <nav className="menu">
        <div className="menu-logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <ul className="menu-links">
          <li>
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>INICIO</Link>
          </li>
          <li>
            <Link to="/Nosotros" className={location.pathname === '/nosotros' ? 'active' : ''}>NOSOTROS</Link>
          </li>
          <li>
            <Link to="/Servicios" className={location.pathname.startsWith('/servicios') ? 'active' : ''}>SERVICIOS</Link>
          </li>
          <li>
            <Link to="/equipo" className={location.pathname === '/equipo' ? 'active' : ''}>EQUIPO</Link>
          </li>
          <li>
            <Link to="/contacto" className={location.pathname === '/contacto' ? 'active' : ''}>CONTÁCTENOS</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
