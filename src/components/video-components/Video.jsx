import React from 'react';
import './video-Styles.css';

const Video = ({video}) => {
  return (
    // container-fluid con padding en móviles, centrado perfecto
    <div className="container px-3 px-md-4 py-5">
      <div className="row justify-content-center">
        {/* En móvil ocupa todo (12), en tablet 10 columnas, en PC 8 columnas */}
        <div className="col-12 col-md-10 col-lg-8 col-xl-7">
          
          {/* Tarjeta moderna que envuelve el video */}
          <div className="modern-video-card">
            
            {/* Clase nativa de Bootstrap 5 para aspecto 16:9 responsivo */}
            <div className="ratio ratio-16x9">
              <video 
                className="native-video" 
                controls 
                preload="metadata"
                controlsList="nodownload" /* Opcional: oculta el botón de descarga */
              >
                <source src={video} type="video/mp4" />
                Tu navegador no soporta la reproducción de videos.
              </video>
            </div>
            
          </div>
          
          {/* Opcional: Un pequeño texto o título debajo (puedes borrarlo si no lo necesitas) */}
          <div className="text-center mt-3">
            <h5 className="fw-bold text-secondary mb-0">Video Corporativo</h5>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Video;
