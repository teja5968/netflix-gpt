import Header from "./Header";


import { BG_URL } from "../utils/constants";
import { useState } from "react";

const Login = () =>{


    const [isSignInForm,setIsSignInForm] = useState(false);



    const toggleSignInForm = () =>{


        setIsSignInForm(!isSignInForm)


    }


    return (

        <div className="">

       <Header />

       <div className="absolute">

       <img src = {BG_URL} alt  = "background-image" />
       </div>

       <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80" >

       <h1 className="font-bold py-2 text-3xl">{isSignInForm ? "Sign In" : "Sign Up"}</h1>

        <input type = "text" placeholder="Email Address" className=" p-4 my-2 w-full bg-gray-700"/>
        <input type = "password" placeholder="Password" className=" p-4 my-2 w-full  bg-gray-700"/>

        <button className = "p-4 my-6 bg-red-800 w-full rounded-lg">{isSignInForm ? "Sign In" : "Sign Up"}</button>

        <p className=" py-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now " : "Already registered? Sign In Now."}</p>
       </form>
    
       </div>
    )
}


export default Login;