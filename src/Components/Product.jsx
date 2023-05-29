import React from 'react'
import { useSelector } from 'react-redux';

const Product = () => {
    const state = useSelector((state) => state.card);

    return (
        <section className='Product-list'>
            <header></header>
            <div className='card-container'>
                {state.map((item, index) =>
                    <div className='card' key={index}>
                        <img src={item.img} alt={item.title} className='card-img' />
                        <section className='card-body'>
                            <p className='card-title'>{item.title}</p>
                            <p className='card-subtitle'>{item.description}</p>
                            <p className='card-price'>{item.price}</p>
                            <div className='card-rating'>{item.rating}</div>
                            <button type="button" className='' >Add to Cart</button>
                        </section>
                    </div>
                )} 
            </div>

        </section>
    )
}

export default Product