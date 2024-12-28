'use client'
import React, { useState } from "react";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index:any) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  const faqs = [
    {
      question: "What is the purpose of this program?",
      answer:
        "This program is designed to enhance your skills and provide insights into the subject with practical applications.",
    },
    {
      question: "Who can enroll in the program?",
      answer:
        "Anyone with a passion for learning and meeting the program requirements can enroll.",
    },
    {
      question: "What is the fee structure?",
      answer:
        "The fee structure varies based on the course. Discounts may be available for early registrations.",
    },
    {
      question: "How can I contact support?",
      answer: "You can reach out to our support team via email or phone.",
    },
  ];

  return (
    <div className="bg-gray-100 border">
      <div className="py-10 px-6 sm:px-10 md:px-20 container mx-auto">
         <div className=" w-11/12 mx-auto">
         <h2 className="text-3xl md:text-4xl font-bold text-center text-red-800 mb-10">
          Frequently <span className="text-brown-600">Asked Questions</span>
        </h2>
        <div className="mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onToggle={() => toggleAccordion(index)}
            />
          ))}
        </div>
         </div>
      </div>
    </div>
  );
};

const FaqItem = ({ faq, isOpen, onToggle }) => {
  return (
    <div className="border-b border-gray-300 pb-2">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center text-left text-lg font-medium text-gray-800 focus:outline-none"
      >
        <span>{faq.question}</span>
        <span className="text-xl">{isOpen ? "▲" : "▼"}</span>
      </button>
      <div
        className={`transition-all duration-400 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-4 text-gray-700 bg-gray-50 rounded-md shadow mt-2">
          {faq.answer}
        </div>
      </div>
    </div>
  );
};

export default Faq;

