
# firebase

- 😳😲 we didnt used any update func for signin (inside auth function), still it works fine for display name, because it remembers the data from signup part, it was stored in backend and was cached in browser storage,it means the user in param of auth func that we are receiving is the one we created during signup...hence we are just using them and dispatching to get the results back to our store....


# some issues with authentication and fix
- when we are in login page and write /Browse on top of url, it takes us directly inside browse even without login itself.
- while you are in browse and you change url to /login by yourself on top, we must still be present on browse only no matter what, not just migrate to login.


- FIX---> 
- put navigates inside onauthstatechanged, beware that our navigate should be inside router provider, hence we placed our useEffect inside header as it is a comp present always inside login,browse or it is like children to them.....

- So we are using Redux to store user info. If there’s no user in Redux yet (because the app just loaded), then Firebase checks the real auth state. If it finds no user, it runs the else block, and we’re sent back to '/'.

- onAuthStateChanged is a real-time listener that always watches your app's login state.It stays active as long as your app is running, and reacts immediately when the auth state changes — just like an event listener.If you're logged in, it knows.If you're logged out, it knows.If anything changes, it fires the callback again with the new user state.

- now no need to use navigate command anywhere in our app, except header



# Promise in Gptsearchbar -

- when we are make consecutive api calls for api using the map, we are actually calling an async function which takes some time to resolve, we will not get the results directly but array of promises on iterating over data got by Ai_search.js.

- for that we will use Promise.all() api function with await, hence now we will get the final results once all the promises are resolved



# responsive ui
- by default mobile
- sm for tablet
- md for desktop


# FireStore DB
- doc is used to create reference to document...
- getDoc(docRef) fetches the document snapshot from Firestore asynchronously.It returns data if the document exists.
- setDoc() used to overides the previous doc and create a new one. If a document already exists, all existing fields will be replaced by the new data you provide.
- updateDoc(docRef,data) Only updates the specified fields in the document — leaves other fields untouched.
  generally used along with arrayUnion to add data by avoiding duplicates too...
- arrayRemove(data) to delete element from array by providing data..


# How Watchlist works?
- VERY IMP to use onauthstatechanged as earlier we were trying to call our watchlist func before user was properly loggedin, hence return [] was executed everytime....so first login, then fetch watchlist...
- also no need for onauthstatechanged in remove / add function calls because we are using them after user had succesfully logged in..

- WORKING OF ADD/REMOVE...

- addtowatchlist or removewatchlist returns a Promise, so your function handlewatchlist waits (await) until it’s done.
- After that finishes, you call setiswatchlist(!iswatchlist). setiswatchlist changes React state, which always causes the component to re-render.
- That re-render does not mean onAuthStateChanged got called — it’s just React doing its normal refresh cycle because state changed. Hence our Red heart is visible correctly..



# re-Deploying...
- npm run build
- firebase deploy