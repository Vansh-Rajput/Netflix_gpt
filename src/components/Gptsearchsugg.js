import { useSelector } from "react-redux"
import Moviecard from "./Moviecard";


const Gptsearchsugg = () => {

  const select=useSelector((store)=>store?.gpt?.searchresult);
 

  if(select){
  return (
    <div className="flex gap-3 p-5 flex-wrap w-[90%] justify-center">

{
  
  select.map((val,ind)=>{
  const check = val?.results;
  return check[0]?.poster_path!==null &&  check?.length!==0?<Moviecard poster={val?.results[0]?.poster_path} key={ind}/>:null;

  })
}
      
    </div>
  )

}


}

export default Gptsearchsugg