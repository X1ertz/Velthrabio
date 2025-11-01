import React, { useState } from 'react';
import './App.css';

function FeaturesLeft() {
  const [openIndex, setOpenIndex] = useState(null);

  const accordions = [
    { title: 'Feature 1 ipsum dolor sit amet', content: 'รายละเอียด Feature 1 Lorem ipsum dolor sit amet.' },
    { title: 'Feature 2 ipsum dolor sit amet', content: 'รายละเอียด Feature 2 Lorem ipsum dolor sit amet.' },
    { title: 'Feature 3 ipsum dolor sit amet', content: 'รายละเอียด Feature 3 Lorem ipsum dolor sit amet.' },
    { title: 'Feature 4 ipsum dolor sit amet', content: 'รายละเอียด Feature 4 Lorem ipsum dolor sit amet.' },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="features-left-container">
      <div>
        <h1>Our Features</h1>
        <p>Your trusted supplier of premium-grade Kratom (Mitragyna speciosa)</p>
        {accordions.map((item, index) => (
          <div
            key={index}
            className="accordion"
            onClick={() => toggleAccordion(index)}
          >
            <div className="accordion-header">
              <span>{item.title}</span>
              <span>{openIndex === index ? '−' : '+'}</span>
            </div>

            <div className={`accordion-content ${openIndex === index ? 'open' : ''}`}>
              {item.content}
            </div>
          </div>
        ))}

        {/* ปุ่มด้านล่างซ้าย scscs*/}
        <button className="Feature-button">Learn More</button>
      </div>
    </div>
  );
}

export default FeaturesLeft;
