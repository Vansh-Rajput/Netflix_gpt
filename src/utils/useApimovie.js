import { useDispatch, useSelector } from "react-redux";
import { Apioptions} from "./constants";
import { addnowPlayingMovies, addpopular, addpopularTV, addupcoming } from "./Movieslice";
import { useEffect } from "react";
import { addtoprated } from "./Movieslice";


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


export const useToprated=()=>{
     const dispatch=useDispatch();
          const select=useSelector((store)=>store?.movies?.toprated);
     
        const Apicall=async()=>{
          const prom=await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',Apioptions);
          const data=await prom.json();
          dispatch(addtoprated(data?.results));
     
        } 
         
       useEffect(()=>{
       !select && Apicall();
       },[]);
}


export const useUpcoming=()=>{
     const dispatch=useDispatch();
          const select=useSelector((store)=>store?.movies?.upcoming);
     
        const Apicall=async()=>{
          const prom=await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',Apioptions);
          const data=await prom.json();
          dispatch(addupcoming(data?.results));
     
        } 
         
       useEffect(()=>{
       !select && Apicall();
       },[]);
}


export const usePopular=()=>{
     const dispatch=useDispatch();
          const select=useSelector((store)=>store?.movies?.popular);
     
        const Apicall=async()=>{
          const prom=await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',Apioptions);
          const data=await prom.json();
          dispatch(addpopular(data?.results));
     
        } 
         
       useEffect(()=>{
       !select && Apicall();
       },[]);
}


export const usePopularTV=()=>{
     const dispatch=useDispatch();
          const select=useSelector((store)=>store?.movies?.populartv);
     
        const Apicall=async()=>{
          const prom=await fetch('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1',Apioptions);
          const data=await prom.json();
          dispatch(addpopularTV(data?.results));
     
        } 
         
       useEffect(()=>{
       !select && Apicall();
       },[]);
}