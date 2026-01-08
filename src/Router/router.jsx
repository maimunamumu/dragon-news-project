import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";


import Home from "../Component/pages/Home";
import News from "../Component/pages/News";
import Login from "../Component/pages/Login";
import Register from "../Component/pages/Register";
import AuthLayout from "../Layout/AuthLayout";
import NewsDetails from "../Component/pages/NewsDetails";
import PrivateRoute from "../provider/PrivateRoute";
import Loading from "../provider/Loading";


const router=createBrowserRouter([
  {
    path:"/", Component:HomeLayout,
    children:[
        {path:"",
         Component:Home
        },
        {
            path:"/category/:id",
           
         Component:News,
         loader:() => fetch("/news.json"),
          hydrateFallbackElement:<Loading></Loading>
           
        }
    ]
  },
   {
    path:"/auth",element:<AuthLayout></AuthLayout>,
    children:[
         {
           path:"/auth/login",
           element:<Login></Login>
         },
         {
           path:"/auth/register",
           element:<Register></Register>
         }
    ]
   },
      {
        path:'/news-details/:id',
        element:<PrivateRoute>
          <NewsDetails></NewsDetails>
        </PrivateRoute>,
        loader: ()=> fetch("/news.json"),
        hydrateFallbackElement:<Loading></Loading>
      }
])

export default router;