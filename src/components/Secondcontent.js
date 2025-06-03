import { useSelector } from "react-redux"
import Movielist from "./Movielist"


const Secondcontent = () => {
  const select=useSelector((store)=>store?.movies);

  return (
    <div className=" md:-mt-44">
     
       <Movielist title={'Top Rated'} data={select?.toprated}/>
         <Movielist title={'Now Playing'} data={select?.nowPlayingMovies}/>
       <Movielist title={'Now Playing'} data={select?.nowPlayingMovies}/>
       <Movielist title={'Now Playing'} data={select?.nowPlayingMovies}/>
       <Movielist title={'Now Playing'} data={select?.nowPlayingMovies}/>
    </div>
  )
}

export default Secondcontent