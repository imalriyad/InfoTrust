/* eslint-disable react/no-unescaped-entities */
import { FaMedal } from "react-icons/fa";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { GiReceiveMoney, GiWorld } from "react-icons/gi";
import { SiBitcoinsv } from "react-icons/si";
import { BiSupport } from "react-icons/bi";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const WhyChoose = () => {
  return (
    <div className="bg-black ">
      <div className="md:space-y-7 py-10 space-y-4 text-white max-w-2xl mx-auto px-2 ">
        {" "}
        <h1 className="font-bold md:text-5xl text-[32px] px-4 text-mainColor md:text-center">
          Why Choose Us?
        </h1>
        <p className="text-sm md:text-base md:text-center text-left px-4 text-secondColor">
          Why Choose Us? We offer certified expertise, secure transactions,
          profitable outcomes, and dedicated support in a global financial
          landscape. Your success, our priority
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 mx-auto max-w-screen-2xl py-10 gap-10 px-4">
        <div
          data-aos="fade-down-right"
          className="md:p-10 border-mainColor border p-5  text-white space-y-5 rounded-md"
        >
          <FaMedal className="text-4xl text-mainColor"></FaMedal>
          <h1 className="md:text-4xl text-2xl font-font-semibold">
            We're Certified
          </h1>
          <p className=" text-secondColor md:text-base text-sm">
            Our qualifications affirm our expertise and commitment. Trust in our
            certified excellence for dependable service and exceptional products
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
          className="md:p-10 p-8 border-mainColor border text-white space-y-4 rounded-md"
        >
          <IoShieldCheckmarkSharp className="text-4xl text-mainColor"></IoShieldCheckmarkSharp>
          <h1 className="md:text-4xl text-2xl font-font-semibold">
            We're Secure
          </h1>
          <p className=" text-secondColor md:text-base text-sm">
            We Are Secure: Fortifying financial trust. Our ironclad security
            measures shield your assets and data, guaranteeing a safe, resilient
            financial connection.
          </p>
        </div>
        <div
          data-aos="fade-down-right"
          className="md:p-10 p-8 border-mainColor border text-white space-y-4 rounded-md"
        >
          <GiReceiveMoney className="text-4xl text-mainColor"></GiReceiveMoney>
          <h1 className="md:text-4xl text-2xl font-font-semibold">
            We're Profitable
          </h1>
          <p className=" text-secondColor md:text-base text-sm">
            We Are Profitable: Demonstrating our success and sustainability,
            your partnership with us is an investment in prosperity and mutual
            growth.
          </p>
        </div>
        <div
          data-aos="fade-down-right"
          className="md:p-10 p-8 border-mainColor border text-white space-y-4 rounded-md"
        >
          <SiBitcoinsv className="text-4xl text-mainColor"></SiBitcoinsv>
          <h1 className="md:text-4xl text-2xl font-font-semibold">
            We Accept Crypto
          </h1>
          <p className=" text-secondColor md:text-base text-sm">
            Embracing digital finance. Seamlessly transact with
            cryptocurrencies, diversify your options, and experience the future
            of financial flexibility with us.
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
          className="md:p-10 p-8 border-mainColor border text-white space-y-4 rounded-md"
        >
          <BiSupport className="text-4xl text-mainColor"></BiSupport>
          <h1 className="md:text-4xl text-2xl font-font-semibold">
            Excellent Support
          </h1>
          <p className=" text-secondColor md:text-base text-sm">
            Your back in every query. Count on our dedicated team for prompt,
            reliable assistance, making your financial journey worry-free.
          </p>
        </div>
        <div
          data-aos="fade-down-right"
          className="md:p-10 p-8 border-mainColor border text-white space-y-4 rounded-md"
        >
          <GiWorld className="text-4xl text-mainColor"></GiWorld>
          <h1 className="md:text-4xl text-2xl font-font-semibold">
            We're Global
          </h1>
          <p className=" text-secondColor md:text-base text-sm">
            Bridging borders for you. Our worldwide presence ensures access to
            international financial opportunities, making your ambitions truly
            global
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
