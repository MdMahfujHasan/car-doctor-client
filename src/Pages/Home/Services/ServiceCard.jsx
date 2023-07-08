import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id, title, img, price } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold">{title}</h2>
                <Link to={`/checkout/${_id}`} className='flex items-center text-lg text-orange-600 font-bold'>
                    <p>Price: ${price}</p>
                    <AiOutlineArrowRight />
                </Link>
            </div>
        </div>
    );
};

export default ServiceCard;