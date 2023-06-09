import Typed from 'react-typed';
import Profile from '../assets/Profile.png'

const HomeContent = () => {
    return (
        <div className='text-gray-800' name='Home'>

            <div className='max-w-[1200px] mt-[20px] px-5 h-screen flex flex-col justify-center items-center md:px-20 lg:flex-row gap-y-10 lg:mt-[-80px] mx-auto'>
              <div className="max-w-[650px] mx-auto flex flex-col justify-center">
                    <p className='HP:text-xl text-gray-800'><br />――― <span className='font-poppins font-bold text-xl'>Welcome</span> </p>
                    <h3 className=' text-1xl mt-2 text-gray-600 font-bold font-play md:text-2xl md:py-2'><Typed strings={['Bonjour','Halo','Hello','Hallo','Aloha']} loop typeSpeed={120} backSpeed={120} className='font-caveat font-bold text-gray-800 text-3xl'/>, I'm</h3>
                    <h2 className=" text-2xl md:text-6xl font-bold md:py-2 HP:text-4xl text text-sky-900 mt-2">Quite Taroki</h2>
                    <h3 className=' text-md text-gray-700 font-bold font-play md:text-md md:py-2 mt-2 md:mt-0'>Web Developer | Punya Toko | Kerok Expert</h3>
                    <p className='font-poppins mt-6 max-w-[500px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    <p className="">
                        <button className="p-1 px-2 border hover:border-gray-950 hover:scale-110 text-lg bg-gray-800 text-white hover:text-opacity-75 transition-all ease-linear duration-250 rounded-md mt-6 md:text-xl md:p-2 md:px-4">Learn More</button>
                    </p>
                </div>
                
                <div className='max-w-[900px] flex justify-center items-center'>
                    <img src={Profile} alt="" className='w-[550px] max-h-[420px]'/>
                </div>
            </div>
        </div>
    )
}

export default HomeContent;