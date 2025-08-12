import React, { useEffect, useState } from 'react'
import Header from './Header'
import { auth, db } from '../utils/firebase'
import { doc, getDoc } from 'firebase/firestore';
import { useSelector } from 'react-redux';
import Moviecard from './Moviecard';
import { Posterurl } from '../utils/constants';
import { removewatchlist, watchlist } from '../utils/watchlists';
import { Empty } from '../utils/Loader';
import { Link } from 'react-router-dom';

const Watchlistmenu = () => {

const user=useSelector((store)=>store?.user);  //to check loggedinuser through redux of user
const [watchmovies,setwatchmovies]=useState([]);

  useEffect(() => {
    const getData = async () => {
      
        const listRef = doc(db, "watchlist", user.uid)
        const listSnap = await getDoc(listRef)

          setwatchmovies(listSnap.data().movies)   //inbuilt method
    }

    if (user) 
      getData()
  }, [user]);


const handleremove=async(data)=>{
 await removewatchlist(data);
setwatchmovies((prev) => prev.filter((m) => m.id !== data.id));   //change state variable too
}


  return (
    <div className='text-white'>
 <Header/>


<div className='flex flex-col items-center mt-40'>



{
    watchmovies.length==0?<Empty/>:watchmovies.map((data)=>{
      return (
         <li class="pb-6 sm:pb-6 w-[80%] border-b-[1px] border-gray-600">
      <div class="flex items-center space-x-4">

          <Link className='relative' to={"/watch/" + data?.id}  style={{ cursor: "default" }}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="absolute inset-0 m-auto size-10 text-gray-200 cursor-pointer">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
</svg>

            <img alt='poster' class="w-56 h-40 rounded-md" src={Posterurl+data?.poster_path}/>
      </Link>

         <div class="flex-1 min-w-0">
            <p class="text-xl text-gray-900 truncate dark:text-white">
               {data?.original_title}
            </p>
            <p class="text-sm  text-gray-500 line-clamp-2 dark:text-gray-400">
              {data?.overview}
            </p>
         </div>

         <div onClick={()=>handleremove(data)} class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white cursor-pointer">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
</svg>
         </div>
      </div>
      
   </li>
      )
    })
  
}
</div>



    </div>
  )
}

export default Watchlistmenu