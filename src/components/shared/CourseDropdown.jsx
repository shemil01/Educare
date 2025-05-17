"use client";
import Link from "next/link";
import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";

const CourseDropdown = ({ data }) => {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <div
      className="absolute top-full left-0 w-64 bg-white text-black shadow-lg z-50"
      onMouseLeave={() => setHoveredItem(null)}
    >
      <ul>
        {data.map((item, idx) => (
          <li
            key={idx}
            className="relative group"
            onMouseEnter={() => setHoveredItem(item)}
          >
            <div className="flex justify-between items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <span className="text-sm">{item.title}</span>
              {item.subItems && <FaChevronRight className="text-sm ml-2" />}
            </div>
          </li>
        ))}
      </ul>

      {hoveredItem?.subItems && (
        <div className="absolute top-0 left-[240px] w-64 bg-white shadow-lg">
          <ul>
            {hoveredItem.subItems.map((sub, subIdx) => (
              <li
                key={subIdx}
                className="px-4 py-2 hover:bg-gray-100 text-sm whitespace-nowrap"
              >
                <Link href={sub.href}>{sub.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CourseDropdown;
