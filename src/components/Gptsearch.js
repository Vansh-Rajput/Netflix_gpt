import { useState } from "react";
import Gptsearchbar from "./Gptsearchbar";
import Gptsearchsugg from "./Gptsearchsugg";
import Loader from "../utils/Loader";
import { Netflixback, Posterurl } from "../utils/constants";


const Gptsearch = () => {

  const [load,setload]=useState(null);

  return (
    <div>
  

         <Gptsearchbar load={load} setload={setload}/>
   
   <div className="flex justify-center items-center">
   { load!==null?<Loader/>:<Gptsearchsugg/> }
</div>

    </div>
  )
}

export default Gptsearch;