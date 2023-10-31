

// import { FaPeopleArrows } from "react-icons/fa";
// import { FaMoneyBillTrendUp } from "react-icons/fa6";
// import { RiMoneyDollarBoxFill } from "react-icons/ri";
// import {  GiWallet } from "react-icons/gi";

// const States = () => {
//     return (
//         <><div className="bg-[#2f3542] cursor-pointer drop-shadow-md space-y-3 p-10 rounded-sm lg:col-span-2 ">
//         <GiWallet className="text-4xl text-mainColor"></GiWallet>
//         <h1 className=" text-secondColor text-lg font-medium">Total Balance</h1>
//         <h1 className="font-semibold text-white text-3xl">$240.74</h1>
//       </div>
//       <div className="bg-[#2f3542] cursor-pointer drop-shadow-md p-10 space-y-3 rounded-sm lg:col-span-2 ">
//         <FaMoneyBillTrendUp className="text-4xl text-mainColor"></FaMoneyBillTrendUp>
//         <h1 className=" text-secondColor  text-lg font-medium">Total spending</h1>
//         <h1 className="font-semibold  text-3xl text-white">$130.40</h1>
//       </div>
//       <div className="bg-[#2f3542] cursor-pointer drop-shadow-md space-y-3 p-10 rounded-sm lg:col-span-2 ">
//         <RiMoneyDollarBoxFill className="text-4xl text-mainColor"></RiMoneyDollarBoxFill>
//         <h1 className=" text-secondColor  text-lg font-medium">Total Profit</h1>
//         <h1 className="font-semibold text-3xl text-white">$175.40</h1>
//       </div>
//       <div className="bg-[#2f3542] cursor-pointer drop-shadow-md space-y-3 p-10 rounded-sm lg:col-span-2">
//         <FaPeopleArrows className="text-4xl text-mainColor"></FaPeopleArrows>
//         <h1 className=" text-secondColor  text-lg font-medium">Total Reffer</h1>
//         <h1 className="font-semibold text-white text-3xl">25</h1>
//       </div></>
//     );
// };

// export default States;


import { GiWallet } from 'react-icons/gi';
import { FaMoneyBillTrendUp } from 'react-icons/fa6';
import { RiMoneyDollarBoxFill } from 'react-icons/ri';
import { FaPeopleArrows } from 'react-icons/fa';

const States = () => {
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
        <h1 className="text-secondColor text-lg font-medium">Total spending</h1>
        <h1 className="font-semibold text-3xl text-white">$130.40</h1>
      </div>
      <div className="bg-[#2f3542] hidden lg:block cursor-pointer drop-shadow-md space-y-3 p-10 rounded-sm col-span-2 lg:col-span-2">
        <RiMoneyDollarBoxFill className="text-4xl text-mainColor"></RiMoneyDollarBoxFill>
        <h1 className="text-secondColor text-lg font-medium">Total Profit</h1>
        <h1 className="font-semibold text-3xl text-white">$175.40</h1>
      </div>
      <div className="bg-[#2f3542] hidden lg:block cursor-pointer drop-shadow-md space-y-3 p-10 rounded-sm col-span-2 lg:col-span-2">
        <FaPeopleArrows className="text-4xl text-mainColor"></FaPeopleArrows>
        <h1 className="text-secondColor text-lg font-medium">Total Refer</h1>
        <h1 className="font-semibold text-white text-3xl">25</h1>
      </div>
      
      {/* For small screens (phones), place divs in a single row */}
      <div className="bg-[#2f3542] lg:hidden block cursor-pointer drop-shadow-md space-y-4 p-10 rounded-sm col-span-10 md:col-span-full">

        <span className="flex gap-5 items-center"><GiWallet className="text-4xl text-mainColor"></GiWallet><span className='flex flex-col'><h1 className="text-secondColor font-medium">Total Balance</h1>
        <h1 className="font-semibold text-white text-2xl">$240.74</h1></span></span>

        <span className="flex gap-5 items-center"><FaMoneyBillTrendUp className="text-4xl text-mainColor"></FaMoneyBillTrendUp><span className='flex flex-col'><h1 className="text-secondColor  font-medium">Total spending</h1>
        <h1 className="font-semibold text-white text-2xl">$130.40</h1></span></span>

        <span className="flex gap-5 items-center"><RiMoneyDollarBoxFill className="text-4xl text-mainColor"></RiMoneyDollarBoxFill><span className='flex flex-col'><h1 className="text-secondColor  font-medium">Total Profit</h1>
        <h1 className="font-semibold text-white text-2xl">$175.40</h1></span></span>

        <span className="flex gap-5 items-center"><FaPeopleArrows className="text-4xl text-mainColor"></FaPeopleArrows><span className='flex flex-col'><h1 className="text-secondColor font-medium">Total Refer</h1>
        <h1 className="font-semibold text-white text-2xl">25</h1></span></span>
      </div>
    </>
  );
};

export default States;
