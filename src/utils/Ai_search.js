
import { Apioptions } from './constants'

const Ai_search = async(name) => {
  
   const data =await fetch('https://api.themoviedb.org/3/search/movie?query='+ name +'&include_adult=false&language=en-US&page=1', Apioptions);
   const json=await data?.json();
   return json;
}

export default Ai_search