import { BrowserRouter as Router,Route, Routes,useNavigate } from "react-router-dom";
import CollectionPage from "../Components/CollectionPage";
import { Link } from "react-scroll";
import {BsArrowRight} from 'react-icons/bs'

const RouteCollection = () =>{
    const Nav = useNavigate();

    return(
        <Router>
            <Routes>
                <Route path="/CollectionPage" element={<CollectionPage/>} />
            </Routes>
        </Router>
    )
}

export default RouteCollection;