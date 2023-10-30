

import { FaPeopleArrows } from "react-icons/fa";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { RiMoneyDollarBoxFill } from "react-icons/ri";
import {  GiWallet } from "react-icons/gi";

const States = () => {
    return (
        <><div className="bg-[#2f3542] cursor-pointer drop-shadow-md space-y-3 p-10 rounded-sm col-span-2">
        <GiWallet className="text-4xl text-mainColor"></GiWallet>
        <h1 className=" text-secondColor text-lg font-medium">Total Balance</h1>
        <h1 className="font-semibold text-white text-3xl">$3140.74</h1>
      </div>
      <div className="bg-[#2f3542] cursor-pointer drop-shadow-md p-10 space-y-3 rounded-sm col-span-2">
        <FaMoneyBillTrendUp className="text-4xl text-mainColor"></FaMoneyBillTrendUp>
        <h1 className=" text-secondColor  text-lg font-medium">Total spending</h1>
        <h1 className="font-semibold  text-3xl text-white">$42.40</h1>
      </div>
      <div className="bg-[#2f3542] cursor-pointer drop-shadow-md space-y-3 p-10 rounded-sm col-span-2">
        <RiMoneyDollarBoxFill className="text-4xl text-mainColor"></RiMoneyDollarBoxFill>
        <h1 className=" text-secondColor  text-lg font-medium">Total Profit</h1>
        <h1 className="font-semibold text-3xl text-white">$501.074</h1>
      </div>
      <div className="bg-[#2f3542] cursor-pointer drop-shadow-md space-y-3 p-10 rounded-sm col-span-2">
        <FaPeopleArrows className="text-4xl text-mainColor"></FaPeopleArrows>
        <h1 className=" text-secondColor  text-lg font-medium">Total Reffer</h1>
        <h1 className="font-semibold text-white text-3xl">25</h1>
      </div></>
    );
};

export default States;