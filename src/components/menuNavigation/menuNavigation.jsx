// MenuNavegacion.jsx
//*Este componente muestra un menu con iconos, controla el array de elementos que se visualizan
//*en el carrusel de imagenes */ 
import React, { useState, useRef, useEffect } from "react";
import "./menuNavigation-styles.css";
import { useTranslation } from "react-i18next";

function MenuNavegacion({
  dataKey,  
  defaultActive, // id del elemento activo por defecto
  onDataKey, // callback para devolver el dataKey
  color,
}) {
  const [active, setActive] = useState(defaultActive);
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const iconRefs = useRef([]);
  const { t } = useTranslation();
  const rawinformation = t(dataKey, { returnObjects: true });
  const information = Array.isArray(rawinformation) ? rawinformation : [];

  const handleClick = (id) => {
    setActive(id);    
    onDataKey?.(id); // aquí "retornas" el dataKey al padre
  };

 useEffect(() => {//Este efecto Actualiza la posición del indicador cada vez que cambia el elemento activo o se redimensiona la ventana
    const updateIndicator = () => {// Busca el icono activo usando el data-id y actualiza el estilo del indicador para que se alinee con ese icono
      const activeIcon = iconRefs.current.find((ref) => ref?.dataset.id === active);
      if (activeIcon) {
        setIndicatorStyle({
          left: `${activeIcon.offsetLeft}px`,
          width: `${activeIcon.offsetWidth}px`,
        });
      }
    };

    const timeout = setTimeout(updateIndicator, 10);// Pequeño retraso para asegurar que el DOM se haya actualizado antes de calcular la posición del indicador
    window.addEventListener("resize", updateIndicator);// Actualiza la posición del indicador al redimensionar la ventana

    return () => {// Limpieza del timeout y del event listener
      clearTimeout(timeout);// Evita que el indicador se actualice después de que el componente se haya desmontado
      window.removeEventListener("resize", updateIndicator);// Evita que el event listener siga activo después de que el componente se haya desmontado
    };
  }, [active]);

  return (
    <nav className="menu-nav" style={{ backgroundColor: color }}>
      <div className="icons-container">
        {information.map((option, index) => (
          <div
            key={option.id}
            ref={(el) => (iconRefs.current[index] = el)}
            data-id={option.id} // fácil de buscar después
            className={`menu-icon-container ${active === option.id ? "active" : ""}`}
            onClick={() => handleClick(option.id)}
          >
            {typeof option.image === "string" && !option.image.startsWith("http") ? (
              <img
                src={option.image}
                alt={option.title}
                className="menu-image"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.nextSibling.style.display = "block";
                }}
              />
            ) : null}
            {typeof option.image === "string" ? (
              <span className="menu-icon fallback-icon">{option.image}</span>
            ) : (
              <span className="menu-icon">{option.image}</span>
            )}
            <span className="menu-label">{option.title}</span>
          </div>
        ))}
        <div className="indicator" style={indicatorStyle} />
      </div>
    </nav>
  );
}

export default MenuNavegacion;