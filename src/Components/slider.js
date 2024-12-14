import React, { useState, useEffect } from 'react';
import '../Styles/slider.css';

function Slider() {
  const images = [
    "lhp-10.jpg",
    "lhp-3.jpg",
    "lhp-6.jpg",
    "lhp-8.jpg",
    "lhp-9.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 
    return () => clearInterval(interval); 
  }, [images.length]);

  return (
    <div className="slider">
      <img
        src={`/lhp-web/lhp/public/${images[currentIndex]}`}
        alt="Slide"
        className="slider-image"
      />
    </div>
  );
}

export default Slider;
