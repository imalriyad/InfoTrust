import { Outlet } from "react-router-dom";
import Navbar from "../Header/Navbar";
import Footer from "../Components/Footer";


const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;