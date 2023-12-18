import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { FaRegUser } from "react-icons/fa";
import { TbMoneybag } from "react-icons/tb";
import { Link } from "react-router-dom";
import useAxiosPublic from "../Hooks/useAxiosPublic";
const Footer = () => {
  const axiosPublic = useAxiosPublic()
  const [totoalUSer ,setTotalUser] = useState(0)
  useEffect(()=>{
    axiosPublic.get('/get-total-user').then(res=> setTotalUser(res.data))
  },[axiosPublic])



  return (
    <div className="bg-[#131a22]">
      <footer className="px-4 divide-y max-w-screen-2xl text-white mx-auto">
        <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
          <div className="lg:w-1/3">
            <p className="flex justify-center space-x-3 lg:justify-start">
              <div className="flex  items-center justify-center">
                <img
                  src="https://i.postimg.cc/rsDP8skz/Invo-Trust-03.png"
                  alt=""
                  className="h-9 object-fill"
                />
              </div>
            
            </p>
            <p className="py-3 text-sm md:w-2/3 lg:mx-0 lg:text-left text-center md:mx-auto text-secondColor">
              InvoTrust: Where Your Financial Future Finds Unwavering Confidence
              and Your Money Discovers a Secure Path to Prosperity.
            </p>
          </div>
          <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
            <div className="space-y-3">
              <h3 className="tracki uppercase dark:text-gray-50">Product</h3>
              <ul className="space-y-1 text-secondColor">
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Features
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Integrations
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Pricing
                  </a>
                </li>
                <li>
                  <Link to={"About"} rel="noopener noreferrer" href="#">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="tracki uppercase dark:text-gray-50">Company</h3>
              <ul className="space-y-1 text-secondColor">
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Privacy
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="uppercase ">Developers</h3>
              <ul className="space-y-1 text-secondColor">
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Public API
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Documentation
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Guides
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <div className="uppercase dark:text-gray-50 tracking-widest">
                Until Now
              </div>
              <div className="flex justify-start space-x-3">
                <div className="space-y-5">
                  <div className="flex gap-3 items-center">
                    <FaRegUser className="text-3xl text-mainColor"></FaRegUser>
                    <span className="flex flex-col">
                      <p className="text-xl">
                        <CountUp start={1875} end={19490+totoalUSer.totalUser} duration={2.75}>
                          {({ countUpRef, start }) => (
                            <div>
                              <span ref={countUpRef} />
                              <button onClick={start}></button>
                            </div>
                          )}
                        </CountUp>
                      </p>

                      <p className="text-secondColor md:text-base text-xs">
                        Total Member
                      </p>
                    </span>
                  </div>

                  <div className="flex gap-3 items-center">
                    <TbMoneybag className="text-3xl text-mainColor"></TbMoneybag>
                    <span className="flex flex-col">
                      <p className="text-xl">
                        <CountUp start={1375.039} end={62360} duration={2.75}>
                          {({ countUpRef, start }) => (
                            <div>
                              <span ref={countUpRef} />
                              <button onClick={start}></button>
                            </div>
                          )}
                        </CountUp>
                      </p>
                      <p className="text-secondColor md:text-base text-xs">
                        Total Deposit
                      </p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-6 text-sm text-center dark:text-gray-400">
          © 2019 InvoTrust Co. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
