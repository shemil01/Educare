"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqData = [
  {
    question: "What subjects do you offer tutoring in?",
    answer:
      "We offer tutoring in a wide range of subjects including Math, Science, English, Reading, History, and many more. We also provide specialized test preparation for standardized tests such as the SAT, ACT, and AP exams.",
  },
  {
    question: "What ages or grade levels do you tutor?",
    answer:
      "We cater to students from elementary school through college, and even adult learners seeking continuing education support.",
  },
  {
    question: "Is tutoring one-on-one or in groups?",
    answer:
      "We offer both one-on-one sessions and small group tutoring depending on the student's preference and availability.",
  },
  {
    question: "Can sessions take place at our home?",
    answer:
      "Yes, we offer in-home sessions depending on location, as well as online and center-based options.",
  },
  {
    question: "What is the duration and frequency of each tutoring session?",
    answer:
      "Typically, sessions are 1 hour long and scheduled 1–2 times per week, but we offer flexible plans based on individual needs.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#F9F7F4] py-12 px-4 md:px-20">
      <div className=" mx-auto">
        <h2 className="text-[#655945] text-2xl md:text-3xl font-semibold text-center mb-8">
          Frequently asked <span className=" font-bold">Questions</span>
        </h2>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="bg-white rounded-md shadow-sm border">
              <button
                className="flex justify-between items-center w-full p-4 text-left"
                onClick={() => toggle(index)}
              >
                <span className="font-medium text-[#4b3d30]">
                  {item.question}
                </span>
                <FaChevronDown
                  className={`transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-4 pb-4 text-sm text-gray-700">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
