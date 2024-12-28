'use client'
import React, { useEffect } from 'react'
import Education from './_components/Education'
import Avlokan from './_components/Avlokan'
import Stories from './_components/Stories'
import Anudankarta from './_components/Anudankarta'
import HowItWorks from './_components/HowItWorks'
import ProfitSection from './_components/ProfitSection'
import DonationSection from './_components/DonationSection'
import HelpinDonation from './_components/HelpinDonation'
import BenifitSection from './_components/BenifitSection'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Kanya() {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration (in milliseconds)
            once: false // Whether animation should happen only once
        });
    }, []);

    return (
        <div>
            <Education />
            <Avlokan />
            <Stories />
            <Anudankarta />
            <HowItWorks />
            <ProfitSection />
            <BenifitSection />
            <DonationSection />
            <HelpinDonation />
        </div>
    )
}
