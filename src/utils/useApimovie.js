import { useDispatch, useSelector } from "react-redux";
import { Apioptions} from "./constants";
import { addnowPlayingMovies } from "./Movieslice";
import { useEffect } from "react";


export const useApimovie=()=>{
     const dispatch=useDispatch();
     const select=useSelector((store)=>store?.movies?.addnowPlayingMovies);
     
        const Apicall=async()=>{
          const prom=await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',Apioptions);
          const data=await prom.json();
          dispatch(addnowPlayingMovies(data?.results));
   
        } 
         
       useEffect(()=>{
       !select &&  Apicall();
       },[]);
}