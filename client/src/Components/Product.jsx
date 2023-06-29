import React,{useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import CardGrid from './CardGrid';
import Pagination from './Pagination';

const Product = () => {
    let cardsPerPage = 6;
    const { data } = useSelector((state) => state.card);
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(data.length / cardsPerPage);

    const onPageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className='product-page'>
            <h1>Shop the Latest Collection</h1>
            <div className='product-grid'>
            <CardGrid
                products={data}
                cardsPerPage={cardsPerPage}
                currentPage={currentPage}
            />
             </div>
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={onPageChange}
            />
        </div >
    )
}

export default Product