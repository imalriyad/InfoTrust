import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import Blog from "../Blog/Blog";
import PostDetails from "../Blog/PostDetails";
import Faq from "../Components/Faq";
import Registration from "../Form/Registration";
import Login from "../Form/Login";
import ResetPass from "../Form/ResetPass";
import Services from "../Pages/Services";
import Dashboard from "../Dashboard/Dashboard";
import States from "../Dashboard/States";
import Market from "../Dashboard/Market";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/Contact",
        element: <Contact></Contact>,
      },
      {
        path: "/Blog",
        element: <Blog></Blog>,
      },
      {
        path: "/About",
        element: <Faq></Faq>,
      },
      {
        path: "/Services",
        element: <Services></Services>,
      },
      {
        path: "/PostDetails/:id",
        element: <PostDetails></PostDetails>,
        loader: () => fetch('https://api.npoint.io/6a872fcb5bf1f03e2360'),
      },
      {
        path:'/Registration',
        element:<Registration></Registration>
      },
      {
        path:'/Login',
        element:<Login></Login>
      },
      {
        path:'/ResetPass',
        element:<ResetPass></ResetPass>
      }
    ],

  },
  {
    path:'/Dashboard',
    element:<Dashboard></Dashboard>,
    children:([
      {
        path:'Dashboard',
        element:<States></States>
      },
      {
        path:'Market',
        element:<Market></Market>
      }
    ])
  }
]);

export default router;
