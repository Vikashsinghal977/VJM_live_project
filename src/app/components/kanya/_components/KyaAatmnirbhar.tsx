import React from 'react'


import ImageTextSection from './ImageTextSection'

import SectImg3 from "../utils/Kanya atmanirbhar/Section 3 Image.jpg"
import SectImg4 from "../utils/Kanya atmanirbhar/Section 4 Image.jpg"

export default function KyaAatmnirbhar() {
  const redLight = (<><br /><span style={{ color: 'red'}}>शिक्षा सुविधाएं : ज्ञानदीप विधालय</span><br /></>)
  return (
    <div className='flex flex-col justify-center container mx-auto ' id='history'>
        


    <div className="py-8 w-10/12 mx-auto">
     <h2 className="md:text-3xl text-2xl font-bold text-orange-600 mb-4 text-center md:px-0 px-7">क्या है कन्या आत्मनिर्भर अभियान</h2>
     <p className="text-gray-700 leading-7 mb-6 font-bold md:px-0 px-7 text-sm md:text-lg text-justify">कन्या आत्मनिर्भर अभियान परम पूज्य सुधांशु जी महाराज के द्वारा शुरू किया गया दिव्ये मिशन है जिसका लक्ष्य है समाज के वंचित वर्ग की बालिकाओं की गरीबी और अशिक्षा के दलदल से निकालना और उन्हें उचित मार्गदर्शन प्रदान करना ताकि वे पढ़ लिखकर आत्मनिर्भर बन सकें। <br /> VJM में कन्या आत्मनिर्भर अभियान के अंतर्गत झुग्गी झोपड़ी में रहने वाली, कूड़ा कचरा बीनने वाली एवं आर्थिक रूप से कमजोर और वंचित वर्ग की बालिकाओं को।</p>
     
   </div>
     

   <div className="py-4 w-10/12 mx-auto" >
     <h4 className="md:text-lg text-md font-bold text-orange-600 mb-3 ml-2 md:px-0 px-7 ">उचित शिक्षा प्रदान करने का प्रयास करते हैं।</h4>
     <ul className="list-disc ml-10 md:ml-0 space-y-2 text-gray-700 font-bold md:text-lg text-sm md:px-20 px-7 " > 
        <li>यहाँ हम निम्नलिखित रूप से बालिकाओं की सहायता करते हैं</li>
        <li>बालिकाओं के लिए उचित एवं गुणवत्तपूर्ण शिक्षा की व्यवस्था करना</li>
        <li>बालिकाओं के लिए कुशल एवं प्रशिक्षित स्टाफ की व्यवस्था करना</li>
        <li>बालिकाओं के लिए सारी सुविधाएं से सुसज्जित कंप्यूटर लैब एवं पुस्तकालय की व्यवस्था करना</li>
     </ul>
   </div>
     

     {/* Section 2 */}
     <ImageTextSection
       imgSrc={SectImg3}
       title="हमारे बारे में"
       description="कन्या आत्मनिर्भर अभियान विश्व जागृति मिशन द्वरा संचालित एक कल्याणकारी अभियान है, जिसके माध्यम से समाज की
               वंचित वर्ग की बालिकाओं को न केवल शिक्षित किया जाता है बल्कि उन्हें प्रधानमंत्री कौशल विकास योजना से
               जोड़कर कौशल प्रशिक्षण दिया जा रहा है और आत्मनिर्भर तथा सशक्त भी बनाया जा रहा है। यहां हम बालिकाओ को
               शिक्षा और कौशल प्रदान कर न केवल उनके सर्वागीण विकास को सुनिश्रित करते हैं बल्कि उनके आध्यात्मिक एवं
               भावनात्मक विकास को भी बढ़ावा देते है। इसके माध्यम से बालिकाएं अपनी स्वयं की ताकत को समझ पाने मे सक्षम हो
               पाती हैं और आत्मसम्मान के साथ जीवन जीने की ओर कदम बढाती है। एक शिक्षित और सशक्त स्त्री सम्पूर्ण समाज को
               शिक्षित औऱ सशक्त बना सकती है। इसी बात के मर्म को समझते हुए महाराज जी के मार्गदर्शन से एवं दयालु
               कार्यकर्ताओं, अनुदानकर्ताओं की सहायता से यह कन्या आत्मनिर्भर अभियान देश भर में सुचारू रूप से संचालित
               किया जा रहा है।"
     />

     {/* Section 3 */}
     <ImageTextSection
       imgSrc={SectImg4}
       title="हमारे द्वारा प्रदान की जाने वाली सेवाएं एवं सुविधाएं"
       description={<>कन्या आत्मिर्भर अभियान के अंतर्गत VJM में हम कार्येकर्ताओं, स्व-सहयोगकर्ताओं, अनुदानकर्ताओं के सहयोग से
         सभी बालिकाओं के कल्याण हेतु जरुरी कदम उठ रहे हैं। यहाँ हम वंचित परिवारों से आने वाली बलिकाओं को उनका
         जीवन बदलने में हर सम्भव सहायता कर रहे हैं। जिसके जीवन बदलने में हर सम्भव सहायता कर रहे हैं। जिसके
         अंतर्गत हम निम्नलिखित सेवाएं जरूरतमंद बालिकाओं को उपलब्ध करवा रहे हैं ।
          {redLight}
         महाराज जी के मार्गदर्शन से शुरू हुआ यह प्रोजेक्ट उनके भक्तों और स्वंयसेवको के अनुदान से अब तक हज़ारो
         बच्चियों के जीवन में बदलाव ला चूका है । वर्तमान में इस ज्ञानदीप विधालय में नुर्सुरी से कक्षा 8 तक की
         पढाई करवाई जाती हैं। आज यहां कुल 2000+ से अधिक बालक - बालिकाएं शिक्षा ग्रहण कर रहे हैं। हुई इतने सरे
         बच्चों को पढ़ने के लिए कुशल एवं प्रशिक्षित शिक्षाओं का समिपत विभाग भी गठित किया गया है जो बच्चों को
         गुडवत्तापूण शिक्षण उपलब्ध करवा रहे हैं ।</>}
       reverse
     />
</div>
  )
}
