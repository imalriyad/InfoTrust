import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import useAxios from "../../Hooks/useAxios";
import swal from "sweetalert";
import useUserInfo from "../../Hooks/useUserInfo";
const Withdrawfrom = () => {
  const { user } = useAuth();
  const [userInfo,] = useUserInfo()

  const axios = useAxios();
  const [selectedMethod, setSelectedMethod] = useState("");
  const handleWithdrawForm = (e) => {
    e.preventDefault();
    const from = e.target;
    const name = from.name.value;
    const email = from.email.value;
    const number = from.number.value;
    const WithdrawAddress = from.address.value;
    const status = "Pending";
    const withdrawalMethod = selectedMethod;
    const withdrawalAmount = parseInt(from.withdrawalAmount.value)
    const DateTime = new Date();
    if(userInfo?.totalBalance < withdrawalAmount){
      toast.error("Insufficent Balance");
      return;
    }
    
    if (withdrawalAmount === "") {
      toast.error("Please select a valid Deposit Amount");
      return;
    }

    if (withdrawalAmount <15) {
      toast.error("Minimum Withdraw Amount is $15");
      return;
    }
    if (withdrawalMethod === "") {
      toast.error("Please select a valid Deposit Method");
      return;
    }
    const withdrawRequest = {
      name,
      email,
      number,
      withdrawalAmount,
      WithdrawAddress,
      withdrawalMethod,
      DateTime,
      status,
    };
    axios.post("/create-withdraw", withdrawRequest).then((res) => {
      if (res.data.insertedId) {
        swal({
          title: "Congrats!",
          text: "Your Withdraw request is successful! It will be transferred to your withdrawal address in 15 to 30 minutes.",
          icon: "success",
          button: "Thank you!",
        });
      }
    });
    from.reset()
  };
  const handleSelectmethod = (e) => {
    const withdrawalMethod = e.target.value;
    setSelectedMethod(withdrawalMethod);
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
            defaultValue={user?.displayName}
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
            defaultValue={user?.email}
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

 {/* Withdraw amount */}
        <div className="mb-4 flex flex-col">
          <span className="font-semibold text-secondColor md:text-base text-xs">
            Withdraw Amount
          </span>
          <input
            type="text"
            placeholder="Withdraw Amount"
            name="withdrawalAmount"
            required
            className="border-stroke mt-2  text-black text-body-color focus:border-mainColor w-full rounded border py-3 px-[14px] md:text-sm text-xs outline-none "
          />
        </div>
       
        <div className="mb-4 flex flex-col">
          <span className="font-semibold text-secondColor md:text-base text-xs">
            Withdraw Method
          </span>

          <select
            onChange={handleSelectmethod}
            value={selectedMethod}
            className="border-stroke mt-2 text-black text-body-color focus:border-mainColor w-full rounded border py-3 pl-2 md:text-sm text-xs outline-none cursor-pointer "
          >
            <option>Withdraw Method</option>
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
            Submit Withdraw Request
          </button>
        </div>
      </form>
    </div>
  );
};

export default Withdrawfrom;
