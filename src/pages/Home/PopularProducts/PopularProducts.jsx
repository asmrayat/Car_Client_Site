import React, { useState } from 'react';

const PopularProducts = () => {
    const [items, setItems] = useState([]);
    fetch('services.json')
        .then(res => res.json())
        .then(data => setItems(data))
    return (
        <div>
            <div className='text-center'>
                <p className='text-xl font-bold text-[#FF3811]'>Popular Products</p>
                <h1 className='text-5xl font-bold'>Browse Our Products</h1>
                <p className='text-[#737373]'>the majority have suffered alteration in some form, by injected humour, or randomised <br />words which don't look even slightly believable. </p>

                <p>total item {items.length}</p>
                <div>
                {items.map((item, index) => (
                        <div key={index}>
                            <p>{index}</p>
                            <h3>{item.title}</h3>
                            <p>Price: {item.price}</p>
                        </div>
                    ))
                    }
                </div>
            </div>
        </div>
    );
};

export default PopularProducts;