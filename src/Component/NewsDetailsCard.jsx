import React from 'react';
import { Link } from 'react-router';

const NewsDetailsCard = ({news}) => {
    return (
        <div>
            <img src={news.image_url} alt="" />
           <h2 className='text-lg font-semibold mt-2'>{news.title}</h2> 
           <p className='text-gray-500 mt-3'>{news.details}</p>
          <Link to={`/category/${news.category_id}`}>
           <button className="px-4 py-2 bg-red-500 text-white mt-4">Back to Category</button>
          </Link>
        </div>
    );
};

export default NewsDetailsCard;