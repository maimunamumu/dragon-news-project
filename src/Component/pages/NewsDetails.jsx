import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import RightAside from '../homeLayout/RightAside';
import NewsDetailsCard from '../NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {
    const data=useLoaderData();
    const {id}=useParams();
    const [news,setNews]=useState({});

    useEffect(()=>{
        const newsDetails= data.find(singleNews=> singleNews.id==id);
        setNews(newsDetails);
      
        
    },[data,id])
    return (
        <div>
          <header>
            <Header></Header>
            </header>  
            <main className='mx-auto container px-24 py-4 grid grid-cols-12 gap-5'>
             <section className='col-span-9'>
                <h2 className='font-bold mb-5'>News Details</h2>
                <NewsDetailsCard news={news}></NewsDetailsCard>
             </section>
             <aside className='col-span-3'>
                <RightAside> </RightAside>
             </aside>
            </main>
        </div>
    );
};

export default NewsDetails;