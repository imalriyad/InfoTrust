import { useState } from "react";
import useAxios from "../../Hooks/useAxios";
import swal from "sweetalert";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";

const DepositFrom = () => {
  const [selectedMethod, setSelected] = useState("");

  const axios = useAxios();
  const { user } = useAuth();

  const handleDepositeForm = (e) => {
    e.preventDefault();
    const from = e.target;
    const name = from.name.value;
    const email = from.email.value;
    const number = from.number.value;
    const transectionId = from.transectionId.value;
    const status = "Pending";
    const depositMethod = selectedMethod;
    const depositAmount = parseInt(from.depositAmount.value);
    const DateTime = new Date();
    if (depositAmount === "") {
      toast.error("Please select a valid Deposit Amount");
      return;
    }
    if (depositMethod === "") {
      toast.error("Please select a valid Deposit Method");
      return;
    }

    if (depositAmount < 5) {
      toast.error("Minimum Deposit Amount is $5");
      return;
    }

    const depositRequest = {
      name,
      email,
      number,
      depositAmount,
      transectionId,
      depositMethod,
      DateTime,
      status,
    };

    axios.post("/create-deposit", depositRequest).then((res) => {
      if (res.data.insertedId) {
        swal({
          title: "Congrats!",
          text: "Your deposit request is successful! In 15 to 30 minutes it will be credited to your balance",
          icon: "success",
          button: "Thank you!",
        });
      }
    });
    from.reset();
  };
  const handleSelectMethod = (e) => {
    const depositMethod = e.target.value;
    setSelected(depositMethod);
  };
 
  return (
    <div className="py-5">
      <form
        onSubmit={handleDepositeForm}
        className="grid grid-cols-2 md:gap-6 gap-3"
      >
        <div className="mb-6 flex flex-col">
          <span className="font-semibold text-secondColor md:text-base text-xs">Name</span>
          <input
            type="text"
            placeholder="Name"
            name="name"
            readOnly
            defaultValue={user?.displayName}
            required
            className="border-stroke mt-2 text-black text-body-color focus:border-mainColor w-full rounded border py-3 px-[14px] md:text-sm text-xs outline-none "
          />
        </div>
        <div className="mb-6 flex flex-col">
          <span className="font-semibold text-secondColor md:text-base text-xs">Email</span>
          <input
            type="email"
            defaultValue={user?.email}
            readOnly
            placeholder="Email Address"
            name="email"
            required
            className="border-stroke mt-2 md:text-sm text-xs text-black text-body-color focus:border-mainColor w-full rounded border py-3 px-[14px]  outline-none "
          />
        </div>

        <div className="mb-4 flex flex-col">
          <span className="font-semibold text-secondColor md:text-base text-xs">Mobile number</span>
          <input
            type="number"
            placeholder="Mobile number"
            name="number"
            required
            className="border-stroke mt-2  text-black text-body-color focus:border-mainColor w-full rounded border py-3 px-[14px] md:text-sm text-xs outline-none "
          />
        </div>
        <div className="mb-4 flex flex-col">
          <span className="font-semibold text-secondColor md:text-base text-xs">Transection Id</span>
          <input
            type="text"
            name="transectionId"
            placeholder="Transection Id"
            required
            className="border-stroke mt-2  text-black text-body-color focus:border-mainColor w-full rounded border py-3 px-[14px] md:text-sm text-xs outline-none "
          />
        </div>

        <div className="mb-4 flex flex-col">
          <span className="font-semibold text-secondColor md:text-base text-xs">
            Deposit Amount
          </span>
          <input
            type="text"
            placeholder="Min Deposit $5"
            name="depositAmount"
            required
            className="border-stroke mt-2  text-black text-body-color focus:border-mainColor w-full rounded border py-3 px-[14px] md:text-sm text-xs outline-none "
          />
        </div>

        <div className="mb-4 flex flex-col">
          <span className="font-semibold text-secondColor md:text-base text-xs">Deposit Method</span>
          <select
            onChange={handleSelectMethod}
            value={selectedMethod}
            required
            className="border-stroke mt-2 text-black text-body-color focus:border-mainColor w-full rounded border py-3 pl-2 md:text-sm text-xs outline-none cursor-pointer "
          >
            <option selected>Deposit Method</option>
            <option value={"USDT (TRC20)"}>USDT (TRC20)</option>
            <option value={"BSC (BEP20)"}>BSC (BEP20)</option>
            <option value={"TRX (TRC20)"}>TRX (TRC20)</option>
          </select>
        </div>

        <div className="col-span-2">
          <button
            type="submit"
            className="w-full btn  rounded bg-mainColor  text-black hover:bg-mainColor"
          >
            Submit Deposit Request
          </button>
        </div>
      </form>
    </div>
  );
};

export default DepositFrom;
