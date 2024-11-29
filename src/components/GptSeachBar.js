import React from 'react'
import lang from '../utils/languageConstants';
import { useDispatch, useSelector } from 'react-redux';
import { useRef } from 'react';
import openai from '../utils/openai';
import { API_OPTIONS } from '../utils/constants';
import { addGptMovieResult } from '../utils/gptSlice';

const GptSeachBar = () => {

  const searchText = useRef(null);

  const dispatch = useDispatch();

  // Search movie in tmdb 

  const searchMovieTMDB = async (movie) => {

    try {

    const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" +
      movie +
      "&include_adult=false&language=en-US&page=1", API_OPTIONS)

    const json = await data.json();

    return json.results;

    }

    catch(error) {

      return error.message;
    }
  };

  



  const handleGPTSearchClick = async () => {



    const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query" + searchText.current.value + ".only give me names of 5 movies, comma separated. like the example result given ahead. Example Result: Gadar ,sholay , Don , Golmaal, Koi Mil Gaya "

    //Make an API call to GPI API and get Movie Results
    // const gptResults = await openai.chat.completions.create({
    //   messages: [{ role: 'user', content: gptQuery }],
    //   model: 'gpt-3.5-turbo',
    // });

    // console.log(gptResults.choices)
    //

    const gptMovies = ["Athadu", "Sholay", "RRR", "3 idiots", "Vikram"];
    //for each movie I will search TMDB API 

    const promiseArray = gptMovies.map(movie => searchMovieTMDB(movie));
    //[Promise, Promise , Promise, Promise, Promise]

    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);

     dispatch(addGptMovieResult({movieNames: gptMovies ,movieResults: tmdbResults}));




  };


  



  const langKey = useSelector(store => store.config.lang);
  return (
    

    <div className="pt-[35%] md:pt-[10%] flex justify-center">
    <form
      className="w-full md:w-1/2 bg-black grid grid-cols-12"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="text"
        ref={searchText}
        placeholder={lang[langKey]?.gptSearchPlaceholder}
        className="p-4 m-4 col-span-9"
      />
      <button
        type="submit"
        className="py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3 hover:opacity-90"
        onClick={handleGPTSearchClick}
      >
        {lang[langKey]?.Search}
      </button>
    </form>
  </div>

  )
}

export default GptSeachBar;



