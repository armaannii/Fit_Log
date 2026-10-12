import Image from 'next/image';
import React from 'react';
import bannerImage from "@/assets/banner.png";

import { Oswald } from "next/font/google";
const oswald = Oswald({
    subsets: ["latin"],
});

const Banner = () => {
    return (
        <div className='container mx-auto flex flex-col md:flex-row items-center justify-between px-4 lg:px-10 py-6 lg:py-10 bg-[#15171D] rounded-2xl my-6 lg:my-10 gap-8'>
            {/* Left Content */}
            <div className='flex-1 text-center lg:text-left'>
                <h6 className='font-bold text-[14px] text-[#C2F800]'>WORKOUT LIBRARY</h6>
                <h1 className={`bg-green-500 text-[38px] sm:text-[48px] lg:text-[60px] font-extrabold tracking-[-1.5px] leading-tight lg:leading-14 my-4 ${oswald.className}`}>
                    TRAIN WITH INTENT. LOG <br className='hidden sm:block'/> EVERY SET.
                </h1>
                <p className='text-[15px] sm:text-[16px] text-[#9CA3AF] max-w-xl mx-auto lg:mx-0'>
                    FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today&#39;s plan, and watch the week&apos;s work add up.
                </p>
                <a href="#workout-library">
                    <button className='btn bg-[#C2F800] text-[#000000] font-bold text-[10px] mt-6 outline-none rounded-lg px-6'>
                        BROWSE WORKOUTS
                    </button>
                </a>
            </div>

            {/* Right Image Container */}
            <div className='flex-1 w-full max-w-md lg:max-w-none flex justify-center'>
                <Image 
                    src={bannerImage} 
                    alt='Banner Image' 
                    className='w-full h-auto object-contain max-h-100 lg:max-h-none'
                    priority 
                />
            </div>
        </div>
    );
};

export default Banner;