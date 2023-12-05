import { updatePassword } from "firebase/auth";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import auth from "../../Firebase/firebase.config";
import { useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";
const Updatemodal = () => {
  const axiosPublic = useAxiosPublic();
  const [isShow, setShow] = useState(false);
  const { user } = useAuth();
  const {
    register,
    // formState: { errors },
    handleSubmit,
  } = useForm();
  
  const modal = document.getElementById("my_modal_3");
  function closeModal() {
    if (modal) {
      modal.close();
    }
  }

  const onSubmit = async (data) => {
    const newPassword = data?.password;
    const confirmPassowrd = data.confirmPassowrd;
    console.log(confirmPassowrd, newPassword);
    if (newPassword !== confirmPassowrd) {
      return toast.error("Passwords do NOT match");
    }
    const currentUser = auth.currentUser;
    updatePassword(currentUser, newPassword)
      .then(async () => {
        const res = await axiosPublic.patch(`/change-password/${user?.email}`, {
          newPassword: newPassword,
        });
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
            modal.close();
          toast.success("Password Successfully Changed 🎉");
        }
      })
      .catch((err) => {
        console.error("Error updating password:", err.message);
        toast.error(`${err.message.slice(17).replace(")", "")}`);
      });
  };

  return (
    <>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-[#130F40]">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            <button
              type="button"
              onClick={closeModal}
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </button>
            <div className="space-y-2 w-full ">
              <div className="relative">
                <span className="text-xs text-secondColor">Passowrd</span>
                <input
                  type={isShow ? "text" : "password"}
                  name="password"
                  {...register("password")}
                  placeholder="Password"
                  className="border-stroke  text-black text-body-color focus:border-mainColor w-full rounded border py-2 px-[14px] text-xs outline-none "
                />
                <div
                  className="cursor-pointer "
                  onClick={() => setShow(!isShow)}
                >
                  {isShow ? (
                    <HiEyeOff className="text-xl text-black  absolute right-3 bottom-2"></HiEyeOff>
                  ) : (
                    <HiEye className="text-xl text-black  absolute right-3 bottom-2"></HiEye>
                  )}
                </div>
              </div>
              <div className="relative ">
                <span className="text-xs text-secondColor">
                  confirmPassowrd
                </span>
                <input
                  type={isShow ? "text" : "password"}
                  name="confirmPassowrd"
                  {...register("confirmPassowrd")}
                  placeholder="Confirm Passowrd"
                  className="border-stroke  text-black text-body-color focus:border-mainColor w-full rounded border py-2 px-[14px] text-xs outline-none "
                />
                <div
                  className="cursor-pointer "
                  onClick={() => setShow(!isShow)}
                >
                  {isShow ? (
                    <HiEyeOff className="text-xl text-black  absolute right-3 bottom-2"></HiEyeOff>
                  ) : (
                    <HiEye className="text-xl text-black  absolute right-3 bottom-2"></HiEye>
                  )}
                </div>
              </div>
              <div className="pt-3">
                <button className="btn btn-sm bg-mainColor hover:bg-mainColor border-none w-full">
                  Change
                </button>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default Updatemodal;
