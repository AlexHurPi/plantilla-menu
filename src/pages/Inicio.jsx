// pages/Inicio.jsx
import React from 'react';
import ImageTextSection from '../components/section-components/Section-image-text';
import ImageTextSimple from '../components/image-text/ImageTextSimple';
import LanguageSelector from '../components/LanguageSelector-components/LanguageSelector';
import { useTranslation } from 'react-i18next';
import ImageCarouselManual from '../components/imageCarousel2-components/ImageCarouselManual';
import Video from '../components/video-components/Video'

const Inicio = () => {
  const { t } = useTranslation();

  return (
    <div className="container py-3">
      <div className="row">
        <div className="col-lg-8 mx-auto text-center">
          <div className="d-flex justify-content-end mb-3">
            <LanguageSelector />
          </div>
            <h1 className="display-3 fw-bold my-4">{t("titulo-pagina")}</h1>
            <p className="lead mb-5">
              {t("subtitulo")}
            </p>          
            <ImageTextSimple /> 
            <h2 className="display-5 fw-bold my-4">{t("seccion2")}</h2>           
            <ImageCarouselManual />
            <ImageTextSection title={t("seccion3")} subtitle={t("seccion3a")} /> 
            <h2 className="display-5 fw-bold my-1">{t("seccion4")}</h2>    
            <Video video="/plantilla-web2/videos/video2.mp4"/>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
