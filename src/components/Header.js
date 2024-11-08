import { LOGO, USER_AVATAR } from "../utils/constants";

import {signOut } from "firebase/auth";

import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {



    const navigate = useNavigate();

    const user = useSelector(store=>store.user)


    const handleSignOut = () => {

        signOut(auth).then(() => {

            

            navigate("/")
           
        }).catch((error) => {
            // An error happened.

            navigate("/error")
        });


    }


    return (

        <div className=" flex absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 justify-between">

            <img className="w-36 " src={LOGO} alt="logo" />

            {user && (<div className="flex p-2">

                <img className="w-12 h-12 p-2" src={user.photoURL} alt="usericon" />

                <button onClick={handleSignOut} className="text-white font-bold" > Sign Out</button>
            </div>)}


        </div>
    )
}

export default Header;