import React, { useEffect, useRef, useState } from "react";
import "./App.css";

export default function DemoCenterBox() {
  const boxRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // หลังจากเห็นแล้วก็เลิก observe
        }
      },
      { threshold: 0.3 } // ปรับ % ของกล่องที่ต้องเห็นก่อนเริ่ม animation
    );

    if (boxRef.current) observer.observe(boxRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={boxRef}
      className={`demo-center-box ${visible ? "animate-fadeInUp" : ""}`}
    >
      <h2>Premium Quality Guaranteed</h2>
      <p>
        Experience the finest Kratom powder, sourced directly from sustainable
        farms in Kalimantan. Trusted globally for purity and potency.
      </p>
      <button className="center-box-button">Learn More</button>
    </div>
  );
}
