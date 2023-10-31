const Deposit = () => {
  return (
    <>
      <div className="bg-[#2f3542] cursor-pointer drop-shadow-md space-y-3 p-10 rounded-sm col-span-2">
        <img
          src="https://i.postimg.cc/Jhy2yp3M/tether-cryptocurrency.png"
          alt=""
        />
        <h1 className=" text-secondColor text-lg font-medium">Total Balance</h1>
        <h1 className="font-semibold text-white text-3xl">$3140.74</h1>
      </div>
      <div className="bg-[#2f3542] cursor-pointer drop-shadow-md space-y-3 p-10 rounded-sm col-span-2">
        <img
          src="https://i.postimg.cc/9028nV6Q/binance-coin-cryptocurrency.png"
          alt=""
        />
        <h1 className=" text-secondColor text-lg font-medium">Total Balance</h1>
        <h1 className="font-semibold text-white text-3xl">$3140.74</h1>
      </div>
      <div className="bg-[#2f3542] cursor-pointer drop-shadow-md space-y-3 p-10 rounded-sm col-span-2">
        <img
          src="https://s2.coinmarketcap.com/static/img/coins/64x64/1958.png"
          alt="" className="w-[32px] object-cover rounded-full"
        />
        <h1 className=" text-secondColor text-lg font-medium">Total Balance</h1>
        <h1 className="font-semibold text-white text-3xl">$3140.74</h1>
      </div>
    </>
  );
};

export default Deposit;
