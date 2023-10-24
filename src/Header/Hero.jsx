const Hero = () => {
  return (
    <div className="bg-black ">
      <div className="min-h-screen  max-w-screen-2xl mx-auto">
        <div className="flex py-20 items-center justify-between gap-10 flex-col lg:flex-row-reverse">
         <div className="flex md:gap-6">
          <img
            src="http://advanture.icu/tradex/wp-content/uploads/sites/39/2023/08/Half-Mobile-2-606x1024.png"
            className="max-w-xs lg:w-auto w-1/3 mx-auto rounded-lg shadow-2xl"
          />
           <img
            src="https://i.ibb.co/Lx922TY/Screenshot-2023-10-25-031822.png"
            className="max-w-xs lg:w-auto w-1/3 mx-auto rounded-lg shadow-2xl"
          />
         </div>
          <div className="px-4 space-y-3">
            <h1 className="lg:text-7xl md:text-5xl text-3xl font-semibold text-white md:max-w-2xl">
              Supercharge your trading journey with <span className="text-mainColor">Trade.p</span>
            </h1>
            <p className="py-6 font-semibold text-white md:max-w-xl">
              Trade on Bitcoin, Gold, Oil, Apple, Tesla, crude oil and 6,400+
              other <span className="text-mainColor">world-renowned markets.</span>
            </p>
            <button
            type="button"
            className="bg-mainColor normal-case text-sm md:text-base p-2 px-3 md:px-6 md:py-3 rounded mr-2 hover:bg-mainColor border-none font-bold "
          >
            Get started
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
