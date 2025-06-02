import { useApimovie } from "../utils/useApimovie";
import Maincontent from "./Maincontent";
import Secondcontent from "./Secondcontent";
import Header from "./Header";
import { useToprated } from "../utils/useToprated";
import Gptsearch from "./Gptsearch";
import { useSelector } from "react-redux";


const Browse = () => {

  const searchbar=useSelector((store)=>store?.gpt?.showsearch);

  useApimovie();
  useToprated();

  return (

    <div>
    
    <Header/>
    {
      searchbar?<Gptsearch/>:
      <>
         <Maincontent/>
    <Secondcontent/>
      </>
    }


    </div>
  )
}

export default Browse;
