const TrustedBy = () => {
  return (

    <section className="pb-10 bg-black">
      <div className="w-full mx-auto">
        <h1 className="text-mainColor md:text-5xl text-[32px] md:mb-14 my-6 text-center font-bold">
          Trusted By{" "}
        </h1>
        <div className="w-full px-4 ">
          <div className="flex flex-wrap lg:gap-10 gap-2 items-center justify-center">
            <a
              href="https://www.binance.com/"
              className="mx-4 flex md:w-[150px] w-[100px] items-center justify-center md:py-2 2xl:w-[200px]"
            >
              <img
                src="https://i.postimg.cc/x1WjJ33C/Logo-01.png
                  "
                alt="image"
                className="w-full h-10 object-cover"
              />
            </a>
            <a
              href="https://latoken.com/"
              className="mx-4 flex md:w-[150px] w-[100px] items-center justify-center md:py-2 2xl:w-[200px]"
            >
              <img
                src="https://i.postimg.cc/8kJSW6sf/Logo-04.png"
                alt="image"
                className="w-full h-10 object-cover"
              />
            </a>
            <a
              href="https://www.coinbase.com/"
              className="mx-4 flex md:w-[150px] w-[100px] items-center justify-center md:py-2 2xl:w-[200px]"
            >
              <img
                src="https://i.postimg.cc/YjK8LV0R/Logo-03.png"
                alt="image"
                className="w-full h-10 object-cover"
              />
            </a>
            <a
              href="https://www.bitfinex.com/"
              className="mx-4 flex md:w-[150px] w-[100px] items-center justify-center md:py-2 2xl:w-[200px]"
            >
              <img
                src="https://i.postimg.cc/T3mMSMnd/Logo-02.png"
                alt="image"
                className="w-full h-10 object-cover"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
