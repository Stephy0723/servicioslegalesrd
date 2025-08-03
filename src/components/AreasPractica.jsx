// src/components/AreasPractica.jsx
import React from "react";
import "./AreasPractica.css";
import { useNavigate } from "react-router-dom";

// Importar íconos
import iconoImpuestos from "../assets/iconos/impuestos.png";
import iconoInmobiliario from "../assets/iconos/agencia-inmobiliaria.png";
import iconoFinanzas from "../assets/iconos/crecimiento.png";
import iconoCorporativo from "../assets/iconos/corporativo (1).png";
import iconoAuditoria from "../assets/iconos/cuentas.png";
import iconoMigracion from "../assets/iconos/pasaporte.png";

const areas = [
  {
    titulo: "IMPUESTOS",
    descripcion:
      "Nuestro equipo se especializa en una amplia gama de servicios necesarios para la gestión tributaria...",
    icono: iconoImpuestos,
    ruta: "/servicios/impuestos",
  },
  {
    titulo: "SERVICIOS INMOBILIARIOS",
    descripcion:
      "Asesoría integral en inversiones inmobiliarias y soporte experto...",
    icono: iconoInmobiliario,
    ruta: "/servicios/inmobiliarios",
  },
  {
    titulo: "INVERSIONES, ADQUISICIONES Y FINANZAS",
    descripcion:
      "Consultoría especializada en inversiones y finanzas a nivel nacional e internacional...",
    icono: iconoFinanzas,
    ruta: "/servicios/finanzas",
  },
  {
    titulo: "SERVICIOS CORPORATIVOS",
    descripcion:
      "Creación, modificación y asesoramiento a sociedades comerciales...",
    icono: iconoCorporativo,
    ruta: "/servicios/corporativos",
  },
  {
    titulo: "AUDITORÍA Y CONTABILIDAD",
    descripcion:
      "Análisis de Estados Financieros, Auditoría Fiscal y más...",
    icono: iconoAuditoria,
    ruta: "/servicios/auditoria",
  },
  {
    titulo: "MIGRACIÓN Y ACTOS DEL ESTADO CIVIL",
    descripcion:
      "Permisos de residencia para inversores y extranjeros en RD...",
    icono: iconoMigracion,
    ruta: "/servicios/migratorios",
  },
];

const AreasPractica = () => {
  const navigate = useNavigate();

  return (
    <section className="areas-practica">
      <div className="titulo">
        <h4>INVERSIONES JR & L</h4>
        <h2>
          ÁREAS DE <span className="resaltado">PRÁCTICA</span>
        </h2>
        <p>
          Nos destacamos por nuestro compromiso con la excelencia en las áreas legales, 
          priorizando las necesidades únicas de cada cliente. Ofrecemos un enfoque estratégico, 
          proactivo y un análisis jurídico preciso. La integridad y la ética profesional 
          guían cada etapa del proceso legal.
        </p>
      </div>

      <div className="cards-container">
        {areas.map((area, i) => (
          <div
            className="card-servicio"
            key={i}
            onClick={() => navigate(area.ruta)}
          >
            <div className="icono">
              <img
                src={area.icono}
                alt={`Icono de ${area.titulo}`}
                style={{ width: "40px", height: "40px" }}
              />
            </div>
            <h3>{area.titulo}</h3>
            <p>{area.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AreasPractica;
