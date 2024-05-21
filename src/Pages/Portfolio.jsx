import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import project1 from '../assets/project1.mp4'
import project2 from '../assets/project2.mp4'
import project3 from '../assets/project3.png'
import project4 from '../assets/project4.png'
import AOS from "aos";
import "aos/dist/aos.css";

const Portfolio = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div className='flex flex-col  justify-center w-full gap-3 p-2 py-10 bg-[#00000063] backdrop-blur-md lg:gap-20 items-center '>
            <div className='lg:max-w-[65rem] sm:max-w-[40rem] w-full  px-1 '>
                <div data-aos="fade-up" className='flex items-center justify-start gap-2'>
                    <p className='font-semibold tracking-widest text-[#c6c5c5]'>PORTFOLIO </p>
                    <div className='w-20 h-[0.85px] bg-[#18D26E]'></div>
                </div>
                <p data-aos="fade-up" className='text-white text-[1.8rem] tracking-wide font-poppins font-semibold uppercase'>Our Works</p>
                <div className=' columns-1 mx-1 gap-5 lg:gap-8 mt-4 sm:columns-2 lg:columns-3 [&>img:not(:first-child)]:mt-5'>
                    <Link to={'https://github.com/webakash1806/LMS-MERN'}>
                        <video src={project1} className='rounded mt-6  shadow-[0px_0px_1px_#18D26E]' loop autoPlay playsInline muted alt="portfolio image" ></video>
                    </Link>
                    <Link to={'https://github.com/webakash1806/cryptoworld'}>
                        <video src={project2} className='rounded mt-6  shadow-[0px_0px_1px_#18D26E]' loop autoPlay playsInline muted alt="portfolio image" ></video>
                    </Link>
                    <Link to={'https://github.com/webakash1806/snacky'}>
                        <img src={project3} className='rounded mt-6  shadow-[0px_0px_1px_#18D26E]' alt="portfolio image" />
                    </Link>
                    <Link to={'https://github.com/webakash1806/patilkaki-project'}>
                        <img src={project4} className='rounded mt-6 w-full  shadow-[0px_0px_1px_#18D26E]' alt="portfolio image" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Portfolio
