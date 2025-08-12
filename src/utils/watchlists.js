import { auth, db } from './firebase'
import {arrayRemove, arrayUnion, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';


export const watchlist = async() => {

    // Get watchlist of user....

    const user=auth.currentUser;
    if(!user)return [];

    // db is firebase DB instance, watchlist is collection, rest is doc id, need to provide explicitly
    const list= doc(db,"watchlist",auth.currentUser.uid); 

    const getlist=await getDoc(list);

    if(getlist.exists()){
        return getlist.data().movies || [];
    }
    else{
      await setDoc(doc(db,"watchlist",auth.currentUser.uid),{movies:[]});  //if no movie, set and return empty data
      return [];
    }

}


    // Add movie to user watchlist...
export const addtowatchlist=async(moviedata)=>{

     const user=auth.currentUser;
    if(!user)throw new Error("Please login first");

   await updateDoc(doc(db,"watchlist",auth.currentUser.uid),{movies:arrayUnion(moviedata)});
    
}


 //remove from watchlist...

 export const removewatchlist=async(moviedata)=>{
    const user=auth.currentUser;
    if(!user)throw new Error("Please login first");


    const docref=doc(db,"watchlist",auth.currentUser.uid);

    const getlist=await getDoc(docref);

   const newdata = getlist?.data()?.movies?.filter((data)=>{  //need to filter, now direct object deletion
       return data?.id!==moviedata?.id;
    })

     await updateDoc(docref,{movies:newdata});
 }