import Images from "../assets/Images"
import React, {useState} from "react"

const ImageSlider = () => {
    const images = [
        {
            url: Images.Test1
        },
        {
            url: Images.Test2
        },
        {
            url: Images.Test3
        },
        {
            url: Images.Test4
        },
    ]

    return(
        <div className="max-w-[1400px] h-[700px] w-full m-auto py-16 px-4 relative">
            <div style={{backgroundImage: `url(${images[0].url})`}} className="w-full h-full rounded-md bg-center bg-cover duration-500">

            </div>
        </div>
    )
}

export default ImageSlider;