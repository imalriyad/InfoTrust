/* eslint-disable react/prop-types */

import Table from "./Table";

const DepoWithdraw = ({transections }) => {


  return (
    <div className="bg-black py-10">
      <div className="overflow-x-auto mx-auto max-w-screen-xl lg:px-0 px-4">
        <table className="table table-pin-rows border border-mainColor">
          <thead>
            <tr className="text-center bg-black">
              <th className="md:text-base text-mainColor  border border-mainColor">
                No
              </th>
              <th className="md:text-base text-mainColor ">Name</th>
              <th className="md:text-base text-mainColor border border-mainColor">
                Amount
              </th>
              <th className="md:text-base text-mainColor">Deposit Date</th>
              <th className="md:text-base text-mainColor border border-mainColor">
               {transections[0]?.states} time
              </th>
            </tr>
          </thead>
          <tbody>
            {transections?.map((investor) => (
              <Table key={investor.id} investor={investor}></Table>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DepoWithdraw;
