import { createSlice } from "@reduxjs/toolkit";


const Movieslice=createSlice({
    name:'movies',
    initialState:{
            nowPlayingMovies:null,
            toprated:null,
            upcoming:null,
            popular:null,
            populartv:null
    },

    reducers:{
       addnowPlayingMovies:(state,action)=>{
          state.nowPlayingMovies=action?.payload;
       },
        addtoprated:(state,action)=>{
          state.toprated=action.payload;
       },
        addupcoming:(state,action)=>{
          state.upcoming=action.payload;
       },
       addpopular:(state,action)=>{
          state.popular=action.payload;
       },
       addpopularTV:(state,action)=>{
          state.populartv=action.payload;
       },
    }
})


export default Movieslice.reducer;
export const {addnowPlayingMovies,addtoprated,addupcoming,addpopular,addpopularTV} = Movieslice.actions;