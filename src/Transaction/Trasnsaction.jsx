import { useEffect, useState } from "react";
import DepoWithdraw from "./DepoWithdraw";
const Trasnsaction = () => {
  const [isDeposit, setDeposit] = useState(false);
  const [isWithdraw, setWithdraw] = useState(false);
  const [transections, setTransections] = useState([]);
  useEffect(() => {
    fetch("deposit.json")
      .then((res) => res.json())
      .then((data) => setTransections(data));
  }, [isDeposit]);

  useEffect(() => {
    fetch("withdraw.json")
      .then((res) => res.json())
      .then((data) => setTransections(data));
  }, [isWithdraw]);

  const handledepositBtnBg = () => {
    const depoBtn = document.getElementById("depoButton");
    const withdrawButton = document.getElementById("withdrawButton");
    depoBtn.style.backgroundColor = "#DAF985";
    withdrawButton.style.backgroundColor = "white";
  };
  const handleWithdrawBtnBg = () => {
    const withdrawButton = document.getElementById("withdrawButton");
    const depoBtn = document.getElementById("depoButton");
    withdrawButton.style.backgroundColor = "#DAF985";
    depoBtn.style.backgroundColor = "white";
  };

  return (
    <div className="bg-black">
      <div className="max-w-screen-2xl mx-auto px-4">
        <div className="md:space-y-7 py-6 space-y-4 text-white max-w-2xl mx-auto">
          {" "}
          <h1 className="font-bold md:text-5xl text-[30px] text-mainColor md:text-center">
            Latest Transaction
          </h1>
          <p className="text-sm md:text-base md:text-center text-left  text-secondColor">
            Our Latest Transaction: Stay updated with your financial activity.
            Check our table for the most recent deposits and withdrawals in
            real-time
          </p>
        </div>
        <div className="flex gap-4 justify-center py-5">
          <button
            onClick={() => {
              setDeposit(!isDeposit), handledepositBtnBg();
            }}
            id="depoButton"
            className=" btn flex  items-center normal-case text-sm md:text-base p-2 px-4 md:px-6 md:py-3 rounded mr-2  border-none font-bold"
          >
            Deposit
          </button>

          <button
            onClick={() => {
              setWithdraw(!isWithdraw);
              handleWithdrawBtnBg();
            }}
            id="withdrawButton"
            className="btn hover:bg-mainColor bg-mainColor flex items-center normal-case text-sm md:text-base p-2 px-4 md:px-6 md:py-3 rounded mr-2 border-none font-bold"
          >
            Withdraw
          </button>
        </div>
        <DepoWithdraw
          transections={transections}
          isDeposit={isDeposit}
          isWithdraw={isWithdraw}
        ></DepoWithdraw>
      </div>
    </div>
  );
};

export default Trasnsaction;
