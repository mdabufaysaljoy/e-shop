import React from "react";
import { FaMobileAlt } from "react-icons/fa";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
} from "react-icons/fa6";

const FooterLinks = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "About",
    link: "/#about",
  },
  {
    id: 3,
    name: "Contact",
    link: "/#contact",
  },
  {
    id: 4,
    name: "Blogs",
    link: "/#blog",
  },
];

const Footer = () => {
  return (
    <div className="dark:bg-gray-950">
      <div className="container">
        <div className="grid md:grid-cols-3 pb-20 pt-5">
          {/* company details  */}
          <div className="px-8 py-4">
            <a
              href="#"
              className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-xl md:text-3xl"
            >
              Eshop
            </a>
            <p className="text-gray-600 dark:text-white/70 lg:pr-24 pt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum, dolor
            </p>
            <p className="text-gray-500 mt-4">copy by 🤪 Faysal Joy</p>
            <a
              href="https://www.youtube.com/@faysaljoy"
              className="bg-primary/90 text-white py-2 px-4 mt-4 text-sm rounded-full inline-block"
            >
              Visit my youtube channel
            </a>
          </div>
          {/* footer links  */}
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3 ">
                Important Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data) => {
                  return (
                    <li key={data.id}>
                      <a
                        href={data.link}
                        className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white duration-300"
                      >
                        {data.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            {/* sec col links  */}
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3 ">
                Quick Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data) => {
                  return (
                    <li key={data.id}>
                      <a
                        href={data.link}
                        className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white duration-300"
                      >
                        {data.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            {/* company address  */}
            <div className="py-8 px-4 col-span-2 sm:col-auto">
              <h1 className="text-xl font-bold sm:text-left mb-3 ">Address</h1>
              <div>
                <div className="flex items-center gap-3">
                  <FaLocationArrow className="" />
                  <p>Narsingdi, Dhaka</p>
                </div>
                <div className="flex items-center gap-3">
                  <FaMobileAlt />
                  <p>+880 123 456 789</p>
                </div>
                {/* social links  */}
                <div className="flex items-center gap-3 mt-6 ">
                  <a href="#">
                    <FaInstagram className="text-xl md:text-3xl hover:text-primary duration-200 cursor-pointer " />
                  </a>
                  <a href="#">
                    <FaFacebook className="text-xl md:text-3xl hover:text-blue-500 duration-200 cursor-pointer " />
                  </a>
                  <a href="#">
                    <FaLinkedin className=" text-xl md:text-3xl hover:text-cyan-500 duration-200 cursor-pointer " />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
