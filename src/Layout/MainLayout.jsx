import { Outlet } from "react-router-dom";
import Navbar from "../Header/Navbar";
import Footer from "../Components/Footer";
import Tittle from "../Components/Tittle/Tittle";

const MainLayout = () => {
  return (
    <div>
      <Tittle></Tittle>;<Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
