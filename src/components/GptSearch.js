import React from 'react'
import GptSeachBar from './GptSeachBar';
import GptMovieSuggestions from './GptMovieSuggestions';

import { BG_URL } from '../utils/constants';

const GptSearch = () => {
    return (


        <>
      <div className="fixed -z-10">
        <img className="h-screen w-screen object-cover" src={BG_URL} alt="bg" />
      </div>
      <div className="">
        <GptSeachBar/>
        <GptMovieSuggestions />
      </div>
    </>
  );
};
        
    

export default GptSearch;
