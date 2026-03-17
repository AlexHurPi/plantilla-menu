import React from "react";
import "./section-image-text.css";
import imagen1 from "../../assets/imagen1.jpg";
import { useTranslation } from 'react-i18next';

const ImageTextSection = ({title, subtitle}) => {
  const { t } = useTranslation();
  

  return (
    <section className="image-text-section">
      <h1 className="section-subtitle">{title}</h1>

      <div className="image-text-wrapper">
        <div className="image-container">
          <img
            src={imagen1}
            alt="imagen1"
          />
        </div>

        <div className="text-container">
          <h2 className="section-title">{subtitle}</h2>
          <p>
           {t("parrafo-seccion2")}
          </p>
          <p>
            {t("parrafo-seccion2a")}
          </p>
          <button className="primary-button">Llamada a la acción</button>
        </div>
      </div>
    </section>
  );
};

export default ImageTextSection;
