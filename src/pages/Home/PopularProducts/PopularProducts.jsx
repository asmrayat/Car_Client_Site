import React, { useEffect, useState } from 'react';
import ListItem from './ListItem';

const PopularProducts = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setItems(data))

    }, [])
    return (
        <div>
            <div className='text-center'>
                <p className='text-xl font-bold text-[#FF3811]'>Popular Products</p>
                <h1 className='text-5xl font-bold'>Browse Our Products</h1>
                <p className='text-[#737373]'>the majority have suffered alteration in some form, by injected humour, or randomised <br />words which don't look even slightly believable. </p>

                <div className='p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {items.map(item => <ListItem
                    key={item.service_id}
                    item={item}
                    ></ListItem> )
                    }
                </div>
            </div>
        </div>
    );
};

export default PopularProducts;