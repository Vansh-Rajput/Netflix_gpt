
import { useEffect, useState } from "react";
import {onAuthStateChanged} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { adduser,removeuser } from "../utils/Userslice";
import {Link, useNavigate } from "react-router-dom";
import { Netflixlogo } from "../utils/constants";
import { useSelector } from "react-redux";
import {signOut } from "firebase/auth";
import { togglegpt } from "../utils/Gptslice";



const Header = () => {
 
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const [Aibutton,setAibutton]=useState('✦ Ai Search');


      useEffect(()=>{
        
        //whenever there is any change in authen like sign up,in,out this event listener would be called,
    //but ev-list are meant to be initialized once, so use useEffect...
       const unsub=  onAuthStateChanged(auth, async(user) => {
    
      if (user) {              //user is an obj contain all info like email,displayname
        const {uid,email,displayName}=user;                              //THIS WILL HANDLE THE SIGNIN PART
        dispatch(adduser({uid:uid,email:email,displayName:displayName})); 
       
//only redirect if earlier you where on login page, else it will thorugh again n again to browse, for other routes
      if (window.location.pathname === "/")  
        navigate("/browse");
      
    
      }
      
      
    
      //if signed out ,or no user signed in, thats why its executed on first render of login page
      else {
        dispatch(removeuser());
   navigate('/')
      }
    });

    return ()=>{      //onauthstatechanged returns a unsubscribing func, call it and use it to clear here....
      unsub();
    }
      },[]);
  


      const user=useSelector(store=>store?.user);      //initially null, or if user is not inside browse

  const handler=()=>{
signOut(auth).then(() => {
}).catch((error) => {
  // An error happened.
});
  }


  const handlegpt=()=>{
     dispatch(togglegpt());
  }

  
  return (

    <div className=" absolute top-0  w-full p-3 bg-gradient-to-b from-black flex justify-between items-center z-10">
  {/* Left: Netflix Logo */}
  <img className="md:w-44 w-20 ml-4" src={Netflixlogo} alt="netflix" />

  {/* Center: Nav items (only when logged in) */}
  {user && (
    <div className="flex-1 flex justify-center ">
      <ul className="flex  items-center flex-col md:flex-row md:space-x-8 p-0 m-0 font-medium text-white">
        <li className="text-[10px] md:text-lg rounded-full cursor-pointer  ">
          <a href="/Browse" className="hover:text-red-500">Home</a>
        </li>
  
        <li className="text-[10px] md:text-lg rounded-full cursor-pointer ">
          <a href="/Watchlist" className="hover:text-red-500">Watchlist</a>
        </li>
        <li>
        <Link to={"/Gptsearch"}>
          <button
            onClick={handlegpt}
            className="text-[10px] md:text-sm px-4 py-2 font-bold text-white rounded-full cursor-pointer shadow-lg bg-[length:300%] bg-[linear-gradient(15deg,purple,mediumvioletred,crimson,orangered,orange,orangered,crimson,purple)] bg-no-repeat bg-[position:left_center] transition-all duration-300 hover:bg-[length:320%] hover:bg-[position:right_center] [text-shadow:2px_2px_3px_magenta]"
          >
            <span>{Aibutton}</span>
          </button>
          </Link>
        </li>
      </ul>
    </div>
  )}

  {/* Right: User info & sign out (only when logged in) */}
  {user && (
    <div className="flex gap-6 items-center">
      <p className="text-white text-sm">{user?.displayName}</p>
      <img
        src="https://i.pinimg.com/564x/1b/a2/e6/1ba2e6d1d4874546c70c91f1024e17fb.jpg"
        className="w-5 h-5 md:w-10 md:h-10 rounded-sm"
        alt="user logo"
      />
      <p onClick={handler} className="cursor-pointer text-white text-sm mr-4">
        Sign Out
      </p>
    </div>
  )}

</div>

  )
}

export default Header