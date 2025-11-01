
import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import './ImageCarousel.css';

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const images = [
    '/images/R1.jpeg',
    '/images/R2.jpeg',
    '/images/R3.jpeg',
    '/images/R4.jpeg',
    '/images/R5.jpeg',
    '/images/R6.jpeg',
  ];

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // เลื่อนทุก 4 วินาที

    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="carousel-wrapper">
        <div className="carousel-container">
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="carousel-image"
            onClick={openModal}
          />
          
          <button className="carousel-button prev" onClick={goToPrevious}>
            <ChevronLeft size={32} />
          </button>
          
          <button className="carousel-button next" onClick={goToNext}>
            <ChevronRight size={32} />
          </button>
        </div>

        <div className="carousel-dots">
          {images.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>

        <div className="carousel-counter">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Modal สำหรับดูรูปขยาย */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <X size={32} />
            </button>
            <img
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              className="modal-image"
            />
            <div className="modal-controls">
              <button className="modal-nav-button" onClick={goToPrevious}>
                <ChevronLeft size={24} />
              </button>
              <span className="modal-counter">
                {currentIndex + 1} / {images.length}
              </span>
              <button className="modal-nav-button" onClick={goToNext}>
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}