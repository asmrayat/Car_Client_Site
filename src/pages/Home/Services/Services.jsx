import { useEffect } from "react";
import { useState } from "react";
import ServicesCard from "./ServicesCard";
import icon1 from '../../../assets/icons/cal.png';
import icon2 from '../../../assets/icons/cl.png';
import icon3 from '../../../assets/icons/loc.png';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://y-4kkuy085u-rayats-projects.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])

    return (
        <div className='mt-36'>
            <div className='text-center'>
                <h3 className='text-2xl font-bold text-orange-600'>Services</h3>
                <h2 className='text-5xl font-bold'>Our service Area</h2>
                <p className="text-[#737373] mt-5">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(services => <ServicesCard
                        key={services._id}
                        service={services}
                    ></ServicesCard>)
                }
            </div>
            <div className="flex justify-center">
                <div className="rounded-xl
                mt-10 sm:mt-16 md:mt-20 lg:mt-32
                mb-10 sm:mb-16 md:mb-20 lg:mb-32
                w-full max-w-[90%] lg:max-w-[1140px] lg:h-[250px] 
                bg-[#151515] p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row justify-evenly h-full items-center">
                        <div className="text-white flex items-center mb-4 sm:mb-0">
                            <img src={icon1} alt="" className="w-8 h-8 sm:w-10 sm:h-10" />
                            <div className="ml-3">
                                <p className="text-sm sm:text-base">We are open Monday-Friday</p>
                                <h3 className="text-base sm:text-lg font-bold">7:00 am - 9:00 pm</h3>
                            </div>
                        </div>
                        <div className="text-white flex items-center mb-4 sm:mb-0">
                            <img src={icon2} alt="" className="w-8 h-8 sm:w-10 sm:h-10" />
                            <div className="ml-3">
                                <p className="text-sm sm:text-base">Have a question?</p>
                                <h3 className="text-base sm:text-lg font-bold">+2546 251 2658</h3>
                            </div>
                        </div>
                        <div className="text-white flex items-center">
                            <img src={icon3} alt="" className="w-8 h-8 sm:w-10 sm:h-10" />
                            <div className="ml-3">
                                <p className="text-sm sm:text-base">Need a repair? Our address</p>
                                <h3 className="text-base sm:text-lg font-bold">Liza Street, New York</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Services;