"use client";
import React, { useState } from 'react';
import { AiOutlinePlus as PlusIcon, AiOutlineMinus as MinusIcon } from 'react-icons/ai';

const Feedback = () => {
  // State to keep track of the currently expanded section
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (sectionKey:any) => {
    if (expandedSection === sectionKey) {
      // If the section is already open, close it
      setExpandedSection(null);
    } else {
      // Open the clicked section, and close any other open section
      setExpandedSection(sectionKey);
    }
  };

  const sections = [
    {
      key: 'why-special',
      title: 'Why Shri Ganesh Lakshmi Maha Ygana at Guru Dham is Special',
      content: (
        <>
          <p className="mb-4">
            Shri Ganesh Lakshmi Maha Ygana has special significance in Anand Dham Ashram, the pious abode of His Holiness Sudhanshu Ji Maharaj and Dr. Archika Didi.
          </p>
          <p className="mb-4">
            Prayers and ygana performed collectively are very potent, and ygana performed in the same place for over 25 years is even more potent and sacred.
          </p>
        </>
      ),
    },
    {
      key: 'special-attractions',
      title: 'Special Attractions at Anand Dham Ashram',
      content: (
        <>
          <p className="mb-4">
            Shri Ganesh Lakshmi Maha Ygana has special significance in Anand Dham Ashram, the pious abode of His Holiness Sudhanshu Ji Maharaj and Dr. Archika Didi.
          </p>
          <p className="mb-4">
            Prayers and ygana performed collectively are very potent, and ygana performed in the same place for over 25 years is even more potent and sacred.
          </p>
        </>
      ),
    },
    {
      key: 'why-special-2',
      title: 'Why Shri Ganesh Lakshmi Maha Ygana at Guru Dham is Special',
      content: (
        <>
          <p className="mb-4">
            Shri Ganesh Lakshmi Maha Ygana has special significance in Anand Dham Ashram, the pious abode of His Holiness Sudhanshu Ji Maharaj and Dr. Archika Didi.
          </p>
          <p className="mb-4">
            Prayers and ygana performed collectively are very potent, and ygana performed in the same place for over 25 years is even more potent and sacred.
          </p>
        </>
      ),
    },
    {
      key: 'why-special-3',
      title: 'Why Shri Ganesh Lakshmi Maha Ygana at Guru Dham is Special',
      content: (
        <>
          <p className="mb-4">
            Shri Ganesh Lakshmi Maha Ygana has special significance in Anand Dham Ashram, the pious abode of His Holiness Sudhanshu Ji Maharaj and Dr. Archika Didi.
          </p>
          <p className="mb-4">
            Prayers and ygana performed collectively are very potent, and ygana performed in the same place for over 25 years is even more potent and sacred.
          </p>
        </>
      ),
    },
    // Repeat the above section for more, as needed.
  ];

  return (
    <div className="container mx-auto space-y-4 p-4 m-12 sm:px-5">
      {sections.map((section) => (
        <div
          key={section.key}
          className={`bg-white rounded-lg shadow-lg ${
            expandedSection === section.key ? 'border-none' : 'border-t-2'
          }`}
        >
          <div
            className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-100"
            onClick={() => toggleSection(section.key)}
          >
            <h2 className="text-xl font-semibold text-gray-800">{section.title}</h2>
            {expandedSection === section.key ? (
              <MinusIcon className="w-6 h-6 text-gray-500" />
            ) : (
              <PlusIcon className="w-6 h-6 text-gray-500" />
            )}
          </div>
          {expandedSection === section.key && (
            <div className="p-4 md:p-8 text-gray-700">{section.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Feedback;
