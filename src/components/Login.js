import Header from "./Header";


import { BG_URL, USER_AVATAR } from "../utils/constants";
import { useRef, useState } from "react";

import { checkValidData } from "../utils/validate";

import {auth} from "../utils/firebase";


import { createUserWithEmailAndPassword , signInWithEmailAndPassword ,updateProfile} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () =>{


    const [isSignInForm,setIsSignInForm] = useState(false);

    const [error ,setError] = useState(" ");

   

    const dispatch = useDispatch();


    const email = useRef(null);
    const password = useRef(null);



    const toggleSignInForm = () =>{


        setIsSignInForm(!isSignInForm)


    }

    const handleButtonClick = () =>{

        //validate the form

       const message = checkValidData(email.current.value,password.current.value);

       setError(message);

       if(message) return;



        //create a new user

        if(!isSignInForm){

            //Sign up  logic

 createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;

    updateProfile(user, {
      displayName: "name.current.value", photoURL: USER_AVATAR
    }).then(() => {

      const {uid, email, displayName,photoURL} = auth.currentUser;

      dispatch(
        addUser({
        uid:uid, email:email,
         displayName:displayName,
         photoURL:photoURL}))
     
    
    }).catch((error) => {
      // An error occurred
      // ...

      setError(error.message);
    });


    
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    setError(errorCode + errorMessage)
    // ..
  });





        }

        else{

            //Sign in logic


            
signInWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setError(errorCode + errorMessage)
  });



        }

       

    }


    return (

        <div className="">

       <Header />

       <div className="absolute">

       <img className = "w-screen h-screen object-cover" src = {BG_URL} alt  = "background-image" />
       </div>

       <form  onSubmit = {(e)=>e.preventDefault()}className=" lg:w-3/12 w-10/12 sm:w-7/12 md:5/12 p-12 bg-black absolute my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80" >
         
     
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