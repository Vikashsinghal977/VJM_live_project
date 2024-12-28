
import Faq from "./_components/Faq";
import Navbar from "./_components/Navbar";
import Hero from "./_components/Hero";
import Newlife from "./_components/Newlife";
import ProgramReq from "./_components/Programreq";
import ProgramInfo from "./_components/Programinfo";
import ProgramOffer from "./_components/Programoffer";
import LifestyleSessions from "./_components/LifeSyle";

export default function Page() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Newlife />

            <ProgramReq />
            <Faq />
            <ProgramInfo />
            <ProgramOffer />
            <LifestyleSessions />
        </div>
    )
}