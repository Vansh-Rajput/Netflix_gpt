import { useApimovie } from "../utils/useApimovie";
import Maincontent from "./Maincontent";
import Secondcontent from "./Secondcontent";
import Header from "./Header";
import { useToprated } from "../utils/useToprated";


const Browse = () => {

  useApimovie();
  useToprated();

  return (

    <div>
    
    <Header/>
    <Maincontent/>
    <Secondcontent/>

    </div>
  )
}

export default Browse;