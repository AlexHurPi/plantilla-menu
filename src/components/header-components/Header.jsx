// header.jsx
import React from "react";
import "./header-styles.css";
import { Link } from 'react-router-dom'; // ← IMPORTAR ESTO

const Header = () => {
  return (
    <header className="custom-header">
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        data-bs-theme="dark"
      >
        <div className="container-fluid custom-header__container">
          {/* Logo / Brand */}
          <a className="navbar-brand custom-header__brand" href="#">
            <span className="custom-header__logo-placeholder">LOGO</span>
            <span className="custom-header__brand-text">MiSitio</span>
          </a>

          {/* Botón hamburguesa (visible solo en móvil) */}
          <button
            className="navbar-toggler custom-header__toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
            aria-controls="mainNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menú colapsable */}
          <div
            className="collapse navbar-collapse custom-header__menu"
            id="mainNavbar"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 custom-header__nav-list">
              <li className="nav-item">
                 <Link className="nav-link" to="/Inicio">Inicio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/servicios">Servicios</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" to="/portfolio">Portafolio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#portfolio">
                  Portafolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#precios">
                  Precios
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contacto">
                  Contacto
                </a>
              </li>
              <li className="nav-item">
                <a className="btn custom-header__cta" href="#cta">
                  Empezar
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
