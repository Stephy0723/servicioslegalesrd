import React from 'react';
import './Agenda.css';

const Agenda = () => {
  return (
    <section className="agenda-citas">
      <h2>Agenda tu Cita</h2>
      <form>
        <div className="form-row">
          <input type="text" placeholder="Nombre completo" required />
          <input type="email" placeholder="Correo electrónico" required />
        </div>

        <div className="form-row">
          <input type="tel" placeholder="Teléfono de contacto" required />
          <select required>
            <option value="">Selecciona un servicio</option>
            <option value="juridica">Asesoría Jurídica</option>
            <option value="migratoria">Asesoría Migratoria</option>
            <option value="legal">Asistencia Legal</option>
            <option value="financiera">Servicios Financieros</option>
          </select>
        </div>

        <div className="form-row">
          <input type="date" required />
          <input type="time" required />
        </div>

        <div className="form-row">
          <textarea placeholder="Mensaje adicional (opcional)" rows="4"></textarea>
        </div>

        <button type="submit">Confirmar Cita</button>
      </form>
    </section>
  );
};

export default Agenda;

