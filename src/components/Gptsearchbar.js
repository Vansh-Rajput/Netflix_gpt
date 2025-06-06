import { useRef } from "react"
import openai from "../utils/openai";
import Ai_search from "../utils/Ai_search";
import { addsearchresult } from "../utils/Gptslice";
import { useDispatch } from "react-redux";



const Gptsearchbar = ({load,setload}) => {

  const searchdata=useRef(null);
  const dispatch=useDispatch();

  const handlegpt=async()=>{
 
    setload(1);
  

const query = `
You are a professional movie recommendation engine.

The user will either:
A. Ask for general movie recommendations (e.g., "comedy movies", "Korean thrillers"), OR
B. Mention a specific movie (e.g., "John Wick", "Inception").

---

# Your job:

- Step 1: Decide if the query is general or mentions a specific movie.
- Step 2A: If it’s general, follow the genre/language/theme and return a list of 100 relevant movies.
- Step 2B: If the query mentions a specific movie, do the following:

   1. Analyze the movie: What is its genre, mood, pacing, director style, story elements?
   2. Recommend 100 movies that are similar in **style, tone, theme, or cinematic experience**.
   3. Do **NOT** include the original movie in the list.
   4. Prioritize **recent and popular titles** first, then include highly relevant older ones.
   5. Include both **mainstream and underrated** but fitting movies.

---

# Output Format:
- Return **exactly 100 movie titles**, comma-separated.
- No numbering, no line breaks, no explanations.
- do not suggest movies which are more than 20 years old.
---

# User Query:
"${searchdata?.current?.value}"

# Output (100 movie titles, comma-separated):
`;


  const response = await openai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: query,
  });

  let list=response.text.split(',');
const promarr=list.map((name)=>Ai_search(name)); 
const result=await Promise.all(promarr);



dispatch(addsearchresult(result));

setload(null);
  }



  return (
    <div>
   
<form className="md:w-[50%] mx-auto w-[80%] py-36" onSubmit={(e)=>e.preventDefault()}>   
  <div className="relative">
    
    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
      <svg className="w-6 h-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
      </svg>
    </div>

    <input
      className="h-14 block w-full p-4 ps-10 border border-gray-600 rounded-lg focus:ring-red-700 focus:border-red-700 bg-gray-800 placeholder-gray-400 text-white"
      placeholder="Search Movies ...."
      required
      ref={searchdata}
    />

    <button
      className="text-white absolute end-2.5 bottom-2 focus:ring-2 rounded-lg px-4 py-2 bg-red-700 hover:bg-red-500"
      onClick={handlegpt}
    >
      Search
    </button>
    
  </div>
</form>

    </div>
  )
}

export default Gptsearchbar