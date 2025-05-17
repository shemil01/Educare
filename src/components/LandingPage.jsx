"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";

const LandingPage = () => {
  const BannerText = [
    {
      id: 1,
      title1: "Personalized One-to-One ",
      title2: "Tutoring at Our Center",
    },
    {
      id: 2,
      title1: "Individual Tuition",
      title2: "Tutoring at Our Center",
    },
    {
      id: 3,
      title1: "Demo Example",
      title2: "Tutoring at Our Center",
    },
  ];
  const brands = [
    {
      img: "/pearson-logo1.png",
    },
    {
      img: "/pearson-logo2.png",
    },
    {
      img: "/pearson-logo3.png",
    },
    {
      img: "/pearson-logo2.png",
    },
  ];
  return (
    <div className="custom-font bg-white text-black relative min-h-screen py-10 md:px-[96px] px-5 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/banner-bg.png"
          alt="Background Image"
          fill
          className="object-cover opacity-10"
        />
      </div>

      <div className="z-10 relative flex flex-col justify-center top-24">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          loop
          className="w-full"
        >
          {BannerText.map((title) => (
            <SwiperSlide key={title.id}>
              <div className="gap-2 text-[#8A1538] p-4 pt-10 font-extrabold text-center">
                <h1 className="text-[36px] md:text-[67px] leading-tight">
                  {title.title1}
                </h1>
                <p className="text-[22px] md:text-[32px] mt-4 font-semibold">
                  {title.title2}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-between items-center relative z-10 flex-col md:flex-row md:bottom-[80px]">
          <motion.div
            className="hidden md:block"
            animate={{ y: [0, -20, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src="/hero-1.png"
              alt="Hero Left"
              width={300}
              height={300}
              className="object-contain"
            />
          </motion.div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="relative inline-block">
              <span className="hidden md:block bg-[#EBC48B] absolute  px-6 py-3 w-full h-full  rounded-xl"></span>
              <span className="bg-[#8A1538] text-white relative z-10 px-6 py-3  rounded-xl hover:rotate-0 md:-rotate-4 flex justify-between items-center">
                Book a Free Demo Class <GoArrowUpRight />
              </span>
            </div>

            <p className="text-[#8A1538] mt-12 text-lg md:text-xl font-semibold">
              Curriculums we offer:
            </p>

            <motion.div
              className="    overflow-hidden max-w-sm w-full"
              animate={{ x: ["0%", "-100%"] }}
              transition={{
                repeat: Infinity,
                duration: 20,
                ease: "linear",
              }}
            >
              <div className="flex items-center gap-10 ">
                {[...brands, ...brands].map((logo, index) => (
                  <Image
                    key={index}
                    src={logo.img}
                    alt={`Brand ${index}`}
                    width={70}
                    height={70}
                    className="object-contain"
                  />
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            className="hidden md:block"
            animate={{ y: [0, 20, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src="/hero-2.png"
              alt="Hero Right"
              width={300}
              height={300}
              className="object-contain"
            />
          </motion.div>

          <div className="flex md:hidden mt-10  justify-center gap-10">
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="/hero-1.png"
                alt="Hero Left Mobile"
                width={250}
                height={250}
                className="object-contain"
              />
            </motion.div>
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="/hero-2.png"
                alt="Hero Right Mobile"
                width={250}
                height={250}
                className="object-contain "
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
