import { useSelector } from "react-redux"
import Movielist from "./Movielist"


const Secondcontent = () => {
  const select=useSelector((store)=>store?.movies);

  return (
    <div className=" md:-mt-44">
     
      <Movielist title={'Popular TV Shows'} data={select?.populartv} type={'tv'}/>
       <Movielist title={'Top Rated'} data={select?.toprated} type={'movie'}/>
         <Movielist title={'Now Playing'} data={select?.nowPlayingMovies} type={'movie'}/>
       <Movielist title={'Upcoming'} data={select?.upcoming} type={'movie'}/>
       <Movielist title={'Popular'} data={select?.popular} type={'movie'}/>
    </div>
  )
}

export default Secondcontent