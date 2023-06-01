import Images from '../assets/Images'
import AutoImageSlider from './AutoImageSlider';
import { useState } from 'react';

const PortDesign = () =>{
    return(
        <div className='py-4 sm:px-4 md:px-12'>
            <div className='max-w-[1200px] grid sm:grid-cols-4 mx-auto p-4 gap-x-3 gap-y-3 grid-rows-2 md:grid-rows-none'>
                <div className='col-span-2'>
                    <AutoImageSlider/>
                </div>

                <div className='col-span-2 flex flex-col justify-start px-2 sm:px-6 sm:justify-center'>
                    <p className='text-md text-gray-400'>Design</p>

                    <h1 className='text-3xl font-lex'>Concept</h1>
                    <div class="w-[100%] py-4 flex flex-col">
                        <hr class="h-[3px] border-0 w-[10%] bg-black"/>
                    </div>

                    <div className='text-xs md:text-sm lg:text-md'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </div>
                    <div className='mt-4'>
                        <h1 className='text-xl font-lex'>Created</h1>
                        <p className='text-sm'>27/11/2003</p>
                    </div>

                    <div className='flex'>
                        <button className="p-2 px-3 border border-gray-950 text-lg hover:bg-gray-800 text-black hover:text-gray-200 hover:scale-110 transition-all ease-linear duration-250 rounded-md mt-6 md:text-xl md:py-2 md:px-6">
                            Visit Source
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortDesign;