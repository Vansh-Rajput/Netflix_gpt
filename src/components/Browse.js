import {signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Browse = () => {
  const navigate=useNavigate();
  const user=useSelector(store=>store?.user)

  const handler=()=>{
  
signOut(auth).then(() => {
  navigate('/');
}).catch((error) => {
  // An error happened.
});

  }

  return (

    <div className='flex justify-between p-5'>
     <img className='w-44' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="netflix"/>

    <div className='flex gap-11'> 
    <p>{user?.displayName}</p>
    <img src='https://i.pinimg.com/564x/1b/a2/e6/1ba2e6d1d4874546c70c91f1024e17fb.jpg' className='w-14' alt='userlogo'/>
    <p onClick={handler} className="cursor-pointer">Sign Out</p>
   </div>

    </div>
  )
}

export default Browse