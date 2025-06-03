import { Posterurl } from "../utils/constants"


const Moviecard = ({poster}) => {
    

  return (
    <div className="w-20 md:w-72 md:h-80 md:my-5  hover:scale-105 transition-transform">
       <img src={Posterurl+poster} alt="poster" className="w-full h-full rounded-md" />
  
    </div>
  )
}

export default Moviecard