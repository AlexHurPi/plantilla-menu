// pages/Inicio.jsx
import React, { useState } from 'react'; // ← IMPORTAR useState
import { useTranslation } from 'react-i18next';
import ImageCarouselManual from '../components/imageCarousel2-components/ImageCarouselManual';
import './inicio-styles.css';
import MenuNavegation from '../components/menuNavigation/menuNavigation';
import {WhatsappButton} from '../components/whatsapp-components/WhatsappButton';

const Inicio = () => {
  const { t } = useTranslation();   
   
  // ← ESTADO PARA LA CATEGORÍA  
  const [category1, setCategory1] = useState("arrozconleche");
  const [category2, setCategory2] = useState("lasaña");  
  const [category3, setCategory3] = useState("copasyhelados"); 
  
  return (
    <div className="main-container">      
        <div className="carousels-container">
          {/*<h1 className="display-3 fw-bold my-0">{t("titulo-pagina")}</h1>
          <h2 className="lead my-1">{t("subtitulo")}</h2>*/}          
          <h2>{t("inicio.carousel1-title")}</h2>
              <MenuNavegation dataKey="menu.postres" defaultActive={category1} onDataKey={(dataKey) => setCategory1(dataKey)} color={"#222b2e"}/>{/*aquí recibes el dataKey*/}   
              <ImageCarouselManual dataKey={category1} color={"#222b2e"}/>          
          <h2>{t("inicio.carousel2-title")}</h2> 
              <MenuNavegation dataKey="menu.lasañasyensaladas"  defaultActive={category2} onDataKey={(dataKey) => setCategory2(dataKey)} color={"#0B520B"}/>{/*aquí recibes el dataKey*/}
              <ImageCarouselManual dataKey={category2} color={"#0B520B"}/>          
          <h2>{t("inicio.carousel3-title")}</h2>   
              <MenuNavegation dataKey="menu.copasyhelados" defaultActive={category3} onDataKey={(dataKey) => setCategory3(dataKey)} color={"#045678"}/>{/*aquí recibes el dataKey*/}
              <ImageCarouselManual dataKey={category3} color={"#045678"}/>              
        <WhatsappButton />
        </div> 
        
    </div>
  );
};

export default Inicio;
