import Profile from '../assets/HomeBG.png'
import Images from '../assets/Images'
import {BsArrowRight} from 'react-icons/bs'
import { Link } from "react-scroll";
import RouteCollection from '../Routing/Route';
import { BrowserRouter,Route, Routes, useNavigate } from "react-router-dom";
import PortDesign from './PortDesign';

const Collection = () => {
    const Nav = useNavigate();

    const CardCollection = [
        {
            image1: Images.Test1,
            Date: "July 17 2023",
            DesignName : "Design Name",
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            image1: Images.Test2,
            Date: "July 17 2023",
            DesignName : "Design Name",
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            image1: Images.Test3,
            Date: "July 17 2023",
            DesignName : "Design Name",
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            image1: Images.Test4,
            Date: "July 17 2023",
            DesignName : "Design Name",
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            image1: Images.Test5,
            Date: "July 17 2023",
            DesignName : "Design Name",
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            image1: Images.Test1,
            Date: "July 17 2023",
            DesignName : "Design Name",
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
    ]

    const GetCard = (Card, index) => {
        return(
            <div className="max-w-[300px] rounded-xl overflow-hidden bg-slate-100 shadow-2xl" key={index}>
                <div className='max-w-[300px] overflow-hidden'>
                    <img src={Card.image1} alt="" className='w-full max-h-[200px] hover:scale-125 duration-300 ease-linear'/>
                </div>

                <div className='px-5 max-w-[400px] flex flex-col'>
                    <p className='mt-3 font-poppins text-sm text-gray-400 '>{Card.Date}</p>
                    <p className='mt-2 text-xl font-bold font-play'>{Card.DesignName}</p>
                    <p className='mt-3 text-xs font-poppins'>{Card.Desc}</p>                       
                </div>

                <button className='border rounded-md text-gray-800 border-gray-800 my-4 ml-5 text-md font-poppins'>
                    <button onClick={ () => Nav('/Collection')} className='w-[120px] flex flex-row  items-center justify-between py-2 px-2 '>
                        View More<BsArrowRight size={20}/>
                    </button>
                </button>
            </div> 
        )
    }


    return(
        <div className='text-gray-800 py-12' name='Collection'>
            <div className='max-w-[1200px] flex flex-col mx-auto mt-[20px] items-center'>
                <div className="text-2xl font-poppins md:text-4xl">Design & Portofolio</div>
                <div className="text-sm font-poppins md:text-md pt-1">Click the cards to see the details</div>
                <div className="text-xs md:text-lg">―――――――――― || ――――――――――</div>
                <div className='max-w-[1500px] flex flex-col gap-y-1 justify-center items-center'>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-between gap-x-5 p-5 gap-y-5">
                              {CardCollection.map(GetCard)}                               
                    </div>                       
                </div>

                <div className="text-xs md:text-lg mt-2 ">―――――――――― || ――――――――――</div>
            </div>
        </div>
    )
}

export default Collection;