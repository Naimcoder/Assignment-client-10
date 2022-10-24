import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Blog/Blog";
import Courses from "../Components/Courses/Courses";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Root from "../Layout/Root";

export const router = createBrowserRouter([
{
    path:'/',
    element:<Root></Root>,
    children:[
        {path:'/',
        element:<Home></Home>,
        },
        {path:'/home',
        element:<Home></Home>
        },
        {path:'/courses',
        element:<Courses></Courses>
        },
        {
         path:"/login",
         element:<Login></Login>
        },
        {
            path:"/register",
            element:<Register></Register>
        },
        {
            path:'/blog',
            element:<Blog></Blog>
        }
    ]
}
])
export default router