
import { useDispatch } from "react-redux";
import { Apioptions} from "./constants";
import { addtoprated } from "./Movieslice";
import { useEffect } from "react";
import { useSelector } from "react-redux";

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