import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import Card from './Card';
import {onNavigateNext,onNavigatePrev} from "../redux/CardSlice"

const Product = () => {
    const {data,PerPage,currentPage} = useSelector((state) => state.card);

    return (
        <section className='Product-list'>
            <header></header>
            <div className='card-container'>
            {data.map((item, index) =>
                <Card item={item} key={index}/>
            )}
                {console.log("totalPage: ",Math.ceil(data.length/PerPage))}
            </div>
            <div className='pagination'>
                <button type='button' className=''></button>
            </div>

        </section>
    )
}

export default Product