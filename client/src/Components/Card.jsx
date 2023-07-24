import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from "../redux/CartSlice"
import { StarIcon } from '@heroicons/react/20/solid'
import { useParams, Link } from 'react-router-dom';


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Card = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.card.data);
    const { id } = useParams();
    const FilterData = data.filter((card) => card.id.includes(id))
    let product = FilterData[0];

    return (
        <div className="bg-white">
            <div className="pt-6">
                <nav aria-label="Breadcrumb">
                    <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                        <li key={product.id}>
                            <div className="flex items-center">
                                <Link to='/' className="mr-2 text-sm font-medium text-gray-900">
                                    {product.attributes.category}
                                </Link>
                                <svg
                                    width={16}
                                    height={20}
                                    viewBox="0 0 16 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    className="h-5 w-4 text-gray-300"
                                >
                                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                </svg>
                            </div>
                        </li>
                        <li className="text-sm">
                            <p className="font-medium text-gray-500 hover:text-gray-600">
                                {product.attributes.name}
                            </p>
                        </li>
                    </ol>
                </nav>

                {/* Image gallery */}
                <div className='lg:grid lg:grid-cols-2'>
                    <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:max-w-7xl lg:gap-x-8 lg:px-8 px-2">
                        <div className="aspect-h-4 aspect-w-3 overflow-hidden rounded-lg lg:block">
                            <img
                                src={product.attributes.img}
                                alt={product.attributes.name}
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                    </div>

                    {/* Product info */}
                    <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:max-w-7xl lg:gap-x-8 lg:px-8 lg:pb-24 lg:pr-16">
                        <div className="lg:col-span-2 lg:pr-8">
                            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.attributes.name}</h1>
                        </div>

                        {/* Options */}
                        <div className="mt-4 lg:row-span-3 lg:mt-0">
                            <h2 className='text-2xl tracking-tight text-gray-900 py-3 '>Product information</h2>

                            {/* Reviews */}
                            <div className="mt-6 flex justify-between">
                            <p className="text-3xl tracking-tight text-gray-900">Rs.{product.attributes.price}</p>
                                <h3 className="sr-only">Reviews</h3>
                                <div className="flex items-center">
                                    <div className="flex items-center">
                                        {[0, 1, 2, 3, 4].map((rating) => (
                                            <StarIcon
                                                key={rating}
                                                className={classNames(
                                                    product.attributes.rating > rating ? 'text-gray-900' : 'text-gray-200',
                                                    'h-5 w-5 flex-shrink-0'
                                                )}
                                                aria-hidden="true"
                                            />
                                        ))}
                                    </div>
                                    <p className="sr-only">{product.attributes.rating} out of 5 stars</p>
                                    <p className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                        {product.attributes.totalCount} reviews
                                    </p>
                                </div>
                            </div>

                            <div className="py-5 lg:col-span-2 lg:col-start-1 lg:pb-16 lg:pr-8 lg:pt-6">
                            {/* Description */}
                            <div>
                                <h3 className="text-2xl font-bold tracking-tight text-gray-900 py-3">Description</h3>

                                <div className="space-y-6">
                                    <p className="text-base text-gray-900">{product.attributes.description}</p>
                                </div>
                            </div>
                        </div>

                            <button
                                type="button"
                                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                onClick={() => {
                                    dispatch(addToCart(product))
                                }}
                            >
                                Add to bag
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card