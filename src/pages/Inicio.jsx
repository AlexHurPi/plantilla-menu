// pages/Inicio.jsx
import React, { useState } from 'react'; // ← IMPORTAR useState
import { useTranslation } from 'react-i18next';
import ImageCarouselManual from '../components/imageCarousel2-components/ImageCarouselManual';
import './inicio-styles.css';
import MenuNavegation from '../components/menuNavigation/menuNavigation';

const Inicio = () => {
  const { t } = useTranslation();   
   
  // ← ESTADO PARA LA CATEGORÍA  
  const [category1, setCategory1] = useState("arrozconleche");
  const [category2, setCategory2] = useState("lasaña");  
  const [category3, setCategory3] = useState("copasyhelados"); 
  
  return (
    <div className="container py-3">
      <div className="row">
        <div className="col-lg-8 mx-auto text-center">
          {/*<h1 className="display-3 fw-bold my-0">{t("titulo-pagina")}</h1>
          <h2 className="lead my-1">{t("subtitulo")}</h2>*/}          
          <h2>POSTRES</h2>
              <MenuNavegation dataKey="menu.postres" defaultActive={category1} onDataKey={(dataKey) => setCategory1(dataKey)} color={"#222b2e"}/>{/*aquí recibes el dataKey*/}   
              <ImageCarouselManual dataKey={category1} color={"#222b2e"}/>          
          <h2>LASAÑAS Y ENSALADAS</h2> 
              <MenuNavegation dataKey="menu.lasañasyensaladas"  defaultActive={category2} onDataKey={(dataKey) => setCategory2(dataKey)} color={"#0B520B"}/>{/*aquí recibes el dataKey*/}
              <ImageCarouselManual dataKey={category2} color={"#0B520B"}/>          
          <h2>COPAS Y HELADOS</h2>   
              <MenuNavegation dataKey="menu.copasyhelados" defaultActive={category3} onDataKey={(dataKey) => setCategory3(dataKey)} color={"#045678"}/>{/*aquí recibes el dataKey*/}
              <ImageCarouselManual dataKey={category3} color={"#045678"}/>              
        </div>  
      </div>
    </div>
  );
};

export default Inicio;
