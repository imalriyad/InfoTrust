import { GiWallet } from "react-icons/gi";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { RiMoneyDollarBoxFill } from "react-icons/ri";
import { FaPeopleArrows } from "react-icons/fa";
import { useOutletContext } from "react-router-dom";
import Chart from "./Chart";

const States = () => {
  const isOpen = useOutletContext();
  return (
    <>
      {/* For large screens, use the original layout */}
      <div className="bg-[#2f3542] hidden lg:block cursor-pointer drop-shadow-md space-y-3 p-10 rounded-sm col-span-2 lg:col-span-2">
        <GiWallet className="text-4xl text-mainColor"></GiWallet>
        <h1 className="text-secondColor text-lg font-medium">Total Balance</h1>
        <h1 className="font-semibold text-white text-3xl">$240.74</h1>
      </div>
      <div className="bg-[#2f3542] hidden lg:block cursor-pointer drop-shadow-md p-10 space-y-3 rounded-sm col-span-2 lg:col-span-2">
        <FaMoneyBillTrendUp className="text-4xl text-mainColor"></FaMoneyBillTrendUp>
        <h1 className="text-secondColor text-lg font-medium">Total spent</h1>
        <h1 className="font-semibold text-3xl text-white">$130.40</h1>
      </div>
      <div className="bg-[#2f3542] hidden lg:block cursor-pointer drop-shadow-md space-y-3 p-10 rounded-sm col-span-2 lg:col-span-2">
        <RiMoneyDollarBoxFill className="text-4xl text-mainColor"></RiMoneyDollarBoxFill>
        <h1 className="text-secondColor text-lg font-medium">Total Profit</h1>
        <h1 className="font-semibold text-3xl text-white">$175.40</h1>
      </div>
      <div className="bg-[#2f3542] hidden lg:block cursor-pointer drop-shadow-md space-y-3 p-10 rounded-sm col-span-2 lg:col-span-2">
        <FaPeopleArrows className="text-4xl text-mainColor"></FaPeopleArrows>
        <h1 className="text-secondColor text-lg font-medium">Total Referral</h1>
        <h1 className="font-semibold text-white text-3xl">25</h1>
      </div>

      <div className="col-span-8 lg:block hidden">
        <Chart></Chart>
      </div>

      {/* For small screens (phones), place divs in a single row */}

      <div
        className={`lg:hidden block cursor-pointer drop-shadow-md space-y-4 rounded-sm col-span-10 md:col-span-full ${
          isOpen ? "hidden" : "block"
        }`}
      >
        <div className="flex justify-center gap-5 px-2">
          <span className="flex gap-3 items-center md:w-full w-1/2 bg-[#2f3542] p-2">
            <GiWallet className="text-2xl text-mainColor"></GiWallet>
            <span className="flex flex-col">
              <h1 className="text-secondColor font-medium text-xs">
                {" "}
                Total Balance
              </h1>
              <h1 className="font-semibold text-white text-lg">$240.74</h1>
            </span>
          </span>
          <span className="flex gap-3 items-center md:w-full w-1/2 bg-[#2f3542] p-2">
            <GiWallet className=" text-2xl text-mainColor"></GiWallet>
            <span className="flex flex-col">
              <h1 className="text-secondColor font-medium text-xs">
                Total Spent
              </h1>
              <h1 className="font-semibold text-white text-lg">$240.74</h1>
            </span>
          </span>
        </div>
        <div className="flex justify-center gap-5 px-2 ">
          <span className="flex gap-3 items-center md:w-full w-1/2 bg-[#2f3542] p-2">
            <GiWallet className="text-2xl text-mainColor"></GiWallet>
            <span className="flex flex-col">
              <h1 className="text-secondColor font-medium text-xs">
                {" "}
                Total Profit
              </h1>
              <h1 className="font-semibold text-white text-lg">$240.74</h1>
            </span>
          </span>
          <span className="flex gap-3 items-center md:w-full w-1/2 bg-[#2f3542] p-2">
            <GiWallet className=" text-2xl text-mainColor"></GiWallet>
            <span className="flex flex-col">
              <h1 className="text-secondColor font-medium text-xs">
                Total Reffer
              </h1>
              <h1 className="font-semibold text-white text-lg">24</h1>
            </span>
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
