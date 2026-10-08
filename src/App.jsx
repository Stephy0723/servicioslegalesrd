import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Menu from './components/Menu';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import AboutSection from './components/AboutSection';
import ServiciosOfrecidos from './components/ServiciosOfrecidos';
import AreasPractica from './components/AreasPractica';
import Nosotros from './components/Nosotros';
import Servicios from './components/Servicios';
import Agenda from './components/Agenda';
import Contacto from './components/Contacto';
import Footer from './components/Footer';

// Páginas individuales
import Impuestos from './components/Servicios/Impuestos';
import Inmobiliarios from './components/Servicios/Inmobiliarios';
import Finanzas from './components/Servicios/Finanzas';
import Corporativos from './components/Servicios/Corporativos';
import Auditoria from './components/Servicios/Auditoria';
import Migratorios from './components/Servicios/Migratorios';

// Página de equipo
import Equipo from './components/Equipo';

function App() {
  return (
    <Router>
      <Routes>
        {/* Página principal */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <Menu />
              <Hero />
              <InfoSection />
              <AboutSection />
              <ServiciosOfrecidos />
              <AreasPractica />
              <Contacto />
              <Footer />
            </>
          }
        />

        {/* Páginas del menú con header, menu y contacto */}
        <Route
          path="/Nosotros"
          element={
            <>
              <Header />
              <Menu />
              <Nosotros />
              <Footer />
            </>
          }
        />

        <Route
          path="/servicios"
          element={
            <>
              <Header />
              <Menu />
              <Servicios />
              <Footer/>
            </>
          }
        />

        <Route
          path="/equipo"
          element={
            <>
              <Header />
              <Menu />
              <Equipo />
              <Footer />
            </>
          }
        />

        <Route
          path="/contacto"
          element={
            <>
              <Header />
              <Menu />
              <Contacto />
              <Footer />
            </>
          }
        />

        {/* Rutas individuales de servicios (sin contacto ni menú aún) */}
        <Route path="/servicios/impuestos" element={<Impuestos />} />
        <Route path="/servicios/inmobiliarios" element={<Inmobiliarios />} />
        <Route path="/servicios/finanzas" element={<Finanzas />} />
        <Route path="/servicios/corporativos" element={<Corporativos />} />
        <Route path="/servicios/auditoria" element={<Auditoria />} />
        <Route path="/servicios/migratorios" element={<Migratorios />} />
      </Routes>
    </Router>
  );
}

export default App;

