import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";


import Home from "../Component/pages/Home";
import News from "../Component/pages/News";


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
         loader:() => fetch("/news.json")
           
        }
    ]
  },
   {
    path:"/auth",element:<h1>authentication layout</h1>
   },
      {
        path:'/news',element:<h1>news</h1>
      }
])

export default router;