import {AiOutlineTwitter,AiOutlineWhatsApp,AiOutlineSkype,AiOutlineMail, AiOutlineInstagram, AiFillHome,AiFillLinkedin,AiFillGithub,AiOutlineUser,AiFillSkype,AiFillPhone,AiFillMessage, } from 'react-icons/ai';
import {BiLeftArrow} from 'react-icons/bi'
import {Link} from 'react-scroll';
import HomeContent from '../Components/HomePage';
import Collection from '../Components/Collection';

const SideBar = () => {
    return(
    <div>
        <nav className="fixed top-[30%] right-0 overflow-hidden rounded-md">
        <div className="container mx-auto">
            <div className="w-full flex-col mx-auto items-center max-w-[80px] h-[200px] text-white backdrop-blur-2xl text-2xl hidden sm:flex bg-gray-400">
                <Link to='Home' className = "w-[50px] h-[50px] flex items-center justify-center bg-transparent hover:bg-gray-800" smooth={true} duration={500}><AiFillHome className='bg-transparent rounded-md duration-500' size={30} /></Link>
                <Link to='Collection' className = "w-[50px] h-[50px] flex items-center justify-center bg-transparent hover:bg-gray-800" smooth={true} duration={500}><BiLeftArrow className='bg-transparentrounded-md duration-500' size={30}/></Link>
                <Link className = "w-[50px] h-[50px] flex items-center justify-center bg-transparent hover:bg-gray-800" smooth={true} duration={500}><BiLeftArrow className='bg-transparent rounded-md duration-500' size={30}/></Link>
                <Link className = "w-[50px] h-[50px] flex items-center justify-center bg-transparent hover:bg-gray-800" smooth={true} duration={500}><BiLeftArrow className='bg-transparent rounded-md duration-500' size={30}/></Link>
            </div>
        </div>
        </nav>
        <nav className="w-full bottom-4 fixed HP:bottom-8 z-50 overflow-hidden px-4 sm:hidden">
            <div className="container mx-auto">
                <div className="w-full bg-black/20 flex flex-row mx-auto items-center rounded-full justify-between max-w-[460px] h-[80px] text-white backdrop-blur-2xl text-2xl px-5">
                    <Link className = "cursor-pointer w-[60px] h-[60px] flex items-center justify-center"><BiLeftArrow className='bg-transparent rounded-md duration-500' size={30}/></Link>
                    <Link className = "cursor-pointer w-[60px] h-[60px] flex items-center justify-center"><BiLeftArrow className='bg-transparent rounded-md duration-500' size={30}/></Link>
                    <Link className = "cursor-pointer w-[60px] h-[60px] flex items-center justify-center"><BiLeftArrow className='bg-transparent rounded-md duration-500' size={30}/></Link>
                    <Link className = "cursor-pointer w-[60px] h-[60px] flex items-center justify-center"><BiLeftArrow className='bg-transparent rounded-md duration-500' size={30}/></Link>
                </div>
            </div>
        </nav>
    </div>
    )
}

export default SideBar;