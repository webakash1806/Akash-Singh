import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Resume from '../Pages/Resume'
import Portfolio from '../Pages/Portfolio'
import logo from "../assets/akashLogo.png"
import Contact from '../Pages/Contact'
import {
    BsFacebook,
    BsInstagram,
    BsLinkedin,
    BsTwitter,
    BsWhatsapp
} from 'react-icons/bs'

import { MdKeyboardDoubleArrowRight, MdOutlineSmartphone } from "react-icons/md";
import { CiClock1 } from "react-icons/ci";
import { IoMdMail } from "react-icons/io";

import { FaLocationDot, FaSquareXTwitter } from 'react-icons/fa6';
import { FaGithubSquare } from 'react-icons/fa'

const Header = () => {

    const [barActive, setBarActive] = useState(true)

    const hamActive = () => {
        barActive ? setBarActive(false) : setBarActive(true)
    }

    const hero = useRef(null)
    const about = useRef(null)
    const resume = useRef(null)
    const portfolio = useRef(null)
    const contact = useRef(null)

    const goHero = () => {
        setBarActive(false)
        hero.current?.scrollIntoView({ behavior: 'smooth' })

    }
    const goAbout = () => {
        about.current?.scrollIntoView({ behavior: 'smooth' })
    }
    const goResume = () => resume.current?.scrollIntoView({ behavior: 'smooth' })
    const goPortfolio = () => portfolio.current?.scrollIntoView({ behavior: 'smooth' })
    const goContact = () => contact.current?.scrollIntoView({ behavior: 'smooth' })


    const listStyle = "text-[0.95rem] hover:pl-2 flex items-center gap-1 hover:bg-clip-text hover:text-transparent hover:bg-[linear-gradient(to_right,#35C8F2,#27B872)] font-semibold  text-slate-300 transition-all duration-300 ease-in-out"
    const contactStyle = "text-[0.95rem] flex items-start sm:items-center lg:items-start gap-1 hover:bg-clip-text hover:text-transparent hover:bg-[linear-gradient(to_right,#35C8F2,#27B872)] font-semibold  text-slate-300 "

    const year = new Date().getFullYear()


    const navStyle = "text-[1.05rem] tracking-wide w-[90vw] md:w-fit text-center md:border-0 md:hover:border-b-2 pb-4 pt-1 md:p-[3px_7px] md:m-[0px_6px] lg:p-[3px_9px] lg:m-[0px_11px] border-grey hover:border-[#cfcfcf] hover:text-[#cfcfcf] duration-200 cursor-pointer  border-b-[1px]"

    return (

        <>

            <header className='flex w-full justify-between h-[3.7rem] bg-[#111111] md:pl-14 md:pr-6 lg:pl-16 lg:pr-8 lg:p-3 text-white items-center  z-[100] py-[10px] px-6 shadow-[-1px_1px_7px_#000] fixed top-0 left-0 '>
                <div className=' w-[2rem] h-[2rem] flex items-center justify-center md:hidden cursor-pointer text-[#ffffff]' onClick={hamActive}>
                    {barActive ? <FontAwesomeIcon icon={faBars} className='text-[1.3rem]' />
                        : <FontAwesomeIcon icon={faXmark} className='text-[1.6rem]' />}
                </div>
                <img onClick={goHero} src={logo} alt='logo' className='cursor-pointer md:mr-6 lg:mr-10 w-[1.7rem]' />
                <nav className={` text-white md:border-0 shadow-[0px_160px_1000px_#12073ac5] md:shadow-none flex p-4 pb-10 md:p-0 w-screen md:max-w-[80vw] md:bg-transparent bg-[#151515f0] items-center justify-between gap-3 md:gap-0 flex-col absolute 
        ${barActive ? "top-[2.95rem] left-[-60rem] duration-[0.5s]" : "top-[2.85rem] left-0 duration-[0.5s]"}
         md:flex-row md:static `}>
                    <div className="flex flex-col gap-3 md:flex-row md:gap-0">

                        <Link onClick={() => {
                            goHero()
                            hamActive()
                        }} className={navStyle}>
                            Home
                        </ Link>
                        <Link onClick={() => {
                            goAbout()
                            hamActive()
                        }} className={navStyle}>
                            About
                        </Link >
                        <Link onClick={() => {
                            goResume()
                            hamActive()
                        }} className={navStyle}>
                            Resume
                        </Link >
                        <Link onClick={() => {
                            goPortfolio()
                            hamActive()
                        }} className={navStyle}>
                            Portfolio
                        </Link>
                        <Link onClick={() => {
                            goContact()
                            hamActive()
                        }} className={navStyle}>
                            Contact
                        </Link>
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


            <div ref={portfolio}>
                <Portfolio />

            </div>

            <div ref={contact}>
                <Contact />

            </div>
            <footer className='text-white bg-[#010a0390] backdrop-blur-sm'>
                <div className='flex footer-img  relative flex-col xl:flex-row p-[2.5rem_1rem] md:p-[2.5_5rem] gap-8 xl:justify-around'>
                    <div className='flex flex-col gap-2'>
                        <Link onClick={goHero} className='flex items-end gap-[1px] text-[1.2rem]'><img src={logo} className='w-[2rem]' alt="logo" /></Link>
                        <p className='leading-6 xl:w-[23rem] w-full'>Motivated MERN Stack Web Developer adept in both front-end and back-end technologies. Eager to apply academic knowledge and practical skills to dynamic projects. Seeking a challenging and rewarding career in web development.</p>
                        <div className='flex gap-4 mt-3'>
                            <Link to={"https://www.linkedin.com/in/itsakash18/"} target='_blank' className='text-[20px]'><BsLinkedin /></Link>
                            <Link to={"https://github.com/webakash1806"} target='_blank' className='text-[20px]'><FaGithubSquare /></Link>
                            <Link target={`_blank`} to="https://wa.me/+916207234759" className='text-[20px]'><BsWhatsapp /></Link>
                            <Link to="https://www.instagram.com/__its_akash.18" target='_blank' className='text-[20px]'><BsInstagram /></Link>
                            <Link to="https://x.com/__its_akash18" target='_blank' className='text-[20px]'><FaSquareXTwitter /></Link>
                        </div>
                    </div>
                    <div className='flex flex-col w-[80vw] md:w-[40%] gap-8 sm:flex-row sm:justify-between md:gap-6 lg:gap-10'>
                        <div className='w-[80vw] sm:w-[50%] md:w-[14rem]'>
                            <div>
                                <p className='text-[1.09rem] font-[600]'>USEFUL LINKS</p>
                                <p className='w-[80vw] sm:w-[80%] md:w-[12rem] lg:w-[15rem] m-[9px_0] h-[3.4px] bg-[linear-gradient(to_right,#35C8F2,#27B872)] rounded-md'></p>
                            </div>
                            <div className='flex flex-col gap-4 mt-6 '>
                                <Link onClick={goAbout} className={listStyle}><MdKeyboardDoubleArrowRight />About</Link>
                                <Link onClick={goResume} className={listStyle}><MdKeyboardDoubleArrowRight />Resume</Link>
                                <Link onClick={goPortfolio} className={listStyle}><MdKeyboardDoubleArrowRight />Portfolio</Link>
                                {/* <Link to={'/'} ref={}> className={listStyle}><MdKeyboardDoubleArrowRight />Services</Link> */}
                                <Link onClick={goContact} className={listStyle}><MdKeyboardDoubleArrowRight />Contact</Link>

                            </div>
                        </div>
                        <div className='w-[80vw] sm:w-[50%] md:w-[14rem]'>
                            <div>
                                <p className='text-[1.09rem] font-[600]'>CONTACT US</p>
                                <p className='w-[80vw] sm:w-[50%] md:w-[14rem] m-[9px_0] h-[3.4px] bg-[linear-gradient(to_right,#35C8F2,#27B872)] rounded-md'></p>
                            </div>
                            <div className='flex flex-col gap-5 mt-6 '>
                                <Link to={'/'} className={`${contactStyle} lg:items-center`}><CiClock1 />09:00 - 07:00</Link>
                                <Link to={`tel:6207234759`} target='_blank' className={`${contactStyle} lg:items-center`}><MdOutlineSmartphone />+91 6207234759</Link>
                                <Link to={`mailto:info@webakash1806.com`} target='_blank' className={`${contactStyle} lg:items-center`}><IoMdMail />info@webakash1806.com</Link>
                                <Link to={'/'} className={`${contactStyle} lg:items-center`}><FaLocationDot />Varanasi, India</Link>
                            </div>
                        </div>
                    </div>


                </div>
                <div className='text-center text-[1.05rem] font-[600] p-3 bg-gradient-to-r from-[#0C1015] via-[#0f2516] to-[#0C1015] '><span >&#169;</span> {year} | Copyright <span className='bg-clip-text text-transparent bg-[#00ff66]'>webakash1806</span> - All Rights Reserved</div>
            </footer >
        </>

    )
}

export default Header