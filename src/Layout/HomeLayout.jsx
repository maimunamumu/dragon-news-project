import React from 'react';
import Header from '../Component/Header/Header';
import { Outlet } from 'react-router';
import LatestNews from '../Component/Header/LatestNews';
import Navbar from '../Component/Navbar/Navbar';
import LeftAside from '../Component/homeLayout/LeftAside';
import RightAside from '../Component/homeLayout/RightAside';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
               <section className='mx-auto container px-12 py-3'> <LatestNews></LatestNews></section>
               <nav className='mx-auto container px-12 py-3'>
                <Navbar></Navbar>
               </nav>
            </header>
            <main className='mx-auto container px-12 py-3 grid grid-cols-12 gap-6'>
           <aside className='col-span-3'><LeftAside></LeftAside></aside>
             <section className='main col-span-6'> 
                <Outlet></Outlet>
             </section>
           <aside className='col-span-3'><RightAside></RightAside></aside>
            </main>
         
        </div>
    );
};

export default HomeLayout;