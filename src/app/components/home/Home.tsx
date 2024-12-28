import React from 'react';
import Hero from './_components/Hero';
import UpcomingEvent from './_components/UpcomingEvent';
import Banner from './_components/Banner';
import Balkalyan from './_components/Balkalyan';
import AnandDhamSec from './_components/AnandDhamSec';
import Wisdom from './_components/Wisdom';
import InputEmail from './_components/InputEmail';
import TestimonialSec from './_components/TestimonialSec';

export default function Home() {
    return (
        <div>
            <Hero />
            <UpcomingEvent />
            <Banner />
            <Balkalyan />
            <AnandDhamSec />
            <Wisdom />
            <InputEmail />
            <TestimonialSec />
        </div>
    )
}
