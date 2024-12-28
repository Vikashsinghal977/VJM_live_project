"use client"
import React from 'react';
// import image1 from "../public/2.jpg"
import SectionImg1 from '../utils/Kanya atmanirbhar/Section6_1Image.jpg'
import SectionImg2 from '../utils/Kanya atmanirbhar/Section6_2Image.jpg'
import SectionImg3 from '../utils/Kanya atmanirbhar/Section6_3Image.jpg'
import SectionImg7 from '../utils/Kanya atmanirbhar/Section7Image.jpg'
import SectionImg8 from '../utils/Kanya atmanirbhar/Section8Image.jpg'
// import SectionImg3 from '../utils/Kanya atmanirbhar/Section6_3Image.jpg'
import Icon1 from '../utils/Kanya atmanirbhar/Icons/14.jpg'
import Icon2 from '../utils/Kanya atmanirbhar/Icons/15.jpg'
import Image from 'next/image';
export default function SkillDevelopment() {
    return (
        <div className="container mx-auto">
            {/* Title Section */}
            <div className="mb-12 mt-12">
                <h2 className="text-2xl md:text-3xl font-extrabold px-10 md:px-0 mb-4 text-orange-500 text-center" data-aos="fade-up" data-aos-duration="1000">
                    कौशल वीएक्स केंद्र के अंतर्गत प्रदान की जाने वाली सेवाएं
                </h2>
                <p className="text-gray-700 mx-auto font-bold md:w-10/12 w-full md:px-0 px-10 text-justify lg:text-left md:text-lg text-sm" data-aos="fade-up" data-aos-duration="1000">
                    VJM में हम बालिकाओं को शिक्षा के पश्चात आत्मनिर्भर बनाने हेतु केंद्र सर्कार द्वारा संचालित कौशल विकास
                    कार्यक्रम में भी सम्मिलित करते हैं, जिसके बालिकाएं अपने मनचाहे विषय में कौशल प्रशिक्षण प्राप्त कर आत्मनिर्भर
                    बन सकती हैं। यहां हम बालिकाओं को निम्नलिखित विषयों में कौशल प्रशिक्षण देते हैं एवं प्रशिक्षण के पश्चात
                    बालिकाओं को संबिधत पाठ्यक्रम के सफलता पूर्वक समापन का प्रमाणपत्र भी प्रदान किया जाता है ।
                </p>
            </div>

            {/* Image Grid */}
            <div className="flex flex-col items-center lg:flex-row justify-center mb-16 md:w-10/12 w-full mx-auto lg:gap-6 gap-0 md:px-0 px-10" data-aos="fade-up" data-aos--duration="1000">

                <div className="text-center">
                    <div className="overflow-hidden rounded-lg shadow-lg ">
                        <Image
                            alt='VJM'
                            src={SectionImg1}
                            className="w-full object-cover hover:scale-105 transition-transform duration-300" data-aos="fade-up" data-aos-duration="1000"
                        />
                    </div>
                    <h5 className="mt-4 mb-4 md:text-lg text-sm text-red-900 font-semibold" data-aos="fade-up" data-aos-duration="1000">सहायक सौन्दर्ये चिकित्सक</h5>
                </div>

                <div className="text-center">
                    <div className="overflow-hidden rounded-lg shadow-lg ">
                        <Image
                            alt='VJM'
                            src={SectionImg2}
                            className="w-full object-cover hover:scale-105 transition-transform duration-300" data-aos="fade-up" data-aos-duration="1000"
                        />
                    </div>
                    <h5 className="mt-4 mb-4 md:text-lg text-sm text-red-900 font-semibold" data-aos="fade-up" data-aos-duration="1000">आत्मनिर्भर टेलर</h5>
                </div>
                <div className="text-center">
                    <div className="overflow-hidden rounded-lg shadow-lg ">
                        <Image
                            alt='VJM'
                            src={SectionImg3}
                            className="w-full object-cover hover:scale-105 transition-transform duration-300 " data-aos="fade-up" data-aos-duration="1000"
                        />
                    </div>
                    <h5 className="mt-4 mb-4 md:text-lg text-sm text-red-900 font-semibold" data-aos="fade-up" data-aos-duration="1000">कंप्यूटर शिक्षा</h5>
                </div>

            </div>

            {/* PMKVY Section */}
            <div className="mb-16 px-10 ">
                <h1 className="text-sm rounded-md md:text-2xl py-2 md:font-extrabold font-bold text-center mb-8 shadow-lg md:w-6/12 w-full md:mx-auto  bg-yellow-400 md:px-5" data-aos="fade-up" data-aos-duration="1000">
                    प्रधानमंत्री कौशल विकास योजना (PMKVY) द्वारा <br /> संचालित राष्ट्रीय कौशल प्रशिक्षण निगम द्वारा प्रमाणित
                </h1>


                <div className="flex items-center flex-row md:w-11/12 w-full mx-auto justify-center">
                    <div className="bg-white flex flex-col md:flex-row items-center md:gap-8 md:w-1/4 w-full">
                        <Image src={Icon1} alt="Step 1" className="md:w-20 w-10 md:h-20 h-10" data-aos="fade-up"
                            data-aos-easing="ease-in-back"
                            data-aos-delay="100"
                            data-aos-offset="0" />
                        <div className=' flex flex-col items-center text-center'>
                            <h2 className="md:text-3xl text-lg font-bold text-yellow-400" data-aos="fade-up"
                                data-aos-easing="ease-in-back"
                                data-aos-delay="100"
                                data-aos-offset="0">550+</h2>
                            <h5 className="md:text-md text-xs font-semibold text-red-900" data-aos="fade-up"
                                data-aos-easing="ease-in-back"
                                data-aos-delay="100"
                                data-aos-offset="0">व्यवसायिक प्रशिक्षण</h5>
                        </div>
                    </div>

                    <div className="bg-white flex flex-col md:flex-row items-center md:gap-8 md:w-1/4 w-full">
                        <Image src={Icon2} alt="Step 1" className="md:w-20 w-10 md:h-20 h-10 " data-aos="fade-up"
                            data-aos-easing="ease-in-back"
                            data-aos-delay="100"
                            data-aos-offset="0" />
                        <div className=' flex flex-col items-center text-center'>
                            <h2 className="md:text-3xl text-lg font-bold text-yellow-400" data-aos="fade-up"
                                data-aos-easing="ease-in-back"
                                data-aos-delay="100"
                                data-aos-offset="0">200+</h2>
                            <h5 className="md:text-md text-xs font-semibold text-red-900" data-aos="fade-up"
                                data-aos-easing="ease-in-back"
                                data-aos-delay="100"
                                data-aos-offset="0">बालिकाओं की रोजगाती नियुत्ति</h5>
                        </div>
                    </div>
                </div>
            </div>

            {/* Certificate Section */}
            <div className="flex flex-col lg:flex-row lg:gap-24 gap-10 items-center mb-16 md:w-10/12 w-full mx-auto md:px-0 px-10">
                <div className=' order-2 lg:order-none'>
                    <h2 className="md:text-2xl text-lg text-center font-bold mb-4 border bg-yellow-400 py-2 text-red-900" data-aos="fade-up" data-aos-duration="1000">प्रमाण पत्र</h2>
                    <p className="text-gray-700 font-bold text-sm md:text-lg text-justify md:text-left" data-aos="fade-up" data-aos-durtion="1000">
                        विश्व जागर्ति मिशन के अंतग्रत शुरू किये गए इस कन्या आत्मनिर्भर कार्येक्रम द्वारा लड़कियों और महिलाओं को कौशल प्रशिक्षर्ण भी प्रदान किया जा रहा है| इस मिशन के माध्यम से अब तक ३००+ बालिकाओं को उनके पसंद के रोजगार सूजन हेतु प्रशिक्षित किया गया है| यहां बालिकाओं को विभिंन प्रकार के कौशल प्रशिक्षर्ण (स्किल डेवलपमेंट ट्रैनिंग ) प्रदान किया जाता है। जैसे ब्यूटीशन , सिलाई ट्रेनिंग, कंम्प्यूटर शिक्षा इत्यादि। प्रशिक्षित बालिकोऔं को कोर्स समाप्ति के पश्र्चात केंद्र सरकार द्वरा मान्यता प्राप्त प्रमाण पत्र प्रदान किया जाता है
                    </p>
                </div>
                <Image
                    src={SectionImg7}
                    alt="Certificate"
                    className="w-full rounded-lg shadow-lg" data-aos="fade-up" data-aos-duration="1000"
                />
            </div>

            {/* Job Creation Section */}
            <div className="flex flex-col lg:flex-row lg:gap-24 gap-10 items-center md:w-10/12 w-full mx-auto md:px-0 px-10">
                <Image
                    src={SectionImg8}
                    alt="Job Creation"
                    className="w-full rounded-lg shadow-lg order-1" data-aos="fade-up" data-aos-duration="1000"
                />
                <div className="order-1 lg:order-2">
                    <h2 className="md:text-2xl text-lg text-center font-bold mb-4 border bg-yellow-400 py-2 text-red-900" data-aos="fade-up" data-aos-duration="1000">
                        रोजगार सृजन हेतु पर्याप्त सहायता <br />(ऋण एवं अन्य सहायता)
                    </h2>
                    <p className="text-gray-700 font-bold text-sm md:text-lg text-justify" data-aos="fade-up" data-aos-duration="1000">
                        VJM के कन्या आत्मनिर्भर अभियान के अन्तर्गत कौशल प्रशिक्षण प्राप्त कर चुकी बालिकोओं को प्रशिक्षण देकर असहाय नहीं छोडा जाता बल्कि उनकी मदद तब तक की जाती है जब तक वे अपने पैरो पर न खड़ी हो जाएं। कौशल प्रशिक्षण के पश्र्चात हम बालिकाओ को स्व रोजगार हेतु हर संभव सहायता उपलब्ध करवाते है उन्हे उनके स्टार्ट-अप के लिए पारंगत एंव अनुभवी लोगो का परामर्श दिलवाना, सरकारी बैंक से सब्सिडाइण्ड दरो पर लोन प्राप्त करने हेतु सहायता करना, रोजगार को आगे बढाने हेतु समय समय पर विशेषज्ञों द्वरा उचित मार्गदर्शन प्रदान करना ताकी यह बलिकाऐ आत्मनिर्भर ओर सबल बन पाये एवं आर्थिक रूप से सजग औऱ सशक्त हो पाये। VJM के इस मिशन के माध्यम से अबतक 100 + से ज्यादा बालिकाए आर्थिक रूप से सक्षम हो चुकी है एवं भविष्य मे आप सभी के साथ एवं सहयोग से हम ज्यादा से ज़्यादा बालिकाओं को इसी प्रकार आत्मनिर्भर बना पाने में सक्षम हो पाऐंगे।
                    </p>
                </div>
            </div>
        </div>
    )
}
