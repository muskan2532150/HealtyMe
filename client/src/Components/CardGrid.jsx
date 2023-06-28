import React from 'react';
import Card from './Card';

const CardGrid = ({ products, cardsPerPage, currentPage }) => {
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = products.slice(indexOfFirstCard, indexOfLastCard);

  return (
    <div className="product-grid">
      {currentCards.map((product) => (
        <Card key={product.id} data={product} />
      ))}
    </div>
  );
};

export default CardGrid;
