/* eslint-disable react/prop-types */

import Table from "./Table";

const DepoWithdraw = ({transections }) => {


  return (
    <div className="bg-black py-10 ">
      <div className="overflow-x-auto mx-auto max-w-2xl lg:px-0 ">
        <table className="table table-pin-rows">
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
