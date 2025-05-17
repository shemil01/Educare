"use client";
import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

const SubjectWeTeach = () => {
  const cards = useMemo(
    () => [
      {
        img: "/subject-icon.png",
        title: "Maths",
      },

      {
        img: "/subject-icon.png",
        title: "Physics",
      },
      {
        img: "/subject-icon.png",
        title: "Chemistry",
      },
      {
        img: "/subject-icon.png",
        title: "Biology",
      },
      {
        img: "/subject-icon.png",
        title: "Computer Science",
      },
      {
        img: "/subject-icon.png",
        title: "English",
      },
      {
        img: "/subject-icon.png",
        title: "Biology",
      },
    ],
    []
  );

  return (
    <div className="md:py-20 py-10  md:px-28 bg-white text-black gap-20 overflow-x-hidden manrope-font">
      <div className="gap-[40px] flex flex-col max-sm:px-4">
        <div className="gap-[16px] md:px-24 px-10 flex flex-col items-center justify-center">
          <h3 className="gap-[8px] leading-[48px] font-Poppins font-[500px] text-[48px] text-center">
            Subjects We <span className="font-bold"> Teach</span>{" "}
          </h3>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 5 },
          }}
          className="w-full"
        >
          {cards?.map((card, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center bg-[#FDF1E4] p-4 rounded-xl w-full max-w-[90%] md:max-w-64 shadow-sm mx-auto">
                <div className=" rounded-lg p-3 w-full h-20 flex justify-center items-center">
                  <Image
                    src={card.img}
                    alt="Math Icons"
                    width={250}
                    height={250}
                    className="object-contain"
                  />
                </div>

                <p className="mt-2 text-[#841539] max-sm:bottom-0 max-sm:pt-8 text-sm font-medium text-center break-words">
                  {card.title}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SubjectWeTeach;
