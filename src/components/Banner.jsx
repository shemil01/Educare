import React from "react";
import { TbCaptureFilled, TbTrophy, TbUserStar } from "react-icons/tb";
import { PiChalkboardTeacherLight } from "react-icons/pi";

export const Banner = () => {
  const items = [
    {
      icon: <TbCaptureFilled size={20} />,
      text: "Personal Attention",
    },
    {
      icon: <TbTrophy size={20} />,
      text: "Growth Mindset",
    },
    {
      icon: <TbUserStar size={20} />,
      text: "Skill Development",
    },
    {
      icon: <PiChalkboardTeacherLight size={20} />,
      text: "Passionate Teaching",
    },
  ];

  return (
    <div className="bg-[#FFF3E1] text-[#8A1538] custom-font px-4 sm:px-8 md:px-20 py-6">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:flex items-center justify-center gap-4 md:gap-8">
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            {item.icon}
            <span className="text-sm sm:text-base">{item.text}</span>
            {index !== items.length - 1 && (
              <div className="hidden md:block mx-4 h-5 w-px bg-gray-300" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
