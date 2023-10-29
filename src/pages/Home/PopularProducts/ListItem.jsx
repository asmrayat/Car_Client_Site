import React from 'react';

const ListItem = ({ item }) => {
    const{title,img,price,rating}=item;
    return (
        <div className="border border-[#e8e8e8] card w-[364px] h-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl w-[314px] h-56 bg-[#F3F3F3]" />
            </figure>
            <div className="card-body items-center text-center">
                <p>{rating}</p>
                <h2 className="card-title font-bold text-[#444]">{title}</h2>
                <p className='font-bold text-[#FF3811]'>${price}</p>
               
            </div>
        </div>
    );
};

export default ListItem;