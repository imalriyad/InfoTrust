import { Link, Outlet } from "react-router-dom";
import SideMenu from "./SideMenu";


import { AiOutlineMenuUnfold, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
const Dashboard = () => {
  const [isOpen, setOpen] = useState(false);
  
  return (
    <div className="bg-[#f1f2f6] ">
      <div className="grid grid-cols-10 gap-5 lg:mr-10">
        {/* Dashboard sidemenu */}
        <div className="bg-[#2f3542] hidden lg:block h-screen row-span-6 col-span-2">
          <Link to={"/"} className="flex items-center justify-center py-6">
            <img
              src="https://i.postimg.cc/26H5JtYk/tradex-Cta-logo.png"
              className="h-10 mr-3"
              alt="InvoTrust logo"
            />
            <span className="self-center text-white xl:text-3xl lg:text-xl font-semibold whitespace-nowrap ">
              InvoTrust
            </span>
          </Link>

          <SideMenu></SideMenu>
        </div>

        {/* Dashboard playGround */}
        <div className="bg-[#2f3542] drop-shadow-md lg:p-6 rounded-sm lg:col-span-8 col-span-full">
          <h1 className="lg:text-xl lg:block hidden text-xs text-mainColor font-medium p-4">
            Welcome to Dasboard. How is your day going mr @user?
          </h1>
          {/* side menu for small devices */}
          <div className="lg:hidden block p-4 border ">
            {/* <SideMenu></SideMenu> */}
            <span className="flex items-center justify-between px-2 ">
              <Link to={"/"} className="flex items-center  ">
                <img
                  src="https://i.postimg.cc/26H5JtYk/tradex-Cta-logo.png"
                  className="h-8 mr-3"
                  alt="InvoTrust logo"
                />
                <span className="self-center text-white xl:text-3xl lg:text-xl text-lg font-semibold whitespace-nowrap ">
                  InvoTrust
                </span>
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
              } fixed top-0 left-0 w-64 z-40 h-screen bg-[#2f3542] p-5`}
            >
              {isOpen ? <SideMenu></SideMenu> : ""}
            </div>
          </div>
        </div>
       
          <Outlet context={isOpen}></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
