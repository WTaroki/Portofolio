import { useState } from 'react'
import NavbarMobile from './Components/NavbarMobile'
import SideBar from './Components/NavSideBar'
import SocialBar from './Components/SocialBar'
import HomeContent from './Components/HomePage'
function App() {
  return (
    <div>
      <NavbarMobile/>
      <SideBar/>
      <SocialBar/>
      <HomeContent/>
    </div>
  )
}

export default App
