import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'
import img5 from '../../../assets/images/banner/5.jpg'
import img6 from '../../../assets/images/banner/6.jpg'
const Banner = () => {
    return (
        <div className="carousel w-full lg:h-[600px] sm:h-[200px]">
            <div id="slide1" className="carousel-item relative w-full sm:h-[200]">
                <img src={img1} className="w-full rounded-xl" />
                <div className="absolute flex items-center h-full left-0 top-0  rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className='text-white space-y-7 lg:w-1/2 pl-12'>
                        <h2 className='text-2xl lg:text-6xl font-bold '>Affordable Price For Car Servicing</h2>
                        <p className="hidden sm:block text-sm lg:text-base mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dicta veritatis quos totam doloremque illo placeat facilis accusamus inventore rerum, nam, iusto et libero ut esse autem quis suscipit?</p>
                        <div>
                            <button className=" text-[13px] lg:text-[15px] w-[100px] lg:w-[170px] lg:h-14 btn btn-primary mr-5">Discover More</button>
                            <button className="text-[13px] lg:text-[15px] w-[70px]  lg:w-[170px] lg:h-14 btn btn-outline btn-secondary">Latest Project</button>
                        </div>
                    </div>

                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>

            <div id="slide2" className="carousel-item relative w-full">
            <img src={img2} className="w-full rounded-xl" />
            <div className="absolute flex items-center h-full left-0 top-0  rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className='text-white space-y-7 lg:w-1/2 pl-12'>
                        <h2 className='text-2xl lg:text-6xl font-bold '>Affordable Price For Car Servicing</h2>
                        <p className="hidden sm:block text-sm lg:text-base mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dicta veritatis quos totam doloremque illo placeat facilis accusamus inventore rerum, nam, iusto et libero ut esse autem quis suscipit?</p>
                        <div>
                            <button className="text-[13px] lg:text-[15px] w-[100px] lg:w-[170px] lg:h-14 btn btn-primary mr-5">Discover More</button>
                            <button className="text-[13px] lg:text-[15px] w-[70px]  lg:w-[170px] lg:h-14 btn btn-outline btn-secondary">Latest Project</button>
                        </div>
                    </div>

                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>

            <div id="slide3" className="carousel-item relative w-full">
            <img src={img3} className="w-full rounded-xl" />
            <div className="absolute flex items-center h-full left-0 top-0  rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className='text-white space-y-7 lg:w-1/2 pl-12'>
                        <h2 className='text-2xl lg:text-6xl font-bold '>Affordable Price For Car Servicing</h2>
                        <p className="hidden sm:block text-sm lg:text-base mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dicta veritatis quos totam doloremque illo placeat facilis accusamus inventore rerum, nam, iusto et libero ut esse autem quis suscipit?</p>
                        <div>
                            <button className=" text-[13px] lg:text-[15px] w-[100px] lg:w-[170px] lg:h-14 btn btn-primary mr-5">Discover More</button>
                            <button className="text-[13px] lg:text-[15px] w-[70px]  lg:w-[170px] lg:h-14 btn btn-outline btn-secondary">Latest Project</button>
                        </div>
                    </div>

                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>

            <div id="slide4" className="carousel-item relative w-full">
            <img src={img4} className="w-full rounded-xl" />
            <div className="absolute flex items-center h-full left-0 top-0  rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className='text-white space-y-7 lg:w-1/2 pl-12'>
                        <h2 className='text-2xl lg:text-6xl font-bold '>Affordable Price For Car Servicing</h2>
                        <p className="hidden sm:block text-sm lg:text-base mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dicta veritatis quos totam doloremque illo placeat facilis accusamus inventore rerum, nam, iusto et libero ut esse autem quis suscipit?</p>
                        <div>
                            <button className=" text-[13px] lg:text-[15px] w-[100px] lg:w-[170px] lg:h-14 btn btn-primary mr-5">Discover More</button>
                            <button className="text-[13px] lg:text-[15px] w-[70px]  lg:w-[170px] lg:h-14 btn btn-outline btn-secondary">Latest Project</button>
                        </div>
                    </div>

                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;