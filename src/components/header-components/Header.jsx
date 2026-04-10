// header.jsx
import React from "react";
import "./header-styles.css";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import TabNavigation from '../tapNavigation-components/TabNavigation';
import LanguageSelector from "../languageSelector-components/LanguageSelector";

const Header = () => {
  const { t } = useTranslation();
  console.log("menu.slogan:", t("menu.slogan")); // Verifica que la traducción se carga correctamente
  return (
    <header className="custom-header">
      <div className="languageSelector-container">
          <LanguageSelector />
      </div>
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        data-bs-theme="dark"
      >
       
       <div className="container-fluid custom-header__container">
          {/* Logo / Brand */}
          <a className="navbar-brand custom-header__brand" href="#">
            <img src="./images/Logo.jpg" alt="logo" style={{height:'80px'}} />            
            <span className="custom-header__brand-text">ORIGEN</span>
            <span className="text-info">{t("carousel.slogan")}</span>            
          </a>
          
            <TabNavigation/>          
        </div>           
      </nav>
    </header>
  );
};

export default Header;