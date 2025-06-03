import Videobackground from './Videobackground'
import Videotitle from './Videotitle'
import { useSelector } from 'react-redux'
import Loader from "../utils/Loader";

const Maincontent = () => {

const moviestore= useSelector((store)=>store?.movies?.nowPlayingMovies);

if(!moviestore) return <Loader/>;


const {overview,original_title,id}=moviestore[1];


  return (

    <div>
        <Videotitle title={original_title} about={overview}/>
        <Videobackground id={id} overview={overview} original_title={original_title}/>
    </div>
  )

  
}

export default Maincontent