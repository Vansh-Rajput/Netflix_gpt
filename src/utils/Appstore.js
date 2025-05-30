import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Userslice";            // name given for Userslice.reducer from Userslice.js
import movieReducer from './Movieslice'


const Appstore=configureStore({
   reducer:{
      user:userReducer,
      movies:movieReducer
   }
})

export default Appstore;
