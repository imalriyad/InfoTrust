import { useQuery, useQueryClient } from "@tanstack/react-query";
import useAxios from "../../Hooks/useAxios";
import swal from "sweetalert";

const DepositReq = () => {
  const axios = useAxios();
  const queryClient = useQueryClient();

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
                const userId = res?.data._id;
                const updatedTotalBalance =
                  res.data?.totalBalance + depositAmount;
                const updatedTotalSpent = res.data?.totalSpent + depositAmount;
                const updateFeild = { updatedTotalBalance, updatedTotalSpent };

                axios.patch(`/update-user/${userId}`, updateFeild).then(() => {
                  queryClient.invalidateQueries("getdepositRequest");
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

  return (
    <div className="lg:col-span-8 col-span-full">
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
              <th className="whitespace-nowrap p-4 font-medium ">Method</th>
              <th className="whitespace-nowrap p-4 font-medium ">DateTime</th>
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
                  {depoRequest?.depositMethod}
                </td>
                <td className="whitespace-nowrap p-4 text-gray-700">
                  {depoRequest?.DateTime}
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
