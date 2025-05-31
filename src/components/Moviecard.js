import { Posterurl } from "../utils/constants"


const Moviecard = ({poster}) => {
    

  return (
    <div className="w-72 h-96 my-5  hover:scale-105 transition-transform  ">
       <img src={Posterurl+poster} alt="poster" className="w-full h-full "/>
    </div>
  )
}

export default Moviecard