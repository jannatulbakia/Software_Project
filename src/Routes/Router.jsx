import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Pages/Layout/Mainlayout";
import Home from "../Pages/Home/Home";
import Destination from "../Pages/Destination/Destination";


export const router = createBrowserRouter([
    {
        path: "/",
        element:<Mainlayout/>,
        children:[
            {
                path:"/",
                element:<Home/>,
            },
            {
                path:"/destination",
                element:<Destination/>,
            }
        ]
    }
])