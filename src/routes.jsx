import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/homePage";
import MainRouter from "./pages/MainPage";
import Contact from "./pages/contact";
import About from "./pages/about";

const router = createBrowserRouter([

   {
    path: '/',
    element: <MainRouter/>,
    children:[
         {
        index:true,
        element: <HomePage/>
    },
    {
        path: "/about",
        element: <About/>
    },
    {
        path:"/contact",
        element: <Contact/>
    }
    ]
   }
])

export default router