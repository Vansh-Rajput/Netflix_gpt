import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "./components/Login";
import Browse from "./components/Browse";
import Watch from "./components/Watch";


function App() {

 

  const layout=createBrowserRouter([
   {
     path:'/',
     element:<Login/>
   },
   {
   path:'/Browse',
     element:<Browse/>
   },
   {
    path:'/watch/:watchid',
    element:<Watch/>
   }
  ]);

  return (
    <div>
      <RouterProvider router={layout}/>
    </div>
  );
}

export default App;
