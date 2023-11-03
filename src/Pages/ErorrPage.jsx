/* eslint-disable react/no-unescaped-entities */

import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

const ErorrPage = () => {
  return (
    <div className="bg-black h-screen">
      <section className="flex items-center h-full mx-auto max-w-screen-sm px-4 p-16 text-gray-100">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
            <h2 className="mb-8 font-extrabold text-9xl text-gray-600">
              <span className="sr-only">Error</span>404
            </h2>
            <p className="text-2xl font-semibold md:text-3xl">
              Sorry, we couldn't find this page.
            </p>
            <p className="mt-4 mb-8 text-gray-400">
              But dont worry, you can find plenty of other things on our
              homepage.
            </p>
            <Link to={'/'} className="flex justify-center gap-3 text-sm mx-auto items-center lg:w-6/12 w-10/12  py-3 font-semibold rounded bg-mainColor text-gray-900">
             <AiOutlineArrowLeft className="text-xl"></AiOutlineArrowLeft> Back to homepage
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ErorrPage;
