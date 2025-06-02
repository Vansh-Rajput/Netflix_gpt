import { useState } from "react";
import { Usetrailer } from "../utils/usetrailer";


const Videobackground = ({id}) => {

   const [data,setdata]=useState(null);
   
Usetrailer(setdata,id);

if(data!==null){
const link= data?.results?.find((elem)=>elem?.type==='Trailer');
console.log(link)

  return (
    <div>

  <iframe
  width="100%"
  height="800"
  src={
    'https://www.youtube.com/embed/' +
    link.key +
    '?autoplay=1&mute=1&loop=1&playlist=' +
    link.key +
    '&controls=0&modestbranding=1&showinfo=0&rel=0'
  }
  title="YouTube video player"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerPolicy="strict-origin-when-cross-origin"
  allowFullScreen
  style={{ pointerEvents: 'none' }} // Optional: prevent clicks on iframe
  className="bg-cover bg-center min-h-screen"
></iframe>
    </div>
  )
}
}

export default Videobackground





