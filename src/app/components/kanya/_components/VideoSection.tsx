import React from 'react'

export default function VideoSection() {
    return (
        <div className="bg-orange-100">

            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-4" data-aos="fade-in" data-aos-duration="1000">
                {/* Text Content */}
                <div className="lg:w-3/12 w-full " >
                    <div className=" lg:text-3xl text-xl text-center lg:text-left font-bold text-orange-500 mb-4 mt-4" data-aos="fade-up" data-aos-duration="1000">
                        <h1>
                            देश के वर्त्तमान परिवेश
                        </h1>

                        <h1 className=" md:mt-4 mt-2">में बालिकाओं की स्थिति</h1>
                    </div>
                    <p className="text-gray-700 font-bold lg:text-lg text-sm lg:px-0 md:px-16 px-10 lg:text-left text-justify" data-aos="fade-up" data-aos-duration="1000">
                        हमारा समाज भले ही कितनी तरक्की कर चुका है परन्तु आज भी जब बेटे और बेटियों
                        की बात आती है तो बेटियों से ही उनकी इच्छाओं और खुशियों की बलि मांगी
                        जाती है। वहीं जब बात हो आर्थिक रूप से कमजोर घर के जन्म लेने वाली
                        बेटियों की तो आज भी उन्हें बोझ ही माना जाता है। गरीब परिवारों में जन्म
                        लेने वाली बेटियों को आज भी धकेल दिया जाता है। जो बालिकाएं सही दिशा
                        मिलने पर समाज को दिखा सकती हैं, ऐसी दिशाविहीन बालिकाओं को कम उम्र में
                        जाने कितनी तकलीफों का सामना करना पड़ जाता है।
                    </p>
                </div>

                {/* Video Section */}
                <div className="lg:w-7/12 w-full flex justify-center px-10 mb-4 md:mb-0 md:px-16 lg:px-0" data-aos="fade-up" data-aos-duration="1000">
                    <iframe
                        className="w-full aspect-video rounded-lg shadow-lg"
                        src="https://www.youtube.com/embed/_Tf2jQlqH9A?si=gYOS0Fdxo7nU1Hy5"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    )
}
