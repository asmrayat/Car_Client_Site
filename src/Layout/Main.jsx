
import { Outlet } from 'react-router-dom';
import Header from '../pages/Sheard/Header/Header';
import Footer from '../pages/Sheard/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;