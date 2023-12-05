/* eslint-disable react/prop-types */
import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import toast from "react-hot-toast";
const SideMenu = () => {
  const { user ,logout } = useAuth();
  const adminMail = import.meta.env.VITE_ADMIN_MAIL;

  const navigate = useNavigate();
  const logOut = () => {
    logout()
      .then(() => {
        toast.success("Successfully Logout!");
        navigate("/");
      })
      .catch((err) => toast.error(`${err.message.slice(17).replace(")", "")}`));
  };


  return (
    <div className="text-white sidemenu space-y-2 lg:px-10 flex flex-col pt-6 drop-shadow-xl">
      <NavLink
        to={"Dashboard"}
        className="xl:text-xl lg:text-lg  flex gap-5 items-center tracking-wide py-4"
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

      <div className="dropdown dropdown-top">
        <div tabIndex={0}>
          {" "}
          <p className="xl:text-xl cursor-pointer lg:text-lg flex md:gap-4 gap-3 items-center tracking-wide py-4">
            <img
              src={`${user?.photoURL ? user?.photoURL : 'https://static.vecteezy.com/system/resources/previews/023/869/582/non_2x/confident-smiling-coach-man-wearing-baseball-cap-semi-flat-character-head-baseball-player-courier-editable-cartoon-avatar-icon-color-spot-illustration-for-web-graphic-design-animation-vector.jpg'} `}
              className="w-[40px] rounded-full object-cover h-[40px]"
              alt=""
            />
            <span className="flex-col">
              <p className="xl:text-xl lg:text-lg"> {user?.displayName}</p>
              <p className="md:text-sm text-xs ">{user?.email}</p>
            </span>
          </p>
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-mainColor text-[#130F40] font-semibold rounded-box w-40"
        >
          {" "}
          <NavLink to={'user-profile'}
            
            className="btn text-white hover:text-[#130F40] bg-[#130F40] btn-sm mb-2 normal-case"
          >
            Profile
          </NavLink>
         
          <li onClick={logOut} className="btn text-white hover:text-[#130F40] bg-[#130F40] btn-sm  mb-2 normal-case">
            LogOut
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideMenu;
