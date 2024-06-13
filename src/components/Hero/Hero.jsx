import React from "react";
import Slider from "react-slick";
import Image1 from "../../assets/hero/headphone.png";
import Image2 from "../../assets/category/vr.png";
import Image3 from "../../assets/category/macbook.png";
import Button from "../Shared/Button";
const HeroData = [
  {
    id: 1,
    img: Image1,
    subtitle: "Beats Solo",
    title: "Wireless",
    title2: "Headphone",
  },
  {
    id: 2,
    img: Image2,
    subtitle: "Beats Solo",
    title: "Wireless",
    title2: "Virtual",
  },
  {
    id: 1,
    img: Image3,
    subtitle: "Beats Solo",
    title: "Branded",
    title2: "Laptops",
  },
];

const Hero = ({ handleOrderPopup }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocuse: true,
  };
  return (
    <div className="container">
      <div className="overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] flex justify-center items-center hero-bg-color">
        <div className="container pb-8 sm:pb-0 ">
          {/* hero section  */}
          <Slider {...settings}>
            {HeroData.map((data) => {
              return (
                <div key={data.id}>
                  <div className="grid grid-cols-1 sm:grid-cols-2">
                    {/* text conent section  */}
                    <div className="flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left  order-2 sm:order-1 z-10">
                      <h1
                        data-aos="zoom-out"
                        data-aos-duration="500"
                        data-aos-once="true"
                        className="text-2xl sm:text-6xl lg:text-2xl font-bold"
                      >
                        {data.subtitle}
                      </h1>
                      <h1
                        data-aos="zoom-out"
                        data-aos-duration="500"
                        data-aos-once="true"
                        className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                      >
                        {data.title}
                      </h1>
                      <h1
                        data-aos="zoom-out"
                        data-aos-duration="500"
                        data-aos-once="true"
                        className="text-5xl uppercase text-white sm:text-[80px] lg:text-[100px] xl:text-[150px] font-bold"
                      >
                        {data.title2}
                      </h1>
                      <div
                        data-aos="fade-up"
                        data-aos-offset = "0"
                        data-aos-duration="500"
                        data-aos-delay="300"
                      >
                        <Button
                          handler={handleOrderPopup}
                          bgColor="bg-primary"
                          textColor="text-white"
                          text="Shop Now"
                        />
                      </div>
                    </div>
                    {/* image section  */}
                    <div className="order-1 sm:order-2">
                      <div data-aos="zoom-in" data-aos-once="true" className="relative z-10">
                        <img
                          src={data.img}
                          alt=""
                          className="w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] sm:scalse-105 lg:scalse-110 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,0.4)] relative z-20"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hero;
