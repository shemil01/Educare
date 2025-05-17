"use client";
import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

const MasterInIlts = () => {
  const cards = useMemo(() => [
    {
      img: "/ielts-hero-1.jpg",
      title: "IELTS Preparation ",
      description:
        "Focus on all four sections: Listening, Reading, Writing, and Speaking.",
    },

    {
      img: "/ielts-hero-2.jpg",
      title: "TOEFL Mastery",
      description:
        "Comprehensive coverage of Reading, Listening, Speaking, and Writing sections.",
    },
    {
      img: "/ielts-hero-3.jpg",
      title: "PTE Academic Course",
      description:
        "Time-saving strategies and practice tests with instant feedback.",
    },
    {
      img: "/ielts-hero-4.jpg",
      title: "Cambridge English (CAE)",
      description:
        "Preparation for high-level English skills in Listening, Speaking, Reading, and Writing.",
    },
    {
      img: "/ielts-hero-2.jpg",
      title: "English Grammar",
      description: "Master the building blocks of writing and communication",
    },
  ]);

  return (
    <div className="md:py-20 py-10  md:px-32 bg-white text-black gap-20 overflow-x-hidden manrope-font">
      <div className="gap-[40px] flex flex-col max-sm:px-4">
        <div className="gap-[16px] md:px-24 px-10 flex flex-col items-center justify-center">
          <h3 className="gap-[8px] leading-[48px] font-Poppins font-[500px] text-[48px] text-center">
            Master in IELTS, <span className="font-bold">TOEFL Exams</span>{" "}
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
            1024: { slidesPerView: 4 },
          }}
          className="w-full"
        >
            {cards?.map((card, index) => (
              <SwiperSlide key={index} className="flex justify-center">
                <div className="relative group w-full max-w-xl md:w-[300px]  cursor-pointer">
                  <div className="absolute inset-0 bg-[#841539] rounded-xl transition-all duration-300 z-0 group-hover:rotate-0 rotate-6 opacity-80 group-hover:opacity-90" />

                  <div className="relative z-10 bg-[#F6EDE6] rounded-xl overflow-hidden p-4 shadow-md transition-all duration-300 group-hover:-rotate-1 transform origin-center">
                    <Image
                      src={card.img}
                      alt={`${card.title} image`}
                      width={400}
                      height={200}
                      className="rounded-lg w-full h-40 object-cover"
                    />
                    <h3 className="text-[#841539] text-lg font-semibold mt-4">
                      {card.title}
                    </h3>
                    <p className="text-sm text-gray-700 mt-1">
                      {card.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MasterInIlts;
