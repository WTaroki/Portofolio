import { useState } from 'react'
import MainPage from './Components/MainPage';
import { BrowserRouter,Route,Routes} from "react-router-dom";
import { Link } from "react-scroll";
import PortDesign from './Components/PortDesign'
import ImageSlider from './Components/ImageSlider'
import CollectionPage from './Components/CollectionPage';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainPage/>} />
            <Route path="/CollectionPage" element={<CollectionPage/>} />
        </Routes>
    </BrowserRouter>

  )
}

export default App
