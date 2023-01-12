import React from 'react'
import Navbar from './Navbar'


import { Footer } from './Footer'

import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { Cardvideo } from './Cardvideo';
const Channels = () => {
 
   const [videos, setVideos] = useState([])
   
   const key = "AIzaSyA82fnpCQ86CtAgV8qlgkgZdQtyI0mJfgU";
   const fecthData = `https://youtube.googleapis.com/youtube/v3/subscriptions?part=snippet%2CcontentDetails&maxResults=45&mine=true&key=${key}`
   const accessToken = localStorage.getItem('token')
   console.log('Main component : ', accessToken)
   useEffect(() => {
     fetch(fecthData, {
       method: "GET",
       headers: new Headers({ Authorization: `Bearer ${accessToken}` }),
     })
       .then((res) => res.json())
       .then((data) => setVideos(data.items));
   }, [accessToken]);
   
   return (
     <>
         <Navbar />
         
           <div className="Parentcontainer">
             <div className="listCard">
               {videos.map((item, id) => {
                 const channelId = item.snippet.resourceId.channelId;
                 return (
                   <Link
                     className="video__link__style"
                     to={`/chanelVideosPage/${channelId}`}
                     key={id}
                   >
                     <Cardvideo key={id} video={item} />
                   </Link>
                 );
               })}
             </div>
           </div>

           <Footer/>

       
       
     </>
   );
}
export default Channels;