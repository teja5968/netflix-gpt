
import { useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import MovieList from "./MovieList";
const SecondaryContainer = () =>{

  const movies = useSelector(store=>store.movies)

    return movies.nowPlayingMovies && (
    
    <div className=" bg-black">

      <div className="-mt-52 pl-12 relative z-20">


        <MovieList title = {"Now playing"}  movies = {movies.nowPlayingMovies}/>
        
        <MovieList title = {"Trending"}  movies = {movies.nowPlayingMovies}/>
        
        <MovieList title = {"Popular"}  movies = {movies.popularMovies}/>
        
        <MovieList title = {"Upcoming"}  movies = {movies.upcomingMovies}/>
        </div>
      {/*

         MovieList - Popular

           MovieCards* n
         MovieList - NowPlaying
         MovieList - Trending 


      */}

  SecondaryContainer

  
        </div>
    )
    
}

export default SecondaryContainer;