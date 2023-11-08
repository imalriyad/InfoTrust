import { GiWallet } from "react-icons/gi";
import { useOutletContext } from "react-router-dom";
import LatestDepoWithdraw from "../Deposit/LatestDepoWith";
import Withdrawfrom from "./Withdrawfrom";

const Withdraw = () => {
  const isOpen = useOutletContext();
  return (
    <>
      {/* Large screen elements */}
      <div className="bg-[#130f40] hidden lg:block cursor-pointer drop-shadow-md space-y-3 p-10 rounded-sm col-span-8">
        <GiWallet className="text-4xl text-mainColor"></GiWallet>
        <h1 className="text-secondColor text-lg font-medium">Total Balance</h1>
        <h1 className="font-semibold text-white text-3xl">$240.74</h1>
      </div>

      {/* For small screens (phones), place divs in a single row */}

      <div
        className={`lg:hidden block cursor-pointer drop-shadow-md space-y-4 rounded-sm col-span-10 md:col-span-full ${
          isOpen ? "hidden" : "block"
        }`}
      >
        <div className="flex justify-center gap-5 ">
          <span className="flex gap-3 items-center w-full bg-[#130f40] p-4">
            <GiWallet className="text-2xl text-mainColor"></GiWallet>
            <span className="flex flex-col">
              <h1 className="text-secondColor font-medium text-base">
                {" "}
                Total Balance
              </h1>
              <h1 className="font-semibold text-white text-xl">$240.74</h1>
            </span>
          </span>
        </div>
      </div>
      <div className="lg:col-span-4 col-span-10 px-4">
        <h1 className="lg:text-2xl text-xl font-bold pb-5">
          Fill out the form to submit a withdrawal request
        </h1>
        <Withdrawfrom></Withdrawfrom>
      </div>
      <div className="lg:col-span-4 col-span-10 px-4 lg:py-0 pb-5">
        {" "}
        <h1 className="text-3xl py-4 font-bold">Latest Withdraw</h1>
        <LatestDepoWithdraw></LatestDepoWithdraw>
      </div>
    </>
  );
};

export default Withdraw;
