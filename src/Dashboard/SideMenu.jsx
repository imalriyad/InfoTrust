import { NavLink } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const SideMenu = () => {
  const { user } = useAuth();
  const adminMail = import.meta.env.VITE_ADMIN_MAIL;

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

      <NavLink
        to={"Market"}
        className="xl:text-xl lg:text-lg flex gap-5 items-center tracking-wide py-4"
      >
        <img
          src="https://i.postimg.cc/SNPgpS3n/diagram.png"
          className="w-[25px]"
          alt=""
        />
        Market
      </NavLink>
      <NavLink
        to={"Packages"}
        className="xl:text-xl lg:text-lg flex gap-5 items-center tracking-wide py-4"
      >
        <img
          src="https://i.postimg.cc/zDsybcjQ/planning.png"
          className="w-[30px]"
          alt=""
        />
        Packages
      </NavLink>
      <NavLink
        to={"Deposit"}
        className="xl:text-xl lg:text-lg flex gap-5 items-center tracking-wide py-4"
      >
        <img
          src="https://i.postimg.cc/JzjQXbYL/deposit.png"
          className="w-[30px]"
          alt=""
        />
        Deposit
      </NavLink>

      <NavLink
        to={"Withdraw"}
        className="xl:text-xl lg:text-lg flex gap-5 items-center tracking-wide py-4"
      >
        <img
          src="https://i.postimg.cc/1tV09wq2/withdrawal.png"
          className="w-[30px]"
          alt=""
        />
        Withdraw
      </NavLink>

      {user?.email === adminMail ? (
        <NavLink
          to={"DepositRequest"}
          className="xl:text-xl lg:text-lg flex gap-5 items-center tracking-wide py-4"
        >
          <img
            src="https://i.postimg.cc/SQHhfXJT/deposit-2.png"
            className="w-[25px]"
            alt=""
          />
          Deposit Request
        </NavLink>
      ) : (
        ""
      )}

      {user?.email === adminMail ? (
        <NavLink
          to={"WithdrawRequest"}
          className="xl:text-xl lg:text-lg flex gap-5 items-center tracking-wide py-4"
        >
          <img
            src="https://i.postimg.cc/QMz4Z7Lv/money-withdrawal.png"
            className="w-[25px]"
            alt=""
          />
          Withdraw Request
        </NavLink>
      ) : (
        ""
      )}
      <NavLink
        to={"Settings"}
        className="xl:text-xl lg:text-lg flex md:gap-4 gap-3 items-center tracking-wide py-4"
      >
        <img
          src="https://static.vecteezy.com/system/resources/previews/023/869/582/non_2x/confident-smiling-coach-man-wearing-baseball-cap-semi-flat-character-head-baseball-player-courier-editable-cartoon-avatar-icon-color-spot-illustration-for-web-graphic-design-animation-vector.jpg"
          className="w-[40px] rounded-full object-cover h-[40px]"
          alt=""
        />
        <span className="flex-col">
          <p className="xl:text-xl lg:text-lg"> {user?.displayName}</p>
          <p className="md:text-sm text-xs ">{user?.email}</p>
        </span>
      </NavLink>
    </div>
  );
};

export default SideMenu;
