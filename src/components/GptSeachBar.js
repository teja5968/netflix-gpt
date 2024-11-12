import React from 'react'
import lang from '../utils/languageConstants';
import { useSelector } from 'react-redux';
import { useRef } from 'react';
import openai from '../utils/openai';

const GptSeachBar = () => {

  const searchText = useRef(null);



  const handleGptSearchClick = async() =>{

    console.log(searchText.current.value);

    //Make an API call to GPI API and get Movie Results
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: 'user', content: searchText.current.value }],
      model: 'gpt-3.5-turbo',
    });

    console.log(gptResults.choices)


  };


  const langKey = useSelector(store=>store.config.lang);
  return (
    <div className='pt-[10%] flex justify-center bg-'>

        <form className ='w-1/2 bg-black grid grid-cols-12' onSubmit={(e)=>e.preventDefault()}>

        <input type = "text" ref = {searchText} className =' p-4 m-4 col-span-9' placeholder = {lang[langKey].gptSearchPlaceholder}/>
       
        <button className ='py-2 px-4 bg-red-700 text-white rounded-lg col-span-3 m-4' onClick={handleGptSearchClick} >
            
            {lang[langKey].Search}
            
            </button>

        </form>
      
    </div>
  )
}

export default GptSeachBar;
