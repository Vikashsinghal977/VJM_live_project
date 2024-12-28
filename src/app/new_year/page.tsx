import React from 'react'
import Overview from './components/Overview'
import Yagna from "./components/Yagna"
import Sadhna from './components/Sadhna'
import Bhandara from './components/Bhandara'
import Meditate from './components/Meditate'
import Shobha from './components/Sobha'
import Bhagan from './components/Bhagan'
import Gift from './components/Gift'
import Blanket from './components/Blanket'
import Video from './components/Video'
import Benefits from './components/Benefits'
import Shivalay from './components/Shivalay'
import Navbar from './components/Navbar'

const page = () => {
  return (
    <div>
      <Navbar />
       <Overview/>
      <Yagna/>
      <Benefits/>
      <Gift />
      <Video/>
      <Sadhna/>
      <Meditate/>
      <Shobha/>
      <Shivalay/>
      <Bhagan/>
      <Bhandara/>   
      <Blanket/> 
    </div>
  )
}

export default page
