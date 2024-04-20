import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Resume from '../Pages/Resume'
import Portfolio from '../Pages/Portfolio'
import logo from "../assets/akashLogo.png"

const Header = () => {

    const [barActive, setBarActive] = useState(true)

    const hamActive = () => {
        barActive ? setBarActive(false) : setBarActive(true)
    }

    const hero = useRef(null)
    const about = useRef(null)
    const resume = useRef(null)
    const project = useRef(null)

    const goHero = () => hero.current?.scrollIntoView({ behavior: 'smooth' })
    const goAbout = () => about.current?.scrollIntoView({ behavior: 'smooth' })
    const goResume = () => resume.current?.scrollIntoView({ behavior: 'smooth' })





    return (

        <>

            <header className='flex w-full justify-between h-[3.7rem] bg-[#111111] md:pl-14 md:pr-6 lg:pl-16 lg:pr-8 lg:p-3 text-white items-center  z-[100] py-[10px] px-6 shadow-[-1px_1px_7px_#000] fixed top-0 left-0 '>
                <div className=' w-[2rem] h-[2rem] flex items-center justify-center md:hidden cursor-pointer text-[#ffffff]' onClick={hamActive}>
                    {barActive ? <FontAwesomeIcon icon={faBars} className='text-[1.3rem]' />
                        : <FontAwesomeIcon icon={faXmark} className='text-[1.6rem]' />}
                </div>
                <img src={logo} className='md:mr-6 lg:mr-10 w-[1.7rem]' />
                <nav className={` text-white md:border-0 shadow-[0px_160px_1000px_#12073ac5] md:shadow-none flex p-4 pb-10 md:p-0 w-screen md:max-w-[80vw] md:bg-transparent bg-[#151515f0] items-center justify-between gap-3 md:gap-0 flex-col absolute 
        ${barActive ? "top-[2.95rem] left-[-60rem] duration-[0.5s]" : "top-[2.85rem] left-0 duration-[0.5s]"}
         md:flex-row md:static `}>
                    <div className="flex flex-col gap-3 md:flex-row md:gap-0">

                        <div onClick={goHero} className='text-[1.05rem] 
                        tracking-wide 
                        w-[90vw] md:w-fit text-center md:border-0
                        md:hover:border-b-2
                        pb-4 pt-1 md:p-[3px_7px] md:m-[0px_6px]
                        lg:p-[3px_9px] lg:m-[0px_11px]
                         border-grey hover:border-[#cfcfcf] hover:text-[#cfcfcf]
                         duration-200 cursor-pointer 
                         border-b-[1px]'>
                            Home
                        </div >
                        <div onClick={goAbout} className='text-[1.05rem] 
                        tracking-wide 
                        w-[90vw] md:w-fit text-center md:border-0
                        md:hover:border-b-2
                        pb-4 pt-1 md:p-[3px_7px] md:m-[0px_6px]
                        lg:p-[3px_9px] lg:m-[0px_11px]
                         border-grey hover:border-[#cfcfcf] hover:text-[#cfcfcf]
                         duration-200 cursor-pointer 
                         border-b-[1px]'>
                            About
                        </div >
                        <div onClick={goResume} className='text-[1.05rem] 
                        tracking-wide 
                        w-[90vw] md:w-fit text-center md:border-0
                        md:hover:border-b-2
                        pb-4 pt-1 md:p-[3px_7px] md:m-[0px_6px]
                        lg:p-[3px_9px] lg:m-[0px_11px]
                         border-grey hover:border-[#cfcfcf] hover:text-[#cfcfcf]
                         duration-200 cursor-pointer 
                         border-b-[1px]'>
                            Resume
                        </div >
                    </div>
                </nav>
            </header>
            <div ref={hero}>
                <Home />
            </div>

            <div ref={about}>
                <About />

            </div>

            <div ref={resume}>
                <Resume />

            </div>


            <div >
                <Portfolio />

            </div>
        </>

    )
}

export default Header