"use client";
import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";

const WeOffer = () => {
  const cards = useMemo(
    () => [
      {
        img: "/kid-1.png",
        title: "English Grammar",
        description: "Master the building blocks of writing and communication",
        icon: "/trading.png",
      },

      {
        img: "/kid-2.png",
        title: "Craft Classes",
        description:
          "Unleash creativity with hands-on projects and artistic fun.",
        icon: "/it-solution.png",
      },
      {
        img: "/kid-3.png",
        title: "Art and Painting",
        description: "Express yourself through colors, sketches, and designs",
        icon: "/it-solution.png",
      },
      {
        img: "/kid-1.png",
        title: "English Grammar",
        description: "Master the building blocks of writing and communication",
        icon: "/trading.png",
      },
    ],
    []
  );

  return (
    <div className="md:py-20 py-10  md:px-32 bg-white text-black gap-20 overflow-x-hidden manrope-font">
      <div className="gap-[40px] flex flex-col max-sm:px-4">
        <div className="gap-[16px] md:px-24 px-10 flex flex-col items-center justify-center">
          <h3 className="gap-[8px] leading-[48px] font-Poppins font-[500px] text-[48px] text-center">
            Programs we offer <span className="font-bold">for Kids</span>{" "}
          </h3>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-16 gap-5">
            {cards?.map((card, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col md:flex-row justify-between items-center bg-[#FFF3E1] rounded-2xl p-6 md:p-8 shadow-md w-full max-w-xl">
                  <div className="flex-1 mb-4 md:mb-0">
                    <h3 className="text-lg md:text-xl font-semibold text-[#5B2C2C] mb-2">
                      {card.title}
                    </h3>
                    <p className="text-sm text-[#5B2C2C] mb-4">
                      {card.description}{" "}
                    </p>
                    <div className="relative inline-block">
                      <span className="bg-[#EBC48B] absolute px-5 py-2 w-full h-full rounded-full" />

                      <button className="bg-[#8A1538] text-white relative z-10 py-2 px-5 rounded-full hover:bg-[#6e0e2c] text-sm font-medium flex items-center gap-2 hover:rotate-0 -rotate-4">
                        Read more
                        <span className="ml-1">
                          <GoArrowUpRight />
                        </span>
                      </button>
                    </div>
                  </div>

                  <div className="w-32 h-32 relative">
                    <Image
                      src={card.img}
                      alt={`${card.title} image`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default WeOffer;
