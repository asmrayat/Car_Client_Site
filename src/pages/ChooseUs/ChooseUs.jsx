import React from 'react';

import img1 from '../../assets/icons/group.svg'
import img2 from '../../assets/icons/group.svg'
import img3 from '../../assets/icons/person.svg'
import img4 from '../../assets/icons/Wrench.svg'
import img5 from '../../assets/icons/check.svg'
import img6 from '../../assets/icons/deliveryt.svg'

const ChooseUs = () => {
    return (
        <div>
            <div className='text-center'>
                <p className='text-xl text-[#FF3811] font-bold'>Core Features</p>
                <h2 className='text-[45px] font-bold'>Why Choose Us</h2>
                <p className='text-[#737373] mt-5 mb-12'>The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-6 gap-4'>
                <div className="card w-[170px] h-[156px] rounded-lg border border-[#e8e8e8] ">
                    <div className="flex items-center card-body rounded-lg hover:bg-[#f6f6f6]">
                        <img className='w-[75.634px] h-[53.18px]' src={img1} alt="" />
                        <h2 className="card-title text-[#444] font-bold text-base">Expert Team</h2>
                        
                    </div>
                </div>
                <div className="card w-[170px] h-[156px] rounded-lg border border-[#e8e8e8] ">
                    <div className="flex items-center card-body rounded-lg hover:bg-[#f6f6f6]">
                        <img className='w-[75.634px] h-[53.18px]' src={img2} alt="" />
                        <h2 className="card-title text-[#444] font-bold text-base">Timely Delivery</h2>
                        
                    </div>
                </div>
                <div className="card w-[170px] h-[156px] rounded-lg border border-[#e8e8e8] ">
                    <div className="flex items-center card-body rounded-lg hover:bg-[#f6f6f6]">
                        <img className='w-[75.634px] h-[53.18px]' src={img3} alt="" />
                        <h2 className="card-title text-[#444] font-bold text-base">24/7 Support</h2>
                        
                    </div>
                </div>
                <div className="card w-[170px] h-[156px] rounded-lg border border-[#e8e8e8] ">
                    <div className="flex items-center card-body rounded-lg hover:bg-[#f6f6f6]">
                        <img className='w-[75.634px] h-[53.18px]' src={img4} alt="" />
                        <h2 className="card-title text-[#444] font-bold text-base">Best Equipment</h2>
                        
                    </div>
                </div>
                <div className="card w-[170px] h-[156px] rounded-lg border border-[#e8e8e8] ">
                    <div className="flex items-center card-body rounded-lg hover:bg-[#f6f6f6]">
                        <img className='w-[75.634px] h-[53.18px]' src={img5} alt="" />
                        <h2 className="card-title text-[#444] font-bold text-base">100% Guranty</h2>
                        
                    </div>
                </div>
                <div className="card w-[170px] h-[156px] rounded-lg border border-[#e8e8e8] ">
                    <div className="flex items-center card-body rounded-lg hover:bg-[#f6f6f6]">
                        <img className='w-[75.634px] h-[53.18px]' src={img6} alt="" />
                        <h2 className="card-title text-[#444] font-bold text-base">Timely Delivery</h2>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;