import React from 'react'

const Card = ({item,key}) => {
    return (
                <div className='card' key={key}>
                    <img src={item.img} alt={item.title} className='card-img' />
                    <section className='card-body'>
                        <p className='card-title'>{item.title}</p>
                        <p className='card-subtitle'>{item.description}</p>
                        <p className='card-price'>{item.price}</p>
                        <div className='card-rating'>{item.rating}</div>
                        <button type="button" className='card-btn' >Add to Cart</button>
                    </section>
                </div>
    )
}

export default Card