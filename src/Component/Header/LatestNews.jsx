import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-4 bg-base-200 p-3'>
        <p className='text-base-100 bg-red-600 px-3 py-2'>Latest</p>
       <Marquee  className='' pauseOnHover={true}>
         <p className='font-bold'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum repellendus molestiae inventore voluptates veniam 
        </p>
       </Marquee>
        </div>
    );
};

export default LatestNews;