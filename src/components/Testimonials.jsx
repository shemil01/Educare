"use client";
import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { FaQuoteRight, FaStar } from "react-icons/fa";

const Testimonials = () => {
  const cards = useMemo(() => [
    {
      img: "/testimonial-hero-1.jpg",
      name: "Sarah H ",
      occupation: "Accountant",
      description:
        "Best decision for English tutoring! Educare improved our daughter's skills and instilled confidence. Recent high scores speak volumes. Thank you, Educare!",
    },

    {
      img: "/testimonial-hero-2.png",
      name: "Ahmed K  ",
      occupation: "Engineer",
      description:
        "Educare’s commitment to 1-on-1 learning transformed our son's understanding of science. Recent top scores prove Educare delivers results. Grateful for the positive impact!",
    },
    {
      img: "/testimonial-hero-1.jpg",
      name: "Sarah H ",
      occupation: "Accountant",
      description:
        "Best decision for English tutoring! Educare improved our daughter's skills and instilled confidence. Recent high scores speak volumes. Thank you, Educare!",
    },
    {
      img: "/testimonial-hero-1.jpg",
      name: "Sarah H ",
      occupation: "Accountant",
      description:
        "Best decision for English tutoring! Educare improved our daughter's skills and instilled confidence. Recent high scores speak volumes. Thank you, Educare!",
    },
  ]);

  return (
    <div className="md:py-20 py-10  md:px-32 bg-white text-black gap-20 overflow-x-hidden manrope-font">
      <div className="gap-[40px] flex flex-col max-sm:px-4">
        <div className="gap-[16px] md:px-24 px-10 flex flex-col items-center justify-center">
          <h3 className="gap-[8px] leading-[48px] font-Poppins font-[500px] text-[48px] text-center">
           Hear from our <span className="font-bold">Valuable Parents</span>{" "}
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
            1024: { slidesPerView: 3},
          }}
          className="w-full"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-16 gap-5">
            {cards?.map((card, index) => (
              <SwiperSlide key={index}>
                <div className="relative max-w-sm w-full rounded-xl border border-gray-200 p-6 bg-white shadow-sm">
                  <div className="absolute top-4 right-4 text-[#841539] text-2xl">
                    <FaQuoteRight />
                  </div>

                  <div className="flex items-center gap-3 mb-4">
                    <Image
                      src={card.img}
                      alt={card.name}
                      width={48}
                      height={48}
                      className="rounded-full object-cover border-2 border-white"
                    />
                    <div>
                      <p className="font-semibold text-[#841539]">
                        {card.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        – {card.occupation}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-gray-700 mb-4">
                    {card.description}
                  </p>

                  <div className="flex gap-1 text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
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

export default Testimonials;
