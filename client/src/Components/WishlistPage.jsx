import React from 'react';
import WishlistItem from './WishlistItem';

const WishlistPage = () => {
    let wishlistItems=[  {
        "id": "c7ee18c1-d14a-4473-9bc6-1d39ca2c7501",
        "company":"nike",
        "name": "ON Protien",
        "description": "100% Whey Protein.",
        "category": "supplements",
        "price": 3049,
        "rating": 4,
        "image": "images/Gym-Accessories.jpeg"
      }];

  return (
    <div className="wishlist-page">
      <h1>Your Wishlist</h1>
      <div className="wishlist-container">
        {wishlistItems.map((item) => (
          <WishlistItem key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default WishlistPage;