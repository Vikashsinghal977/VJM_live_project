"use client";
import React, { useEffect, useState } from "react";
import AvlokanImgtext from "./AvlokanImgtext";
import VideoSection from "./VideoSection";
import KyaAatmnirbhar from "./KyaAatmnirbhar";
import Uniform from "./Uniform";
import SkillDevelopment from "./SkillDevelopment";
import Prabhav from "./Prabhav";
import Stories from "./Stories";

export default function Avlokan() {

    const [activeSection, setActiveSection] = useState("overview");

    const sections = [
        { id: "overview", label: "Overview" },
        { id: "history", label: "What We Do/History" },
        { id: "impact", label: "Impact" },
        { id: "stories", label: "Stories" },
    ];

    // Scroll event handler
    const handleScroll = () => {
        sections.forEach((section) => {
            const element = document.getElementById(section.id);
            if (element) {
                const rect = element.getBoundingClientRect();
                if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
                    setActiveSection(section.id);
                }
            }
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <div className="relative my-10">
            <AvlokanImgtext />

            {/* Sticky Navigation */}
            <div
                className="container3 text-center md:text-2xl sm:text-lg text-gray-400 md:p-6 mt-8 sticky top-24 bg-white z-10"
                data-aos="fade-in"
                data-aos-duration="1000"
            >
                {sections.map((section) => (
                    <span
                        key={section.id}
                        className={`word font-cinzel font-semibold mx-3 ${activeSection === section.id
                            ? "text-orange-500 border-b-2 border-orange-500"
                            : ""
                            }`}
                    >
                        {section.label}
                    </span>
                ))}
            </div>

            {/* Sections */}
            <section
                id="overview"
                className="overview mt-8 md:w-10/12 w-full mx-auto px-10 md:px-0 container"
                data-aos="fade-up"
                data-aos-duration="1000"
            >
                <div className="overview-heading text-center text-orange-500 md:text-3xl text-2xl font-bold">
                    <h1>अवलोकन</h1>
                </div>
                <div
                    className="mb-10 container flex overview-content font-bold text-sm md:text-lg md:mt-8 mt-6"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    <p id="overviewText" className="hidden-content text-justify">
                        नर और नारी प्रकृति के द्वारा बनाई गई ऐसी रचना हे जो एक दूसरे की पूरक
                        हैं... Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam libero, ullam asperiores molestiae, alias omnis corporis iusto magni fuga quae quidem quod quasi accusantium rerum tenetur, facere amet et. Consectetur accusamus, odit saepe adipisci inventore error iste officia reiciendis voluptate perferendis quas perspiciatis explicabo unde. Quidem, blanditiis facere? Temporibus, iure! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta ullam nam rerum sed laborum tempore, eum culpa reiciendis aut error suscipit iusto rem, aliquam veritatis voluptatibus placeat non accusantium vero dignissimos dolores nulla! Ipsa rerum corporis porro possimus, numquam ab. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ex earum expedita rem exercitationem saepe molestias laborum accusamus nulla! Voluptatibus, magnam in nihil ad, molestias cumque doloribus aspernatur inventore aliquam vitae ipsa rerum, iste cum eligendi sit atque accusamus voluptas architecto voluptates dignissimos labore necessitatibus nulla quisquam? Quis, sit quas.
                    </p>
                    <div className="flex items-end text-orange-500 text-3xl">

                        <button
                            id="PlusButton"
                            onClick={() => {
                                const PlusButton = document.getElementById("PlusButton");
                                const overviewText = document.getElementById("overviewText");

                                if (PlusButton && overviewText) {
                                    if (overviewText.classList.contains("hidden-content")) {
                                        overviewText.classList.remove("hidden-content");
                                        overviewText.classList.add("expanded-content");
                                        PlusButton.textContent = "−";
                                    } else {
                                        overviewText.classList.remove("expanded-content");
                                        overviewText.classList.add("hidden-content");
                                        PlusButton.textContent = "+";
                                    }
                                }
                            }}
                        >
                            +
                        </button>
                    </div>
                </div>
            </section>

            {/* <section id="history" className="h-screen bg-gray-200 p-20">
        <h1 className="text-3xl font-bold">What We Do/History Section</h1>
      </section>
      <section id="impact" className="h-screen bg-gray-300 p-20">
        <h1 className="text-3xl font-bold">Impact Section</h1>
      </section>
      <section id="stories" className="h-screen bg-gray-400 p-20">
        <h1 className="text-3xl font-bold">Stories Section</h1>
      </section> */}

            {/* Other Components */}
            <VideoSection />
            <KyaAatmnirbhar />
            <Uniform />
            <SkillDevelopment />
            <Prabhav />
        </div>
    )
}
