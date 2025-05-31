
import { useEffect } from "react";
import {onAuthStateChanged} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { adduser,removeuser } from "../utils/Userslice";
import {useNavigate } from "react-router-dom";
import { Netflixlogo } from "../utils/constants";
import { useSelector } from "react-redux";
import {signOut } from "firebase/auth";

const Header = () => {

  const dispatch=useDispatch();
  const navigate=useNavigate();

      useEffect(()=>{
        
        //whenever there is any change in authen like sign up,in,out this event listener would be called,
    //but ev-list are meant to be initialized once, so use useEffect...
       const unsub=  onAuthStateChanged(auth, (user) => {
    
      if (user) {              //user is an obj contain all info like email,displayname
        const {uid,email,displayName}=user;                              //THIS WILL HANDLE THE SIGNIN PART
        dispatch(adduser({uid:uid,email:email,displayName:displayName})); 
       navigate('/Browse')
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

  
  return (
    <div className='absolute px-10 py-2  bg-gradient-to-b from-black w-full flex justify-between z-10' >
    <img className='w-44' src={Netflixlogo} alt="netflix"/>

    {user
      &&
     <div className='flex gap-6 items-center'> 
    <p className="text-white" >{user?.displayName}</p>
    <img src='https://i.pinimg.com/564x/1b/a2/e6/1ba2e6d1d4874546c70c91f1024e17fb.jpg' className='w-10 h-10 rounded-sm' alt='userlogo'/>
    <p onClick={handler} className="cursor-pointer text-white">Sign Out</p>
    </div>
    }

    </div>
  )
}

export default Header