import { Link, useNavigate } from "react-router-dom"
import { Posterurl } from "../utils/constants"


const Moviecard = ({poster,id}) => {

  return (
    <Link to={"/watch/"+id}>
    <div className="w-20 md:w-72 md:h-80 md:my-5  hover:scale-105 transition-transform cursor-pointer">
       <img src={Posterurl+poster} alt="poster" className="w-full h-full rounded-md" />
  
    </div>
    </Link>
  )
}

export default Moviecard