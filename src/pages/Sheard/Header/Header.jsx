import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg';
import { AuthContext } from '../../../providers/AuthProviders';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                localStorage.removeItem('car-access-token');
            })
            .catch(error => console.log(error))
    }

    const navItem =
        <>
            <li><Link to="/"> Home</Link></li>
            {user?.email && (
                <li><Link to="/booking">My Booking</Link></li>
            )}
        </>
    return (
        <div className="navbar bg-base-100 h-28 mb-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItem}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">
                    <img className='w-16 lg:w-[80px]' src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItem}
                </ul>
            </div>
            <div className="navbar-end">
                {user?.email ? <>
                    <button onClick={handleLogOut} className="text-[13px] lg:text-[15px] w-[100px] lg:w-[170px] lg:h-14 btn btn-outline btn-secondary">Logout</button>
                </> :
                    <Link to="/login"><button className="text-[13px] lg:text-[15px] w-[100px] lg:w-[170px] lg:h-14 btn btn-outline btn-secondary">Login</button></Link>
                }

            </div>
        </div>
    );
};

export default Header;