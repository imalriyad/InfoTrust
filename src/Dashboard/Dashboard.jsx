import { Link, Outlet } from "react-router-dom";
import SideMenu from "./SideMenu";
import { AiOutlineMenuUnfold, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import useAuth from "../Hooks/useAuth";
import DashTittle from "../Components/Tittle/DashTittle";
const Dashboard = () => {
  const [isOpen, setOpen] = useState(false);
  const { user } = useAuth();

  return (
    <div className="bg-[#f1f2f6] ">
      <div className="grid grid-cols-10 gap-5 lg:mr-10">
        {/* Dashboard sidemenu */}
        <div className="bg-[#130f40] hidden lg:block h-full row-span-6 col-span-2 ">
          <Link to={"/"} className="flex items-center justify-center py-6">
            <img
              src="https://i.postimg.cc/rsDP8skz/Invo-Trust-03.png"
              className="h-8 mr-3 object-cover"
              alt="InvoTrust logo"
            />
         
          </Link>

          <SideMenu isOpen={isOpen} setOpen={setOpen}></SideMenu>
        </div>

        {/* Dashboard playGround */}
        <div className="bg-[#130f40] drop-shadow-md lg:p-6 rounded-sm lg:col-span-8 col-span-full">
          <h1 className="lg:text-xl lg:block hidden text-xs text-gray-300 font-medium p-3">
            Welcome Back ,{" "}
            <span className="text-mainColor font-bold">{user.displayName}</span>
          </h1>
          {/* side menu for small devices */}
          <div className="lg:hidden block p-4 border ">
            {/* <SideMenu></SideMenu> */}
            <span className="flex items-center justify-between px-2 ">
              <Link to={"/"} className="flex items-center  ">
                <img
                  src="https://i.postimg.cc/rsDP8skz/Invo-Trust-03.png"
                  className="h-8 mr-3"
                  alt="InvoTrust logo"
                />
              
              </Link>
              <span onClick={() => setOpen(!isOpen)} className="cursor-pointer">
                {isOpen ? (
                  <AiOutlineClose className="text-3xl text-mainColor"></AiOutlineClose>
                ) : (
                  <AiOutlineMenuUnfold className="text-3xl text-mainColor"></AiOutlineMenuUnfold>
                )}
              </span>
            </span>
            <div
              className={`transition-transform transform ${
                isOpen ? "translate-x-0" : "-translate-x-full"
              } fixed top-0 left-0 w-64 z-40   bg-[#130f40] p-5`}
            >
              {isOpen ? <SideMenu></SideMenu> : ""}
            </div>
          </div>
        </div>

        <Outlet context={isOpen}></Outlet>
      </div>
      <DashTittle></DashTittle>
    </div>
  );
};

export default Dashboard;
