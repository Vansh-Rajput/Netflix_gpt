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
  const css='p-1 md:p-3 border-gray-600 border-[1px] rounded-md bg-black text-white w-full'
  const [showpass,setshowpass]=useState('password');
  const [field,setfield]=useState('show');

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

   const handleshow=()=>{
    if(showpass==='password'){
 setshowpass('text')
    setfield('hide')
    }
  else{
     setshowpass('password')
    setfield('show');
  }
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
     
    <div className='flex justify-center items-center'>
    <img src={Netflixback} alt='logo' className=' object-cover h-screen'/>



        {/* e.prevent prevents form from submit, else our invalid email msg wont come */}

    <form onSubmit={(e)=>e.preventDefault()} className=' bg-opacity-85 absolute p-10 gap-7  bg-black flex flex-col  md:w-[500px] '>
       
    <h1 className='font-xl text-white text-4xl font-bold'>{issignup===true?"Sign In":"Sign Up"}</h1>
    {!issignup && <input type='text' placeholder='Full Name' className={css} ref={name}/>}

     <input type='text' placeholder='Email' className={css} ref={email}/>


     <div className='w-full flex justify-end items-center'>
      <input type={showpass} placeholder='Password' className={css} ref={password}/>
      <div className='text-white absolute mr-3 font-mono text-sm cursor-pointer' onClick={handleshow}>{field}</div>
          </div> 

      
   <p className='text-red-600 font-semibold'>{error || rec}</p>

      <button className='bg-red-600 p-2 text-white cursor-pointer rounded-md hover:bg-red-500' onClick={handle} >

      {issignup===false?"Sign up":"Sign In"}</button>

    <p onClick={toggle} className='text-white cursor-pointer hover:text-gray-300'>{issignup===true?"New to Netflix? Sign up Now":"Already a user? Sign In"}</p>
    
    </form>
  </div>

    </div>
  )
}

export default Login