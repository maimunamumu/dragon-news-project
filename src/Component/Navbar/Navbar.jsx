import React from 'react';
import { Link, NavLink } from 'react-router';
import userIcon from "../../assets/user.png"
import { AuthContext } from '../../provider/AuthProvider';
import { use } from 'react';

const Navbar = () => {
    const {user,logOut}=use(AuthContext);
    const handleLogout=()=>{
logOut().then(() => {
 alert ("you logOut successfully")
}).catch((error) => {
console.log(error);

});
    }
    return (
        <div className='flex justify-between items-center'>
        <div>{user&& user.email}</div>
        <div className='flex gap-4 text-gray-600'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/carrer">Career</NavLink>
        </div>
        <div className="login-btn flex items-center gap-3">
            <img className='w-10' src={userIcon} alt="" />
            {
                user ? (<button onClick={handleLogout} className='btn bg-gray-700 text-white px-10'>Log Out</button>):  (<Link to="/auth/login">
            <button className='btn bg-gray-700 text-white px-10'>Login</button>
            </Link>)
            }
          
        </div>
        </div>
    );
};

export default Navbar;