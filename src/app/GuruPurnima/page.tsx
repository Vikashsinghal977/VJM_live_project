import React from 'react'
import OverView from './_components/OverView'
import Purnima from './_components/Purnima'
import Mahotsav from './_components/Mahotsav'
import Mantra from './_components/Mantra'
import Benefits from './_components/Benefits'
import Video from './_components/Video'
import Divya from './_components/Divya'
import Attend from './_components/Attend'
import Diksha from './_components/Diksha'
import VideoCarousel from './_components/VideoCarousal'
import Bhajan from './_components/Bhajan'
import Navbar from './_components/Navbar'

export default function page() {
  return (
    <div>
        <Navbar />
        <OverView/>
        <Mahotsav/>
        <Mantra/>
        <Benefits/>
        <Video/>
        <Divya/>
        <Attend/>
        <Diksha/>
        <Purnima/>
        <Bhajan/>
        <VideoCarousel/>
    </div>
  )
}
