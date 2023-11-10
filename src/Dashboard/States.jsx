import { GiWallet } from "react-icons/gi";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { RiMoneyDollarBoxFill } from "react-icons/ri";
import { FaPeopleArrows } from "react-icons/fa";
import { HiLink } from "react-icons/hi";
import { useOutletContext } from "react-router-dom";
import Chart from "./Chart";
import { useRef } from "react";
import toast from "react-hot-toast";
import useUserInfo from "../Hooks/useUserInfo";

const States = () => {
  const isOpen = useOutletContext();
  const inputRef = useRef(null);
  const inputRefLG = useRef(null);
  const userInfo = useUserInfo();



  const handleRefferLinkLg = (event) => {
    if (inputRefLG.current) {
      inputRefLG.current.select();
      document.execCommand("copy");
      toast.success("Referral Link Copied!");
    }

    const button = event.target;
    button.innerText = "Copied";
    setTimeout(() => {
      button.innerText = "Copy";
    }, 2000);
  };

  const handleRefferLinkSm = (event) => {
    if (inputRef.current) {
      inputRef.current.select();
      document.execCommand("copy");
      toast.success("Referral Link Copied!");
    }

    const button = event.target;
    button.innerText = "Copied";
    setTimeout(() => {
      button.innerText = "Copy";
    }, 2000);
  };


  return (
    <>
      {/* For large screens, use the original layout */}
      <div className="bg-[#130f40] hidden lg:block cursor-pointer drop-shadow-md space-y-3 p-10 rounded-sm col-span-2 lg:col-span-2">
        <GiWallet className="text-4xl text-mainColor"></GiWallet>
        <h1 className="text-secondColor text-lg font-medium">Total Balance</h1>
        <h1 className="font-semibold text-white text-3xl">${userInfo?.totalBalance}</h1>
      </div>
      <div className="bg-[#130f40] hidden lg:block cursor-pointer drop-shadow-md p-10 space-y-3 rounded-sm col-span-2 lg:col-span-2">
        <FaMoneyBillTrendUp className="text-4xl text-mainColor"></FaMoneyBillTrendUp>
        <h1 className="text-secondColor text-lg font-medium">Total spent</h1>
        <h1 className="font-semibold text-3xl text-white">${userInfo?.totalSpent}</h1>
      </div>
      <div className="bg-[#130f40] hidden lg:block cursor-pointer drop-shadow-md space-y-3 p-10 rounded-sm col-span-2 lg:col-span-2">
        <RiMoneyDollarBoxFill className="text-4xl text-mainColor"></RiMoneyDollarBoxFill>
        <h1 className="text-secondColor text-lg font-medium">Total Profit</h1>
        <h1 className="font-semibold text-3xl text-white">${userInfo?.totalProfit}</h1>
      </div>
      <div className="bg-[#130f40] hidden lg:block cursor-pointer drop-shadow-md space-y-3 p-10 rounded-sm col-span-2 lg:col-span-2">
        <FaPeopleArrows className="text-4xl text-mainColor"></FaPeopleArrows>
        <h1 className="text-secondColor text-lg font-medium">Total Referral</h1>
        <h1 className="font-semibold text-white text-3xl">{userInfo?.totalReferral}</h1>
      </div>

      {/* Reffer link for lg */}
      <div className="bg-[#130f40] lg:block hidden cursor-pointer drop-shadow-md space-y-3 p-6 rounded-sm col-span-4">
        <h1 className="text-secondColor flex gap-2 items-center text-base font-medium">
          <HiLink className=" text-2xl text-mainColor"></HiLink> Reffer Link
        </h1>

        <span className="flex">
          <input
            type="text"
            ref={inputRefLG}
            defaultValue={userInfo?.refferLink}
            readOnly
            className="input input-bordered text-xs input-sm rounded-sm w-full max-w-xs"
          />
          <button
            onClick={handleRefferLinkLg}
            className="btn copylg btn-success btn-sm normal-case rounded-sm text-xs"
          >
            Copy
          </button>
        </span>
      </div>

      <div className="col-span-8 lg:block hidden">
        <Chart></Chart>
      </div>

      {/* For small screens (phones), place divs in a single row */}

      <div
        className={`lg:hidden block cursor-pointer drop-shadow-md space-y-4 px-2 rounded-sm col-span-10 md:col-span-full ${
          isOpen ? "hidden" : "block"
        }`}
      >
        <div className="flex justify-center gap-5 ">
          <span className="flex gap-3 items-center md:w-full w-1/2 bg-[#130f40] p-2">
            <GiWallet className="text-2xl text-mainColor"></GiWallet>
            <span className="flex flex-col">
              <h1 className="text-secondColor font-medium text-xs">
                {" "}
                Total Balance
              </h1>
              <h1 className="font-semibold text-white text-lg">${userInfo?.totalBalance}</h1>
            </span>
          </span>
          <span className="flex gap-3 items-center md:w-full w-1/2 bg-[#130f40] p-2">
            <FaMoneyBillTrendUp className=" text-2xl text-mainColor"></FaMoneyBillTrendUp>
            <span className="flex flex-col">
              <h1 className="text-secondColor font-medium text-xs">
                Total Spent
              </h1>
              <h1 className="font-semibold text-white text-lg">${userInfo?.totalSpent}</h1>
            </span>
          </span>
        </div>
        <div className="flex justify-center gap-5  ">
          <span className="flex gap-3 items-center md:w-full w-1/2 bg-[#130f40] p-2">
            <RiMoneyDollarBoxFill className="text-2xl text-mainColor"></RiMoneyDollarBoxFill>
            <span className="flex flex-col">
              <h1 className="text-secondColor font-medium text-xs">
                {" "}
                Total Profit
              </h1>
              <h1 className="font-semibold text-white text-lg">${userInfo?.totalProfit}</h1>
            </span>
          </span>
          <span className="flex gap-3 items-center md:w-full w-1/2 bg-[#130f40] p-2">
            <FaPeopleArrows className=" text-2xl text-mainColor"></FaPeopleArrows>
            <span className="flex flex-col">
              <h1 className="text-secondColor font-medium text-xs">
                Total Reffer
              </h1>
              <h1 className="font-semibold text-white text-lg">{userInfo?.totalReferral}</h1>
            </span>
          </span>
        </div>

        <div className="bg-[#130f40] cursor-pointer drop-shadow-md space-y-3 p-4 rounded-sm col-span-2 lg:col-span-2">
          <h1 className="text-secondColor flex gap-2 items-center text-base font-medium">
            <HiLink className=" text-2xl text-mainColor"></HiLink> Reffer Link
          </h1>

          <span className="flex">
            <input
              type="text"
              ref={inputRef}
              defaultValue={userInfo?.refferLink}
              readOnly
              className="input input-bordered text-xs input-sm rounded-sm w-full max-w-xs"
            />
            <button
              onClick={handleRefferLinkSm}
              className="btn btn-success btn-sm normal-case rounded-sm text-xs"
            >
              Copy
            </button>
          </span>
        </div>

        <div className="col-span-full block lg:hidden">
          <Chart></Chart>
        </div>
      </div>
    </>
  );
};

export default States;
