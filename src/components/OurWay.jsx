"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const OurWay = () => {
  const features = [
    {
      title: "Extensive experience",
      description:
        "Every teacher at Educare brings passion to their lessons, making learning enjoyable with engaging activities tailored to inspire and motivate each student.",
    },
    {
      title: "Unwavering commitment to quality",
      description:
        "We focus on creating a supportive environment where individual strengths are recognized, and personalized attention helps students excel.",
    },
    {
      title: "Customization options",
      description:
        "Our approach combines innovative teaching methods with real-world applications, ensuring students not only learn but also understand and apply their knowledge effectively.",
    },
  ];


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  
  const featureVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: i => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: i * 0.2,
      },
    }),
  };


  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3,
      },
    },
  };


  const dotVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
      },
    },
    hover: {
      scale: 1.3,
      color: "#8A1538",
      transition: { duration: 0.2 },
    },
  };

  return (
    <section className="bg-[#F9F7F4] text-black py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto md:pt-15">
           <motion.p 
              className="text-md md:text-5xl text-gray-600 mb-2 leading-relaxed"
              variants={titleVariants}
            >
              <span className="">Our way of <span className="font-bold ">Teaching</span></span>
            </motion.p>
        <div className="flex flex-col lg:flex-row gap-12 items-center">
            
          <motion.div 
            className="lg:w-1/2 w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
         

            <div className="space-y-2">
              {features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="flex gap-4"
                  custom={index}
                  variants={featureVariants}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <div>
                    <span className="text-md font-semibold text-gray-800 flex">
                      <motion.span 
                        className="text-[#8A1538] mr-2 inline-block"
                        variants={dotVariants}
                        whileHover="hover"
                      >
                        ●
                      </motion.span> 
                      <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4 + index * 0.2, duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        {feature.description}
                      </motion.span>
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="lg:w-1/2 w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={imageVariants}
          >
            <motion.div 
              className="relative overflow-hidden shadow-2xl h-96 lg:h-[400px] rounded-lg"
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              <Image
                src={"/teaching-hero.jpg"}
                alt="teaching hero image"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <motion.div
                className="absolute inset-0 bg-black opacity-20 hover:opacity-0 transition-opacity duration-300"
                initial={{ opacity: 0.2 }}
                whileHover={{ opacity: 0 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurWay;