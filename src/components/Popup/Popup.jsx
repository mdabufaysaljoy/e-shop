import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import Button from "./../Shared/Button";

const Popup = ({ orderPopup, handleOrderPopup }) => {
  return (
    <>
      {orderPopup && (
        <div>
          <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
            <div className="w-[300px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4 dark:bg-gray-900 rounded-lg text-black dark:text-white duration-200">
              {/* header section  */}
              <div className="flex justify-between items-center">
                <h1 className=""> Order Now</h1>
                <div>
                  <IoCloseOutline
                    onClick={handleOrderPopup}
                    className="text-2xl cursor-pointer"
                  />
                </div>
              </div>
              {/* form section  */}
              <div className="mt-4">
                <input type="text" className="form-input" placeholder="Name" />
                <input
                  type="email"
                  className="form-input"
                  placeholder="Email"
                />
                <input
                  type="text"
                  className="form-input"
                  placeholder="Address"
                />
                <div className="flex justify-center">
                  <Button
                    text={"Order Now"}
                    bgColor={"bg-primary"}
                    textColor={"text-white"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
