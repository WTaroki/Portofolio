import { BrowserRouter as Router,Route, Routes,useNavigate } from "react-router-dom";
import Collection from "../Components/Collection";
import { Link } from "react-scroll";
import {BsArrowRight} from 'react-icons/bs'

const RouteCollection = () =>{
    const Nav = useNavigate();

    return(
        <Router>
            <Routes>
                <Route path="/Collection" element={<Collection/>} />
            </Routes>
        </Router>
    )
}

export default RouteCollection;