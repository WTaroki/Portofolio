import { useState } from "react"
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import LogoBrand from '../assets/LogoBlack.png';

const NavbarMobile = () => {
    const ChangeStyles = ['fixed flex left-[-100%] top-0 h-full bg-[#2b6777] ease-in-out duration-500','fixed flex left-0 top-0 w-[100%] h-full bg-[#2b6777] ease-in-out duration-500 justify-center'];
    const [Change, setChange] = useState(0);
    const [ChangeIcon, setChangeIcon] = useState(true);

    const ClickNav = () => {
        setChange( (Change + 1) % ChangeStyles.length);
        setChangeIcon(!ChangeIcon);
    }

    return(
        <div className="flex items-center h-10 max-w-[1800px] mx-auto px-4 "> 
            <div className=" text-2xl cursor-pointer flex items-center font-lora pt-8">
                    <span className="flex flex-row items-center">
                        <img className="w-10 h-10 mt-2" src={LogoBrand}/>
                        <p className='text-3xl font-play font-bold md:py-6  text-gray-800'>WeTe</p>
                    </span>
            </div>


            <div onClick={ClickNav} className="HP:hidden right-0 fixed top-0 py-3 px-3">
                {ChangeIcon ? <AiOutlineMenu size={20} className="transition-transform duration-300"/> : <AiOutlineClose size={20} className="transition-transform"/>}
            </div>
            <div className={ChangeStyles[Change]} onClick={ClickNav}>
                <h3 className="pt-10 text-5xl font-bold font-play fixed bg-[#2b6777] text-center ml-5">WeTe</h3>
                <ul className="pt-40 ml-5 bg-[#2b6777] text-center text-2xl">
                    <li className="p-3 bg-[#2b6777]">HOME</li>
                    <li className="p-3 bg-[#2b6777]">ABOUT</li>
                    <li className="p-3 bg-[#2b6777]">CONTACT</li>
                    <li className="p-3 bg-[#2b6777]">SIGN IN</li>
                    <li className="p-3 bg-[#2b6777]">REGISTER</li>
                </ul>
            </div>
        </div>

    );
}

export default NavbarMobile;