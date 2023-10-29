import { useNavigate } from "react-router-dom";
import TrustedBy from "./TrustedBy";
import { MdKeyboardArrowRight } from 'react-icons/md';

const Hero = () => {
  const navigate = useNavigate()
  const goRegistration =()=>{
     navigate('/Registration')
  }
  return (
    <div className="bg-black lg:py-16 md:py-10">
      <div className="lg:h-[75vh] md:h-screen md:py-2 py-10 max-w-screen-2xl mx-auto">
        <div className="flex items-center justify-between gap-10 flex-col lg:flex-row-reverse">
          <div className="flex md:gap-6">
            <img
              src="https://i.postimg.cc/q7knfbRt/Half-Mobile-2-606x1024.png"
              className="max-w-xs lg:w-auto w-1/3 mx-auto rounded-lg shadow-2xl"
            />
            <img
              src="https://i.ibb.co/Lx922TY/Screenshot-2023-10-25-031822.png"
              className="max-w-xs lg:w-auto w-1/3 mx-auto rounded-lg shadow-2xl"
            />
          </div>
          <div className="ml-6 md:space-y-3">
            <h1 className="lg:text-7xl md:text-5xl text-3xl font-semibold text-white md:max-w-2xl">
              Supercharge your trading journey with{" "}
              <span className="text-mainColor">InvoTrust</span>
            </h1>
            <p className="py-6 font-semibold text-white text-xs pr-4 md:text-base md:max-w-xl">
              Trade on Bitcoin, Gold, Oil, Apple, Tesla, crude oil and 6,400+
              other{" "}
              <span className="text-mainColor">world-renowned markets.</span>
            </p>
            <button
            onClick={goRegistration}
              type="button"
              className=" translate-y-0 active:translate-y-1 active:duration-300 bg-mainColor normal-case text-sm md:text-base p-2 px-3 md:px-6 md:py-3 rounded mr-2 hover:bg-mainColor border-none font-bold flex items-center gap-0"
            >
              Get started <MdKeyboardArrowRight className="text-xl lg:block hidden"></MdKeyboardArrowRight>
            </button>
          </div>
        </div>
      </div>
      <TrustedBy></TrustedBy>
    </div>
  );
};

export default Hero;
