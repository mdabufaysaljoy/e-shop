import React from "react";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import DarkMode from "./DarkMode";

const MenuLinks = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Shop",
    link: "/#shop",
  },
  {
    id: 3,
    name: "About",
    link: "/#about",
  },
  {
    id: 4,
    name: "Blogs",
    link: "/#blog",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#",
  },
];

const Navbar = ({ handleOrderPopup }) => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40 py-4 shadow-sm">
      <div className="container flex justify-between items-center gap-4">
        {/* logo and links section  */}
        <div className="flex items-center gap-4">
          <a
            href=""
            className="text-primary font-bold tracking-widest text-2xl uppercase sm:text-3xl font-mono"
          >
            Eshop
          </a>
          {/* menu items */}
          <div className="hidden lg:block">
            <ul className="flex items-center gap-4">
              {MenuLinks.map((data) => (
                <li key={data.id}>
                  <a
                    href={data.link}
                    className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200"
                  >
                    {data.name}
                  </a>
                </li>
              ))}
              {/* Drop down */}
              <li className="relative cursor-pointer group">
                <a
                  href=""
                  className="flex items-center gap-1 px-4 py-2 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200"
                >
                  Quick Links
                  <span>
                    <FaCaretDown className="group-hover:rotate-180 duration-300 delay-75" />
                  </span>
                </a>
                {/* dropdown links */}
                <div className="absolute z-[999] hidden group-hover:block w-[200px] rounded-md bg-white dark:bg-gray-900 p-2 text-black dark:text-white shadow-md duration-200 delay-75">
                  <ul className="space-y-2">
                    {DropdownLinks.map((data) => (
                      <li key={data.id}>
                        <a
                          href={data.link}
                          className="text-gray-500 hover:text-black dark:hover:text-white duration-200 hover:bg-primary/20 inline-block w-full rounded-md p-2 text-nowrap font-semibold"
                        >
                          {data.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* navbar right section  */}
        <div className="flex justify-between items-center gap-4">
          {/* search bar section  */}
          <div className="relative group hidden sm:block">
            <input type="text" placeholder="Search" className="search-bar" id="search" />
            <label htmlFor="search">
              <IoMdSearch className="text-xl text-gray-600 group-hover:text-primary duration-200 dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-2 " />
            </label>
          </div>
          {/* order button section  */}
          <button className="relative p-3" onClick={handleOrderPopup}>
            <FaCartShopping className="text-xl text-gray-600  duration-200 dark:text-gray-400" />
            <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full flex justify-center items-center text-xs text-white ">
              2
            </span>
          </button>
          {/* dark mode section  */}
          <div>
            <DarkMode />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
