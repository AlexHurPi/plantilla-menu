// header.jsx
import React from "react";
import "./header-styles.css";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import TabNavigation from '../tapNavigation-components/TabNavigation';
import logo from '../../../public/images/Logo.jpg'

const Header = () => {
  const { t } = useTranslation();
  return (
    <header className="custom-header">
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        data-bs-theme="dark"
      >
       <div className="container-fluid custom-header__container">
          {/* Logo / Brand */}
          <a className="navbar-brand custom-header__brand" href="#">
            <img src={logo} alt="logo" style={{height:'80px'}} />            
            <span className="custom-header__brand-text">ORIGEN</span>
            <span className="text-info">{t("slogan")}</span>            
          </a>
          
            <TabNavigation/>          
        </div>           
      </nav>
    </header>
  );
};

export default Header;
