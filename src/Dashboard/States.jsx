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
import { TbBadge } from "react-icons/tb";
import swal from "sweetalert";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const States = () => {
  const isOpen = useOutletContext();
  const inputRef = useRef(null);
  const inputRefLG = useRef(null);
  const [userInfo, refetch] = useUserInfo();
  const axiosPublic = useAxiosPublic();
  const handleRefferCodeLg = (event) => {
    if (inputRefLG.current) {
      inputRefLG.current.select();
      document.execCommand("copy");
      toast.success("Referral Code Copied!");
    }

    const button = event.target;
    button.innerText = "Copied";
    setTimeout(() => {
      button.innerText = "Copy";
    }, 2000);
  };

  const handleRefferCodeSm = (event) => {
    if (inputRef.current) {
      inputRef.current.select();
      document.execCommand("copy");
      toast.success("Referral Code Copied!");
    }

    const button = event.target;
    button.innerText = "Copied";
    setTimeout(() => {
      button.innerText = "Copy";
    }, 2000);
  };

  const handleBonus = (bonusAmount) => {
    const userId = userInfo?._id;
    const updatedTotalBalance = userInfo?.totalBalance + bonusAmount;
    const totalProfit = userInfo?.totalProfit + bonusAmount;
    const totalReferral = userInfo?.totalReferral + 1;
    const updateFeild = {
      updatedTotalBalance,
      totalProfit,
      totalReferral,
    };
    axiosPublic.patch(`/update-user/${userId}`, updateFeild).then(() => {
      swal(
        "Congrats!",
        `Bonus $${bonusAmount} Claim Succesfully
        Cheak Your Balance`,
        "success"
      );
      refetch();
    });
  };

  return (
    <>
      {/* For large screens, use the original layout */}
      <div className="bg-[#130f40] hidden lg:block cursor-pointer drop-shadow-md space-y-3 p-10 rounded-sm col-span-2 lg:col-span-2">
        <GiWallet className="text-4xl text-mainColor"></GiWallet>
        <h1 className="text-secondColor text-lg font-medium">Total Balance</h1>
        <h1 className="font-semibold text-white text-3xl">
          ${userInfo?.totalBalance?.toFixed(2)}
        </h1>
      </div>
      <div className="bg-[#130f40] hidden lg:block cursor-pointer drop-shadow-md p-10 space-y-3 rounded-sm col-span-2 lg:col-span-2">
        <FaMoneyBillTrendUp className="text-4xl text-mainColor"></FaMoneyBillTrendUp>
        <h1 className="text-secondColor text-lg font-medium">Total spent</h1>
        <h1 className="font-semibold text-3xl text-white">
          ${userInfo?.totalSpent?.toFixed(2)}
        </h1>
      </div>
      <div className="bg-[#130f40] hidden lg:block cursor-pointer drop-shadow-md space-y-3 p-10 rounded-sm col-span-2 lg:col-span-2">
        <RiMoneyDollarBoxFill className="text-4xl text-mainColor"></RiMoneyDollarBoxFill>
        <h1 className="text-secondColor text-lg font-medium">Total Profit</h1>
        <h1 className="font-semibold text-3xl text-white">
          ${userInfo?.totalProfit?.toFixed(2)}
        </h1>
      </div>
      <div className="bg-[#130f40] hidden lg:block cursor-pointer drop-shadow-md space-y-3 p-10 rounded-sm col-span-2 lg:col-span-2">
        <FaPeopleArrows className="text-4xl text-mainColor"></FaPeopleArrows>
        <h1 className="text-secondColor text-lg font-medium">Total Referral</h1>
        <h1 className="font-semibold text-white text-3xl">
          {userInfo?.totalReferral}
        </h1>
      </div>

      {/* Reffer link for lg */}
      <div className="bg-[#130f40] lg:block hidden cursor-pointer drop-shadow-md space-y-3 p-6 rounded-sm col-span-4">
        <h1 className="text-secondColor flex gap-2 items-center text-base font-medium">
          <HiLink className=" text-2xl text-mainColor"></HiLink> Reffer Code
        </h1>

        <span className="flex">
          <input
            type="text"
            ref={inputRefLG}
            defaultValue={userInfo?.refferCode}
            readOnly
            className="input input-bordered text-xs input-sm rounded-sm w-full max-w-xs"
          />
          <button
            onClick={handleRefferCodeLg}
            className="btn copylg btn-success btn-sm normal-case rounded-sm text-xs"
          >
            Copy
          </button>
        </span>
      </div>

      {/* Reffer Progress */}
      <div className="bg-[#130f40] lg:block hidden cursor-pointer drop-shadow-md space-y-3 p-6 rounded-sm col-span-4">
        <h1 className="text-secondColor flex gap-2 items-center text-base font-medium">
          <TbBadge className=" text-2xl text-mainColor"></TbBadge>{" "}
          {userInfo?.totalReferral < 50 ? "Level 1" : "Level 2"}
        </h1>

        {userInfo?.totalReferral < 26 ? (
          <span>
            <div
              className="tooltip flex items-center text-white tooltip-open tooltip-success "
              data-tip={`${(userInfo?.totalReferral / 25).toFixed(2) * 100}%`}
            >
              <progress
                className="progress progress-success w-56 "
                value={userInfo?.totalReferral}
                max="25"
              ></progress>
              <h1 className="text-lg font-medium text-white">25</h1>
            </div>
            <div className="flex flex-col">
              <h1 className="text-white pb-2 text-sm">
                You need more {25 - userInfo?.totalReferral} Reffer to claim $30
              </h1>{" "}
              <button
                onClick={() => handleBonus(30)}
                className={`btn btn-sm btn-success ${
                  userInfo?.totalReferral < 25
                    ? "disabled:bg-success cursor-not-allowed disabled:cursor-not-allowed"
                    : ""
                }`}
                disabled={userInfo?.totalReferral < 25}
              >
                Claim
              </button>
            </div>
          </span>
        ) : (
          <span>
            <div
              className="tooltip flex items-center text-white tooltip-open tooltip-success "
              data-tip={`${(userInfo?.totalReferral / 75).toFixed(2) * 100}%`}
            >
              <progress
                className="progress progress-success w-56 "
                value={userInfo?.totalReferral}
                max="75"
              ></progress>
              <h1 className="text-lg font-medium text-white">75</h1>
            </div>
            <div className="flex flex-col">
              <h1 className="text-white pb-2 text-sm">
                You need more {75 - userInfo?.totalReferral} Reffer to claim $90
              </h1>{" "}
              <button
                onClick={() => handleBonus(90)}
                className={`btn btn-sm btn-success ${
                  userInfo?.totalReferral < 75
                    ? "disabled:bg-success cursor-not-allowed disabled:cursor-not-allowed"
                    : ""
                }`}
                disabled={userInfo?.totalReferral < 75}
              >
                Claim
              </button>
            </div>
          </span>
        )}
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
              <h1 className="font-semibold text-white text-lg">
                ${userInfo?.totalBalance?.toFixed(2)}
              </h1>
            </span>
          </span>
          <span className="flex gap-3 items-center md:w-full w-1/2 bg-[#130f40] p-2">
            <FaMoneyBillTrendUp className=" text-2xl text-mainColor"></FaMoneyBillTrendUp>
            <span className="flex flex-col">
              <h1 className="text-secondColor font-medium text-xs">
                Total Spent
              </h1>
              <h1 className="font-semibold text-white text-lg">
                ${userInfo?.totalSpent?.toFixed(2)}
              </h1>
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
              <h1 className="font-semibold text-white text-lg">
                ${userInfo?.totalProfit?.toFixed(2)}
              </h1>
            </span>
          </span>
          <span className="flex gap-3 items-center md:w-full w-1/2 bg-[#130f40] p-2">
            <FaPeopleArrows className=" text-2xl text-mainColor"></FaPeopleArrows>
            <span className="flex flex-col">
              <h1 className="text-secondColor font-medium text-xs">
                Total Reffer
              </h1>
              <h1 className="font-semibold text-white text-lg">
                {userInfo?.totalReferral}
              </h1>
            </span>
          </span>
        </div>

        {/* Reffer progress */}
        <div className="bg-[#130f40] cursor-pointer drop-shadow-md space-y-3 p-4 rounded-sm col-span-2 lg:col-span-2">
          <h1 className="text-secondColor flex gap-2 items-center text-base font-medium">
            <TbBadge className=" text-2xl text-mainColor"></TbBadge>{" "}
            {userInfo?.totalReferral < 50 ? "Level 1" : "Level 2"}
          </h1>

          {userInfo?.totalReferral < 26 ? (
            <span>
              <div
                className="tooltip flex items-center text-white tooltip-open tooltip-success "
                data-tip={`${(userInfo?.totalReferral / 25).toFixed(2) * 100}%`}
              >
                <progress
                  className="progress progress-success w-56 "
                  value={userInfo?.totalReferral}
                  max="25"
                ></progress>
                <h1 className="text-lg font-medium text-white">25</h1>
              </div>
              <div className="flex flex-col">
                <h1 className="text-white pb-2 text-sm">
                  You need more {25 - userInfo?.totalReferral} Reffer to claim
                  $30
                </h1>{" "}
                <button
                  onClick={() => handleBonus(30)}
                  className={`btn btn-xs btn-success ${
                    userInfo?.totalReferral < 25
                      ? "disabled:bg-success cursor-not-allowed disabled:cursor-not-allowed"
                      : ""
                  }`}
                  disabled={userInfo?.totalReferral < 25}
                >
                  Claim
                </button>
              </div>
            </span>
          ) : (
            <span>
              <div
                className="tooltip flex items-center text-white tooltip-open tooltip-success "
                data-tip={`${(userInfo?.totalReferral / 75).toFixed(2) * 100}%`}
              >
                <progress
                  className="progress progress-success w-56 "
                  value={userInfo?.totalReferral}
                  max="75"
                ></progress>
                <h1 className="text-lg font-medium text-white">75</h1>
              </div>
              <div className="flex flex-col">
                <h1 className="text-white pb-2 text-sm">
                  You need more {75 - userInfo?.totalReferral} Reffer to claim
                  $90
                </h1>{" "}
                <button
                  onClick={() => handleBonus(90)}
                  className={`btn btn-xs btn-success ${
                    userInfo?.totalReferral < 75
                      ? "disabled:bg-success cursor-not-allowed disabled:cursor-not-allowed"
                      : ""
                  }`}
                  disabled={userInfo?.totalReferral < 75}
                >
                  Claim
                </button>
              </div>
            </span>
          )}
        </div>

        {/* Reffer code */}
        <div className="bg-[#130f40] cursor-pointer drop-shadow-md space-y-3 p-4 rounded-sm col-span-2 lg:col-span-2">
          <h1 className="text-secondColor flex gap-2 items-center text-base font-medium">
            <HiLink className=" text-2xl text-mainColor"></HiLink> Reffer Code
          </h1>

          <span className="flex">
            <input
              type="text"
              ref={inputRef}
              defaultValue={userInfo?.refferCode}
              readOnly
              className="input input-bordered text-xs input-sm rounded-sm w-full max-w-xs"
            />
            <button
              onClick={handleRefferCodeSm}
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
