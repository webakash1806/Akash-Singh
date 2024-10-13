import React, { useEffect } from 'react'
import aboutBg from '../assets/aboutBg.jpg'
import aboutBoy from '../assets/aboutBoy.jpg'
import aboutVideo from '../assets/aboutVideo.mp4'
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { TbBrandHtml5, TbBrandRedux } from "react-icons/tb";
import { RiCss3Line } from "react-icons/ri";
import { FaReact, FaCity, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import { SiTailwindcss, SiFreelancer } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { CiCalendarDate, CiMail } from "react-icons/ci";
import { IoCallOutline, IoLogoJavascript } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';
import Skills from '../Components/Skills';

const About = () => {
    const skillsStyle = 'flex  items-center justify-between px-1 pr-2 text-white text-[0.87rem] tracking-wide font-semibold'
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div className='bg-[#0e0e0ff2] font-poppins flex flex-col items-center justify-center text-white py-10 p-2 overflow-hidden '>
            <img src={aboutBg} alt="about us background" className='fixed left-0 top-16 h-[100vh] w-[100%] z-[-20]' />
            <div className='flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-center'>
                <div>
                    <div data-aos="fade-up" className='flex items-center justify-start gap-2'>
                        <p className='font-semibold tracking-widest text-[#c6c5c5] btn-shine'>ABOUT </p>
                        <div className='w-20 h-[0.85px] bg-[#18D26E]'></div>
                    </div>
                    <p data-aos="fade-up" className='text-white text-[1.8rem] tracking-wide font-poppins font-semibold uppercase'>Know more about me</p>

                    <video src={aboutVideo} loop autoPlay playsInline muted data-aos="fade-up" className='w-[20rem] h-[21rem] rounded object-cover bg-[#343232]'></video>
                </div>
                <div className='max-w-[40rem] flex flex-col gap-3'>
                    <h1 data-aos="fade-up" className='text-[#18D26E] font-semibold tracking-wide text-[1.6rem] '>Web developer - MERN Stack</h1>
                    <p data-aos="fade-up" className='italic tracking-wide/<?/'>MERN Stack web developer proficient in MongoDB, Express.js, React.js, and Node.js. Skilled in crafting dynamic, user-centric web applications.</p>
                    <div className='flex flex-col md:items-center gap-1 md:gap-[10rem] md:flex-row'>
                        <div className='flex flex-col gap-2'>
                            <p data-aos="fade-up" className='flex items-center text-[0.9rem] gap-1 tracking-wide   cursor-pointer '><LiaBirthdayCakeSolid className='text-[#18D26E] text-[ 1.1rem]' /><span className='font-[500] text-[1rem] tracking-wider'>Birthday:</span>18th Dec 2004</p>

                            <p data-aos="fade-up" className='flex items-center text-[0.9rem] gap-1 tracking-wide   cursor-pointer '><CiCalendarDate className='text-[#18D26E] text-[ 1.1rem]' /><span className='font-[500] text-[1rem] tracking-wider'>Age:</span>19</p>
                            <p data-aos="fade-up" className='flex items-center text-[0.9rem] gap-1 tracking-wide   cursor-pointer '><FaCity className='text-[#18D26E] text-[ 1.1rem]' /><span className='font-[500] text-[1rem] tracking-wider'>City:</span>Noida, India</p>
                            <p data-aos="fade-up" className='flex items-center text-[0.9rem] gap-1 tracking-wide   cursor-pointer '><SiFreelancer className='text-[#18D26E] text-[ 1.1rem]' /><span className='font-[500] text-[1rem] tracking-wider'>Freelance:</span>Available</p>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <Link to={`tel:6207234759`} target='_blank' data-aos="fade-up" className='flex items-center text-[0.9rem] gap-1 tracking-wide   cursor-pointer '><IoCallOutline className='text-[#18D26E] text-[ 1.1rem]' /><span className='font-[500] text-[1rem] tracking-wider'>Phone:</span>+91 6207234759</Link>
                            <Link target={`_blank`} to="https://wa.me/6207234759" data-aos="fade-up" className='flex items-center text-[0.9rem] gap-1 tracking-wide   cursor-pointer '><FaWhatsapp className='text-[#18D26E] text-[ 1.1rem]' /><span className='font-[500] text-[1rem] tracking-wider'>Whatsapp:</span>+91 6207234759</Link>
                            <Link to={`mailto:itsakash18.06@gmail.com`} target='_blank' data-aos="fade-up" className='flex items-center text-[0.9rem] gap-1 tracking-wide   cursor-pointer '><CiMail className='text-[#18D26E] text-[ 1.1rem]' /><span className='font-[500] text-[1rem] tracking-wider'>Email:</span>itsakash18.06@gmail.com</Link>
                            <Link to={"https://github.com/webakash1806"} target='_blank' data-aos="fade-up" className='flex items-center text-[0.9rem] gap-1 tracking-wide   cursor-pointer '><FiGithub className='text-[#18D26E] text-[1.1rem]' /><span className='font-[500] text-[1rem] tracking-wider'>Github:</span>@webakash1806</Link>
                            <Link to={"https://www.linkedin.com/in/itsakash18/"} target='_blank' data-aos="fade-up" className='flex items-center text-[0.9rem] gap-1 tracking-wide   cursor-pointer '><FaLinkedinIn className='text-[#18D26E] text-[1.1rem]' /><span className='font-[500] text-[1rem] tracking-wider'>Linkedin:</span>@itsakash18
                            </Link>
                        </div>
                    </div>
                    <p data-aos="fade-up">As a MERN Stack web developer, I craft dynamic web applications using MongoDB, Express.js, React.js, and Node.js. I excel in both frontend and backend development, ensuring clean code and user-friendly experiences. With a passion for innovation, I stay updated on emerging technologies to deliver top-notch solutions.</p>
                </div>
            </div>
            <div data-aos="fade-up" className='w-full py-8 sm:px-14'>

                <div className='flex flex-col items-center justify-center w-full gap-3 md:gap-8 md:flex-row md:items-end'>
                    <div className='w-full md:w-[90%] lg:w-[70%] flex flex-col'>
                        <div data-aos="fade-up" className='flex items-center justify-start gap-2 pt-4 '>
                            <p className='font-semibold tracking-widest text-[#c6c5c5]'>SKILLS </p>
                            <div className='w-20 h-[0.85px] bg-[#18D26E]'></div>
                        </div>
                        {/* <div data-aos="fade-up">
                            <div className={skillsStyle}><p className='flex items-center justify-center gap-1'><TbBrandHtml5 className='text-[1.2rem] text-[#18D26E]' />HTML</p>
                                <p>99%</p></div>
                            <progress className="h-[9px] w-full [&::-webkit-progress-bar]:rounded-sm  [&::-webkit-progress-value]:rounded-sm   [&::-webkit-progress-bar]:bg-grey [&::-webkit-progress-value]:bg-[#18D26E] " value="99" max="100"></progress>
                        </div>
                        <div data-aos="fade-up">
                            <div className={skillsStyle}><p className='flex items-center justify-center gap-1'><RiCss3Line className='text-[1.2rem] text-[#18D26E]' />CSS</p>
                                <p>90%</p></div>
                            <progress className="h-[9px] w-full [&::-webkit-progress-bar]:rounded-sm  [&::-webkit-progress-value]:rounded-sm   [&::-webkit-progress-bar]:bg-grey [&::-webkit-progress-value]:bg-[#18D26E] " value="90" max="100"></progress>
                        </div>
                        <div data-aos="fade-up">
                            <div className={skillsStyle}><p className='flex items-center justify-center gap-1'><IoLogoJavascript className='text-[1.2rem] text-[#18D26E]' />JavaScript</p>
                                <p>88%</p></div>
                            <progress className="h-[9px] w-full [&::-webkit-progress-bar]:rounded-sm  [&::-webkit-progress-value]:rounded-sm   [&::-webkit-progress-bar]:bg-grey [&::-webkit-progress-value]:bg-[#18D26E] " value="88" max="100"></progress>
                        </div>
                        <div data-aos="fade-up">
                            <div className={skillsStyle}><p className='flex items-center justify-center gap-1'><SiTailwindcss className='text-[1.2rem] text-[#18D26E]' />TailwindCSS</p>
                                <p>95%</p></div>
                            <progress className="h-[9px] w-full [&::-webkit-progress-bar]:rounded-sm  [&::-webkit-progress-value]:rounded-sm   [&::-webkit-progress-bar]:bg-grey [&::-webkit-progress-value]:bg-[#18D26E] " value="95" max="100"></progress>
                        </div> */}
                        <Skills />

                    </div>
                    {/* <div className='w-full md:w-[45%] lg:w-[35%]  flex flex-col gap-3'>
                        <div data-aos="fade-up">
                            <div className={skillsStyle}><p className='flex items-center justify-center gap-1'><FaReact className='text-[1.2rem] text-[#18D26E]' />ReactJS</p>
                                <p>85%</p></div>
                            <progress className="h-[9px] w-full [&::-webkit-progress-bar]:rounded-sm  [&::-webkit-progress-value]:rounded-sm   [&::-webkit-progress-bar]:bg-grey [&::-webkit-progress-value]:bg-[#18D26E] " value="85" max="100"></progress>
                        </div>
                        <div data-aos="fade-up">
                            <div className={skillsStyle}><p className='flex items-center justify-center gap-1'><TbBrandRedux className='text-[1.2rem] text-[#18D26E]' />Redux Toolkit</p>
                                <p>75%</p></div>
                            <progress className="h-[9px] w-full [&::-webkit-progress-bar]:rounded-sm  [&::-webkit-progress-value]:rounded-sm   [&::-webkit-progress-bar]:bg-grey [&::-webkit-progress-value]:bg-[#18D26E] " value="75" max="100"></progress>
                        </div>
                        <div data-aos="fade-up">
                            <div className={skillsStyle}><p className='flex items-center justify-center gap-1'><FaNodeJs className='text-[1.2rem] text-[#18D26E]' />NodeJS</p>
                                <p>80%</p></div>
                            <progress className="h-[9px] w-full [&::-webkit-progress-bar]:rounded-sm  [&::-webkit-progress-value]:rounded-sm   [&::-webkit-progress-bar]:bg-grey [&::-webkit-progress-value]:bg-[#18D26E] " value="80" max="100"></progress>
                        </div>
                        <div data-aos="fade-up">
                            <div className={skillsStyle}><p className='flex items-center justify-center gap-1'><SiExpress className='text-[1.2rem] text-[#18D26E]' />ExpressJS</p>
                                <p>85%</p></div>
                            <progress className="h-[9px] w-full [&::-webkit-progress-bar]:rounded-sm  [&::-webkit-progress-value]:rounded-sm   [&::-webkit-progress-bar]:bg-grey [&::-webkit-progress-value]:bg-[#18D26E] " value="85" max="100"></progress>
                        </div>
                    </div> */}
                </div>
            </div>
        </div >
    )
}

export default About
