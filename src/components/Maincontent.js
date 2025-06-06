import Videobackground from './Videobackground'
import Videotitle from './Videotitle'
import { useSelector } from 'react-redux'
import Loader from "../utils/Loader";

const Maincontent = () => {

const moviestore= useSelector((store)=>store?.movies?.nowPlayingMovies);

if(!moviestore) return <Loader/>;


const {overview,original_title,id}={    "id":575265,
 "original_language": "en",
  "original_title": "Mission: Impossible - The Final Reckoning",
  "overview": "Ethan Hunt and team continue their search for the terrifying AI known as the Entity — which has infiltrated intelligence networks all over the globe — with the world's governments and a mysterious ghost from Hunt's past on their trail. Joined by new allies and armed with the means to shut the Entity down for good, Hunt is in a race against time to prevent the world as we know it from changing forever.",
  "popularity": 260.521,
  "poster_path": "/z53D72EAOxGRqdr7KXXWp9dJiDe.jpg",}



  return (

    <div>
        <Videotitle title={original_title} about={overview}/>
        <Videobackground id={id} overview={overview} original_title={original_title}/>
    </div>
  )

  
}

export default Maincontent