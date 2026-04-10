// header.jsx
import React from "react";
import "./header-styles.css";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import TabNavigation from '../tapNavigation-components/TabNavigation';
import LanguageSelector from "../languageSelector-components/LanguageSelector";

const Header = ({background}) => {
  const { t } = useTranslation();  
  return (
    <header className="header" style={{backgroundColor: background}}>
      <div className="languageSelector-container">
          <LanguageSelector />
      </div>
      <nav
        className=""
        data-bs-theme="dark"
        style={{backgroundColor:background}}
      >
       
       <div className="container-fluid custom-header__container">
          {/* Logo / Brand */}
          <a className="navbar-brand custom-header__brand" href="#">
            <img src="./images/logo.png" alt="logo" style={{height:'80px'}} />            
            <span className="custom-header__brand-text">{t("header.title")}</span>
            <span className="text-info">{t("header.slogan")}</span>            
          </a>          
            <TabNavigation/>          
        </div>           
      </nav>
    </header>
  );
};

export default Header;