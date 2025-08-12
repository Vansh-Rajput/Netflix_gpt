import { Apioptions} from "./constants";
import { useEffect } from "react";

export const Usetrailer=(type,setdata,id)=>{
  
    console.log(type);
            const Getmoviebackground=async()=>{
              const prom=await fetch('https://api.themoviedb.org/3/'+ type +'/'+id.toString()+'/videos?language=en-US',Apioptions);
              const json=await prom.json();
              setdata(json);
            } 
            
           useEffect(()=>{
          Getmoviebackground();
           },[]);
    
}