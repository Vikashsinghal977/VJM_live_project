import React from 'react'
import Icon5 from '../utils/Kanya atmanirbhar/Icons/5.jpg'
import Icon6 from '../utils/Kanya atmanirbhar/Icons/6.jpg'
import Icon7 from '../utils/Kanya atmanirbhar/Icons/7.jpg'
import Icon8 from '../utils/Kanya atmanirbhar/Icons/8.jpg'
import Icon9 from '../utils/Kanya atmanirbhar/Icons/9.jpg'
import Icon10 from '../utils/Kanya atmanirbhar/Icons/10.jpg'
import Image from 'next/image'
import { FaRegHeart } from "react-icons/fa";

export default function HowItWorks() {
    const steps = [
        {
            icon: <Image src={Icon10} alt="Step 1" className="w-16 h-16 md:w-20 md:h-20 object-cover" />,
            title: "जरूरतमंद बालिकाओं का चयन करना",
            description: <p>आस पास की बस्तियों में सर्वेक्षण कर ऐसे परिवारो की पहचान की जाती है जहाँ पर बच्चियों को विद्यालय नहीं भेजा जाता।</p>,
        },
        {
            icon: <Image src={Icon7} alt="Step 1" className="w-16 h-16 md:w-20 md:h-20 object-cover" />,
            title: "परिवारजनों को कल्याण हेतु प्रेरित करना",
            description: <p>ऐसे परिवारो की पहचान कर उस परिवार के सदस्यों को बालिकाओं के शिक्षण औऱ कौशल प्रशिक्षण का महत्तव समझाया जाता है।</p>,
        },

        {
            icon: <Image src={Icon9} alt="Step 1" className="w-16 h-16 md:w-20 md:h-20 object-cover" />,
            title: "बालिकाओं के लिऐ संभावित सहायता उपलब्ध कराना",
            description: <p>बालिकाओं के लिऐ नि: शुल्क स्वास्थ सेवा और मध्यान्ह भोजन की व्यसवस्था जेसी सुविधाओं से परिवारो को प्रेरित और प्रोत्साहित किया जाता है।</p>,
        },
        {
            icon: <Image src={Icon6} alt="Step 1" className="w-16 h-16 md:w-20 md:h-20 object-cover" />,
            title: "गुणवत्ता शिक्षण सुविधा हेतु शिक्षकों औऱ स्वयंसेवकों की नियुक्ति सुनिक्षत करना",
            description: <p>बालिकाओं के लिऐ नियमित कक्षाएं और गुणवत्तापूर्ण शिक्षा सुनिश्र्ति करने हेतु कुशल कर्मचारियों कि नियुक्ति की जाती है तथा योगदान / अनुदान हेतु स्वयंसेवकों को आमंत्रित किया जाता है।,</p>,
        },
        {
            icon: <Image src={Icon8} alt="Step 1" className="w-16 h-16 md:w-20 md:h-20 object-cover" />,
            title: "कोषल प्रशिक्षण की व्यवस्था करना",
            description: <p>बालिकाओं के लिऐ व्यवसायिक प्रशिक्षण की व्यवस्था की जाती है जहाँ बालिकाएं सिलाई कोर्स, ब्यूटीशियन, कम्पयूटर शिक्षा जैसे कौशल प्रशिक्षण प्राप्त कर सके।</p>
        },
        {
            icon: <Image src={Icon5} alt="Step 1" className="w-16 h-16 md:w-20 md:h-20 object-cover" />,
            title: "जी, मै सहयोग करना चाहता हूँ",
            description: <><p>आपका अनुदान और सहयोग इस मिशन के सुचारू क्रियान्वयन में मदद कर सकता है।</p><button className='bg-orange-600 px-2 py-1 text-white font-bold rounded-md flex items-center justify-center gap-2'><FaRegHeart /> दान करे </button></>,
        },

    ];

    return (
        <div className="py-8 lg:py-16 px-10 w-11/12 mx-auto container">
            <div className="text-center mb-8 md:mb-16">
                <h2
                    className="text-2xl md:text-3xl lg:text-4xl text-red-800 font-bold mb-2 md:mb-4"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    कन्या आत्मनिर्भर अभियान
                </h2>
                <h4
                    className="text-lg md:text-xl lg:text-2xl text-orange-600 font-bold"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    किस प्रकार काम करता है?
                </h4>
            </div>

            <div className="flex flex-col items-center md:flex-row flex-wrap justify-around mx-auto">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className="bg-white p-6 md:p-8 lg:p-4 relative flex flex-col md:flex-row items-center justify-center gap-4 border-y border-gray-300 shadow-lg hover:shadow-md transition-shadow duration-300 lg:w-5/12 w-full mb-5" data-aos="fade-up" data-aos-duration="1000"
                    >
                        <div className="flex-shrink-0 md:border-r border-gray-300 md:pr-4 lg:pr-8 flex items-center justify-center">
                            {step.icon}
                        </div>
                        <div className="text-center md:text-left h-full flex flex-col justify-center">
                            <h3 className="text-md md:text-lg font-bold mb-2 text-red-800">{step.title}</h3>
                            {/* <p className="text-xs font-semibold">{step.description}</p> */}
                            {step.description}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
