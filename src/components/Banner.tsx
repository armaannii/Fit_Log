import Image from 'next/image';
import React from 'react';
import bannerImage from "@/assets/banner.png";

import { Oswald } from "next/font/google";
import Link from 'next/link';
const oswald = Oswald({
  subsets: ["latin"],
});

const Banner = () => {
    return (
        <div className='container mx-auto flex pl-10 py-10 bg-[#15171D] rounded-2xl my-10'>
            <div className='flex-1 my-auto'>
                <h6 className='font-bold text-[11px] text-[#C2F800]'>WORKOUT LIBRARY</h6>
                <h1 className={`text-[60px] font-extrabold tracking-[-1.5px] leading-14 my-5 ${oswald.className} `}>TRAIN WITH INTENT. LOG <br/> EVERY SET.</h1>
                <p className='text-[16px] text-[#9CA3AF]'>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br/> into todays plan, and watch the weeks work add up.</p>
                <Link href={""} >
                    <button className='btn bg-[#C2F800] text-[#000000] font-bold text-[10px] mt-5 outline-none rounded-lg'>
                        BROWSE WORKOUTS
                    </button>
                </Link>
            </div>
            <Image src={bannerImage} alt='Banner Image'></Image>
        </div>
    );
};

export default Banner;
//className='outline-none w-full h-full'