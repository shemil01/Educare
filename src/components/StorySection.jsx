"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";

const StorySection = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const image1Variants = {
    hidden: { opacity: 0, rotate: -8, scale: 0.9 },
    visible: {
      opacity: 1,
      rotate: -3,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.2,
      },
    },
  };

  const image2Variants = {
    hidden: { opacity: 0, rotate: 10, scale: 0.9 },
    visible: {
      opacity: 1,
      rotate: 5,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.4,
      },
    },
  };


  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.2 + index * 0.2,
      },
    }),
  };

  const iconVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
        delay: 0.6,
      },
    },
  };

  return (
    <section className="py-16 px-6 lg:px-20 relative bg-white overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={textVariants}
        >
          <h2 className="text-3xl font-semibold text-[#5B2C2C] mb-4">
            The Story of <span className="font-bold">Educare</span>
          </h2>
          <motion.p
            className="mb-4 text-gray-700"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          >
            At <strong>Educare</strong> education center, we believe that every
            student deserves personalized, focused attention to reach their
            fullest potential. Our mission is to empower students through
            one-on-one tutoring, creating customized learning plans tailored to
            each individual's unique needs, strengths, and learning styles.
          </motion.p>
          <motion.p
            className="mb-4 text-gray-700"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            viewport={{ once: true }}
          >
            Founded on a passion for education and a commitment to excellence,{" "}
            <strong>Educare</strong> education center was established to offer
            students a supportive and engaging learning environment. Our team of
            experienced tutors is dedicated to helping students excel
            academically while also building confidence, independence, and a
            love for learning.
          </motion.p>
          <motion.p
            className="mb-6 text-gray-700"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            viewport={{ once: true }}
          >
            We specialize in a wide range of subjects across all grade levels,
            including math, science, English, and test preparation. Whether your
            child needs help catching up, getting ahead, or preparing for a
            specific exam, we are here to support their journey.
          </motion.p>

          <motion.div className="relative inline-block">
            <motion.span
              className="bg-[#EBC48B] absolute px-5 py-2 w-full h-full rounded-full"
              variants={{
                initial: { rotate: -4 },
                hover: { rotate: 0 },
              }}
              transition={{ duration: 0.3 }}
            />

            <motion.button
              className="bg-[#8A1538] text-white relative z-10 py-2 px-5 rounded-full hover:bg-[#6e0e2c] text-sm font-medium flex items-center gap-2 hover:rotate-0 -rotate-4"
              variants={{
                initial: { rotate: -4 },
                hover: { rotate: 0 },
              }}
              transition={{ duration: 0.3 }}
              whileTap={{ scale: 0.95 }}
            >
              Read more
              <motion.span
                className="ml-1"
                initial={{ x: 0 }}
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
              >
               <GoArrowUpRight/>
              </motion.span>
            </motion.button>
          </motion.div>
        </motion.div>

        <div className="relative w-full h-full flex justify-center lg:justify-end min-h-[350px]">
          <motion.div
            className="relative w-[300px] h-[200px] border-[10px] border-[#8A1538] shadow-xl rounded-md overflow-hidden"
            variants={image1Variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Image
              src="/story-hero1.png"
              alt="Educare Tutoring"
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.div
            className="absolute top-[120px] left-[120px] w-[300px] h-[200px] border-[10px] border-[#FCE9B5] shadow-xl rounded-md overflow-hidden"
            variants={image2Variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Image
              src="/story-hero2.png"
              alt="Educare Students"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-24">
        <motion.div
          className="bg-[#FFF3E1] rounded-xl p-6 relative shadow-md"
          custom={0}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="absolute md:-top-14 right-0 md:w-28 w-12 h-12 md:h-28 "
            variants={iconVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Image src="/flag.png" alt="Mission" className="" width={100} height={100} />
          </motion.div>
          <h3 className="text-xl font-bold mb-2 text-[#8A1538]">Mission</h3>
          <p className="text-sm text-gray-700">
            To help students succeed with personalized,{" "}
            <motion.strong
              className="text-[#8A1538]"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              one-to-one
            </motion.strong>{" "}
            tutoring that builds confidence, skills, and a love for learning.
          </p>
        </motion.div>

        <motion.div
          className="bg-[#FFF3E1] rounded-xl p-6 relative shadow-md"
          custom={1}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="absolute md:-top-14 right-0 h-12 w-12 md:w-28 md:h-28"
            variants={iconVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Image src="/rocket.png" alt="Vision" width={100} height={100} />
          </motion.div>
          <h3 className="text-xl font-bold mb-2 text-[#8A1538]">Vision</h3>
          <p className="text-sm text-gray-700">
            To be a trusted center where students reach their potential, build
            confidence, and prepare for a{" "}
            <motion.strong
              className="text-[#8A1538]"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              bright future.
            </motion.strong>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default StorySection;
