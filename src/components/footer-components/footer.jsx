import React from "react";
import "./footer.css";
import { useTranslation } from "react-i18next";
import Redes from "../redes-sociales/redes";

export default function Footer({background, dataKey}) {
  const year = new Date().getFullYear();
  const { t } = useTranslation();
  const rawinformation = t(dataKey, { returnObjects: true });
  const information = Array.isArray(rawinformation) ? rawinformation : [];

  return (
    <footer className="footer text-white py-4 mt-auto" style={{ backgroundColor: background }}>
      {information.map((info, index) => (
      <React.Fragment key={index}>      
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <div className="d-flex flex-column gap-1">
              {info.empresa && <strong>{info.empresa}</strong>}
              {info.slogan && <small className="opacity-75">{info.slogan}</small>}
              {info.razonsocial && <small className="opacity-75">{info.razonsocial}</small>}
              {info.nit && <small className="opacity-75">{info.nit}</small>}
            </div>
          </div>

          <div className="col-md-6 text-center text-md-end">
            <div className="d-flex flex-column gap-1">
              {info.dondeestamos && <strong>{info.dondeestamos}</strong>}             
              {info.ubicacion && <small>{info.ubicacion}</small>}             
              {info.direccion && <small>{info.direccion}</small>}            
              {info.correo && <small>📧 {info.correo}</small>}             
              {info.telefono && <small>📞 {info.telefono}</small>}
            </div>               
          </div>
        </div>
        <div className="col-12 text-center mt-0">
          <h6>{info.redessociales}</h6>
          <Redes />            
        </div>

        <hr className="my-3 border-white opacity-25" />

        <div className="text-center">
          <small>&copy; {year} {info.final}</small>
        </div>
      </div>
      </React.Fragment>
      ))}
    </footer>
  );
}
