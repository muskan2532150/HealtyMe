import React from 'react'
import { useSelector } from 'react-redux'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Card = () => {
  const state = useSelector((state) => state.card);
  const onClickItem =(index) => {
 console.log(index);
  }

  return (
    <div className='Carousel'>
      <Carousel infiniteLoop autoPlay useKeyboardArrows showIndicators stopOnHover showArrows={false} showThumbs={false} onClickItem={onClickItem}>
        {state.map((item, index) => (
        <div className="card" key={index}>
            <div className="card-image">
              <img src={item.image} alt="product image" />
            </div>
            <div className="card-body">
              <div className="card-text-content m-xs">
              <p className="card-title">{item.title}</p>
              <p className="price fw-600 p-xxs p-rl0">{item.price}</p>
              </div>
              </div>
            </div>))}
          </Carousel>
        </div>
        )
}

        export default Card