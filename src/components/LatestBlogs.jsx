"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaArrowRight } from "react-icons/fa6";

const blogs = [
  {
    img: "/blog/blog-1.jpg",
    title: "Top tips for effective home tutoring",
    desc: "Share practical advice on how students can make the most out of tutoring sessions.",
  },
  {
    img: "/blog/blog-2.jpg",
    title: "Building a productive study environment",
    desc: "Share practical advice on how students can make the most out of tutoring sessions.",
  },
  {
    img: "/blog/blog-3.jpg",
    title: "5 Skills every great tutor should have",
    desc: "Outline essential skills for tutors, such as patience, adaptability, subject knowledge.",
  },
  {
    img: "/blog/blog-4.jpg",
    title: "Getting the best individual tuition ",
    desc: "Share practical advice on how students can make the most out of tutoring sessions. ",
  },
  {
    img: "/blog/blog-3.jpg",
    title: "5 Skills every great tutor should have",
    desc: "Outline essential skills for tutors, such as patience, adaptability, subject knowledge.",
  },
];

const LatestBlogs = () => {
  return (
    <div className="bg-[#F4F4F4] lg:gap-20 gap-10 md:py-40 md:px-24 px-6 py-10 lg:px-20 lg:py-24 xl:px-32 custom-font">
      <div className=" text-black md:gap-4 md:space-y-5">
        <h2 className="text-[32px] sm:text-[40px] md:text-[48px] leading-[40px] sm:leading-[44px] md:leading-[48px] font-[500] ">
          Our Latest Blog Posts{" "}
        </h2>

        <div className="py-10 gap-10 sm:gap-12 md:gap-16 lg:gap-20">
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
            <section className=" gap-6 grid grid-cols-1  md:grid-cols-4">
              {blogs.map((blog, index) => (
                <SwiperSlide key={index}>
                  <div className="gap-6 group">
                    <div className="relative overflow-hidden rounded-xl">
                      <Image
                        src={blog.img}
                        alt={blog.title}
                        width={379}
                        height={300}
                        className="rounded-md md:object-cover md:h-64 md:w-full transition-transform group-hover:scale-110 duration-500 "
                      />
                    </div>
                    <div className="py-4">
                      <h3 className="  text-black text-lg sm:text-xl leading-[28px] sm:leading-[30px]">
                        {blog.title}
                      </h3>
                      <p>{blog.desc}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </section>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default LatestBlogs;
