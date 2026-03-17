import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './imageCarouselManual-styles.css';

const ImageCarouselManual = () => {
  const { t } = useTranslation();
  
  // Estados del carrusel principal
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Estados del modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  // ✅ Datos del carrusel desde i18n (SIEMPRE PRIMERO)
  const productsData = t('carousel.products', { returnObjects: true }) || [];
  const carouselTitle = t('carousel.title');

  // Funciones del carrusel principal
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % productsData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + productsData.length) % productsData.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Funciones del modal
  const openModal = (index) => {
    setModalIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Evita scroll de fondo
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset'; // Restaura scroll
  };

  const nextModal = () => {
    setModalIndex((prev) => (prev + 1) % productsData.length);
  };

  const prevModal = () => {
    setModalIndex((prev) => (prev - 1 + productsData.length) % productsData.length);
  };

  // Manejo de teclas
  useEffect(() => {
    const handleKey = (e) => {
      if (!isModalOpen) return;
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') nextModal();
      if (e.key === 'ArrowLeft') prevModal();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isModalOpen]);

  // Fallback si no hay productos
  if (!productsData.length) {
    return <div>No hay productos disponibles</div>;
  }

  return (
    <>
      {/* MODAL - DENTRO DEL RETURN PRINCIPAL */}
      {isModalOpen && (
        <div className="fullscreen-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <button className="modal-prev" onClick={prevModal}>❮</button>
            <div className='image-container'>
              <img 
              src={`${import.meta.env.BASE_URL}${productsData[modalIndex].image}`} 
              alt={productsData[modalIndex].title} />
            </div>
                        
            <div className="modal-info">
              <h3>{productsData[modalIndex].title}</h3>
              <p>{productsData[modalIndex].description}</p>
              <div className="price">{productsData[modalIndex].price}</div>
            </div>
            
            <button className="modal-next" onClick={nextModal}>❯</button>
          </div>
        </div>
      )}

      {/* CARRUSEL PRINCIPAL */}
      <section className="manual-carousel-section">
        {carouselTitle && <h2 className="carousel-title">{carouselTitle}</h2>}
        
        <div className="carousel-wrapper">
          <div 
            className="carousel-track" 
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {productsData.map((product, index) => (
              <div key={product.id} className="card-slide">
                <div className="card-inner">
                  <div 
                    className="card-image" 
                    onClick={() => openModal(index)} // CORREGIDO: usar INDEX
                    role="button"
                    tabIndex={0}
                  >
                    <img 
                      src={`${import.meta.env.BASE_URL}${product.image}`} 
                      alt={product.title} 
                      loading="lazy" 
                    />
                  </div>
                  <div className="card-content">
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                    <div className="price">{product.price}</div>
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
    </>
  );
};

export default ImageCarouselManual;
