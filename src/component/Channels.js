import React from 'react'
import Navbar from './Navbar'
import { Channelvideo } from './Channelvideo'

import { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
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
   console.log('videxos abonnées : ', videos)
   return (
     <>
       <div>
         <Navbar />
         <div>

           <div className="container videochanel">
             <div className="row row-cols-1 row-cols-sm-4 row-cols-md-4 justify-content-center">
            
                 {videos.map((item, id) => {
                   const channelId = item.snippet.resourceId.channelId;
                   return (
                     <Link
                       className="video__link__style"
                       to={`/chanelVideosPage/${channelId}`}
                       key={id}
                     >
                       <Channelvideo key={id} video={item} />
                     </Link>
                   );
                 })}
               
             </div>
           </div>
         </div>
       </div>
     </>
   );
}
export default Channels;