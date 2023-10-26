import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black border-gray-200 dark:bg-gray-900 px-4">
      <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto py-6">
        <a href="#" className="flex items-center">
          <img
            src="https://i.postimg.cc/26H5JtYk/tradex-Cta-logo.png"
            className="h-8 mr-3"
            alt="InvoTrust logo"
          />
          <span className="self-center text-white md:text-2xl font-semibold whitespace-nowrap ">
            InvoTrust
          </span>
        </a>
        <div className="flex md:order-2">
          <button
            type="button"
            className="bg-mainColor normal-case text-sm md:text-base p-2 px-3 md:px-6 md:py-3 rounded mr-2 hover:bg-mainColor border-none font-bold "
          >
            Get started
          </button>
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isMenuOpen ? "block" : "hidden"
          }`}
          id="navbar-cta"
        >
          <ul className="flex menuUl flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-black  ">
           <Link to={'/'}> <li className="block py-2 pl-3 pr-4  text-white hover:text-mainColor font-semibold ">
              Home
            </li></Link>
            <li className="block py-2 pl-3 pr-4 rounded text-white hover:text-mainColor font-semibold ">
              About
            </li>
            <li className="block py-2 pl-3 pr-4 rounded text-white hover:text-mainColor font-semibold ">
              Services
            </li>
            <Link to={'/Contact'} >
              <li className="block py-2 pl-3 pr-4 rounded text-white hover:text-mainColor font-semibold ">Contact</li>
            </Link>
            <Link to={'/Blog'} className="block py-2 pl-3 pr-4 text-white hover:text-mainColor rounded  font-semibold ">
              Blog
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
