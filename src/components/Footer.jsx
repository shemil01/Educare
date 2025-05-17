import React from "react";
import { IoMdMail } from "react-icons/io";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaLinkedinIn,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#8A1538] w-full px-6 py-10 md:px-10 md:pt-[80px] md:pb-8 font-Poppins text-white">
      <div className=" mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 justify-between mb-10">
          <div className="flex flex-col gap-4">
            <span className="text-2xl font-bold ">Educare</span>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-6">
              Navigation{" "}
            </h3>
            <div className="flex flex-col space-y-3 text-gray-400 text-sm">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/" className="hover:text-white transition-colors">
                About
              </Link>
              <Link href="/" className="hover:text-white transition-colors">
                Curriculum
              </Link>
              <Link href="/" className="hover:text-white transition-colors">
                Career
              </Link>
              <Link href="/" className="hover:text-white transition-colors">
                Blogs
              </Link>
              <Link href="/" className="hover:text-white transition-colors">
                Contact Us
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-6">
              Contact Info
            </h3>
            <div className="flex flex-col space-y-3 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <IoMdMail className="text-white" />
                <Link
                  href="mailto:educare@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  educare@gmail.com
                </Link>
              </div>{" "}
              <div className="flex items-center gap-2">
                <IoMdMail className="text-white" />
                <Link
                  href="mailto:info@educare.com"
                  className="hover:text-white transition-colors"
                >
                  info@educare.com
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <FaPhoneAlt className="text-white" />
                <Link
                  href="tel:+974 4412 3456"
                  className="hover:text-white transition-colors"
                >
                  +974 4412 3456
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <FaPhoneAlt className="text-white" />
                <Link
                  href="tel:+974 5534 7890"
                  className="hover:text-white transition-colors"
                >
                  +974 5534 7890
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-4 mt-6">
              <Link
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400  transition-colors"
              >
                <FaInstagram className="text-xl" />
              </Link>
              <Link
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400  transition-colors"
              >
                <FaFacebook className="text-xl" />
              </Link>
              <Link
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400  transition-colors"
              >
                <FaLinkedinIn className="text-xl" />
              </Link>
              <Link
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400  transition-colors"
              >
                <FaYoutube className="text-xl" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-6">
              Office Address
            </h3>
            <div className="space-y-3 text-gray-400 text-sm">
              <p>
                EducareEducation Center <br />
                Building 45, Al Sadd Street,
                <br />
                Doha, Qatar
              </p>

              <span className="underline">View On Map </span>
            </div>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        <div className="md:flex justify-between text-gray-400 text-sm">
          <p>
            {" "}
            © 2024 <span className="underline">educare</span>
          </p>
          <p>
            Designed By{" "}
            <span className="text-[#DCC196]">Noviindus Technologies</span>
          </p>
          <div className="flex space-x-1">
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
