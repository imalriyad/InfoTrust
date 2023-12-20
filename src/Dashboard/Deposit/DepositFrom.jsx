import { useEffect, useState } from "react";
import useAxios from "../../Hooks/useAxios";
import swal from "sweetalert";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
const photoApiKEY = import.meta.env.VITE_APP_IMG_API_KEY;
const photoApi = `https://api.imgbb.com/1/upload?key=${photoApiKEY}`;

const DepositFrom = () => {
  const [selectedMethod, setSelected] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [proofImg, setProofImg] = useState("");
  const axios = useAxios();
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const handleSelectMethod = (e) => {
    const depositMethod = e.target.value;
    setSelected(depositMethod);
  };

  useEffect(() => {
    console.log("Updated proofImg:", proofImg);
  }, [proofImg]);

  const onSubmit = async (data) => {
    const name = data?.name;
    const email = data?.email;
    const number = data?.number;
    const transectionId = data?.transectionId;
    const depositAddress = data?.depositAddress;
    const status = "Pending";
    const depositMethod = selectedMethod;
    const depositAmount = parseInt(data?.depositAmount);
    const DateTime = new Date();
    const imageFile = { image: data?.photourl[0] };
  
    let updatedProofImg = proofImg; // Initialize with the current proofImg
  
    // Upload image and update proofImg
    if (data.photourl.length > 0) {
      try {
        const res = await axiosPublic.post(photoApi, imageFile, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        updatedProofImg = res.data?.data?.display_url;
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    }
  
    // Rest of your code can now use the updated proofImg
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
      depositAddress,
      transectionId,
      depositMethod,
      DateTime,
      status,
      proofImg: updatedProofImg, // Use the updated proofImg here
    };
  
    console.log(depositRequest);
  
    axios.post("/create-deposit", depositRequest).then((res) => {
      if (res.data.insertedId) {
        swal({
          title: "Congrats!",
          text: "Your deposit request is successful! In 15 to 30 minutes, it will be credited to your balance",
          icon: "success",
          button: "Thank you!",
        });
      }
    });
  
    reset();
  };
  

  return (
    <div className="py-5">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-2 md:gap-6 gap-3"
      >
        <div className="mb-6 flex flex-col">
          <span className="font-semibold text-secondColor md:text-base text-xs">
            Name
          </span>
          <input
            type="text"
            placeholder="Name"
            // name="name"
            {...register("name", { required: true })}
            readOnly
            defaultValue={user?.displayName}
            className="border-stroke mt-2 text-black text-body-color focus:border-mainColor w-full rounded border py-3 px-[14px] md:text-sm text-xs outline-none "
          />{" "}
        </div>
        <div className="mb-6 flex flex-col">
          <span className="font-semibold text-secondColor md:text-base text-xs">
            Email
          </span>
          <input
            type="email"
            defaultValue={user?.email}
            readOnly
            placeholder="Email Address"
            // name="email"
            {...register("email", { required: true })}
            className="border-stroke mt-2 md:text-sm text-xs text-black text-body-color focus:border-mainColor w-full rounded border py-3 px-[14px]  outline-none "
          />
        </div>

        <div className="mb-4 flex flex-col">
          <span className="font-semibold text-secondColor md:text-base text-xs">
            Bkash/Nagad number
          </span>
          <input
            type="number"
            placeholder="Bkash/Nagad number"
            // name="number"
            {...register("number", { required: true })}
            className="border-stroke mt-2  text-black text-body-color focus:border-mainColor w-full rounded border py-3 px-[14px] md:text-sm text-xs outline-none "
          />
          {errors.number?.type === "required" && (
            <p className="text-red-500 text-sm" role="alert">
              Number is required
            </p>
          )}
        </div>
        <div className="mb-4 flex flex-col">
          <span className="font-semibold text-secondColor md:text-base text-xs">
            Transection Id
          </span>
          <input
            type="text"
            // name="transectionId"
            {...register("transectionId", { required: true })}
            placeholder="Transection Id"
            className="border-stroke mt-2  text-black text-body-color focus:border-mainColor w-full rounded border py-3 px-[14px] md:text-sm text-xs outline-none "
          />{" "}
          {errors.transectionId?.type === "required" && (
            <p className="text-red-500 text-sm" role="alert">
              TransectionId is required
            </p>
          )}
        </div>

        <div className="mb-4 flex flex-col">
          <span className="font-semibold text-secondColor md:text-base text-xs">
            Deposit Amount
          </span>
          <input
            type="text"
            placeholder="Min Deposit $5"
            // name="depositAmount"
            {...register("depositAmount", { required: true })}
            className="border-stroke mt-2  text-black text-body-color focus:border-mainColor w-full rounded border py-3 px-[14px] md:text-sm text-xs outline-none "
          />{" "}
          {errors.depositAmount?.type === "required" && (
            <p className="text-red-500 text-sm" role="alert">
              Deposit Amount is required
            </p>
          )}
        </div>

        <div className="mb-4 flex flex-col">
          <span className="font-semibold text-secondColor md:text-base text-xs">
            Deposit Method
          </span>
          <select
            onChange={handleSelectMethod}
            value={selectedMethod}
            className="border-stroke mt-2 text-black text-body-color focus:border-mainColor w-full rounded border py-3 pl-2 md:text-sm text-xs outline-none cursor-pointer "
          >
            <option>Deposit Method</option>
            <option value={"Bkash"}>Bkash</option>
            <option value={"Nagad"}>Nagad</option>
            <option value={"USDT (TRC20)"}>USDT (TRC20)</option>
            <option value={"BSC (BEP20)"}>BSC (BEP20)</option>
            <option value={"TRX (TRC20)"}>TRX (TRC20)</option>
          </select>
        </div>
        <div
          className={`mb-4 flex flex-col ${
            selectedMethod === "Bkash" || selectedMethod === "Nagad"
              ? "hidden"
              : "block"
          }`}
        >
          <span className="font-semibold text-secondColor md:text-base text-xs">
            Deposit Address
          </span>
          <input
            type="text"
            placeholder="Deposit Address"
            {...register("depositAddress")}
            className="border-stroke mt-2  text-black text-body-color focus:border-mainColor w-full rounded border py-3 px-[14px] md:text-sm text-xs outline-none "
          />
        </div>
        <div
          className={`col-span-2 flex flex-col ${
            selectedMethod === "Bkash" || selectedMethod === "Nagad"
              ? "block"
              : "hidden"
          }`}
        >
          <span className="font-semibold mb-2 text-secondColor md:text-base text-xs">
            Transaction Screenshot
          </span>
          <input
            type="file"
            {...register("photourl")}
            className="file-input pb-4 w-full max-w-xs"
          />
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
