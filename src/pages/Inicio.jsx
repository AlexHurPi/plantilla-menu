// pages/Inicio.jsx
import { useTranslation } from 'react-i18next';
import ImageCarouselManual from '../components/imageCarousel2-components/ImageCarouselManual';
import LanguageSelector from '../components/LanguageSelector-components/LanguageSelector';

const Inicio = () => {
  const { t } = useTranslation();

  return (
    <div className="container py-3">
      <div style={{display:"flex", justifyContent:'flex-end'}}>
        <LanguageSelector />
      </div>
      
      <div className="row">
        <div className="col-lg-8 mx-auto text-center">          
            <h1 className="display-3 fw-bold my-0">{t("titulo-pagina")}</h1>
            <h2 className="lead my-1">{t("subtitulo")}</h2>                     
            <ImageCarouselManual />           
        </div>
      </div>
    </div>
  );
};

export default Inicio;
