import { Link } from "react-router-dom";
import { Posterurl } from "../utils/constants";
import { useEffect, useState } from "react";
import { addtowatchlist, removewatchlist, watchlist } from "../utils/watchlists";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";


const Moviecard = ({ poster, id, fulldata , type}) => {

  const [iswatchlist,setiswatchlist]=useState(false);


// VERY IMP to use onauthstatechanged as earlier we were trying to call our watchlist func before user was properly
// loggedin, hence return [] was executed everytime....so first login, then fetch watchlist
useEffect(() => {
  const unsub = onAuthStateChanged(auth, async (user) => {
    if (!user) {
      setiswatchlist(false);
      return;
    }
    try {
      const list = await watchlist();
      list.forEach((moviedata)=>{
        if(moviedata?.id===fulldata?.id)
       setiswatchlist(true);
      })
      
    } catch (error) {
      console.error("Failed to get watchlist", error);
    }
  });

  return () => unsub();
}, [id]);



  const handlewatchlist=async()=>{

    iswatchlist? await removewatchlist(fulldata): await addtowatchlist(fulldata);
    setiswatchlist(!iswatchlist)
  }


  return (
    
      <div className="relative w-20 md:w-72 md:h-80 md:my-5 hover:scale-105 transition-transform ">

        <div className="absolute top-2 right-4 z-10 text-gray-300 hover:cursor-pointer" onClick={handlewatchlist} >

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill= {iswatchlist?"red":"none"}
            viewBox="0 0 20 24"
            strokeWidth={2}
            stroke={iswatchlist?"red":"currentColor"}
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>

        </div>

    <Link to={"/watch/"+ type + "/" + id}  style={{ cursor: "default" }}>
        <img
          src={Posterurl + poster}
          alt="poster"
          className="w-full h-full rounded-md "
        />
   </Link>
      </div>
 
  );
};

export default Moviecard;
