import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa6";
import team1 from '../../assets/images/team/1.jpg';
import team2 from '../../assets/images/team/2.jpg';
import team3 from '../../assets/images/team/3.jpg';

const Team = () => {
    return (
        <div>
            <div className='text-center'>
                <p className='text-xl text-[#FF3811] font-bold'>Team</p>
                <h2 className='text-[45px] font-bold'>Meet Our Team</h2>
                <p className='text-[#737373] mt-5 mb-12'>The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                <div className="card w-96 bg-base-100 shadow-xl border border-[#e8e8e8]">
                    <figure className="px-10 pt-10">
                        <img src={team1} alt="Shoes" className="object-cover rounded-xl h-[314px] w-[293px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-[#444] text-2xl font-bold">Car Engine Plug</h2>
                        <p className='text-[#737373] text-xl font-bold'>Engine Expert</p>
                        <div className='flex gap-3'>
                        <button className="btn btn-circle btn-outline bg-[#395185] text-white"><FaFacebookF/>
                        </button>
                        <button className="btn btn-circle btn-outline bg-[#55acee] text-white"><FaTwitter/>
                        </button>
                        <button className="btn btn-circle btn-outline bg-[#0a66c2] text-white"><FaLinkedinIn/>
                        </button>
                        <button className="btn btn-circle btn-outline bg-[#c04694] text-white"><FaInstagram/>
                        </button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl border border-[#e8e8e8]">
                    <figure className="px-10 pt-10">
                    <img src={team2} alt="Shoes" className="object-cover rounded-xl h-[314px] w-[293px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-[#444] text-2xl font-bold">Car Engine Plug</h2>
                        <p className='text-[#737373] text-xl font-bold'>Engine Expert</p>
                        <div className='flex gap-3'>
                        <button className="btn btn-circle btn-outline bg-[#395185] text-white"><FaFacebookF/>
                        </button>
                        <button className="btn btn-circle btn-outline bg-[#55acee] text-white"><FaTwitter/>
                        </button>
                        <button className="btn btn-circle btn-outline bg-[#0a66c2] text-white"><FaLinkedinIn/>
                        </button>
                        <button className="btn btn-circle btn-outline bg-[#c04694] text-white"><FaInstagram/>
                        </button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl border border-[#e8e8e8]">
                    <figure className="px-10 pt-10">
                    <img src={team3} alt="Shoes" className="object-cover rounded-xl h-[314px] w-[293px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-[#444] text-2xl font-bold">Car Engine Plug</h2>
                        <p className='text-[#737373] text-xl font-bold'>Engine Expert</p>
                        <div className='flex gap-3'>
                        <button className="btn btn-circle btn-outline bg-[#395185] text-white"><FaFacebookF/>
                        </button>
                        <button className="btn btn-circle btn-outline bg-[#55acee] text-white"><FaTwitter/>
                        </button>
                        <button className="btn btn-circle btn-outline bg-[#0a66c2] text-white"><FaLinkedinIn/>
                        </button>
                        <button className="btn btn-circle btn-outline bg-[#c04694] text-white"><FaInstagram/>
                        </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Team;