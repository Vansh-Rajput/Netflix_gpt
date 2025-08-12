import { useParams } from "react-router-dom";
import { useState } from "react";
import { Usetrailer } from "../utils/usetrailer";


const Watch = () => {
  const {type,watchid}=useParams();


    const [data,setdata]=useState(null);
       
    Usetrailer(type,setdata,watchid);
    
    if(data!==null){
    const link= data?.results?.find((elem)=>elem?.type==='Trailer');
    
  return (
    <div className='text-white'>
       
  <iframe
  width='100%'
  src={
  'https://www.youtube.com/embed/' +
link?.key +
'?autoplay=1&mute=0&controls=1&modestbranding=1&showinfo=0&rel=0'
  }
  
  title="YouTube video player"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerPolicy="strict-origin-when-cross-origin"
  allowFullScreen
  className="bg-cover  min-h-screen"
></iframe>
    </div>

  )

}

}

export default Watch;