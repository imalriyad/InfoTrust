import Pricing from "../Components/Pricing";


const Packages = () => {
    return (
        <div className="bg-black ">
               <div className="md:space-y-7 px-4 py-5 space-y-4 text-white max-w-2xl mx-auto">
            {" "}
            <h1 className="font-bold md:text-5xl text-[32px]  text-mainColor md:text-center">
              Our Packages
            </h1>
            <p className="text-sm md:text-base md:text-center text-left  text-secondColor">
            From tailored portfolios to strategic financial planning, we offer a suite of solutions to empower your financial success. Explore the possibilities and unlock your financial potential with our services.
            </p>
          </div>
          <Pricing></Pricing>
        </div>
    );
};

export default Packages;