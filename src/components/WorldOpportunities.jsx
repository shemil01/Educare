"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const avatars = [
  { src: "/avatar/avatar-1.jpg", style: "top-10 left-10 bg-green-300" },
  { src: "/avatar/avatar-2.jpg", style: "top-0 left-1/2 bg-pink-400" },
  { src: "/avatar/avatar-3.jpg", style: "top-10 right-20 bg-teal-300" },
  { src: "/avatar/avatar-4.jpg", style: "top-[60%] left-[15%] bg-yellow-300" },
  { src: "/avatar/avatar-5.jpg", style: "top-[75%] left-[40%] bg-blue-100" },
  { src: "/avatar/avatar-6.jpg", style: "bottom-20 right-20 bg-green-100" },
  { src: "/avatar/avatar-7.jpg", style: "bottom-5 left-1/4 bg-orange-300" },
  { src: "/avatar/avatar-8.jpg", style: "top-[45%] right-[15%] bg-purple-300" },
  {
    src: "/avatar/avatar-9.jpg",
    style: "bottom-[20%] right-[30%] bg-cyan-300",
  },
  {
    src: "/avatar/avatar-10.jpg",
    style: "bottom-[80%] right-[30%] bg-cyan-300",
  },
];

const getResponsiveAvatarStyle = (originalStyle, windowWidth) => {
  const positionMatch = originalStyle.match(
    /(top|bottom|left|right)-(\[[^\]]+\]|\S+)/g
  );

  if (!positionMatch) return originalStyle;

  let newStyle = originalStyle;

  if (windowWidth < 640) {
    positionMatch.forEach((pos) => {
      if (pos.includes("left-") || pos.includes("right-")) {
        if (pos.includes("left-1/2")) {
          newStyle = newStyle.replace(pos, "left-1/3");
        } else if (pos.includes("right-")) {
          newStyle = newStyle.replace(pos, pos.replace("right-", "right-"));
        } else if (pos.includes("left-")) {
          newStyle = newStyle.replace(pos, pos.replace("left-", "left-"));
        }
      }
    });
  }

  return newStyle;
};

const WorldOpportunities = () => {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  const mapVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const avatarVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (index) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.8 + index * 0.1,
        ease: "easeOut",
      },
    }),
    float: (index) => ({
      y: [0, -10, 0],
      transition: {
        duration: 4 + (index % 3),
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay: index * 0.2,
      },
    }),
  };

  const messageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 1.2 + index * 0.2,
        ease: "easeOut",
      },
    }),
  };

  const getAvatarSize = () => {
    if (windowWidth < 640) return "w-8 h-8 p-0.5";
    if (windowWidth < 1024) return "w-12 h-12 p-0.5";
    return "w-16 h-16 p-1";
  };

  const avatarSize = getAvatarSize();
  const messages = [
    "Education is the foundation of greatness; let's build it together",
    "📍 Learning today, leading tomorrow – the Educare way",
    "✨ Turning dreams into achievements",
  ];

  return (
    <div className="py-10 px-4 text-center bg-white relative overflow-hidden">
      <motion.h2
        className="text-xl md:text-2xl font-medium text-gray-800 px-2"
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Prepare Your Child for a{" "}
        <motion.span
          className="font-semibold text-[#4A3AFF]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: { delay: 0.3, duration: 0.5 },
          }}
        >
          World of Opportunities with Educare
        </motion.span>
      </motion.h2>

      <motion.div
        className="relative mt-10 w-full max-w-6xl mx-auto"
        variants={mapVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Image
          src="/world-map.png"
          alt="World Map"
          width={1225}
          height={614}
          className="w-full h-auto"
          priority
        />

        {avatars.map((avatar, index) => (
          <motion.div
            key={index}
            className={`absolute rounded-full ${avatarSize} ${getResponsiveAvatarStyle(
              avatar.style,
              windowWidth
            )}`}
            custom={index}
            variants={avatarVariants}
            initial="hidden"
            whileInView={["visible", "float"]}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.2,
              zIndex: 10,
              transition: { duration: 0.2 },
            }}
          >
            <Image
              src={avatar.src}
              alt={`Avatar ${index + 1}`}
              width={windowWidth < 640 ? 32 : 64}
              height={windowWidth < 640 ? 32 : 64}
              className="rounded-full w-full h-full object-cover border-2 border-white shadow-md"
            />
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-8 bg-[#FDF1E4] py-4 px-4 rounded-lg shadow-sm">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-[#841539] text-sm md:text-base font-medium">
          {messages.map((message, index) => (
            <motion.p
              key={index}
              custom={index}
              variants={messageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="py-2 px-3 rounded-full bg-white/50 backdrop-blur-sm"
            >
              {message}
            </motion.p>
          ))}
        </div>
      </div>

      <motion.div
        className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-blue-500/5 z-0"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-purple-500/5 z-0"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </div>
  );
};

export default WorldOpportunities;
