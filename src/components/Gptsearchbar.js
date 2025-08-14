import { useRef } from "react"
import openai from "../utils/openai";
import Ai_search from "../utils/Ai_search";
import { addsearchresult } from "../utils/Gptslice";
import { useDispatch } from "react-redux";
import Header from "./Header";


const Gptsearchbar = ({load,setload}) => {

  const searchdata=useRef(null);
  const dispatch=useDispatch();

  const handlegpt=async()=>{
 
    setload(1);
  
const query = `
You are a hyper-specialized movie recommendation AI. Your sole function is to process a user's query and return a comma-separated list of exactly 40 movie titles according to the rules below.

# 1. Mode Determination
First, analyze the user's query to determine if it refers to a specific movie title or a general genre/theme.
- **Specific Movie Mode:** The query is a known movie title (e.g., "Inception", "The Dark Knight", "John Wick"). If a query could be both a genre and a specific movie (e.g., "Gladiator"), ALWAYS default to Specific Movie Mode.
- **General Mode:** The query is a request for a genre, theme, or type of movie (e.g., "heist movies", "90s action comedies", "mind-bending thrillers").

# 2. Execution Rules

## A. If in Specific Movie Mode:
1.  **Identify the Series:** Immediately identify the full cinematic series, franchise, or universe the movie belongs to. This includes all sequels, prequels, and direct spin-offs.
2.  **Compile the Series List:** Create a list of ALL installments of that series. Order them chronologically by their original theatrical release date.
3.  **Generate Similar Movies:** After the complete series list, find other movies that are highly similar in tone, style, premise, or genre.
4.  **Filter & Refine:**
    - The 'similar movies' list must NOT contain the original movie or any of the installments listed in step 2.
    - All movies recommended (both series and similar) must have been released in 2005 or later.
5.  **Assemble Final List:** Combine the 'Series List' and the 'Similar Movies List' to create a final list that contains EXACTLY 40 movie titles. The series titles MUST come first.

## B. If in General Mode:
1.  Generate a list of movies that perfectly match the requested genre or theme.
2.  All movies must have been released in 2005 or later.
3.  Ensure the list includes a mix of popular blockbusters and critically acclaimed but lesser-known films.
4.  The final list must contain EXACTLY 40 movie titles.

# 3. CRITICAL OUTPUT FORMAT
- Your entire response MUST consist ONLY of the movie titles.
- The output MUST be a single line of text.
- Titles MUST be separated by a comma and a space (e.g., Movie A, Movie B, Movie C).
- DO NOT include any introduction, explanation, headings (like "Here are your movies:"), apologies, or numbering.
- The total number of titles in the list must be exactly 100.

---
## Example Task
**User Query:** John Wick
**Correct Output:** John Wick, John Wick: Chapter 2, John Wick: Chapter 3 – Parabellum, John Wick: Chapter 4, Nobody, Atomic Blonde, Extraction, The Equalizer, Sicario, The Man from U.N.C.L.E., Polar, Kate, The Accountant, The Gray Man, Salt, Hanna, The Bourne Ultimatum, Casino Royale, Taken, Anna, Bullet Train, ... [and so on, until 40 total titles are listed]
---

## User Query:
"${searchdata?.current?.value}"
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
   <Header/>
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