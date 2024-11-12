import { LOGO, USER_AVATAR } from "../utils/constants";

import {signOut } from "firebase/auth";

import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";

import { addUser,removeUser } from "../utils/userSlice";

import { useEffect } from "react";
import { SUPPORTED_LANGUAGES } from "../utils/constants";



import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanuguage } from "../utils/configSlice";

const Header = () => {


   const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector(store=>store.user);

    const showGptSearch = useSelector(store => store.gpt.showGptSearch)

    

    const handleGptSearch = () =>{

        //Toggle GPT Search

        dispatch(toggleGptSearchView())



    }


    const handleSignOut = () => {

        signOut(auth).then(() => {

            

       
           
        }).catch((error) => {
            // An error happened.

            navigate("/error")
        });


    }

    useEffect(()=>{


      const unsubscribe =   onAuthStateChanged(auth, (user) => {
            if (user) {
    
          const {uid, email, displayName,photoURL} = user;
    
           dispatch(addUser({uid:uid, email:email, displayName:displayName,photoURL:photoURL}));


           navigate("/browse")
          
            
            } else {
    
                //user is signed out
    
                dispatch(removeUser());
                navigate("/")
          
              
            }
          });
     
          //unsubscribe when component unmounts

          return () => unsubscribe();
    },[])

    const handleLanuguageChange = (e) =>{

       dispatch(changeLanuguage(e.target.value))
    }
    


    return (

        <div className=" flex absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 justify-between">

            <img className="w-36 " src={LOGO} alt="logo" />

            {user && (
                <div className="flex p-2">

                  {showGptSearch &&  ( 
                    <select className=" p-2 bg-gray-900 text-white m-2 " onChange={handleLanuguageChange}>

                        {SUPPORTED_LANGUAGES.map((lang) => (
                            
                            <option key = {lang.identifier} value = {lang.identifier}>
                                {lang.name} 
                                </option>
                                
                                ))}
                       
                    </select> )}
                    <button className="py-2 px-4 bg-purple-800 text-white mx-4 my-2 rounded-lg" onClick={handleGptSearch}> {showGptSearch ? "Home Page" : "GPT Search"}</button>

                <img className="w-12 h-12 p-2" src={user.photoURL} alt="usericon" />

                <button onClick={handleSignOut} className="text-white font-bold" > Sign Out</button>
            </div>
        )
        }


        </div>
    )
}

export default Header;