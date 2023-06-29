import React from 'react';
import Card from './Card'; 

const WishlistItem = ({ data }) => {
  return (
    <div className="wishlist-item">
      <Card data={data} />
      {/* Add any additional wishlist-specific content or actions here */}
    </div>
  );
};

export default WishlistItem;
