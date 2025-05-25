import React, { useRef, useState } from 'react'
import Header from './Header'
import Validate from '../utils/Validate'

const Login = () => {
  const css='p-4 border-gray-600 border-[1px] rounded-md bg-black text-white'

  const [issignup,setissignup]=useState(true);
  const [rec,setrec]=useState(null);         //what we received from validate func

  const Email=useRef(null);             //keep track of text typed on input(email field) without re renders


   const toggle=()=>{
     setissignup(!issignup);
   }

   const handle=()=>{
    
    setrec(Validate(Email.current.value)); //email.current will give html as its input, so .value is req
    }

  return (
    <div>

    <Header/>
    
    <div>
    <img src="https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt='logo'/>
    </div>


        {/* e.prevent prevents form from submit, else our invalid email msg wont come */}

    <form onSubmit={(e)=>e.preventDefault()} className='absolute bg-black flex flex-col w-[500px] p-10 gap-7 left-1/3 top-[100px] bg-opacity-80'>
       
    <h1 className='font-xl text-white text-4xl font-bold'>{issignup===true?"Sign In":"Sign Up"}</h1>
    {!issignup && <input type='text' placeholder='Full Name' className={css}/>}

     <input type='text' placeholder='Email' className={css} ref={Email}/>
     <p className='text-red-600 font-semibold'>{rec}</p>

      <input type='password' placeholder='Password' className={css}/>

      <button className='bg-red-600 p-2 text-white cursor-pointer rounded-md' onClick={handle} >
      {issignup===false?"Sign up":"Sign In"}</button>

    <p onClick={toggle} className='text-white cursor-pointer'>{issignup===true?"New to Netflix? Sign up Now":"Already a user? Sign In"}</p>
    </form>

    </div>
  )
}

export default Login