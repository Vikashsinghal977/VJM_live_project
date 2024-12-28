"use client"
import React, { useEffect, useState } from 'react';
import SectImage9 from '../utils/Kanya atmanirbhar/Section-9-Image.png';
import Image from 'next/image';

export default function Anudankarta() {

    const anudankartadata = [
        {
            imgSrc: SectImage9,
            desc: (
                <p className='font-bold text-white text-sm md:text-lg lg:pr-10 lg:text-left text-justify'>
                    VJM मे हम अपन सभी अनुदानकर्ताओं एवं स्वयं सेवको को समय-समय पर हमारे अभियान से जुड़ी बालिकाओ से मिलने के लिये
                    अमांत्रित करते है। इन आयोजनों के दौरान अनुदानकर्ता बालिकाओ से मिलकर उनके साथ वार्ता कर सकते है, उन्हे अपना प्यार
                    एवं आशीर्वाद भी दे सकते है। यहाँ शिक्षा प्राप्त करने वाली हर बालिका को आपके प्यार और सहयोग की सदैव आवश्यकता होती
                    है। इन्हे समय-समय पर आप अपनी सुविधानुसार मिलने भी आ सकते है और इनके साथ समय भी व्यतीत कर सकते है जिससे आपको इनके
                    बारे में और ज्यादा जानने का अवसर भी मिलता है एवं प्यार व अपनेपन से वंचित इन बालिकाओ को भी आपका प्यार और सानिध्य
                    प्राप्त होता है।
                </p>
            ),
        },
        {
            imgSrc: SectImage9,
            desc: (
                <p className='font-bold text-white text-sm md:text-lg lg:pr-10 text-justify lg:text-left'>
                    VJM मे हम अपन सभी अनुदानकर्ताओं एवं स्वयं सेवको को समय-समय पर हमारे अभियान से जुड़ी बालिकाओ से मिलने के लिये
                    अमांत्रित करते है। इन आयोजनों के दौरान अनुदानकर्ता बालिकाओ से मिलकर उनके साथ वार्ता कर सकते है, उन्हे अपना प्यार
                    एवं आशीर्वाद भी दे सकते है। यहाँ शिक्षा प्राप्त करने वाली हर बालिका को आपके प्यार और सहयोग की सदैव आवश्यकता होती
                    है। इन्हे समय-समय पर आप अपनी सुविधानुसार मिलने भी आ सकते है और इनके साथ समय भी व्यतीत कर सकते है जिससे आपको इनके
                    बारे में और ज्यादा जानने का अवसर भी मिलता है एवं प्यार व अपनेपन से वंचित इन बालिकाओ को भी आपका प्यार और सानिध्य
                    प्राप्त होता है।
                </p>
            ),
        },
        {
            imgSrc: SectImage9,
            desc: (
                <p className='font-bold text-white text-sm md:text-lg lg:pr-10 text-justify lg:text-left'>
                    VJM मे हम अपन सभी अनुदानकर्ताओं एवं स्वयं सेवको को समय-समय पर हमारे अभियान से जुड़ी बालिकाओ से मिलने के लिये
                    अमांत्रित करते है। इन आयोजनों के दौरान अनुदानकर्ता बालिकाओ से मिलकर उनके साथ वार्ता कर सकते है, उन्हे अपना प्यार
                    एवं आशीर्वाद भी दे सकते है। यहाँ शिक्षा प्राप्त करने वाली हर बालिका को आपके प्यार और सहयोग की सदैव आवश्यकता होती
                    है। इन्हे समय-समय पर आप अपनी सुविधानुसार मिलने भी आ सकते है और इनके साथ समय भी व्यतीत कर सकते है जिससे आपको इनके
                    बारे में और ज्यादा जानने का अवसर भी मिलता है एवं प्यार व अपनेपन से वंचित इन बालिकाओ को भी आपका प्यार और सानिध्य
                    प्राप्त होता है।
                </p>
            ),
        }
        // Add more objects as in your original code...
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % anudankartadata.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [anudankartadata.length]);
    return (
        <div className='relative py-3'>

            <div className='bg-gray-800 mt-14 mb-14'>
                <div className='container mx-auto w-full overflow-hidden'>
                    <div
                        className='flex transition-transform duration-1000 ease-in-out'
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {anudankartadata.map((data, index) => (
                            <div key={index} className='flex-shrink-0 w-full flex justify-center'>
                                <div className='flex flex-col items-center lg:flex-row justify-center gap-5 w-11/12 px-10 mx-auto'>
                                    <div className='lg:w-7/12 w-full'>
                                        <Image src={data.imgSrc} alt='' className='' />
                                    </div>
                                    <div className='lg:w-2/5 w-full'>
                                        <h2 className='md:text-2xl text-xl mt-2 font-bold text-yellow-400 mb-4 lg:pr-24 text-center lg:text-left'>
                                            अनुदानकर्ताओं से बालिकाओं की संगोष्ठी
                                        </h2>
                                        {data.desc}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Dots for navigation */}
                <div className='absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2'>
                    {anudankartadata.map((_, index) => (
                        <div
                            key={index}
                            className={`w-5 h-2 rounded-full ${index === currentIndex ? 'bg-yellow-400' : 'bg-gray-500'
                                }`}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    )
}
