import { createSlice } from "@reduxjs/toolkit";


const Movieslice=createSlice({
    name:'movies',
    initialState:{
            nowPlayingMovies:null
    },

    reducers:{
       addnowPlayingMovies:(state,action)=>{
          state.nowPlayingMovies=action.payload;
       },


    }
})


export default Movieslice.reducer;
export const {addnowPlayingMovies} = Movieslice.actions;