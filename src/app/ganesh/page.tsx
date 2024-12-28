import Contact from "./_components/Contact";
import Feedback from "./_components/Feedback";
import Mahayagya from "./_components/Mahayagya";
import Navbar from "./_components/Navbar";
import OnlineVardan from "./_components/OnlineVardan";
import Overview from "./_components/Overview";
import Science from "./_components/Science";
import Sharad from "./_components/Sharad";
import VardaanSiddhi from "./_components/VardaanSiddhi";
import Video from "./_components/Video";

export default function Page() {
    return(
        <div>
            <Navbar />
            <Overview />
            <VardaanSiddhi />
             <OnlineVardan />
            <Sharad />
            <Mahayagya />
            <Science />
            <Feedback />
            <Video />
            <Contact /> 
        </div>
    )
}