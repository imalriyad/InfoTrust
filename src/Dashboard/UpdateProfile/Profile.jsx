import useAuth from "../../Hooks/useAuth";
import useUserInfo from "../../Hooks/useUserInfo";
import { FiEdit } from "react-icons/fi";
import "../UpdateProfile/input.css";
import { useForm } from "react-hook-form";
import { useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { updateProfile } from "firebase/auth";
import auth from "../../Firebase/firebase.config";
const photoApiKEY = import.meta.env.VITE_APP_IMG_API_KEY;
const photoApi = `https://api.imgbb.com/1/upload?key=${photoApiKEY}`;
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";
import Updatemodal from "./Updatemodal";
import { useOutletContext } from "react-router-dom";

const Profile = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const userInfo = useUserInfo();
  const [isEdit, setEdit] = useState(false);
  const queryClient = useQueryClient();
  const isOpen = useOutletContext()
  // photo update
  const {
    register,
    // formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    const imageFile = { image: data?.photourl[0] };
    const res = await axiosPublic.post(photoApi, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    const image = res.data?.data?.display_url;

    if (res.data.success) {
      updateProfile(auth.currentUser, {
        photoURL: image,
      })
        .then(() => {
          toast.success("🎉 Profile Successfully Updated!");
          queryClient.invalidateQueries("");
          setEdit(false);
        })
        .catch((err) =>
          toast.error(`${err.message.slice(17).replace(")", "")}`)
        );
    }
  };

  // texts update
  function openModal() {
    const modal = document.getElementById("my_modal_3");
    if (modal) {
      modal.showModal();
    }
  }

  return (

      <div className={`lg:col-span-8  gap-10 md:gap-10 px-4 col-span-full justify-between md:flex md:flex-row flex flex-col-reverse text-start pb-10 ${
        !isOpen ? "block" : "hidden"
      }`}>
      <div className=" text-center overflow-x-hidden">
        <img
          src={
            user?.photoURL
              ? user?.photoURL
              : "https://static.vecteezy.com/system/resources/previews/023/869/582/non_2x/confident-smiling-coach-man-wearing-baseball-cap-semi-flat-character-head-baseball-player-courier-editable-cartoon-avatar-icon-color-spot-illustration-for-web-graphic-design-animation-vector.jpg"
          }
          className="w-[160px] h-[160px] mx-auto  object-cover rounded-full mb-4"
          alt=""
        />
        {!isEdit ? (
          <button
            onClick={() => setEdit(true)}
            className="btn btn-neutral normal-case btn-xs font-medium gap-1"
          >
            Edit<FiEdit></FiEdit>
          </button>
        ) : (
          ""
        )}
        {isEdit ? (
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="file"
              {...register("photourl", { required: true })}
              className="file-input pb-4 w-full max-w-xs"
            />
            <button
              type="submit"
              className="btn w-full normal-case font-medium btn-sm bg-[#130F40] hover:bg-[#130F40] text-mainColor"
            >
              Submit
            </button>
          </form>
        ) : (
          ""
        )}
      </div>
      <div className="md:text-base text-sm space-y-2 bg-[#130F40] p-8 drop-shadow-2xl md:mt-0  rounded-sm text-[#dcdde1] w-full border-mainColor">
        <h1>
          <span className="font-semibold">Name</span> : {user?.displayName}
        </h1>
        <h1>
          <span className="font-semibold">Number</span> : {userInfo?.number}
        </h1>
        <h1>
          <span className="font-semibold">Email</span> : {user?.email}
        </h1>

        <button
          onClick={() => openModal()}
          className="btn normal-case btn-xs font-medium bg-mainColor hover:bg-mainColor gap-1"
        >
          Change Password<FiEdit></FiEdit>
        </button>
        <Updatemodal></Updatemodal>
      </div>
    </div>
    
  );
};

export default Profile;
