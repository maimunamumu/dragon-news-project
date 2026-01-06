import React from 'react';
import Navbar from '../Component/Navbar/Navbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className='bg-base-200 min-h-screen'>
           <header className='mx-auto container px-12 py-4 '>
            <Navbar></Navbar>
           </header>
           <main className='mx-auto container px-12 py-4 '>
<Outlet></Outlet>
           </main>
        </div>
    );
};

export default AuthLayout;