import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "./components/Login";
import Browse from "./components/Browse";



function App() {

 

  const layout=createBrowserRouter([
   {
     path:'/',
     element:<Login/>
   },
   {
   path:'/Browse',
     element:<Browse/>
   }
  ]);

  return (
    <div>
      <RouterProvider router={layout}/>
    </div>
  );
}

export default App;
