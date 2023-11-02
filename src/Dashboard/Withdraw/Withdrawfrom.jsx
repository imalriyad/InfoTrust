import { useState } from "react";
const Withdrawfrom = () => {
  const [selected, setSelected] = useState(null);
  const handleWithdrawForm = (e) => {
    e.preventDefault();
    const from = e.target;
    const name = from.name.value;
    const email = from.email.value;
    const number = from.number.value;
    const WithdrawAddress = from.address.value;
    const withdrawalAmount = from.amount.value;
    const requestType = 'Withdraw'
    const withdrawalMethod = selected;
    const currentDate = new Date();
    const DateTime = currentDate.toLocaleString();
    const withdrawalRequest = {
      name,
      email,
      number,
      withdrawalAmount,
      WithdrawAddress,
      withdrawalMethod,
      DateTime,
      requestType
    };
    console.log(withdrawalRequest);
  };
  const handleSelect = (e) => {
    const withdrawalMethod = e.target.value;
    setSelected(withdrawalMethod);
  };



  return (
    <div className="py-5">
      <form
        onSubmit={handleWithdrawForm}
        className="grid grid-cols-2 md:gap-6 gap-3"
      >
        <div className="mb-6 flex flex-col">
          <span className="font-semibold text-secondColor md:text-base text-xs">
            Name
          </span>
          <input
            type="text"
            placeholder="Name"
            name="name"
            required
            className="border-stroke mt-2 text-black text-body-color focus:border-mainColor w-full rounded border py-3 px-[14px] md:text-sm text-xs outline-none "
          />
        </div>
        <div className="mb-6 flex flex-col">
          <span className="font-semibold text-secondColor md:text-base text-xs">
            Email
          </span>
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            required
            className="border-stroke mt-2 md:text-sm text-xs text-black text-body-color focus:border-mainColor w-full rounded border py-3 px-[14px]  outline-none "
          />
        </div>

        <div className="mb-4 flex flex-col">
          <span className="font-semibold text-secondColor md:text-base text-xs">
            Mobile number
          </span>
          <input
            type="number"
            placeholder="Mobile number"
            name="number"
            required
            className="border-stroke mt-2  text-black text-body-color focus:border-mainColor w-full rounded border py-3 px-[14px] md:text-sm text-xs outline-none "
          />
        </div>
        <div className="mb-4 flex flex-col">
          <span className="font-semibold text-secondColor md:text-base text-xs">
            Withdraw Address
          </span>
          <input
            type="text"
            placeholder="Withdraw Address"
            name="address"
            required
            className="border-stroke mt-2  text-black text-body-color focus:border-mainColor w-full rounded border py-3 px-[14px] md:text-sm text-xs outline-none "
          />
        </div>
        <div className="mb-4 flex flex-col">
          <span className="font-semibold text-secondColor md:text-base text-xs">
            Withdraw Amount
          </span>
          <input
            type="number"
            placeholder="Withdraw Amount"
            name="amount"
            required
            className="border-stroke mt-2 text-black text-body-color focus:border-mainColor w-full rounded border py-3 px-[14px] md:text-sm text-xs outline-none "
          />
        </div>
        <div className="mb-4 flex flex-col">
          <span className="font-semibold text-secondColor md:text-base text-xs">
            Withdraw Method
          </span>
          <select
            onChange={handleSelect} value={selected}
            className="border-stroke mt-2 text-black text-body-color focus:border-mainColor w-full rounded border py-3 pl-2 md:text-sm text-xs outline-none cursor-pointer "
          >
            <option disabled selected>
              Withdraw Method
            </option>
            <option>USDT (TRC20)</option>
            <option>BSC (BEP20)</option>
            <option>TRX (TRC20)</option>
          </select>
        </div>

        <div className="col-span-2">
          <button
            type="submit"
            className="w-full btn  rounded bg-mainColor  text-black hover:bg-mainColor"
          >
            Submit Withdraw Request
          </button>
        </div>
      </form>
    </div>
  );
};

export default Withdrawfrom;
