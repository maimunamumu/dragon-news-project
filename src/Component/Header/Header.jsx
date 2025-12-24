import React from 'react';
import logo from '../../assets/logo.png'
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='mx-auto container px-25 flex flex-col items-center justify-center py-4 text-gray-600'>
          <img className='w-[400px]' src={logo} alt="" />
          <p>Journalism without Fear or Favour</p>
          <p className='font-semibold'>{format(new Date(),"EEEE,MMMM, MM,yyyy")}</p>
        </div>
    );
};

export default Header;