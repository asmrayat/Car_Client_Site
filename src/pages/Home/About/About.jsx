import img1 from '../../../assets/images/about_us/parts.jpg'
import img2 from '../../../assets/images/about_us/person.jpg'
const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img src={img2} className="w-3/4 rounded-lg shadow-2xl" />
                    <img src={img1} className="w-1/2 absolute right-5 top-1/2 border-8 border-white rounded-lg shadow-2xl" />
                </div>
                <div className='lg:w-1/2'>
                    <h3 className=' text-3xl text-orange-500 font-bold'>About Us</h3>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur ullam blanditiis at, sunt vitae harum ad excepturi impedit veritatis nihil odit ex repellendus debitis aut eius culpa! Harum, laudantium deserunt!</p>
                    <p className="py-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur ullam blanditiis at, sunt vitae harum ad excepturi impedit veritatis nihil odit ex repellendus debitis aut eius culpa! Harum, laudantium deserunt!</p>
                    <button className="btn btn-warning">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;