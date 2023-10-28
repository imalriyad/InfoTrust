import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import Blog from "../Blog/Blog";
import PostDetails from "../Blog/PostDetails";
import Faq from "../Components/Faq";

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
        path: "/PostDetails/:id",
        element: <PostDetails></PostDetails>,
        loader: () => fetch('/public/blog.json'),
      },
    ],
  },
]);

export default router;
