import { GiWallet } from "react-icons/gi";
import { useRef } from "react";
import { useOutletContext } from "react-router-dom";
import toast from "react-hot-toast";
const Deposit = () => {
  const isOpen = useOutletContext();
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
      <div className="bg-[#2f3542] hidden lg:block cursor-pointer drop-shadow-md space-y-3 p-10 rounded-sm col-span-2 lg:col-span-2">
        <GiWallet className="text-4xl text-mainColor"></GiWallet>
        <h1 className="text-secondColor text-lg font-medium">Total Balance</h1>
        <h1 className="font-semibold text-white text-3xl">$240.74</h1>
      </div>

      <div className="bg-[#2f3542] hidden lg:block cursor-pointer drop-shadow-md space-y-3 p-10 rounded-sm col-span-2 lg:col-span-2">
        <img
          src="https://i.postimg.cc/Jhy2yp3M/tether-cryptocurrency.png"
          alt=""
        />
        <h1 className="text-secondColor text-lg font-medium">USDT (TRC20)</h1>
        <span className="flex">
          <input
            type="text"
            onClick={handleInputClick(
              inputRef1,
              "TAQpCTFeJvwdWf6MQZtXXkzWrTS9aymshb"
            )}
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
      <div className="bg-[#2f3542] hidden lg:block cursor-pointer drop-shadow-md p-10 space-y-3 rounded-sm col-span-2 lg:col-span-2">
        <img
          src="https://i.postimg.cc/9028nV6Q/binance-coin-cryptocurrency.png"
          alt=""
        />
        <h1 className="text-secondColor text-lg font-medium">BNB (BEP20)</h1>
        <span className="flex">
          <input
            type="text"
            onClick={handleInputClick(
              inputRef2,
              "0xCE7de646e7208a4Ef112cb6ed5038FA6cC6b12e3"
            )}
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
      <div className="bg-[#2f3542] hidden lg:block cursor-pointer drop-shadow-md space-y-3 p-10 rounded-sm col-span-2 lg:col-span-2">
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
      </div>
    </>
  );
};

export default Deposit;
