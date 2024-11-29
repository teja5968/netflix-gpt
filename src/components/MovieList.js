import React, { useState } from 'react'
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {

   

    return (
        <div className=' px-6'>

            <h1 className='py-4 text-lg md:text-3xl  text-white'>{title}</h1>

            <div className='flex overflow-x-scroll no-scrollbar'>





                <div className='flex'>

                    {movies?.map((movie) => (

                        <MovieCard key={movie.id} posterPath={movie.poster_path} id = {movie.id} movieInfo = {movie}/>
                    ))}

                </div>


            </div>


        </div>
    )
}

export default MovieList;
