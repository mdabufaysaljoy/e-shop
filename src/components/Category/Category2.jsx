import React from "react";
import Image1 from "../../assets/category/gaming.png";
import Image2 from "../../assets/category/vr.png";
import Image3 from "../../assets/category/speaker.png";
import Button from "../Shared/Button";

const Category2 = () => {
  return (
    <div className="py-6">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* first col  */}
          <div
            className={`col-span-auto sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-400/90 to-gray-100 text-white rounded-3xl relative h-[20rem] flex items-end`}
          >
            <div>
              <div className="mb-4 space-y-3">
                <p className="text-gray-400 ">Enjoy</p>
                <p className="text-2xl font-semibold">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 ">
                  Laptop
                </p>
                <Button
                  text="Browse"
                  bgColor="bg-primary"
                  textColor="text-white"
                />
              </div>
            </div>
            <img
              src={Image1}
              alt=""
              className="w-[15.625rem] absolute top-1/2 -translate-y-1/2 -right-0"
            />
          </div>
          {/* second col  */}
          <div
            className={`py-10 pl-5 bg-gradient-to-br from-brandGreen/90 to-brandGreen/70 text-white rounded-3xl relative h-[20rem] flex items-end`}
          >
            <div>
              <div className="mb-4 ">
                <p className="mb-[.125rem] text-white">Enjoy</p>
                <p className="text-2xl font-semibold mb-[.125rem] ">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">
                  Earphone
                </p>
                <Button
                  text="Browse"
                  bgColor="bg-white"
                  textColor="text-brandGreen"
                />
              </div>
            </div>
            <img src={Image2} alt="" className="w-[20rem] absolute bottom-0 " />
          </div>
          {/* third col  */}
          <div
            className={`py-10 pl-5 bg-gradient-to-br from-brandBlue to-brandBlue/90 text-white rounded-3xl relative h-[20rem] flex items-end`}
          >
            <div>
              <div className="mb-4 ">
                <p className="mb-[.125rem] text-gray-400 ">Enjoy</p>
                <p className="text-2xl font-semibold mb-[.125rem] ">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                  Gadget
                </p>
                <Button
                  text="Browse"
                  bgColor="bg-white"
                  textColor="text-brandBlue"
                />
              </div>
            </div>
            <img
              src={Image3}
              alt=""
              className="w-[200px] absolute -right-4 lg:top-[2.5rem] "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category2;
