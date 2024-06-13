import React from "react";

import {
  FaCarSide,
  FaHeadphonesAlt,
  FaWallet,
  FaCheckCircle,
} from "react-icons/fa";

const ServiceData = [
  {
    id: 1,
    icon: <FaCarSide className="text-4xl md:text-5xl text-primary" />,
    title: "Free shipping",
    description: "Free Shipping On All Order",
  },
  {
    id: 2,
    icon: <FaCheckCircle className="text-4xl md:text-5xl text-primary" />,
    title: "Safe Money",
    description: "30 days money back",
  },
  {
    id: 3,
    icon: <FaWallet className="text-4xl md:text-5xl text-primary" />,
    title: "Secure Payment",
    description: "All payment secure",
  },
  {
    id: 4,
    icon: <FaHeadphonesAlt className="text-4xl md:text-5xl text-primary" />,
    title: "24/7 Support",
    description: "Technical support 24/7",
  },
];

const Services = () => {
  return (
    <div>
      <div className="container my-14 md:my-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8">
          {ServiceData.map((data) => {
              return (
                <div className="flex flex-col gap-4 items-start sm:flex-row">
                  {data.icon}
                  <div>
                    <h1 className="lg:text-xl font-bold">{data.title}</h1>
                    <p className="text-gray-400 text-sm">{data.description}</p>
                  </div>
                </div>
              );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
