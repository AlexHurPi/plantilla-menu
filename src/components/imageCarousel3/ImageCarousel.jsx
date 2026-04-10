import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './imageCarousel-styles.css';

const ImageCarouselSimple = ({ dataKey }) => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  // ✅ Datos del array
  const productsData = t(`carousel.${dataKey}`, { returnObjects: true }) || [];

  // ✅ Mapeo inteligente de títulos
  const titleMap = {
    products: 'carousel.title1',
    postres: 'carousel.title2'
  };

  const carouselTitle = t(titleMap[dataKey] || 'carousel.title');

  // Fallback
  if (!productsData.length) {
    return (
      <section className="simple-carousel-section">
        <div className="simple-no-data">No hay datos para "{dataKey}"</div>
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
    <section className="simple-carousel-section">
      <div className="simple-carousel-card">
        {/* TÍTULO DENTRO DE LA TARJETA */}
        <div className="simple-header">
          <h2 className="simple-title">{carouselTitle}</h2>
        </div>

        <div className="simple-carousel-wrapper">
          <div
            className="simple-carousel-track"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {productsData.map((product, index) => (
              <div key={product.id || index} className="simple-slide">
                <div className="simple-slide-content">
                  <div className="simple-image-wrapper">
                    <img
                      src={`${import.meta.env.BASE_URL}${product.image}`}
                      alt={product.title}
                      loading="lazy"
                    />
                  </div>

                  <div className="simple-product-info">
                    <h3 className="simple-product-title">{product.title}</h3>
                    <p className="simple-description">{product.description}</p>
                    
                    <div className="simple-prices">
                      <div className="simple-price-item">
                        <span className="simple-price">{product.price}</span>
                        <span className="simple-price-label">Mesa</span>
                      </div>
                      <div className="simple-price-item">
                        <span className="simple-price">{product.price2}</span>
                        <span className="simple-price-label">Llevar</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="simple-nav-prev" onClick={prevSlide}>❮</button>
          <button className="simple-nav-next" onClick={nextSlide}>❯</button>
        </div>

        <div className="simple-dots-container">
          {productsData.map((_, index) => (
            <button
              key={`dot-${index}`}
              className={`simple-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageCarouselSimple;