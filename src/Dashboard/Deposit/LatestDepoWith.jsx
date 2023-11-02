const LatestDepoWithdraw = () => {
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
            {/* row 1 */}
            <tr>
              <td>05-11-2023</td>
              <td>$30</td>
              <td>BSC</td>

              <td className="text-error font-semibold">Pending</td>
            </tr>
            <tr>
              <td>11-11-2023</td>
              <td>$15</td>
              <td>USDT</td>

              <td className="text-success font-semibold">Paid</td>
            </tr>
            <tr>
              <td>01-11-2023</td>
              <td>$10</td>
              <td>TRX</td>

              <td className="text-success font-semibold">Paid</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LatestDepoWithdraw;
