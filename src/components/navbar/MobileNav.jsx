"use client";

import Link from "next/link";
import { FaPhone, FaEnvelope, FaAngleDown } from "react-icons/fa";

export default function MobileNav({ isOpen }) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-[#801737] text-white px-4 pb-4 space-y-2 text-sm">
      <Link href="/" className="block">
        About us
      </Link>

      <details className="block">
        <summary className="cursor-pointer flex items-center justify-between">
          <span>Courses</span>
          <FaAngleDown className="inline ml-2 text-xs" />
        </summary>
        <div className="ml-4 mt-1 space-y-1">
          <Link href="/" className="block">
            Course 1
          </Link>
          <Link href="/" className="block">
            Course 2
          </Link>
        </div>
      </details>

      <Link href="/" className="block">
        Careers
      </Link>
      <Link href="/" className="block">
        News & Blog
      </Link>
      <Link href="/" className="block">
        Payments
      </Link>

      <div className="mt-4 space-y-1">
        <div className="flex items-center space-x-1">
          <FaPhone className="text-xs" />
          <span>+974 55555 3458</span>
        </div>
        <div className="flex items-center space-x-1">
          <FaEnvelope className="text-xs" />
          <span>info@educare.qa</span>
        </div>
        <Link href="/">
          <button className="mt-2 bg-white text-[#801737] px-4 py-1 rounded-md font-semibold w-full">
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  );
}
