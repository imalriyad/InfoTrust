import { useLocation } from "react-router-dom";
import useRecentReq from "../../Hooks/useRecentReq";

const LatestDepoWithdraw = () => {
  const [withdrawreq, deporeq] = useRecentReq();
  const { pathname } = useLocation();

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-xs lg:table-lg">
          {/* head */}
          <thead>
            <tr>
              <th>Date</th>
              <th>Amount</th>
              <th>Method</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {pathname === "/Dashboard/Withdraw"
              ? withdrawreq?.map((request) => (
                  <tr key={request._id}>
                    <td>{request?.DateTime.split(",")[0]}</td>
                    <td>{request?.withdrawalAmount}</td>
                    <td>{request?.withdrawalMethod.split(" ")[0]}</td>
                    <td
                      className={`btn btn-sm  text-white ${
                        request?.status === "Pending"
                          ? "bg-[#e84118] hover:bg-[#e84118]"
                          : "bg-[#44bd32] hover:bg-[#44bd32]"
                      }`}
                    >
                      {request?.status}
                    </td>
                  </tr>
                ))
              : deporeq?.map((request) => (
                  <tr key={request._id}>
                    <td>{request?.DateTime?.split(",")[0]}</td>
                    <td>{request?.depositAmount}</td>
                    <td>{request?.depositMethod?.split(" ")[0]}</td>
                    <td className={`btn btn-sm  text-white ${
                        request?.status === "Pending"
                          ? "bg-[#e84118] hover:bg-[#e84118]"
                          : "bg-[#44bd32] hover:bg-[#44bd32]"
                      }`}>
                      {request?.status}
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LatestDepoWithdraw;
