import React from 'react'
import { IMG_CDN_URL } from '../utils/constants';
import useMovieTrailer from '../hooks/useMovieTrailer';

import { useNavigate } from 'react-router-dom';

const MovieCard = ({posterPath ,movieInfo}) => {

  


  const navigate = useNavigate();

  if(!posterPath) return null;

  const handle = () =>{

    navigate("/info", { state: { movieInfo ,posterPath } });
  }

  
  

 
  return (
    <div className=' w-36 md:w-48 pr-4 '>
      

        <img src = {IMG_CDN_URL + posterPath} alt = "Movie Card"  onClick={handle}/>

      
      
    </div>
  )
}

export default MovieCard;
