

import About from "./components/About/About"
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./components/home/Home";
import NotFound from "./components/notFound/Notfound";
import Contact from "./components/Contact/Contact";
import Portfolio from "./components/Portfolio/Portfolio";
import Layout from "./components/Layout/Layout";

let routing = createBrowserRouter([
  {path:"" , element:<Layout/> , children:[
    {index:true , element:<Home/>},
    {path:"about" , element:<About/>},
    {path:"contact" , element:<Contact/>},
    {path:"portfolio" , element:<Portfolio/>},
    {path:"*" , element:<NotFound/>},
  ]}
  
])
function App() {

  return (
    <>
    
     <RouterProvider router={routing}></RouterProvider>
     
    </>
  )
}

export default App