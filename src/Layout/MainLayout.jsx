import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Header/Navbar";
import Footer from "../Components/Footer";

const MainLayout = () => {
  const { pathname } = useLocation();

  pathname === "/" ? (document.title = "InvoTrust | Home") : pathname;
  pathname === "/About" ? (document.title = "InvoTrust | About") : pathname;
  pathname === "/Services" ? (document.title = "InvoTrust | Services") : pathname;
  pathname === "/Contact" ? (document.title = "InvoTrust | Contact") : pathname;
  pathname === "/Blog" ? (document.title = "InvoTrust | Blog") : pathname;
  pathname === "/Login" ? (document.title = "InvoTrust | Login") : pathname;
  pathname === "/Registration" ? (document.title = "InvoTrust | Registration") : pathname;
  pathname === "/ResetPass" ? (document.title = "InvoTrust | Reset Password") : pathname;

  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
