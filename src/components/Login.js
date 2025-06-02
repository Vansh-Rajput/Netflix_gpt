import { useRef, useState } from 'react'
import Header from './Header'
import Validate from '../utils/Validate'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth";
import { auth } from '../utils/firebase';
import { updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { adduser } from '../utils/Userslice';
import { Netflixback } from '../utils/constants';

const Login = () => {
  const css='p-4 border-gray-600 border-[1px] rounded-md bg-black text-white'


 const [issignup,setissignup]=useState(false);
  const [rec,setrec]=useState(null);         //what we received from validate func

  const email=useRef(null);             //keep track of text typed on input(email field) without re renders
   const password=useRef(null);  
   const name=useRef(null);
   const dispatch=useDispatch();

const [error,seterror]=useState(null);  //gives error if we sign in with a non existing account...


   const toggle=()=>{
     setissignup(!issignup);
   }

   const handle=()=>{

    const recmsg= Validate(email.current.value,password.current.value);   //call the function and get latest results...
    setrec(recmsg);                    //email.current will give html as its input, so .value is req

    if(recmsg) return;         //if you received no error msg for email, then just return as we cant login now


    
    // instead of dispatching action and pushing to store in both sign in and up cases (2 times), we could 
    // use onauthstatechange, utility given by firebase, it is called whenever there is authen.. state chng...
    
  
    
    if(!issignup){   
        
    createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {

updateProfile(auth.currentUser, {          //lets first get the display name then dispatch
  displayName:name.current.value 

}).then(() => {
      const {uid,email,displayName}=auth.currentUser;
    dispatch(adduser({uid:uid,email:email,displayName:displayName}));  
}).catch((error) => {
  // An error occurred
  // ...
});

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
     seterror(errorCode + ' ' + errorMessage);
  });
    }



    else{

      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
  })
  
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
       seterror(errorCode + ' ' + errorMessage);
  });
    }

    }

  return (
    <div>

     <Header/>
     
    <div>
    <img src={Netflixback} alt='logo' className='bg-cover bg-center min-h-screen opacity-60 bg-black'/>
    </div>


        {/* e.prevent prevents form from submit, else our invalid email msg wont come */}

    <form onSubmit={(e)=>e.preventDefault()} className='absolute bg-black flex flex-col w-[500px] p-10 gap-7 left-1/3 top-[100px] bg-opacity-80'>
       
    <h1 className='font-xl text-white text-4xl font-bold'>{issignup===true?"Sign In":"Sign Up"}</h1>
    {!issignup && <input type='text' placeholder='Full Name' className={css} ref={name}/>}

     <input type='text' placeholder='Email' className={css} ref={email}/>
      <input type='password' placeholder='Password' className={css} ref={password}/>
   <p className='text-red-600 font-semibold'>{error || rec}</p>

      <button className='bg-red-600 p-2 text-white cursor-pointer rounded-md hover:bg-red-500' onClick={handle} >
      {issignup===false?"Sign up":"Sign In"}</button>

    <p onClick={toggle} className='text-white cursor-pointer hover:text-gray-300'>{issignup===true?"New to Netflix? Sign up Now":"Already a user? Sign In"}</p>
    
    </form>

    </div>
  )
}

export default Login