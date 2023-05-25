import {AiOutlineWhatsApp,AiOutlineMail, AiOutlineInstagram, AiFillLinkedin,AiFillGithub,AiOutlineTwitter} from 'react-icons/ai';

const SocialBar = () => {
    return(
        <div>
            <ul className='flex-col fixed left-0 top-[30%] hidden md:flex'>
                <li className='flex justify-between w-[160px] h-[50px] items-center px-2 ml-[-110px] hover:ml-[0px] bg-sky-700 duration-500 ease-in-out rounded-e-md'>
                    <a href="" className='flex justify-between items-center w-full text-white'>
                        <p className='text-xl font-play'>Linked In</p>
                        <AiFillLinkedin size={40}/>
                    </a>
                </li>
                <li className='flex justify-between w-[160px] h-[50px] items-center px-2 ml-[-110px] hover:ml-0 bg-slate-400 duration-500 ease-in-out rounded-e-md'>
                    <a href="" className='flex justify-between items-center w-full text-white '>
                        <p className='text-xl font-play'>Github</p>
                        <AiFillGithub size={40}/>
                    </a>
                </li>
                <li className='flex justify-between w-[160px] h-[50px] items-center px-2 ml-[-110px] hover:ml-0 bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-600 duration-500 ease-in-out rounded-e-md'>
                    <a href="" className='flex justify-between items-center w-full text-white'>
                        <p className='text-xl font-play'>Instagram</p>
                        <AiOutlineInstagram size={40}/>
                    </a>
                </li>
                <li className='flex justify-between w-[160px] h-[50px] items-center px-2 ml-[-110px] hover:ml-0 bg-sky-400 duration-500 ease-in-out rounded-e-md'>
                    <a href="" className='flex justify-between items-center w-full text-white'>
                        <p className='text-xl font-play'>Twitter</p>
                        <AiOutlineTwitter size={40}/>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default SocialBar;