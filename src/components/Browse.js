import { useApimovie } from "../utils/useApimovie";
import Maincontent from "./Maincontent";
import Secondcontent from "./Secondcontent";
import Header from "./Header";


const Browse = () => {

  useApimovie();

  return (

    <div>
    
    <Header/>
    <Maincontent/>
    <Secondcontent/>

    </div>
  )
}

export default Browse;