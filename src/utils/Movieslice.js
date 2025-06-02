import { createSlice } from "@reduxjs/toolkit";


const Movieslice=createSlice({
    name:'movies',
    initialState:{
            nowPlayingMovies:null,
            toprated:null
    },

    reducers:{
       addnowPlayingMovies:(state,action)=>{
          state.nowPlayingMovies=action?.payload;
       },
        addtoprated:(state,action)=>{
          state.toprated=action.payload;
       },

    }
})


export default Movieslice.reducer;
export const {addnowPlayingMovies,addtoprated} = Movieslice.actions;