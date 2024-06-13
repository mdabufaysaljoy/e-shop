import React from "react";

const ProductCard = ({ data }) => {
  return (
    <div className="mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center">
        {/* card section  */}
        {data.map((item) => {
          return (
            <div
              data-aos="fade-up"
              data-aos-delay={item.aosDelay}
              key={item.id}
            >
              <div className="relative group">
                <img
                  src={item.img}
                  alt=""
                  className="h-[180px] w-[260px] object-cover rounded-md "
                />
                {/* hover button  */}
                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center group-hover:backdrop-blur-sm">
                  <button className="text-white bg-primary px-5 py-2 rounded-full opacity-0 group-hover:opacity-100 duration-200 hover:scale-105">
                    Add to cart
                  </button>
                </div>
              </div>
              <div className="leading-7">
                <h2 className=" font-semibold">{item.title}</h2>
                <p className="font-bold">${item.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductCard;
