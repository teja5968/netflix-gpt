import React from 'react'
import GptSeachBar from './GptSeachBar';
import GptMovieSuggestions from './GptMovieSuggestions';

import { BG_URL } from '../utils/constants';

const GptSearch = () => {
    return (
        <div>


            <div className="fixed -z-10">

                <img src={BG_URL} alt="background-image" />
            </div>

            <GptSeachBar />

            <GptMovieSuggestions />

            <h1> Gpt Search</h1>

        </div>
    )
}

export default GptSearch;
