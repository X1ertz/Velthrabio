import React, { useEffect, useState,useRef } from 'react';
import { Menu, X } from 'lucide-react';
import featureBg from './Image/R.jpeg';
import FeaturesLeft from './FeatureLeft';
import ContactFooter from './footer';
import DemoCenterBox from './democenterbox';
import ShowCaseSection from './show';
import HomeBg from './้hero';
import './App.css';

export default function InteractiveWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);
  const gridRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 } // 20% ของ element ปรากฏ
    );

    if (gridRef.current) {
      observer.observe(gridRef.current);
    }

    return () => observer.disconnect();
  }, []);
  // Track mouse position
  useEffect(() => {
    const onMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  // Track scroll
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      setScrollProgress(progress);

      // Divide page into 4 sections
      setCurrentSection(Math.floor(progress * 4));
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="app-container">
      <div className="progress-bar">
  <div
    className="progress-fill"
    style={{ width: `${scrollProgress * 100}%` }}
  />
</div>

      {/* Custom cursor */}
      <div
        className="custom-cursor"
        style={{
          left: mousePos.x - 16,
          top: mousePos.y - 16,
        }}
      />
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <img src="./images/Velthra Bio.png" alt="" width={50} height={50} />

            <span className="logo-text">Velthrabio</span>
          </div>

          <div className="nav-links">
            {['Home', 'Features', 'Demo', 'Contact'].map((item, i) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`nav-link ${currentSection === i ? 'active' : ''}`}
              >
                {item}
              </a>
            ))}
          </div>

          <button className="nav-button">Try Now</button>

          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <div className="mobile-menu">
            <div className="mobile-menu-content">
              {['Home', 'Features', 'Demo', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="mobile-link"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Page sections */}
      <section id="home">
        <HomeBg/>
        {/* Banner อยู่ซ้ายล่าง */}
        <div className="banner">
          <p>
    Your trusted supplier of premium-grade Kratom (Mitragyna speciosa),
    sustainably sourced from local farmers in Kalimantan, Indonesia, since 2015.
  </p>
  <p>5000+ tonnes sold globally.</p>
</div>


  {/* ปุ่มอยู่กลางจอ */}
  {/* <div className="center-buttons">
    <button>Learn More</button>
    <button>Buy Now</button>
  </div> */}
</section>

      <section
  id="features"
  style={{
    height: '100vh',
    display: 'flex',        // จัดเป็น flex row
    background: '#ffffffff',
    color: 'Black',
  }}
>
  {/* ครึ่งซ้าย */}
<div
  style={{
    flex: 1,              
    display: 'flex',
    justifyContent: 'center', 
    alignItems: 'center',     
    padding: '2rem',
  }}
>
  <div style={{ width: '100%', maxWidth: '400px' }}>

    {/* Accordion */}
    <FeaturesLeft />
    
  </div>
</div>

  {/* ครึ่งขวา */}
  <div
    style={{
      flex: 1,              // ครึ่งขวา
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '1rem',
    }}
  >

<img
  src={featureBg}   // <-- ใช้ตัวแปรตรง ๆ
  alt="Feature"
  style={{ maxWidth: '100%', borderRadius: '12px' }}
/>

  </div>
</section>

<section id="demo" className="demo-section">
  {/* ฝั่งซ้าย: วิดีโอ */}
    <div className="demo-left">
    <video
      src="/video/vdo.mp4"
      controls
      autoPlay
      loop
      muted
      className="demo-video"
    />
  
  </div>

  {/* ฝั่งขวา: ข้อความยาวขึ้น */}
  <div className="demo-right">
    <div className="demo-text-container">
      <h1 className="demo-title">MitraGreen Kratom Powder</h1>
      <p className="demo-description">
        We offer top-quality <strong>Super Green Kratom powder</strong> in various packaging options. 
        Our products are carefully processed to ensure purity, consistency, and maximum potency. 
        Ideal for both personal use and commercial distribution, we provide detailed guidance 
        on safe usage and storage.
      </p>

      <div className="demo-details">
        <p>25 kg Packaging</p>
        <p>2 kg Vacuum Packaging</p>
        <p className="demo-price">
          With prices starting from <span>$3.30 / Kg</span>
        </p>
      </div>

      <button className="Feature-button">Contact Us</button>
    </div>
  </div>

  {/* 🔶 กล่องตรงกลางล่าง */}


</section>
<ShowCaseSection/>
<section id="demo" className="demo-section"> <DemoCenterBox/></section>
      <section id="contact" className="contact-section">
  <h1 className="contact-title">Gallery</h1>

  <div
      ref={gridRef}
      className={`card-grid ${visible ? "animate-fadeInUp" : ""}`}
    >
      {Array.from({ length: 6 }).map((_, i) => (
        <div className="contact-card" key={i}>
          <img
            src={`/images/R${i + 1}.jpeg`}
            alt={`Card ${i + 1}`}
            className="card-image"
          />
        </div>
      ))}
    </div>
</section>
    <ContactFooter/>
    </div>
  );
}

      

