import React from 'react'
import Section12 from "../utils/Kanya atmanirbhar/Section 12 Image.jpg"
import Icon1 from "../utils/Kanya atmanirbhar/Icons/1.jpg"
import Icon2 from "../utils/Kanya atmanirbhar/Icons/2.jpg"
import Icon3 from "../utils/Kanya atmanirbhar/Icons/3.jpg"
import Icon4 from "../utils/Kanya atmanirbhar/Icons/4.jpg"
import Image from 'next/image'


export default function BenifitSection() {
    const benefits = [{
        benefit: "प्रयोजित की गई बालिका की हर छोटी बड़ी उपलब्धि की सम्पूर्ण जानकारी",
        img: Icon1,
        id: 1
    },
    {
        benefit: "बालिकाओं से वर्चुअल भेंट",
        img: Icon2,
        id: 2
    },
    {
        benefit: "सुविधानुसार मिलने की अनुमति",
        img: Icon3,
        id: 3
    },
    {
        benefit: "VJM के द्वारा आयोजित कार्येक्रम में निमंत्रण",
        img: Icon4,
        id: 4
    },

    ]

    return (
        <div className='container mx-auto' >
            {/* <div className=' flex flex-col  lg:flex-row justify-center gap-10 md:w-10/12 px-12 w-full items-center mx-auto '>
                <div className=' lg:w-6/12 w-full mt-4'>
                    <h2 className=' text-xl md:text-3xl lg:text-2xl font-extrabold text-red-900 mb-5'>अनुदानकर्ता को अनुदान से मिलने वाले लाभ</h2>
                    <p className=' md:text-lg text-sm font-bold mb-10 text-justify'>VJM के इस मिशन में अनुदानकर्ता को अनुदान करने के पश्र्चात इस परोपकार से मानसिक शांति एवं भावनात्मक
                        सुख निश्र्चित रूप से मिलता है परन्तु इसके साथ ही हम VJM के अनुदानकर्ताओं को अपनी तरफ से भी छोटी सी
                        भेंट जरूर देते हैं जो इस प्रकार से हैं।</p>
                    {
                        benefits.map((ben) => {
                            return (
                                <div className=' flex justify-between gap-3 align-center mt-8'>
                                    <ol>
                                        <li key={ben.id} className=' font-bold md:text-lg text-sm text-justify'>{ben.benefit}</li>
                                    </ol>
                                    <Image src={ben.img} alt="" className=' md:w-[40px] w-[30px] h-[33px]' />
                                </div>
                            )
                        })
                    }
                    <p className='font-bold md:text-lg text-sm text-justify mt-5'>स्वागत समारोह एवं पुरुस्कार</p>

                </div>
                <div className='lg:w-[35%] w-full mx-auto'>
                    <Image src={Section12} alt="" />
                </div>
            </div> */}
        </div>
    )
}
