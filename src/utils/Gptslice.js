import {  createSlice } from "@reduxjs/toolkit";

const Gptslice=createSlice({
    name:'gpt',
    initialState:{
      showsearch:false,
      searchresult:null,
    },
    reducers:{
     togglegpt:(state,action)=>{
        state.showsearch=!(state?.showsearch)
     },

     addsearchresult:(state,action)=>{
       state.searchresult=action?.payload;
     }

    }
})

export const {togglegpt,addsearchresult}=Gptslice.actions;
export default Gptslice.reducer;  