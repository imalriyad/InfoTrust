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
// import Packages from "../Pages/Packages";
import Dashboard from "../Dashboard/Dashboard";
import States from "../Dashboard/States";
import Market from "../Dashboard/Market";
import Withdraw from "../Dashboard/Withdraw/Withdraw";
import Deposit from "../Dashboard/Deposit/Deposit";
import PrivateRoute from "../Private/PrivateRoute";
import ErorrPage from "../Pages/ErorrPage";
import PricingDash from "../Dashboard/PricingDash";
import DepositReq from "../Dashboard/Admin/DepositReq";
import WithdrawReq from "../Dashboard/Admin/WithdrawReq";
import Profile from "../Dashboard/UpdateProfile/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErorrPage></ErorrPage>,
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
      // {
      //   path: "/Packages",
      //   element: <Packages></Packages>,
      // },
      {
        path: "/PostDetails/:id",
        element: <PostDetails></PostDetails>,
        loader: () => fetch("https://api.npoint.io/6a872fcb5bf1f03e2360"),
      },
      {
        path: "/Registration",
        element: <Registration></Registration>,
      },
      {
        path: "/Login",
        element: <Login></Login>,
      },
      {
        path: "/ResetPass",
        element: <ResetPass></ResetPass>,
      },
    ],
  },
  {
    path: "/Dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    errorElement: <ErorrPage></ErorrPage>,
    children: [
      {
        path: "Dashboard",
        element: (
          <PrivateRoute>
            <States></States>
          </PrivateRoute>
        ),
      },
      {
        path: "Market",
        element: (
          <PrivateRoute>
            <Market></Market>
          </PrivateRoute>
        ),
      },
      {
        path: "Deposit",
        element: (
          <PrivateRoute>
            <Deposit></Deposit>
          </PrivateRoute>
        ),
      },
      {
        path: "Withdraw",
        element: (
          <PrivateRoute>
            <Withdraw></Withdraw>
          </PrivateRoute>
        ),
      },
      {
        path: "Packages",
        element: (
          <PrivateRoute>
            <PricingDash></PricingDash>
          </PrivateRoute>
        ),
      },

      {
        path: "DepositRequest",
        element: (
          <PrivateRoute>
            <DepositReq></DepositReq>
          </PrivateRoute>
        ),
      },
      {
        path: "WithdrawRequest",
        element: (
          <PrivateRoute>
            <WithdrawReq></WithdrawReq>
          </PrivateRoute>
        ),
      },
      {
        path: "user-profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
