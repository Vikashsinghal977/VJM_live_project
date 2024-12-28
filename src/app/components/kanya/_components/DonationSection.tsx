"use client"
import React, { useState } from 'react';
import { Mail, Heart, ChevronRight, CreditCard, Building2 } from 'lucide-react';
import Section13img from '../utils/Kanya atmanirbhar/Section 13 Image.jpg'
import Image from 'next/image';

export default function DonationSection() {
    const [customAmount, setCustomAmount] = useState('');
    const [showBankDetails, setShowBankDetails] = useState(false);
  
    const donationAmounts = [
      [
        { value: '100', label: '₹100' },
        { value: '500', label: '₹500' }
      ],
      [
        { value: '1000', label: '₹1000' },
        { value: '10000', label: '₹10000' }
      ]
    ];
  
    const bankDetails = {
      accountName: "Vishwa Jagriti Mission",
      accountNumber: "1234567890",
      bankName: "State Bank of India",
      ifscCode: "SBIN0123456",
      branch: "New Delhi Main Branch"
    };
  
    const handleOfflineDonation = () => {
      setShowBankDetails(!showBankDetails);
    };
  
    return (
      <div className="w-full pt-5 px-6 md:px-0 container mx-auto">
        {/* First Section */}
        <div className="text-center mb-8 mt-6">
          <h2 className="text-xl md:text-3xl font-bold mb-6 text-orange-500">
            किसी नेक काम के लिए <span className="text-black">दान करे</span>
          </h2>
        </div>
  
        {/* Donation Container */}
        <div className="w-10/12 mx-auto grid lg:grid-cols-2 gap-8 mb-16">
          {/* Online Donation Section */}
          <div className="bg-white border border-yellow-400 rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4 border bg-yellow-400 px-4 py-4 rounded-md">Donate online</h3>
            <div className="flex items-center gap-2 text-gray-600 mb-4">
              <svg className="w-4 h-4" fill="black" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span className="font-semibold">Choose an amount to donate</span>
            </div>
  
            {donationAmounts.map((amountRow, rowIndex) => (
              <div key={rowIndex} className="grid grid-cols-2 md:grid-cols-2 gap-3 mb-4">
                {amountRow.map((amount) => (
                  <button
                    key={amount.value}
                    className="py-2 px-4 font-bold border border-black rounded-md hover:bg-yellow-400 hover:text-white transition-colors"
                  >
                    {amount.label}
                  </button>
                ))}
              </div>
            ))}
  
            <div className="mb-4 relative">
              <input
                type="text"
                placeholder="Enter Amount"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                className="w-full p-2 pl-8 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-yellow-400"
              />
              <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-black">₹</span>
            </div>
  
            <button className="w-full font-bold bg-orange-500 text-white py-3 rounded-lg hover:bg-red-700 transition-colors mb-4 flex items-center justify-center gap-2">
              <Heart className="w-5 h-5" />
              Donate
            </button>
  
            <p className="text-sm text-gray-600 text-center">
              All donations are exempted under section 80G
            </p>
          </div>
  
          {/* Image and Bank Details Section */}
          <div className="flex flex-col relative">
    {!showBankDetails && (
      <div className="relative transition-all duration-500 ease-in-out">
        <div className="h-64 md:h-96 mb-4">
          <Image
            src={Section13img}
            alt="Children in school"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    )}
  
    <button
      className="font-bold bg-yellow-500 text-black py-3 px-6 rounded-md hover:bg-yellow-600 transition-colors text-center flex items-center justify-center gap-2"
      onClick={handleOfflineDonation}
    >
      Donate Offline / Through Bank Transfer
      <ChevronRight className="w-5 h-5" />
    </button>
  
    {showBankDetails && (
      <div className="transition-all duration-500 ease-in-out opacity-100 max-h-96 overflow-hidden">
        <div className="mt-4 border-2 border-yellow-400 p-6 rounded-lg bg-white">
          <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Building2 className="w-5 h-5" />
            Bank Account Details
          </h4>
          <ul className="space-y-2">
            <li className="flex justify-between items-center">
              <span className="font-semibold">Account Name:</span>
              <span>{bankDetails.accountName}</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="font-semibold">Account Number:</span>
              <span>{bankDetails.accountNumber}</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="font-semibold">Bank Name:</span>
              <span>{bankDetails.bankName}</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="font-semibold">IFSC Code:</span>
              <span>{bankDetails.ifscCode}</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="font-semibold">Branch:</span>
              <span>{bankDetails.branch}</span>
            </li>
          </ul>
        </div>
      </div>
    )}
  </div>
        </div>
        {/* Contact Form Section remains the same */}
      </div>
    );
}
