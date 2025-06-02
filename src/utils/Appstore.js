import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Userslice";            // name given for Userslice.reducer from Userslice.js
import movieReducer from './Movieslice'
import gptReducer from './Gptslice'

const Appstore=configureStore({
   reducer:{
      user:userReducer,
      movies:movieReducer,
      gpt:gptReducer,
   }
})

export default Appstore;
