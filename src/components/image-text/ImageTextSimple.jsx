import React from 'react'
import producto1 from "../../assets/producto1.jpg";
import './imageTextStyles.css';
import { useTranslation } from 'react-i18next';


const ImageTextSimple = () => {
  const { t } = useTranslation();

  return (
    <div className='image-text-container'>
      <img src={producto1} alt="Imagen#x"/>
      <div className='text-content'>
        <h2 className='subtitle'>{t("seccion1")}</h2>
        <p className='description'>{t("parrafo-seccion1")}</p>
      </div>
    </div>
  )
}

export default ImageTextSimple
