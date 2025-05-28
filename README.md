
# power of firebase

- 😳😲 we didnt used any update func for signin (inside auth function), still it works fine for display name, because it remembers the data from signup part, it was stored in backend and was cached in browser storage,it means the user in param of auth func that we are receiving is the one we created during signup...hence we are just using them and dispatching to get the results back to our store....


# some issues with authentication and fix
- when we are in login page and write /Browse on top of url, it takes us directly inside browse even without login itself.
- while you are in browse and you change url to /login by yourself on top, we must still be present on browse only no matter what, not just migrate to login.
