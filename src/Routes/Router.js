import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Blog/Blog";
import Checkout from "../Components/Checkout/Checkout";
import Courses from "../Components/Courses/Courses";
import CoursesDetails from "../Components/CoursesDetails/CoursesDetails";
import ErrorPage from "../Components/ErrorPage";
import FAQ from "../Components/FAQ/FAQ";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Root from "../Layout/Root";
import PrivateRoute from "./PriavateRoute";
export const router = createBrowserRouter([
{
    path:'/',
    element:<Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {path:'/',
         element:<Home></Home>,
        },

        {path:'/home',
        element:<Home></Home>
        },

        {path:'/courses',
         element:<Courses></Courses>,
        loader: ()=>fetch('https://coures-express-server-naimcoder.vercel.app/allcourse')
        },
        {
        path:'/allcourse/:id',
        element:<CoursesDetails></CoursesDetails>,
        loader:({params})=>fetch(`https://coures-express-server-naimcoder.vercel.app/allcourse/${params.id}`)
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
        },
        {
            path:'/checkout/:id',
            element:<PrivateRoute><Checkout></Checkout></PrivateRoute>,
            loader:({params})=>fetch(`https://coures-express-server-naimcoder.vercel.app/checkout/${params.id}`)
        },
        {
            path:'/faqs',
            element:<FAQ></FAQ>
        }
    ]
}
])
export default router