import { NavLink } from "react-router-dom";

const SideMenu = () => {
  return (
    <div className="text-white sidemenu space-y-2 px-10 flex flex-col pt-6 drop-shadow-xl">
      <NavLink
        to={"Dashboard"}
        className="xl:text-xl  lg:text-lg flex gap-5 items-center tracking-wide py-4"
      >
        <img
          src="https://i.postimg.cc/dDcD8TD7/dashboard.png"
          className="w-[25px]"
          alt=""
        />
        Dashboard
      </NavLink>

      <NavLink to={'Market'} className="xl:text-xl lg:text-lg flex gap-5 items-center tracking-wide py-4">
        <img
          src="https://i.postimg.cc/SNPgpS3n/diagram.png"
          className="w-[25px]"
          alt=""
        />
        Market
      </NavLink>
      <li className="xl:text-xl lg:text-lg flex gap-5 items-center tracking-wide py-4">
        <img
          src="https://i.postimg.cc/JzjQXbYL/deposit.png"
          className="w-[30px]"
          alt=""
        />
        Deposit
      </li>

      <li className="xl:text-xl lg:text-lg flex gap-5 items-center tracking-wide py-4">
        <img
          src="https://i.postimg.cc/1tV09wq2/withdrawal.png"
          className="w-[30px]"
          alt=""
        />
        Withdraw
      </li>
      <li className="xl:text-xl lg:text-lg flex gap-5 items-center tracking-wide py-4">
        <img
          src="https://i.postimg.cc/N004fd9N/settings.png"
          className="w-[25px]"
          alt=""
        />
        Settings
      </li>
    </div>
  );
};

export default SideMenu;
