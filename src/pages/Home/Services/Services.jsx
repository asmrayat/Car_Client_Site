import { useEffect } from "react";
import { useState } from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {

    const [services,setServices] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data =>setServices(data))

    },[])

    return (
        <div className='mt-4'>
            <div className='text-center'>
                <h3 className='text-2xl font-bold text-orange-600'>Our Services</h3>
                <h2 className='text-5xl'>Our service Area</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut similique ipsam natus. Distinctio voluptatem magnam fugiat similique <br /> ipsa quam, laudantium aperiam, dolore recusandae debitis nobis, minima voluptates. Illo, architecto animi!</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(services => <ServicesCard
                    key={services._id}
                    service={services}
                    ></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Services;