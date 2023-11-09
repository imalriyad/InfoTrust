import { useQuery, useQueryClient } from "@tanstack/react-query";
import useAxios from "../../Hooks/useAxios";
import swal from "sweetalert";

const WithdrawReq = () => {
  const axios = useAxios();
  const queryClient = useQueryClient();
  const { data: withdrawRequest } = useQuery({
    queryKey: ["getwithdrawRequest"],
    queryFn: async () => {
      const res = await axios.get(`/get-withdraw-request`);
      return res.data;
    },
  });

  const handleWithdrawRequest = (id) => {
    const status = { status: "Paid" };

    swal({
      title: "Are you sure?",
      text: "Once Confirm, you will not be able to Change Again!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .patch(`/confirm-withdraw-request/${id}`, status)
          .then((res) => {
            if (res.data.modifiedCount > 0) {
              swal("Yay! Withdraw Successfully Approved!", {
                icon: "success",
              });

              queryClient.invalidateQueries("getwithdrawRequest");
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
              <th className="whitespace-nowrap p-4 font-medium ">
                Name
              </th>
              <th className="whitespace-nowrap p-4 font-medium ">
                Email
              </th>
              <th className="whitespace-nowrap p-4 font-medium ">
                Number
              </th>
              <th className="whitespace-nowrap p-4 font-medium ">
                Amount
              </th>
              <th className="whitespace-nowrap p-4 font-medium ">
                Withdraw Address
              </th>
              <th className="whitespace-nowrap p-4 font-medium ">
                Method
              </th>
              <th className="whitespace-nowrap p-4 font-medium ">
                DateTime
              </th>
              <th className="whitespace-nowrap p-4 font-medium ">
                Method
              </th>
              <th className="whitespace-nowrap p-4 font-medium ">
                Status
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {withdrawRequest?.map((withdrawRequest) => (
              <tr key={withdrawRequest._id}>
                <td className="whitespace-nowrap p-4 font-medium ">
                  {withdrawRequest?.name}
                </td>
                <td className="whitespace-nowrap p-4 text-gray-700">
                  {withdrawRequest?.email}
                </td>
                <td className="whitespace-nowrap p-4 text-gray-700">
                  {withdrawRequest?.number}
                </td>
                <td className="whitespace-nowrap p-4 text-gray-700">
                  ${withdrawRequest?.withdrawalAmount}
                </td>
                <td className="whitespace-nowrap p-4 text-gray-700">
                  {withdrawRequest?.WithdrawAddress}
                </td>
                <td className="whitespace-nowrap p-4 text-gray-700">
                  {withdrawRequest?.withdrawalMethod}
                </td>
                <td className="whitespace-nowrap p-4 text-gray-700">
                  {withdrawRequest?.DateTime}
                </td>
                <td className="whitespace-nowrap p-4 text-gray-700">
                  {withdrawRequest?.withdrawalMethod}
                </td>
                <td className="whitespace-nowrap p-4">
                  <button
                    onClick={() => handleWithdrawRequest(withdrawRequest._id)}
                    className={`btn btn-sm  text-white ${
                      withdrawRequest?.status === "Pending"
                        ? "bg-[#e84118] hover:bg-[#e84118]"
                        : "bg-[#44bd32] hover:bg-[#44bd32]"
                    }`}
                  >
                    {withdrawRequest?.status}
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

export default WithdrawReq;
