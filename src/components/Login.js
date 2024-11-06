import Header from "./Header";


import { BG_URL } from "../utils/constants";
import { useRef, useState } from "react";

import { checkValidData } from "../utils/validate";
const Login = () =>{


    const [isSignInForm,setIsSignInForm] = useState(false);

    const [error ,setError] = useState(" ");


    const email = useRef(null);
    const password = useRef(null);



    const toggleSignInForm = () =>{


        setIsSignInForm(!isSignInForm)


    }

    const handleButtonClick = () =>{

        //validate the form

       const message = checkValidData(email.current.value,password.current.value);

       setError(message);

    }


    return (

        <div className="">

       <Header />

       <div className="absolute">

       <img src = {BG_URL} alt  = "background-image" />
       </div>

       <form  onSubmit = {(e)=>e.preventDefault()}className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80" >
         
     
       <h1 className="font-bold py-2 text-3xl">{isSignInForm ? "Sign In" : "Sign Up"}</h1>

       {!isSignInForm && (
        <input type = "text" placeholder="Full Name" className=" p-4 my-2 w-full  bg-gray-700"/>)}

        <input type = "text" ref = {email} placeholder="Email Address" className=" p-4 my-2 w-full bg-gray-700"/>

        
        <input type = "password" ref = {password} placeholder="Password" className=" p-4 my-2 w-full  bg-gray-700"/>

        <p className=" text-red-500 font-bold text-lg p-2 "> {error}</p>

        <button className = "p-4 my-6 bg-red-800 w-full rounded-lg"  onClick = {handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"} </button>

        <p className=" py-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now " : "Already registered? Sign In Now."}</p>
       </form>
    
       </div>
    )
}


export default Login;