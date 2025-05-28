import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Userslice";            // name given for Userslice.reducer from Userslice.js

const Appstore=configureStore({
   reducer:{
      user:userReducer,
   }
})

export default Appstore;