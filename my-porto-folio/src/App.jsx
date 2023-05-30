import { useState } from 'react'
import NavbarMobile from './Components/NavbarMobile'
import SideBar from './Components/NavSideBar'
import SocialBar from './Components/SocialBar'
import HomeContent from './Components/HomePage'
import Collection from './Components/Collection'
import { BrowserRouter,Route } from "react-router-dom";
import { Link } from "react-scroll";
import PortDesign from './Components/PortDesign'
import ImageSlider from './Components/ImageSlider'

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* <NavbarMobile/>
        <SideBar/>
        <SocialBar/> */}
        <ImageSlider/>
      </div>
    </BrowserRouter>

  )
}

export default App
