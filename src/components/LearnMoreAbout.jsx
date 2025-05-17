"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaYoutube } from "react-icons/fa";

const LearnMoreAbout = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        delay: 0.2,
      },
    },
  };

  const playButtonVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.8,
      },
    },
    hover: {
      scale: 1.1,
      backgroundColor: "rgba(138, 21, 56, 0.9)",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1,
      },
    },
  };

  return (
    <motion.section
      className="py-12 px-4 bg-white text-blacksm:px-6 "
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.div className="text-center mb-6" variants={titleVariants}>
        <h2 className="text-xl font-medium text-black">
          Learn More About{" "}
          <span className="font-semibold text-[#8A1538]">Our Space</span>
        </h2>
      </motion.div>

      <motion.div
        className="relative rounded-2xl overflow-hidden shadow-lg w-full max-w-4xl mx-auto"
        variants={imageVariants}
        whileHover={{
          boxShadow:
            "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          transition: { duration: 0.3 },
        }}
      >
        <div className="relative aspect-[16/9] w-full">
          <Image
            src="/yt-thumbnail.jpg"
            alt="Our Learning Space"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
            priority
          />

          <motion.button className="absolute inset-0 w-full h-full flex items-center justify-center bg-transparent">
            <motion.div
              className="flex items-center justify-center"
              variants={playButtonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <FaYoutube className="text-red-500 text-3xl md:text-6xl" />
            </motion.div>
          </motion.button>

          <motion.div
            className="absolute inset-0 bg-black opacity-10 hover:opacity-0 transition-opacity duration-300"
            initial={{ opacity: 0.1 }}
            whileHover={{ opacity: 0 }}
          />
        </div>

        <motion.div
          className="absolute top-4 left-4 w-6 h-6 bg-[#FCE9B5] rounded"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        />
      </motion.div>
    </motion.section>
  );
};

export default LearnMoreAbout;
