import React, { useState, useEffect } from 'react';

const images = [
  { src: '/images/R1.jpeg', alt: 'Image 1', link: '#' },
  { src: '/images/R2.jpeg', alt: 'Image 2', link: '#' },
  { src: '/images/R3.jpeg', alt: 'Image 3', link: '#' },
];

export default function ShowCaseSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex(prev => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev + 1) % images.length);
  };

  return (
    <section id="show-case-sec" className="show-case-sec">
      {images.map((img, index) => (
        <a
          href={img.link}
          key={index}
          className={`show-case-slide ${index === currentIndex ? 'show-case-active' : ''}`}
        >
          <img src={img.src} alt={img.alt} className="show-case-image" />
        </a>
      ))}

      {/* Controls */}
      <button className="show-case-btn show-case-prev" onClick={handlePrev}>
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6" />
  </svg>
</button>

<button className="show-case-btn show-case-next" onClick={handleNext}>
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
</button>

    </section>
  );
}
