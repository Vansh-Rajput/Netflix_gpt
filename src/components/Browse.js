import { useApimovie, usePopular, usePopularTV, useUpcoming } from "../utils/useApimovie";
import Maincontent from "./Maincontent";
import Secondcontent from "./Secondcontent";
import Header from "./Header";
import { useToprated } from "../utils/useApimovie";


const Browse = () => {

 
  useApimovie();
  useToprated();
  useUpcoming();
  usePopular();
  usePopularTV();


  return (

    <div>
    
    <Header/>
         <Maincontent/>
    <Secondcontent/>


    </div>
  )
}

export default Browse;
