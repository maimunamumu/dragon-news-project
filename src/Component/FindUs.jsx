import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div>
           <h1 className='font-bold'>Find Us On</h1>
           <div className='mt-5'>
            <div className="join join-vertical w-full">
  <button className="btn bg-base-100 justify-start join-item">      
    <FaFacebook></FaFacebook>
    Facebook</button>
  <button className="btn bg-base-100 justify-start join-item">
    <FaTwitter></FaTwitter>  Twiter</button>
  <button className="btn bg-base-100 justify-start join-item"><FaInstagram></FaInstagram> Instragram</button>
</div>
            </div> 
        </div>
    );
};

export default FindUs;