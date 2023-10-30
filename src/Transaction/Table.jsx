/* eslint-disable react/prop-types */

const Table = ({ investor }) => {
  const { name, amount, img,  time, } = investor;
  return (
    <>
      <tr className="text-center text-white border-mainColor">
        <td className="p-3 ">
          <div className="flex md:pl-4 text-left items-start space-x-4 ">
            <div className="avatar">
              <div className="rounded-full w-10 h-10">
                <img src={img} alt="Dp" />
              </div>
            </div>
            <div>
              <h1 className="text-left md:text-base text-sm">{name}</h1>
              <h1 className="font-light text-left text-xs">
                {time}
              </h1>
            </div>
          </div>
        </td>
        
        <td className="p-3 ">
          <h1 className="md:text-base text-sm font-medium">${amount}</h1>
        </td>
      </tr>
    </>
  );
};

export default Table;
