import { Outlet } from "react-router-dom";
import SideMenu from "./SideMenu";

const Dashboard = () => {
  return (
    <div className="bg-[#f1f2f6] ">
      <div className="grid grid-cols-10 gap-5 mr-10">
        {/* Dashboard sidemenu */}
        <div className="bg-[#2f3542] h-screen row-span-6 col-span-2">
          <div className="flex items-center justify-center py-6">
            <img
              src="https://i.postimg.cc/26H5JtYk/tradex-Cta-logo.png"
              className="h-10 mr-3"
              alt="InvoTrust logo"
            />
            <span className="self-center text-white xl:text-3xl lg:text-xl font-semibold whitespace-nowrap ">
              InvoTrust
            </span>
          </div>

          <SideMenu></SideMenu>
        </div>
        
        {/* Dashboard playGround */}
        <div className="bg-[#2f3542]  drop-shadow-md p-6 rounded-sm col-span-8">
          <h1 className="text-xl text-white font-bold py-4">
            Welcome to Dasboard. How is your day going mr @user?
          </h1>
         
        </div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
