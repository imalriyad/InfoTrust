import { GiWallet } from "react-icons/gi";
import { useRef } from "react";
import { useOutletContext } from "react-router-dom";
import toast from "react-hot-toast";
import DepositFrom from "./DepositFrom";
import LatestDepoWithdraw from "./LatestDepoWith";
import useUserInfo from "../../Hooks/useUserInfo";

const Deposit = () => {
  const isOpen = useOutletContext();
  const userInfo = useUserInfo();
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);

  const handleInputClick = (inputRef) => () => {
    if (inputRef.current) {
      inputRef.current.select();
      document.execCommand("copy");
      toast.success("Address Copied!");
      const buttons = document.querySelectorAll(".btn");

      buttons.forEach((btn) => {
        btn.addEventListener("click", (event) => {
          const clickedButton = event.target;
          clickedButton.innerText = "Copied";

          // Reset the button text after 2 seconds
          setTimeout(() => {
            clickedButton.innerText = "Copy";
          }, 2000);
        });
      });
    }
  };
  return (
    <>
      {/* For large screens, use the original layout */}
      <div className="bg-[#130f40] hidden lg:block cursor-pointer drop-shadow-md space-y-3 p-10 rounded-sm col-span-2 lg:col-span-2">
        <GiWallet className="text-4xl text-mainColor"></GiWallet>
        <h1 className="text-secondColor text-lg font-medium">Total Balance</h1>
        <h1 className="font-semibold text-white text-3xl">${userInfo?.totalBalance}</h1>
      </div>

      <div className="bg-[#130f40] hidden lg:block cursor-pointer drop-shadow-md space-y-3 p-10 rounded-sm col-span-2 lg:col-span-2">
        <img
          src="https://i.postimg.cc/Jhy2yp3M/tether-cryptocurrency.png"
          alt=""
        />
        <h1 className="text-secondColor text-lg font-medium">USDT (TRC20)</h1>
        <span className="flex">
          <input
            type="text"
            ref={inputRef1}
            defaultValue={"TAQpCTFeJvwdWf6MQZtXXkzWrTS9aymshb"}
            readOnly
            placeholder="Type here"
            className="input input-bordered input-sm rounded-sm w-full max-w-xs"
          />
          <button
            onClick={handleInputClick(
              inputRef1,
              "TAQpCTFeJvwdWf6MQZtXXkzWrTS9aymshb"
            )}
            className="btn btn-sm normal-case rounded-sm text-xs btn-success"
          >
            Copy
          </button>
        </span>
      </div>
      <div className="bg-[#130f40] hidden lg:block cursor-pointer drop-shadow-md p-10 space-y-3 rounded-sm col-span-2 lg:col-span-2">
        <img
          src="https://i.postimg.cc/9028nV6Q/binance-coin-cryptocurrency.png"
          alt=""
        />
        <h1 className="text-secondColor text-lg font-medium">BNB (BEP20)</h1>
        <span className="flex">
          <input
            type="text"
            ref={inputRef2}
            defaultValue={"0xCE7de646e7208a4Ef112cb6ed5038FA6cC6b12e"}
            readOnly
            placeholder="Type here"
            className="input input-bordered input-sm rounded-sm w-full max-w-xs"
          />
          <button
            onClick={handleInputClick(
              inputRef2,
              "TAQpCTFeJvwdWf6MQZtXXkzWrTS9aymshb"
            )}
            className="btn btn-sm normal-case rounded-sm text-xs btn-success"
          >
            Copy
          </button>
        </span>
      </div>
      <div className="bg-[#130f40] hidden lg:block cursor-pointer drop-shadow-md space-y-3 p-10 rounded-sm col-span-2 lg:col-span-2">
        <img
          src="https://s2.coinmarketcap.com/static/img/coins/64x64/1958.png"
          className="w-[32px]"
          alt=""
        />
        <h1 className="text-secondColor text-lg font-medium">Tron (TRX)</h1>
        <span className="flex">
          <input
            type="text"
            ref={inputRef3}
            defaultValue={"TAQpCTFeJvwdWf6MQZtXXkzWrTS9aymshb"}
            readOnly
            placeholder="Type here"
            className="input input-bordered input-sm rounded-sm w-full max-w-xs"
          />{" "}
          <button
            onClick={handleInputClick(
              inputRef3,
              "TAQpCTFeJvwdWf6MQZtXXkzWrTS9aymshb"
            )}
            className="btn btn-success btn-sm normal-case rounded-sm text-xs"
          >
            Copy
          </button>
        </span>
      </div>

      {/* For small screens (phones), place divs in a single row */}
      <div
        className={`px-2 lg:hidden block cursor-pointer drop-shadow-md space-y-4 rounded-sm col-span-10 md:col-span-full ${
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
              <h1 className="font-semibold text-white text-xl">${userInfo?.totalBalance}</h1>
            </span>
          </span>
        </div>

        <div className="bg-[#130f40] cursor-pointer drop-shadow-md space-y-3 p-5 rounded-sm col-span-2 lg:col-span-2">
          <div className="flex gap-3 items-center">
            {" "}
            <img
              src="https://i.postimg.cc/Jhy2yp3M/tether-cryptocurrency.png"
              alt=""
            />
            <h1 className="text-secondColor text-lg font-medium">
              USDT (TRC20)
            </h1>
          </div>
          <span className="flex">
            <input
              type="text"
              ref={inputRef3}
              defaultValue={"TAQpCTFeJvwdWf6MQZtXXkzWrTS9aymshb"}
              readOnly
              placeholder="Type here"
              className="input input-bordered input-sm rounded-sm w-full max-w-xs"
            />{" "}
            <button
              onClick={handleInputClick(
                inputRef3,
                "TAQpCTFeJvwdWf6MQZtXXkzWrTS9aymshb"
              )}
              className="btn btn-success btn-sm normal-case rounded-sm text-xs"
            >
              Copy
            </button>
          </span>
        </div>
        <div className="bg-[#130f40] cursor-pointer drop-shadow-md space-y-3 p-5 rounded-sm col-span-2 lg:col-span-2">
          <div className="flex gap-3 items-center">
            <img
              src="https://i.postimg.cc/9028nV6Q/binance-coin-cryptocurrency.png"
              alt=""
            />
            <h1 className="text-secondColor text-lg font-medium">
              BNB (BEP20)
            </h1>
          </div>
          <span className="flex">
            <input
              type="text"
              ref={inputRef2}
              defaultValue={"0xCE7de646e7208a4Ef112cb6ed5038FA6cC6b12e"}
              readOnly
              placeholder="Type here"
              className="input input-bordered input-sm rounded-sm w-full max-w-xs"
            />
            <button
              onClick={handleInputClick(
                inputRef3,
                "TAQpCTFeJvwdWf6MQZtXXkzWrTS9aymshb"
              )}
              className="btn btn-success btn-sm normal-case rounded-sm text-xs"
            >
              Copy
            </button>
          </span>
        </div>
        <div className="bg-[#130f40] cursor-pointer drop-shadow-md space-y-3 p-5 rounded-sm col-span-2 lg:col-span-2">
          <div className="flex gap-3 items-center">
            <img
              src="https://s2.coinmarketcap.com/static/img/coins/64x64/1958.png"
              className="w-[32px]"
              alt=""
            />
            <h1 className="text-secondColor text-lg font-medium">Tron (TRX)</h1>
          </div>
          <span className="flex">
            <input
              type="text"
              ref={inputRef3}
              defaultValue={"TAQpCTFeJvwdWf6MQZtXXkzWrTS9aymshb"}
              readOnly
              placeholder="Type here"
              className="input input-bordered input-sm rounded-sm w-full max-w-xs"
            />{" "}
            <button
              onClick={handleInputClick(
                inputRef3,
                "TAQpCTFeJvwdWf6MQZtXXkzWrTS9aymshb"
              )}
              className="btn btn-success btn-sm normal-case rounded-sm text-xs"
            >
              Copy
            </button>
          </span>
        </div>
      </div>

      <div className="lg:col-span-4 col-span-10 px-4">
        <h1 className="lg:text-2xl text-xl font-bold pb-5">
          Fill out the form after transferring USDT/BSC/TRX to the Deposit
          Address
        </h1>
        <DepositFrom></DepositFrom>
      </div>
      <div className="lg:col-span-4 col-span-10 px-4 lg:py-0 py-5">
        <h1 className="text-3xl py-4 font-bold">Latest Deposit</h1>
        <LatestDepoWithdraw></LatestDepoWithdraw>
      </div>
    </>
  );
};

export default Deposit;
