import { useQuery, useQueryClient } from "@tanstack/react-query";
import useAxios from "../../Hooks/useAxios";
import swal from "sweetalert";
import toast from "react-hot-toast";
import { useRef, useState } from "react";

const DepositReq = () => {
  const axios = useAxios();
  const queryClient = useQueryClient();
  const profitRef = useRef(null);
  const [profit, setProfit] = useState(0);
  const { data: depositRequest } = useQuery({
    queryKey: ["getdepositRequest"],
    queryFn: async () => {
      const res = await axios.get(`/get-deposit-request`);
      return res.data;
    },
  });

  const handleDepositRequest = (id, depositAmount, userMail) => {
    const status = { status: "Approved" };

    swal({
      title: "Are you sure?",
      text: "Once Confirm, you will not be able to Change Again!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .patch(`/confirm-deposit-request/${id}`, status)
          .then((res) => {
            if (res.data.modifiedCount > 0) {
              swal("Yay! Deposit Successfully Approved!", {
                icon: "success",
              });

              axios.get(`/get-user?email=${userMail}`).then((res) => {
                console.log(res?.data._id);
                const userId = res?.data._id;
                const updatedTotalBalance =
                  res.data?.totalBalance + depositAmount;
                const updatedTotalSpent = res.data?.totalSpent + depositAmount;
                const updateFeild = { updatedTotalBalance, updatedTotalSpent };
                axios.post(`/deposit/${userId}`, { depositAmount }).then(() => {
                  axios
                    .patch(`/update-user/${userId}`, updateFeild)
                    .then((res) => {
                      console.log(res.data);
                      queryClient.invalidateQueries("getdepositRequest");
                    });
                });
              });
            }
          })
          .catch((error) => {
            // Handle errors from the patch request
            console.error("Error updating deposit:", error);
          });
      }
    });
  };

  // check transaction id
  const handleCheak = (e) => {
    e.preventDefault();
    const textInput1 = e.target.textInput1.value;
    const textInput2 = e.target.textInput2.value;
    if (textInput1 === textInput2) {
      toast.success("Matched✅");
      e.target.reset();
    } else {
      toast.error("Not Matched ⚠️");
    }
  };

  // cheak total profit
  const cheakprofit = () => {
    let baseAmount = profitRef.current.value;
    if (baseAmount >= 20) {
      const percentage = 0.04;
      const totalProfit = baseAmount * percentage;
      setProfit(totalProfit);
      profitRef.current.value = "";
    } else if (baseAmount >= 10) {
      const percentage = 0.035;
      const totalProfit = baseAmount * percentage;
      setProfit(totalProfit);
      profitRef.current.value = "";
    } else {
      const percentage = 0.03;
      const totalProfit = baseAmount * percentage;
      setProfit(totalProfit);
      profitRef.current.value = "";
    }
  };

  return (
    <div className="lg:col-span-8 col-span-full">
      <form
        onSubmit={handleCheak}
        className="flex md:flex-row flex-col items-center gap-3 mx-4 pb-2"
      >
        <input
          type={"text"}
          name="textInput1"
          placeholder="TransectionId"
          className="border-stroke  text-black text-body-color focus:border-mainColor w-full rounded border py-2 px-[14px] text-xs outline-none "
        />
        <input
          type={"text"}
          name="textInput2"
          placeholder="TransectionId"
          className="border-stroke  text-black text-body-color focus:border-mainColor w-full rounded border py-2 px-[14px] text-xs outline-none "
        />
        <button className="btn btn-sm normal-case btn-info">Cheak</button>
      </form>
      <div className="flex flex-row items-center gap-3 mx-4 pb-2">
        <input
          type={"text"}
          ref={profitRef}
          name="textInput2"
          placeholder="Current Balance"
          className="border-stroke  text-black text-body-color focus:border-mainColor w-full rounded border py-2 px-[14px] text-xs outline-none "
        />{" "}
        <button
          onClick={cheakprofit}
          type="submit"
          className="btn btn-sm normal-case btn-info"
        >
          Cheak
        </button>
        <h1 className="text-base font-bold text-black">{profit.toFixed(2)}</h1>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="bg-[#130F40] text-white">
            <tr className="text-left">
              <th className="whitespace-nowrap p-4 font-medium ">No</th>
              <th className="whitespace-nowrap  p-4 font-medium ">Name</th>
              <th className="whitespace-nowrap  p-4 font-medium ">Email</th>
              <th className="whitespace-nowrap p-4 font-medium ">Number</th>
              <th className="whitespace-nowrap p-4 font-medium ">Amount</th>
              <th className="whitespace-nowrap p-4 font-medium ">
                Transection Id
              </th>

              <th className="whitespace-nowrap p-4 font-medium ">Proof</th>
              <th className="whitespace-nowrap p-4 font-medium ">Method</th>
              <th className="whitespace-nowrap text-center p-4 font-medium ">
                Status
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {depositRequest?.map((depoRequest, index) => (
              <tr key={depoRequest._id} className=" font-medium">
                <td className="whitespace-nowrap p-4 font-medium ">
                  {index + 1}
                </td>
                <td className="whitespace-nowrap p-4 font-medium ">
                  {depoRequest?.name}
                </td>
                <td className="whitespace-nowrap p-4 text-gray-700">
                  {depoRequest?.email}
                </td>
                <td className="whitespace-nowrap p-4 text-gray-700">
                  {depoRequest?.number}
                </td>
                <td className="whitespace-nowrap p-4 text-gray-700">
                  ${depoRequest?.depositAmount}
                </td>
                <td className="whitespace-nowrap p-4 text-gray-700">
                  {depoRequest?.transectionId}
                </td>

                <td className="whitespace-nowrap p-4 text-gray-700">
                {depoRequest?.proofImg === ""
                      ? "Crypto"
                      : <a
                      href={depoRequest?.proofImg}
                      className="underline text-blue-500"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                     Proof
                    </a>}                  
                </td>
                <td className="whitespace-nowrap p-4 text-gray-700">
                  {depoRequest?.depositMethod}
                </td>
                <td className="whitespace-nowrap text-center p-4">
                  <button
                    onClick={() =>
                      handleDepositRequest(
                        depoRequest._id,
                        depoRequest?.depositAmount,
                        depoRequest?.email
                      )
                    }
                    className={`btn btn-sm  text-white ${
                      depoRequest.status === "Pending"
                        ? "bg-[#e84118] hover:bg-[#e84118]"
                        : "bg-[#44bd32] hover:bg-[#44bd32]"
                    }`}
                  >
                    {depoRequest?.status}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DepositReq;
