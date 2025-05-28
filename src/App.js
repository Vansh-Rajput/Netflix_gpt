import { createBrowserRouter, RouterProvider, useNavigate } from "react-router-dom";
import Login from "./components/Login";
import Browse from "./components/Browse";
import { useEffect } from "react";
import {onAuthStateChanged} from "firebase/auth";
import { auth } from "./utils/firebase";
import { useDispatch } from "react-redux";
import { removeuser,adduser } from "./utils/Userslice";

function App() {

  const dispatch=useDispatch();

  const layout=createBrowserRouter([
   {
     path:'/',
     element:<Login/>
   },
   {
   path:'/Browse',
     element:<Browse/>
   }
  ]);


// its a kind of event listener, we want to call it once, IT IS EXECUTED FIRST WHEN YOU CLICK SIGN IN, THEN API'S of app.js
  useEffect(()=>{
    
    //whenever there is any change in authen like sign up,in,out this func would be called
     onAuthStateChanged(auth, (user) => {

  if (user) {              //user is an obj contain all info like email,displayname
    const {uid,email,displayName}=user;                              //THIS WILL HANDLE THE SIGNIN PART
    dispatch(adduser({uid:uid,email:email,displayName:displayName}));     
  }
  
  

  //if signed out , also executed on first render of login page
  else {
    dispatch(removeuser());
  }
});
  });



  return (
    <div>
      <RouterProvider router={layout}/>
    </div>
  );
}

export default App;
