import About from "../About/About";
import Banner from "../Banner/Banner";
import PopularProducts from "../PopularProducts/PopularProducts";
import Services from "../Services/Services";

const Home = () => {
    return (
        <div>
           <div className="mb-10 p-1">
           <Banner></Banner>
           </div>
           <About></About>
           <Services></Services>
           <PopularProducts></PopularProducts>
        </div>
    );
};

export default Home;