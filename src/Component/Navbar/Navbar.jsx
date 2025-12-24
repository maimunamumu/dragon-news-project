import React from 'react';
import { NavLink } from 'react-router';
import user from "../../assets/user.png"

const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>
        <div></div>
        <div className='flex gap-4 text-gray-600'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/carrer">Career</NavLink>
        </div>
        <div className="login-btn flex items-center gap-3">
            <img className='w-10' src={user} alt="" />
            <button className='btn bg-gray-700 text-white px-10'>Login</button>
        </div>
        </div>
    );
};

export default Navbar;