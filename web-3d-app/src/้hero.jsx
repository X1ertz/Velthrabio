import { useEffect, useState } from 'react';

export default function HomeBg() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 100); // delay เล็กน้อย
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home-bg-container">
      <div className={`content ${showContent ? "show" : ""}`}>
        <h1>Velthrabio</h1>
        <div className='descript-content'>Science of Purity.</div>
      </div>
    </div>
  );
}
