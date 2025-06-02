import { Posterurl } from "../utils/constants"


const Moviecard = ({poster}) => {
    

  return (
    <div className="w-72 h-80 my-5  hover:scale-105 transition-transform">
       <img src={Posterurl+poster} alt="poster" className="w-full h-full rounded-md" />
  
    </div>
  )
}

export default Moviecard