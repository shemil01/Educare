"use client";

import { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaBars,
  FaTimes,
  FaAngleDown,
} from "react-icons/fa";
import Link from "next/link";
import { CiPen } from "react-icons/ci";
import { CourseData } from "../data/courseData";
import CourseDropdown from "../shared/CourseDropdown";
import { RiArrowDropDownLine } from "react-icons/ri";
import MobileNav from "./MobileNav";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#801737] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link
          href="/"
          className="flex items-center space-x-2 text-white font-semibold text-lg"
        >
          <div className="w-6 h-6 border rounded-full flex items-center justify-center">
            <CiPen />
          </div>
          <span>Educare</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6 text-sm">
          <Link href="/">About us</Link>

          <div
            onMouseEnter={() => setOpenDropdown("courses")}
            onMouseLeave={() => setOpenDropdown(null)}
            className="relative"
          >
            <span className="flex items-center space-x-1">
              Courses{" "}
              <RiArrowDropDownLine
                className={`text-2xl transform transition-transform duration-300 ${
                  openDropdown === "courses" ? "rotate-180" : ""
                }`}
              />
            </span>
            {openDropdown === "courses" && <CourseDropdown data={CourseData} />}
          </div>

          <Link href="/">Careers</Link>
          <Link href="/">News & Blog</Link>
          <Link href="/">Payments</Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4 text-sm">
          <div>
            <div className="flex items-center space-x-1">
              <FaPhone className="text-xs" />

              <Link
                href="tel:+974 55555 3458"
                className="hover:text-white transition-colors"
              >
                +974 55555 3458
              </Link>
            </div>
            <div className="flex items-center space-x-1">
              <FaEnvelope className="text-xs" />
              <Link
                href="mailto:info@educare.qa"
                className="hover:text-white transition-colors"
              >
                info@educare.qa
              </Link>
            </div>
          </div>
          <Link href="/">
            <button className="bg-white text-[#801737] px-4 py-1 rounded-md text-sm font-semibold">
              Contact Us
            </button>
          </Link>
        </div>

        <button
          className="md:hidden text-xl"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {mobileMenuOpen && <MobileNav isOpen={mobileMenuOpen} />}
    </header>
  );
}
