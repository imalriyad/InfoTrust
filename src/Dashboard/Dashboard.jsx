import { Link, Outlet } from "react-router-dom";
import SideMenu from "./SideMenu";
import Chart from "./Chart";

const Dashboard = () => {
  return (
    <div className="bg-[#f1f2f6] ">
      <div className="grid grid-cols-10 gap-5 mr-10">
        {/* Dashboard sidemenu */}
        <div className="bg-[#2f3542] hidden lg:block h-screen row-span-6 col-span-2">
          <Link to={'/'} className="flex items-center justify-center py-6">
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
          <h1 className="lg:text-xl text-xs text-white font-bold py-4">
            Welcome to Dasboard. How is your day going mr @user?
          </h1>
         
        </div>
        <Outlet></Outlet>
        <Chart></Chart>
      </div>
    </div>
  );
};

export default Dashboard;
