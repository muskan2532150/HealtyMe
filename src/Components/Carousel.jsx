import React, { useState } from 'react';
import './Carousel.css';

const Carousel = ({ cards }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const nextCard = () => {
    const newIndex = (currentCardIndex + 1) % cards.length;
    setCurrentCardIndex(newIndex);
  };

  const prevCard = () => {
    const newIndex = (currentCardIndex - 1 + cards.length) % cards.length;
    setCurrentCardIndex(newIndex);
  };

  return (
    <div className="carousel">
      <div className="carousel-container">
        <button className="carousel-button" onClick={prevCard}>
          &lt; Prev
        </button>
        {cards.map((card, index) => (
          <div
            key={index}
            className={`carousel-card ${index === currentCardIndex ? 'active' : ''}`}
          >
            {card}
          </div>
        ))}
        <button className="carousel-button" onClick={nextCard}>
          Next &gt;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
