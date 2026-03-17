// pages/Servicios.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Servicios = () => {
 return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8 mx-auto text-center">
          <h1 className="display-4 fw-bold mb-4">¡Bienvenido a Servicios!</h1>
          <p className="lead mb-5">
            Esta es tu página de servicios. Aquí va el contenido de servicios.
          </p>
          <Link className="btn btn-primary btn-lg" to="/inicio">Inicio</Link>
        </div>
      </div>
    </div>
  );
};

export default Servicios;
