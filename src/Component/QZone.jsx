import React from 'react';
import swimming from "../assets/swimming.png";
import classes from "../assets/class.png";
import playImg from "../assets/playground.png"

const QZone = () => {
    return (
        <div className='bg-base-200 p-3'>
            <h1 className='font-bold mb-5'>Q Zone</h1>
            <div className='space-y-5'>
         <img src={swimming} alt="" />
         <img src={classes} alt="" />
         <img src={playImg} alt="" />
            </div>
        </div>
    );
};

export default QZone;