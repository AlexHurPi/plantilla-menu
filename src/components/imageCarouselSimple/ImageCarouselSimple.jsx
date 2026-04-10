import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './imageCarouselSimple-styles.css';

const ImageCarouselSimple = ({ dataKey, title, isVisible }) => {
    const { t } = useTranslation();
    const [currentIndex, setCurrentIndex] = useState(0);
    
     useEffect(() => {//Este efecto es para volver el index a 0, para que el carrusel se resetee cada vez que lo invocan
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setCurrentIndex(0);
      }, [isVisible]);
    
    // ✅ Si no visible → null (0 espacio DOM)
    if (!isVisible) return null;

    // ✅ Datos del array
    const productsData = t(`carousel.${dataKey}`, { returnObjects: true }) || [];
    
    // Fallback
    if (!productsData.length) {
      return (
        <section className="manual-carousel-section">
          <div style={{ textAlign: 'center', padding: '2rem', color: '#666' }}>
            No hay datos para "{dataKey}"
          </div>
        </section>
      );
    }
  
    const nextSlide = () => {
      setCurrentIndex((prev) => (prev + 1) % productsData.length);
    };
  
    const prevSlide = () => {
      setCurrentIndex((prev) => (prev - 1 + productsData.length) % productsData.length);
    };
  
    const goToSlide = (index) => {
      setCurrentIndex(index);
    };
  
    return (
      <section className="manual-carousel-section">
        
  
        <div className="carousel-wrapper">
          <h2 className="carousel-title">{title}</h2>
          <div className="carousel-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {productsData.map((product, index) => (
              <div key={product.id || index} className="card-slide">
                <div className="card-inner">
                  <div className="card-image" role="button" tabIndex={0}>
                    <img
                      src={`${import.meta.env.BASE_URL}${product.image}`}
                      alt={product.title}
                      loading="lazy"
                    />
                  </div>
  
                  <div className="card-content">
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                    <div className="price">
                      <h1>{product.price}</h1>
                      <h1>{product.price2}</h1>
                    </div>
                    <div className="price-description">
                      <p>Para la mesa</p>
                      <p>Para llevar</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
  
          <button className="nav-btn prev-btn" onClick={prevSlide}>❮</button>
          <button className="nav-btn next-btn" onClick={nextSlide}>❯</button>
        </div>
  
        <div className="dots-container">
          {productsData.map((_, index) => (
            <button
              key={`dot-${index}`}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </section>
    );
  };
  
  export default ImageCarouselSimple;