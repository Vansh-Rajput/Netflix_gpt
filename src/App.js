import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "./components/Login";
import Browse from "./components/Browse";
import Watch from "./components/Watch";
import Watchlistmenu from "./components/Watchlistmenu";
import Header from "./components/Header";
import Gptsearch from "./components/Gptsearch";


function App() {

 

  const layout=createBrowserRouter([
   {
     path:'/',
     element:<Login/>,
   },
   {
   path:'/Browse',
     element:<Browse/>
   },
   {
    path:'/watch/:type/:watchid',
    element:<Watch/>
   },
   {
    path:"/Watchlist",
    element:<Watchlistmenu/>
   },
    {
    path:"/Gptsearch",
    element:<Gptsearch/>
   }

  ]);

  return (
    <div>
      <RouterProvider router={layout}/>
    </div>
  );
}

export default App;
