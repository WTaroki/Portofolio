import { useState } from 'react'
import NavbarMobile from './Components/NavbarMobile'
import SideBar from './Components/NavSideBar'
import SocialBar from './Components/SocialBar'
import HomeContent from './Components/HomePage'
import Collection from './Components/Collection'

function App() {
  return (
    <div>
      <NavbarMobile/>
      <SideBar/>
      <SocialBar/>
      <Collection/>
    </div>
  )
}

export default App
