import React from "react";
import "./footer.css";


export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer text-white py-4 mt-auto">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <div>
              <strong>EMPRESA S.A.S.</strong>
              <br />
              <small className="opacity-75">Aqui tu eslogan o mensaje.</small>
              <br />
              <small className="opacity-75">Razón Social: EMPRESA S.A.S.</small>
            </div>
          </div>

          <div className="col-md-6 text-center text-md-end">
            <div>
              <strong>Dónde estamos</strong>
              <br />
              <small>tu ciudad, Tu departamento, Colombia</small>
              <br />              
              <small>📧 contacto@empresa.com</small>
              <br />
              <small>📞 +57 telefono</small>
            </div>
          </div>
        </div>

        <hr className="my-3 border-white opacity-25" />

        <div className="text-center">
          <small>&copy; {year} EMPRESA S.A.S. Todos los derechos reservados.</small>
        </div>
      </div>
    </footer>
  );
}
