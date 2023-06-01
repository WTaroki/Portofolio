import NavbarMobile from '../Components/NavbarMobile'
import SideBar from '../Components/NavSideBar'
import SocialBar from '../Components/SocialBar'
import HomeContent from '../Components/HomePage'
import Collection from '../Components/Collection'
import { BrowserRouter,Route,Routes} from "react-router-dom";
import { Link } from "react-scroll";

const MainPage = () => {
    return(
        <div>
            <NavbarMobile/>
            <SideBar/>
            <SocialBar/>
            <HomeContent/>
            <Collection/>
        </div>
    )
}

export default MainPage;