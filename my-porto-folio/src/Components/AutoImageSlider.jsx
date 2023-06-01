import React, { useState, useEffect } from 'react';
import Images from '../assets/Images';

const AutoImageSlider = (Index) => {
    const images = [
        {
            url: Images.Test1
        },
        {
            url: Images.Test3
        },
        {
            url: Images.Test4
        },
        {
            url: Images.Test5
        }
    ]

  const [CurrIndex, setCurrIndex] = useState(0);

  useEffect(() => {

    const changeImage = () => {
      setCurrIndex( (Index) => (Index + 1) % images.length);
    };

    const intervalId = setInterval(changeImage, 3000);
    return () => clearInterval(intervalId);
  }, [images, 3000]);

  const GoToSlide = (slideIndex) => {
      setCurrIndex(slideIndex);
      return CurrIndex;
  }

  return (
    <div className='max-w-[700px] w-full mx-auto relative py-8 flex flex-col gap-y-2'>
      <div style={{backgroundImage: `url(${images[CurrIndex].url})`}} className="flex justify-center items-end w-full overflow-hidden bg-center bg-cover ease-[cubic-bezier(0.95,0.05,0.795,0.035)] duration-200 shadow-xl max-w-full h-[400px] rounded-md">
        <div className="flex justify-center py-2 items-center gap-x-3 w-full">
          {images.map((_, slideIndex) => (
            <div key={slideIndex}  className="flex justify-center">
              {slideIndex == CurrIndex ? <button className="w-3 h-3 rounded-full  bg-white"></button> : <button className="w-2 h-2 rounded-full bg-white"></button> }
            </div>
          ))}     
        </div>
      </div>
      <div className='flex flex-row justify-between'>
        {images.map((_, slideIndex) => (
             <div key={slideIndex} onClick={() => GoToSlide(slideIndex)} className='cursor-pointer'>
                {slideIndex == CurrIndex ? <img src={images[slideIndex].url} alt="" className='w-[140px] h-[100px] opacity-70 rounded-md'/> : <img src={images[slideIndex].url} alt="" className='w-[140px] h-[100px] rounded-md'/>}
            </div>
          ))}
      </div>
    </div>
  );
};

export default AutoImageSlider;