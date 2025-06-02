
# power of firebase

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