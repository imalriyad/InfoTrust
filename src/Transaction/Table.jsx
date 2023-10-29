/* eslint-disable react/prop-types */


const Table = ({investor}) => {
    const {name,amount,img,date,time,location,id}=investor
    return (
        <>
            <tr className="text-center text-white">
                <td>
                <h1 className=" md:text-base text-xs">{id}</h1>
                </td>
        <td className="border border-mainColor px-2 ">
          <div className="flex md:pl-4 text-left items-start space-x-3 ">
            <div className="avatar">
              <div className="rounded w-14 h-14">
                <img src={img} alt="Dp" />
              </div>
            </div>
            <div>
     
            <h1 className="text-left md:text-base text-xs">{name}</h1>
            <h1 className="font-light text-left md:block hidden text-xs">{location}</h1>
           
            </div>
          </div>
        </td >
        <td className="border border-mainColor p-0 px-2">
        <h1 className="md:text-base text-xs">${amount}</h1>
        </td>
        <td className="border border-mainColor p-0 px-2">
             <h1 className=" md:text-base text-xs">{date}</h1>
        </td>
        <td className="border border-mainColor p-0 px-2">
             <h1 className=" md:text-base text-xs">{time}</h1>
        </td>
        
      </tr>
        </>
    );
};

export default Table;