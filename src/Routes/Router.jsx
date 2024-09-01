import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Pages/Layout/Mainlayout";
import Home from "../Pages/Home/Home";
import Destination from "../Pages/Destination/Destination";
import Contacts from "../Pages/Contacts/Contacts";
import SignUp from "../Pages/Signup/SignUp";
import HomeCalender from "../Pages/Home/HomeCalender";
import Helplines from "../Pages/Helplines/Helplines";
import Login from "../Pages/Login/Login";


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
            },
            {
                path:"/signup",
                element:<SignUp/>,
            },
            {
                path:"/login",
                element:<Login/>,
            },
            {
                path:"/contact",
                element:<Contacts/>,
            },
            {
                path:"/helplines",
                element:<Helplines/>,
            },
            {
                path:"/homecalendar",
                element:<HomeCalender/>,
            }


        ]
    }
])