import { RouterProvider } from "react-router-dom"
import Header from "./component/header"
import router from "./routes"


export const App =()=>{
    return <div>
       <RouterProvider router={router}/>
    </div>
}
export default  App