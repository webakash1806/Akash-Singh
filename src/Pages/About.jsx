import React, { useEffect } from 'react'
import aboutBg from '../assets/aboutBg.jpg'
import aboutBoy from '../assets/aboutBoy.jpg'
import aboutVideo from '../assets/aboutVideo.mp4'
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { TbBrandHtml5, TbBrandRedux } from "react-icons/tb";
import { RiCss3Line } from "react-icons/ri";
import { FaReact, FaCity, FaLinkedinIn } from "react-icons/fa6";
import { SiTailwindcss, SiFreelancer } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { CiCalendarDate, CiMail } from "react-icons/ci";
import { IoCallOutline, IoLogoJavascript } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
    const skillsStyle = 'flex  items-center justify-between px-1 pr-2 text-white text-[0.87rem] tracking-wide font-semibold'
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div className='bg-[#0d0c10df] font-poppins flex flex-col items-center justify-center text-white py-10 p-2 overflow-hidden '>
            <img src={aboutBg} alt="" className='fixed left-0 top-16 h-[100vh] w-[100%] z-[-20]' />
            <div className='flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-center'>
                <div>
                    <div data-aos="fade-up" className='flex items-center justify-start gap-2'>
                        <p className='font-semibold tracking-widest text-[#c6c5c5]'>ABOUT </p>
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
                            <p data-aos="fade-up" className='flex items-center text-[0.9rem] gap-1 tracking-wide   cursor-pointer '><FaCity className='text-[#18D26E] text-[ 1.1rem]' /><span className='font-[500] text-[1rem] tracking-wider'>City:</span>Varanasi, India</p>
                            <p data-aos="fade-up" className='flex items-center text-[0.9rem] gap-1 tracking-wide   cursor-pointer '><SiFreelancer className='text-[#18D26E] text-[ 1.1rem]' /><span className='font-[500] text-[1rem] tracking-wider'>Freelance:</span>Available</p>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <p data-aos="fade-up" className='flex items-center text-[0.9rem] gap-1 tracking-wide   cursor-pointer '><IoCallOutline className='text-[#18D26E] text-[ 1.1rem]' /><span className='font-[500] text-[1rem] tracking-wider'>Phone:</span>+91 6207234759</p>
                            <p data-aos="fade-up" className='flex items-center text-[0.9rem] gap-1 tracking-wide   cursor-pointer '><CiMail className='text-[#18D26E] text-[ 1.1rem]' /><span className='font-[500] text-[1rem] tracking-wider'>Email:</span>itsakash18.06@gmail.com</p>
                            <p data-aos="fade-up" className='flex items-center text-[0.9rem] gap-1 tracking-wide   cursor-pointer '><FiGithub className='text-[#18D26E] text-[1.1rem]' /><span className='font-[500] text-[1rem] tracking-wider'>Github:</span>@webakash1806</p>
                            <p data-aos="fade-up" className='flex items-center text-[0.9rem] gap-1 tracking-wide   cursor-pointer '><FaLinkedinIn className='text-[#18D26E] text-[1.1rem]' /><span className='font-[500] text-[1rem] tracking-wider'>Linkedin:</span>@itsakash18
                            </p>
                        </div>
                    </div>
                    <p data-aos="fade-up">As a MERN Stack web developer, I craft dynamic web applications using MongoDB, Express.js, React.js, and Node.js. I excel in both frontend and backend development, ensuring clean code and user-friendly experiences. With a passion for innovation, I stay updated on emerging technologies to deliver top-notch solutions.</p>
                </div>
            </div>
            <div data-aos="fade-up" className='w-full py-8 sm:px-14'>

                <div className='flex flex-col items-center justify-center w-full gap-3 md:gap-8 md:flex-row md:items-end'>
                    <div className='w-full md:w-[45%] lg:w-[35%] flex flex-col gap-3'>
                        <div data-aos="fade-up" className='flex items-center justify-start gap-2 py-4'>
                            <p className='font-semibold tracking-widest text-[#c6c5c5]'>SKILLS </p>
                            <div className='w-20 h-[0.85px] bg-[#18D26E]'></div>
                        </div>
                        <div data-aos="fade-up">
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
                        </div>

                    </div>
                    <div className='w-full md:w-[45%] lg:w-[35%]  flex flex-col gap-3'>
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
                    </div>
                </div>
            </div>
            {/* <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 1000 1000">
                <defs>
                    <linearGradient id="Dégradé_sans_nom_4" x1="397.3" y1="531.55" x2="398.77" y2="531.55"
                        gradientTransform="matrix(1, 0, 0, -1, 0, 1002)" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#f5f5f5" stopOpacity="0.7" />
                        <stop offset="1" stopColor="#303030" stopOpacity="0.3" />
                    </linearGradient>
                    <linearGradient id="Dégradé_sans_nom_5" x1="-71.63" y1="1086.96" x2="-71.63" y2="1203.04"
                        gradientTransform="matrix(0.87, -0.5, 0, -1.15, 202.02, 1691.1)" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#3f3fc2" />
                        <stop offset="0.09" stopColor="#3f3fc2" />
                        <stop offset="0.69" stopColor="#fff" />
                    </linearGradient>
                    <linearGradient id="Dégradé_sans_nom_6" x1="-117.26" y1="1087.6" x2="-117.26" y2="1178.79"
                        xlinkHref="#Dégradé_sans_nom_5" />
                    <linearGradient id="Dégradé_sans_nom_7" x1="-140.02" y1="1086.96" x2="-140.02" y2="1203.04"
                        xlinkHref="#Dégradé_sans_nom_5" />
                    <linearGradient id="Dégradé_sans_nom_8" x1="-162.84" y1="1087.39" x2="-162.84" y2="1186.68"
                        xlinkHref="#Dégradé_sans_nom_5" />
                    <linearGradient id="Dégradé_sans_nom_9" x1="3024.62" y1="-260.2" x2="3024.62" y2="-144.13"
                        gradientTransform="matrix(-0.87, -0.5, 0, -1.15, 2764.57, 1691.1)"
                        xlinkHref="#Dégradé_sans_nom_5" />
                    <linearGradient id="Dégradé_sans_nom_10" x1="3070.25" y1="-299.23" x2="3070.25" y2="-208.04"
                        gradientTransform="matrix(-0.87, -0.5, 0, -1.15, 2764.57, 1691.1)"
                        xlinkHref="#Dégradé_sans_nom_5" />
                    <linearGradient id="Dégradé_sans_nom_11" x1="3093.01" y1="-319.7" x2="3093.01" y2="-203.63"
                        gradientTransform="matrix(-0.87, -0.5, 0, -1.15, 2764.57, 1691.1)"
                        xlinkHref="#Dégradé_sans_nom_5" />
                    <linearGradient id="Dégradé_sans_nom_12" x1="56.64" y1="500.45" x2="44.9" y2="595.99"
                        gradientTransform="matrix(1, 0, 0, -1, 0, 1002)" xlinkHref="#Dégradé_sans_nom_5" />
                    <linearGradient id="Dégradé_sans_nom_13" x1="64.52" y1="585.05" x2="81.08" y2="592.79"
                        gradientTransform="matrix(1, -0.01, -0.01, -1, -9.3, 1026.18)"
                        xlinkHref="#Dégradé_sans_nom_5" />
                    <linearGradient id="Dégradé_sans_nom_14" x1="84.31" y1="585.6" x2="114.29" y2="599.6"
                        gradientTransform="matrix(1, -0.01, -0.01, -1, -9.3, 1026.18)"
                        xlinkHref="#Dégradé_sans_nom_5" />
                    <linearGradient id="Dégradé_sans_nom_15" x1="-94.51" y1="1086.73" x2="-94.51" y2="1202.81"
                        xlinkHref="#Dégradé_sans_nom_5" />
                    <linearGradient id="Dégradé_sans_nom_16" x1="3047.49" y1="-280.31" x2="3047.49" y2="-164.24"
                        gradientTransform="matrix(-0.87, -0.5, 0, -1.15, 2764.57, 1691.1)"
                        xlinkHref="#Dégradé_sans_nom_5" />
                    <linearGradient id="Dégradé_sans_nom_17" x1="124.16" y1="607.81" x2="154.14" y2="621.82"
                        gradientTransform="matrix(1, -0.01, -0.01, -1, -9.3, 1026.18)"
                        xlinkHref="#Dégradé_sans_nom_5" />
                    <linearGradient id="Dégradé_sans_nom_18" x1="144.36" y1="634.38" x2="174.34" y2="648.38"
                        gradientTransform="matrix(1, -0.01, -0.01, -1, -9.3, 1026.18)"
                        xlinkHref="#Dégradé_sans_nom_5" />
                    <linearGradient id="Dégradé_sans_nom_19" x1="106.45" y1="579.15" x2="118.92" y2="584.97"
                        gradientTransform="matrix(1, -0.01, -0.01, -1, -9.3, 1026.18)"
                        xlinkHref="#Dégradé_sans_nom_5" />
                    <linearGradient id="Dégradé_sans_nom_20" x1="3072.39" y1="-464.37" x2="3072.39" y2="-403.73"
                        gradientTransform="matrix(-0.87, -0.5, 0, -1.15, 3394.98, 1691.1)"
                        xlinkHref="#Dégradé_sans_nom_5" />
                    <linearGradient id="Dégradé_sans_nom_21" x1="3049.57" y1="-465.06" x2="3049.57" y2="-377.24"
                        gradientTransform="matrix(-0.87, -0.5, 0, -1.15, 3394.98, 1691.1)"
                        xlinkHref="#Dégradé_sans_nom_5" />
                    <linearGradient id="Dégradé_sans_nom_22" x1="3026.76" y1="-464.82" x2="3026.76" y2="-386.44"
                        gradientTransform="matrix(-0.87, -0.5, 0, -1.15, 3394.98, 1691.1)"
                        xlinkHref="#Dégradé_sans_nom_5" />
                    <linearGradient id="Dégradé_sans_nom_23" x1="-119.4" y1="924.34" x2="-119.4" y2="984.97"
                        gradientTransform="matrix(0.87, -0.5, 0, -1.15, 832.43, 1691.1)"
                        xlinkHref="#Dégradé_sans_nom_5" />
                    <linearGradient id="Dégradé_sans_nom_24" x1="-96.59" y1="903.81" x2="-96.59" y2="991.64"
                        gradientTransform="matrix(0.87, -0.5, 0, -1.15, 832.43, 1691.1)"
                        xlinkHref="#Dégradé_sans_nom_5" />
                    <linearGradient id="Dégradé_sans_nom_25" x1="2831.03" y1="306.18" x2="2821.63" y2="382.71"
                        gradientTransform="translate(3597 1002) rotate(180)" xlinkHref="#Dégradé_sans_nom_5" />
                    <linearGradient id="Dégradé_sans_nom_26" x1="2830.12" y1="346.86" x2="2846.68" y2="354.59"
                        gradientTransform="translate(3606.3 1026.18) rotate(-179.43)" xlinkHref="#Dégradé_sans_nom_5" />
                    <linearGradient id="Dégradé_sans_nom_27" x1="2849.94" y1="347.34" x2="2879.92" y2="361.34"
                        gradientTransform="translate(3606.3 1026.18) rotate(-179.43)" xlinkHref="#Dégradé_sans_nom_5" />
                    <linearGradient id="Dégradé_sans_nom_28" x1="2872.09" y1="340.88" x2="2884.56" y2="346.7"
                        gradientTransform="translate(3606.3 1026.18) rotate(-179.43)" xlinkHref="#Dégradé_sans_nom_5" />
                    <radialGradient id="Dégradé_sans_nom" cx="-64.97" cy="1869.29" r="504.98"
                        gradientTransform="matrix(0.72, 0, 0, -0.45, 702.38, 1207.55)" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#14253a" stopOpacity="0.3" />
                        <stop offset="0.14" stopColor="#192a3f" stopOpacity="0.31" />
                        <stop offset="0.27" stopColor="#2a394c" stopOpacity="0.34" />
                        <stop offset="0.41" stopColor="#455363" stopOpacity="0.38" />
                        <stop offset="0.55" stopColor="#6c7684" stopOpacity="0.45" />
                        <stop offset="0.69" stopColor="#9da4ad" stopOpacity="0.53" />
                        <stop offset="0.82" stopColor="#d9dcdf" stopOpacity="0.64" />
                        <stop offset="0.9" stopColor="#fff" stopOpacity="0.7" />
                    </radialGradient>
                    <linearGradient id="Dégradé_sans_nom_2" x1="443.16" y1="829.82" x2="874.22" y2="437.05"
                        gradientTransform="matrix(1, 0, 0, -1, 0, 1002)" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#f5f5f5" stopOpacity="0.7" />
                        <stop offset="1" stopColor="#0d0a3f" stopOpacity="0.3" />
                    </linearGradient>
                    <linearGradient id="Dégradé_sans_nom_3" x1="397.3" y1="635.5" x2="915.3" y2="635.5"
                        gradientTransform="matrix(1, 0, 0, -1, 0, 1002)" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#f5f5f5" stopOpacity="0.5" />
                        <stop offset="1" stopColor="#0d0a3f" stopOpacity="0.3" />
                    </linearGradient>
                    <clipPath id="clip-path">
                        <polygon points="431.1 561.4 406.8 575.4 310.4 519.7 310.4 412.6 431.1 482.3 431.1 561.4" fill="none" />
                    </clipPath>
                </defs>
                <g id="circuits">
                    <g id="circuits-2">
                        <g id="blue">
                            <path d="M386.9,462.6l-1-.6-61.8-35.7c1.2-.8,1.1-2.1-.3-2.9a5.9,5.9,0,0,0-5.2-.2l-.4.2-.5.3c-1,.9-.8,2.1.5,2.9a6.19,6.19,0,0,0,5,.3h.1l74,42.8v-1ZM370.5,361.1a.78.78,0,0,0,.4-.4,1.2,1.2,0,0,0,.4-.9c0-.6-.4-1.1-1.2-1.6a6.83,6.83,0,0,0-5.6,0,2.08,2.08,0,0,0-1.1,1.6,1.62,1.62,0,0,0,.3.9,2.83,2.83,0,0,0,.8.7,5.81,5.81,0,0,0,5,.2l27.8,16v-1Zm18.6,36.1-14.3-8.3c1-.9.9-2.1-.5-2.8a6.08,6.08,0,0,0-5.6,0c-1.5.8-1.5,2.2,0,3.2a6.7,6.7,0,0,0,5.2.1l14.3,8.3,5.5,3.1,3.6,2.1v-1Zm-19.2,5a1.5,1.5,0,0,0-.4-2.8,5.88,5.88,0,0,0-5.5,0c-1.6.8-1.6,2.3,0,3.2a5.59,5.59,0,0,0,4.9.2l28.4,16.3v-1Zm17,43.5-1-.6-62.4-36H298.7a3,3,0,0,0-1.1-1.2,6.83,6.83,0,0,0-5.6,0c-1.5,1-1.5,2.4,0,3.3a6.83,6.83,0,0,0,5.6,0,2.51,2.51,0,0,0,1.1-1.2h24.5l62.7,36.2,1,.6,10.4,6v-1ZM869.6,606.1a6.08,6.08,0,0,0-5.6,0c-1.3.7-1.5,2-.4,2.9l-72.9,42.1H772.4L665,589.1H542.4l-66.7-38.5-.9-.5-2.1-1.2,13.2-7.7,2.1,1.3,48.4,27.9H678.5l62.8,36.4,1.5.8L778,627.9c-1.1.9-.9,2.2.4,3a6.08,6.08,0,0,0,5.6,0c1.5-.9,1.5-2.4,0-3.2a6.19,6.19,0,0,0-5-.3l-34.4-19.8-1.5-.8-64.3-37.1H573.7l21.4-12.4,1.5-.8,4.6-2.7h74.3a2.73,2.73,0,0,0,1,1.2,6.42,6.42,0,0,0,5.7,0c1.5-.9,1.5-2.4,0-3.2a6.42,6.42,0,0,0-5.7,0,1.93,1.93,0,0,0-1,1.2H601l-6.1,3.5-1.5.8L572,569.6H536.7l-46.9-27.1-.9-.5-2.2-1.3,11.7-6.7,2.1,1.3.9.5,41.2,23.8h17.9l4.2-2.4,1.4-.8L596,539.1l.5-.3H705.4L725,527.5h-1.8l-18,10.4H596.3l-18.5,10.7-13.4,7.8-1.4.8-2.8,1.6H542.9l-32.1-18.5h16.1l15.5,9h12.3l1.1-.7,1.5-.8,24.3-14.1a6.87,6.87,0,0,0,5.1-.2c1.6-1,1.6-2.4,0-3.3a6.83,6.83,0,0,0-5.6,0c-1.4.8-1.5,2.1-.4,3l-5.2,3-3.5,2-16.4,9.6-1.2.6H542.7l-15.5-9H509.3l-7.1-4.1-.9-.5-2.1-1.3,10.4-6h-1.5l-88.2,50.9L319.6,520.6l-.9-.5-2-1.2,4.5-2.6.8-.5L364.9,491l.9-.5,16.1-9.2.9-.6,14.5-8.4v-1l-12.8,7.4L277.9,417.2V365.7l50.3-29.1h46.3l22.8-13.1v-1.1l-23,13.4H329.6l61.2-35.3.2-.2V254.4a5.94,5.94,0,0,0,2.3-.6c1.6-.9,1.6-2.3,0-3.2a5.88,5.88,0,0,0-5.5,0c-1.5.9-1.5,2.3,0,3.2a6.43,6.43,0,0,0,2.4.6v45.4L288.5,358.5,226,322.4V281.8l-44.5-25.6c1.2-.9,1-2.1-.3-2.9a5.6,5.6,0,0,0-5.6,0c-1.5.9-1.5,2.3,0,3.1a5.49,5.49,0,0,0,5,.3L225,282.3v40.6L287.6,359l-10.4,6h-.3v40.6l-18-10.4V369.9L241.7,360l-1-.6-18.4-10.6c1.1-.9,1-2.1-.4-3a6.83,6.83,0,0,0-5.6,0c-1.6.9-1.6,2.4,0,3.3a6.5,6.5,0,0,0,5.1.1l19.3,11.2,1,.6,16.3,9.4v25.4l18.9,10.9v11l106.6,61.5-1.7,1-.9.5-13,7.6L161.2,368.9V325.7L45.7,259c1.2-.8,1-2.1-.3-2.9a7.07,7.07,0,0,0-5.7,0c-1.5.9-1.5,2.3,0,3.2a6.1,6.1,0,0,0,5.1.2l115.5,66.7v43.3L367,488.8l-2.1,1.2-.8.5-9.8,5.7-26.9-15.5-1.6-.9-78.1-45H170.1L135.9,415h.3V394L97.4,371.5c1.2-.8,1.1-2.1-.4-2.9a5.88,5.88,0,0,0-5.5,0c-1.5.9-1.5,2.3,0,3.2a5.81,5.81,0,0,0,5,.2l38.7,22.4v20L76.5,380.5H66.3l-55,31.7a5.81,5.81,0,0,0-5,.2c-1.6.9-1.6,2.4,0,3.2a5.88,5.88,0,0,0,5.5,0c1.4-.7,1.6-1.9.4-2.8l54.3-31.4h9.7l93.6,54h77.6l76.7,44.4,1.6.9,27.6,16-11.2,6.5-79.5-46-1.6-.9-19.6-11.4H152.3l-42.8-24.8c.5-.7.2-1.7-.9-2.4a6.08,6.08,0,0,0-5.6,0c-1.5.9-1.5,2.4,0,3.2a6.08,6.08,0,0,0,5.6,0l.3-.2,43.1,25h89l14.9,8.7H137.1L43,508.6a6.61,6.61,0,0,0-5,.2c-1.5,1-1.5,2.4,0,3.2a6.08,6.08,0,0,0,5.6,0c1.3-.7,1.5-2,.3-2.9l93.4-53.9H257.4l1.9,1.1,1.6.9L295.1,477l-4.2,2.4-.8.5-9.8,5.6H254.1l-24.6,14.1a6.19,6.19,0,0,0-5,.3c-1.6.8-1.6,2.3,0,3.2a6.08,6.08,0,0,0,5.6,0c1.3-.8,1.5-2,.4-3l23.8-13.8h24.5l-7,4.1-1.4.8-48.7,28.1H168.9l-29.5-17c1.1-.8.9-2.1-.4-2.9a6.08,6.08,0,0,0-5.6,0c-1.5.9-1.5,2.3.1,3.2a5.81,5.81,0,0,0,5,.2l30,17.3h53.4l50.3-29,1.4-.8,17.3-10,.9-.5,4.1-2.4,31.6,18.1H310.1l-11.5,6.7-.8.5-1.7.9a6.71,6.71,0,0,0-5.2.2c-1.5.9-1.5,2.4,0,3.2a6.08,6.08,0,0,0,5.6,0c1.3-.8,1.5-2,.4-2.9l1.7-.9.9-.5,10.8-6.3h18.8l12.3,7.2-20.2,11.6-.9.5-4.6,2.7-.7.4,2.9,1.7.8.4,4.5,2.7-2,1.1-.9.6-21.7,12.5-.9.5-19.9,11.5H262.5l-18-10.5c1-.9,1-2.1-.5-2.9a5.88,5.88,0,0,0-5.5,0c-1.5.9-1.5,2.3,0,3.2a6.1,6.1,0,0,0,5.1.2l18.6,10.8H278l20.6-11.9.9-.5,11.5-6.7v17.4l-20.2,11.7-.8.4-10,6a5.49,5.49,0,0,0-5,.3c-1.6.8-1.6,2.3,0,3.1a5.42,5.42,0,0,0,5.5,0,1.6,1.6,0,0,0,.4-2.9l10-5.7.8-.5,20-11.5h.2V531.2l9.2-5.4.9-.5,2-1.1,42.9,24.7-2,1.2-.8.5-17,9.8H321.3l-40.8,23.5H249.6l-43.1-24.8c1.1-.9,1-2.1-.4-3a6.6,6.6,0,0,0-5.5,0c-1.6,1-1.6,2.4,0,3.3a6.71,6.71,0,0,0,5,.2l43.6,25.2h31.5l40.8-23.6h24.1L226,630.3H141.6l-5.5,3.1-.9.6L88.5,661h-.3v47.2a5.2,5.2,0,0,0-3.2.7c-1.5.9-1.5,2.3,0,3.1a5.6,5.6,0,0,0,5.6,0c1.5-.8,1.5-2.2,0-3.1a4.54,4.54,0,0,0-1.5-.6V661.6L135.2,635l.9-.6,5.7-3.3h84.5l138.7-80,.8-.5,2-1.2,16.1,9.3-2,1.2-.8.5-140,80.8h-.2v49.3L192,718.9a6.1,6.1,0,0,0-5.1.2c-1.5.9-1.5,2.3,0,3.2a5.88,5.88,0,0,0,5.5,0c1.4-.8,1.6-2,.4-2.9l48.7-28.1.2-.2V641.8l140.2-80.9.9-.5,2-1.2,16.8,9.7-2,1.2-81.7,47.2h-.2v42.3l144,83.2c-1,.8-.9,2.1.4,2.9a6.08,6.08,0,0,0,5.6,0c1.5-.9,1.5-2.4,0-3.2a5.88,5.88,0,0,0-5-.3L356.9,681.3h31.8l57,33c-1.1.9-1,2.1.4,2.9a6.08,6.08,0,0,0,5.6,0c1.5-.9,1.5-2.3,0-3.2a6.1,6.1,0,0,0-5.1-.2L389,680.5H355.3l-36.6-21.2V618h.1l5.5-3.2L386.1,579v21l-41.6,23.9-.2.2v21.2a8.39,8.39,0,0,0-2.3.6c-1.6,1-1.6,2.4,0,3.3a6.6,6.6,0,0,0,5.5,0c1.6-.9,1.6-2.3,0-3.3a6.43,6.43,0,0,0-2.4-.6V624.6l41.5-23.9.3-.2v-22l12.8-7.4.8-.5,2-1.1,17.1,10h.3l10.5-6.1v45.9l-36.6,21.1c-.1,0-.2,0-.2-.1a6,6,0,0,0-4.9.4c-1.3.7-1.4,1.8-.5,2.7l.5.4.3.2a5.8,5.8,0,0,0,5.3-.2c1.4-.8,1.5-2.1.4-2.9l36.4-21h.2V601.2l14.5,8.3.8.5,12,6.9v17.7L398.9,669a6.18,6.18,0,0,0-5,.2c-1.6.9-1.6,2.3,0,3.2a5.88,5.88,0,0,0,5.5,0c1.4-.8,1.6-2,.5-3l59.4-34.3h.2V616.3l-12.9-7.5-.8-.4L431.3,600V572.8l14.8-8.6,2.2,1.2.9.5,9.7,5.6v16.6l19.1,11c-1.1,1-1,2.2.5,3.1a6.52,6.52,0,0,0,5.3.1h.3l.6-.5a1.49,1.49,0,0,0,.19-2.11,1.7,1.7,0,0,0-.19-.19l-.6-.5h-.3a6.2,6.2,0,0,0-4.8-.1l-19.2-11.1V572l41.8,24.2v36.3l-16.9,9.8-.9.6-45.2,26h-.2v13.8l22.2,12.7.9.6,12.5,7.2c-1.1.9-1,2.1.4,3a6.83,6.83,0,0,0,5.6,0c1.5-.9,1.5-2.4,0-3.3a6.87,6.87,0,0,0-5.1-.2L461.5,695l-.9-.5-21.3-12.3V669.5l44.5-25.6.9-.5,17.6-10.2.2-.2V595.7l-52.4-30.3-.9-.5-2.1-1.2,11.2-6.5,2.1,1.2.9.5,68.9,39.8v68.2L551.1,679v62.8l86.1,49.7c-.7.8-.3,1.8.9,2.4a5.88,5.88,0,0,0,5.5,0c1.6-.8,1.6-2.3,0-3.2a5.88,5.88,0,0,0-5.5,0l-.2.2L552,741.3V679.6L735.1,785.4c-1.1.9-1,2.1.5,2.9a6.08,6.08,0,0,0,5.6,0c1.5-.8,1.5-2.3,0-3.2a6.87,6.87,0,0,0-5.1-.2L531,666.5V598.3l-68.9-39.8-1-.5-2-1.2,12.7-7.4,2.1,1.2.9.5,67,38.7-.2.4,66.5,38.4v8.5l11.3,6.5.9.5,1.3.7v24.1l99.3,57.2c-1.1.8-.9,2.2.4,2.9a5.6,5.6,0,0,0,5.6,0c1.5-.8,1.5-2.3,0-3.1a5.49,5.49,0,0,0-5-.3l-99.4-57.3v-23l17.1,9.8c-1,1-1,2.2.5,3.1a6.83,6.83,0,0,0,5.6,0c1.5-1,1.5-2.4,0-3.3a6.1,6.1,0,0,0-5.1-.2L620.3,643l-.9-.5-10.4-6V628l-65.9-38.1h30.6l131.9,76.2V686L758,716.2c-1.2.9-1.1,2.2.3,3a5.88,5.88,0,0,0,5.5,0c1.6-.9,1.6-2.4,0-3.2a5.81,5.81,0,0,0-5-.3l-52.3-30.2V665.6L575.4,589.9h89.3l107.3,62h19l73.5-42.5a5.69,5.69,0,0,0,5.1-.2C871.1,608.4,871.1,606.9,869.6,606.1ZM737,520.5l-.9-.5-.9.5,1,.6Z"
                                stroke="#18D26E" fill="#001a06" strokeDashoffset="100%">
                                <animate
                                    attributeName="stroke-dasharray"
                                    dur="20s"
                                    values="80%;120%;80%"
                                    repeatCount="indefinite"
                                />
                            </path>
                        </g>
                        <g id="white">
                            <path d="M393.9,368.7c-1.6.9-1.6,2.3,0,3.1a5.67,5.67,0,0,0,3.4.7v-4.4A6.53,6.53,0,0,0,393.9,368.7Zm.7,31.6a1.61,1.61,0,0,0,.58-2.19,1.63,1.63,0,0,0-.88-.71,5.9,5.9,0,0,0-5.2-.2l-.4.2-.5.3c-1,.8-.8,2,.5,2.9a6.71,6.71,0,0,0,5,.2h0l3.6,2.1v-1.1Zm2.7-65-79.5,45.9h-.2v42.3h.1l5.5,3.2,74.1,42.7v-1l-10.4-6v-22l-41.7-24.1V395.8a6.15,6.15,0,0,0,2.3-.7c1.5-.8,1.5-2.2,0-3.2a6.08,6.08,0,0,0-5.6,0c-1.5,1-1.5,2.4,0,3.2a6.71,6.71,0,0,0,2.4.7V417l41.6,24.1v21l-67.3-38.9h-.1V381.8L355,360.7h33.7l8.6-4.9v-1.1l-8.8,5.1H356.6l40.7-23.5Zm0,134.3h0l1.5.8Zm177.1,64.8a5.88,5.88,0,0,0-5-.3l-11.5-6.6h-1.8l12.4,7.1c-1.2.9-1,2.2.4,3a5.65,5.65,0,0,0,3.1.6,6.43,6.43,0,0,0,2.4-.6,2.08,2.08,0,0,0,1.1-1.4A1.71,1.71,0,0,0,574.4,534.4Zm204.1,7.5a5.59,5.59,0,0,0-4.9-.2l-24.5-14.2h-1.8l25.4,14.7c-1.2.9-1.1,2.1.3,2.9a5.88,5.88,0,0,0,5.5,0C780.1,544.2,780.1,542.8,778.5,541.9Zm-43.3-21.4,1,.6.8-.6-.9-.5Zm62.7,98.2a6.5,6.5,0,0,0-5.1-.1l-20.3-11.8H724l-62.9-36.4-1.5-.8-1.6-.9h57l27.5,15.8c-1.2.8-1,2.1.3,2.9a5.6,5.6,0,0,0,5.6,0c1.5-.9,1.5-2.3,0-3.1a5.49,5.49,0,0,0-5-.3l-28.1-16.2H656.5l-19.7-11.4H560l-12.3-7.1-1.2-.7h32.8l16.4-9.5H664l19,11.1h38.7a3,3,0,0,0,1.1,1.2,6.08,6.08,0,0,0,5.6,0c1.5-.9,1.5-2.3,0-3.2a6.08,6.08,0,0,0-5.6,0,2.13,2.13,0,0,0-1.1,1.2H683.4l-18.2-10.6-.9-.5h-67l.5-.3,17.9-10.3a5.91,5.91,0,0,0,4.7-.1h-6.3l-35.2,20.3H545l-32.2-18.7,2.8-1.6h-1.7l-12.6,7.3-.8.5L488.9,542l-.9.5-13.2,7.6-.9.5L461.1,558l-.7.4-11.2,6.5-.9.5-17,9.8-.9.5-10.6,6.1-19.3-11.2-.9-.5h0l-.2-.2h-.2l-16.4-9.5-.9-.5-16.1-9.3-.9-.5L322,525.3l-.8-.5-4.6-2.6,2.1-1.2.9-.4,77.7-44.9v-1.1l-12.5,7.3-2-1.2-1-.5L241.7,399.3V349.9l-49-28.2c1.2-.8,1-2.1-.3-2.9a6.08,6.08,0,0,0-5.6,0c-1.6.9-1.6,2.3,0,3.2a5.81,5.81,0,0,0,5,.2l48.9,28.2v49.4l140.2,80.9,1,.6,1.9,1.1-16,9.3-2-1.2-.9-.5-17.7-10.2L226.3,410H141.8l-5.6-3.2-1-.6L89.1,379.5V332.7l1.5-.5c1.5-.9,1.5-2.4,0-3.3a6.6,6.6,0,0,0-5.5,0c-1.6.9-1.6,2.4,0,3.3a6.61,6.61,0,0,0,3.1.6V380l47,27.2,1,.5,5.3,3.1H226l119.4,69H321.5l-40.7-23.4H249.3l-43.7,25.2a5.81,5.81,0,0,0-5,.2c-1.6,1-1.6,2.4,0,3.2a5.88,5.88,0,0,0,5.5,0c1.3-.7,1.5-2,.4-2.9l43-24.8h31l40.7,23.4H347l17.1,9.8.8.5,2,1.2L324,517l-2-1.2-.8-.5-9.3-5.4V491.4l-20.1-11.5-.9-.5-10-5.8c1.1-.9,1-2.2-.4-3a6.6,6.6,0,0,0-5.5,0c-1.6.9-1.6,2.3,0,3.3a6.22,6.22,0,0,0,5,.1l10.1,5.9.8.5L311,491.9v17.5l-11.5-6.6-.9-.5-20.5-11.9H262.3l-18.7,10.7a6.51,6.51,0,0,0-5.1.3c-1.5.9-1.5,2.3,0,3.2a6.08,6.08,0,0,0,5.6,0c1.3-.8,1.5-2,.3-3l18.2-10.4h15.1l20.1,11.6.8.5,21.7,12.5.9.5,2,1.2-4.5,2.6-.8.5-2.3,1.3-.7.3,5.4,3.2.8.4,20.1,11.7-12.3,7.1H310.3l-10.8-6.2-.9-.5-1.7-1c1-.9.8-2.1-.4-2.9a5.88,5.88,0,0,0-5.5,0c-1.6.9-1.6,2.3,0,3.2a6,6,0,0,0,5.1.2l1.6,1,.9.5,11.3,6.5h17.4l-31.4,18.2-4.2-2.4-.9-.5-17.2-10-1.6-.9L221.9,521H168.6l-30.1,17.4a6.5,6.5,0,0,0-5.1.2c-1.5.9-1.5,2.3,0,3.2a6.08,6.08,0,0,0,5.6,0c1.3-.8,1.5-2.1.4-3l29.4-17h52.9L270.3,550l1.6.9,6.8,3.9H254.3L230.4,541a1.59,1.59,0,0,0,.52-2.2,1.61,1.61,0,0,0-.92-.7,5.42,5.42,0,0,0-5.5,0c-1.6.8-1.6,2.2,0,3.1a5.81,5.81,0,0,0,5,.2L254,555.5h26.3l9.7,5.6.9.6,4.2,2.4-34.3,19.7-1.6.9-1.7,1H137.3L44,531.9c1-.9.9-2-.4-2.9a6.83,6.83,0,0,0-5.6,0c-1.6.9-1.6,2.4,0,3.3a6.41,6.41,0,0,0,5.1.1L137,586.7H255.9L241,595.4H152.1l-43.3,24.9h-.2a5.88,5.88,0,0,0-5.5,0c-1.6.9-1.6,2.3,0,3.2a5.88,5.88,0,0,0,5.5,0c1.1-.7,1.4-1.7.8-2.5l42.9-24.7h88.9L261,584.8l1.6-.9L342.2,538l11.3,6.5-27.6,15.9-1.4.8-77.1,44.5H169.9L76.2,659.8H66.5L12.2,628.4c1.1-.9,1-2.1-.5-2.9a6.6,6.6,0,0,0-5.5,0c-1.5.9-1.5,2.4,0,3.3a6.22,6.22,0,0,0,5,.1l54.9,31.8H76.4l58.8-33.9v20L96.5,669.2a6.1,6.1,0,0,0-5.1.2c-1.5.9-1.5,2.3,0,3.1a5.6,5.6,0,0,0,5.6,0c1.4-.7,1.5-1.9.4-2.8l38.5-22.3h.2v-21h-.2l34.2-19.7h77.5l78.5-45.4,1.4-.8L354.3,545l9.8,5.7.9.5,1.9,1.1L160.5,671.5h-.3v43.3L44.8,781.6a6.5,6.5,0,0,0-5.1.2c-1.5.9-1.5,2.3,0,3.1a5.6,5.6,0,0,0,5.6,0,1.6,1.6,0,0,0,.4-2.9l115.2-66.4.2-.2V672.1L367.9,552.8l13.2,7.6.8.5,1.7.9L277.1,623.3h-.2v11.1L258,645.3v25.3L241.7,680l-.8.5-19.7,11.3a5.59,5.59,0,0,0-4.9.2c-1.6.9-1.6,2.4,0,3.2a5.88,5.88,0,0,0,5.5,0c1.4-.7,1.6-2,.4-2.8l18.7-10.8.8-.5,16.9-9.8.3-.2V645.8l18-10.3V676l10.6,6.1-62.2,36h-.2v40.5l-44.5,25.7a7.51,7.51,0,0,0-5.1.2c-1.5.9-1.5,2.4,0,3.3a6.83,6.83,0,0,0,5.6,0c1.4-.9,1.6-2.1.5-3l44.1-25.5.2-.2V718.7l62.5-36L390,741.3v45.4a10.12,10.12,0,0,0-2.3.6c-1.5.9-1.5,2.3,0,3.2a6.08,6.08,0,0,0,5.6,0c1.5-.9,1.5-2.3,0-3.2a8.39,8.39,0,0,0-2.3-.6V740.8l-61.4-35.4h44.5l36,20.7c-1.1.9-1,2.2.4,3a6.08,6.08,0,0,0,5.6,0c1.6-.9,1.6-2.3,0-3.2a6.1,6.1,0,0,0-5.1-.2l-36.5-21.2H328.1l-50.3-29V623.9l106.6-61.6,14.1,8.1L322.9,614a5.89,5.89,0,0,0-4.7.4c-1.4.8-1.5,2.1-.4,3a.48.48,0,0,0,.4.2l.6.3a6.19,6.19,0,0,0,5-.3c1.2-.8,1.4-2,.5-2.9l-.4-.2,75.4-43.6.4.2,13.8,8-26.6,15.3-.8.4-62.9,36.4H298.7a3.94,3.94,0,0,0-1.1-1.2,6.83,6.83,0,0,0-5.6,0c-1.6,1-1.6,2.4,0,3.2a6.08,6.08,0,0,0,5.6,0,2.07,2.07,0,0,0,1-1.1h24.7l62.8-36.3.8-.4,27.4-15.8,5.4,3.1h.1l4.3-2.5,6.3,3.7.9.4,14.5,8.4v17.4l-14.5,8.3-.9.5-2.5,1.5H399.8L369,638.3a6.1,6.1,0,0,0-5.1.2c-1.5.9-1.5,2.3,0,3.2a6.08,6.08,0,0,0,5.6,0c1.4-.8,1.5-2,.4-2.9l30.2-17.5h26.4l-32.9,19-5.4,3.1-14.3,8.3a5.69,5.69,0,0,0-5.1.2c-1.6.8-1.6,2.3,0,3.2a5.88,5.88,0,0,0,5.5,0c1.3-.8,1.5-2.1.5-2.9L389,644l42.3-24.4,9-5.2v8.3l-38.8,22.4-.2.2v15.9l-31.7,18.3a6.1,6.1,0,0,0-5.1.2,1.88,1.88,0,0,0-.8.7,1.62,1.62,0,0,0-.3.9,1.92,1.92,0,0,0,1.1,1.6,5.88,5.88,0,0,0,5.5,0,1.89,1.89,0,0,0,1.2-1.6,1.62,1.62,0,0,0-.3-.9l-.4-.4L402,661.7h.2V645.8l38.7-22.5h.3v-9.4l5.2-3,.2-.2V592.3l-15.3-8.9-.9-.5-5.4-3.1,5.4-3.1.9-.5,8-4.6,19.6,11.3.9.6,24,13.8v29l-30.4,17.6a5.88,5.88,0,0,0-5,.3c-1.5.8-1.5,2.2,0,3.2a6.08,6.08,0,0,0,5.6,0c1.3-.9,1.5-2.1.3-3l29.5-17v23.8l-23,13.2h-.2V709a6.82,6.82,0,0,0-2.4.5c-1.5,1-1.5,2.4,0,3.2a6.42,6.42,0,0,0,5.7,0c1.5-.8,1.5-2.2,0-3.2a6.82,6.82,0,0,0-2.4-.5V665l22.3-12.8V729a5,5,0,0,0-2.4.6c-1.5.9-1.5,2.4,0,3.2a6.08,6.08,0,0,0,5.6,0c1.5-.8,1.5-2.3,0-3.2a4.62,4.62,0,0,0-2.3-.6V596.8l-24.9-14.4-.9-.5-18.7-10.8,9-5.2.9-.5,6.1-3.5,58.2,33.6v80l28,16.1v30.1l8.7,5,.9.6,15,8.6a1.59,1.59,0,0,0-.52,2.2,1.61,1.61,0,0,0,.92.7,6.08,6.08,0,0,0,5.6,0c1.5-.8,1.5-2.2,0-3.2a6.1,6.1,0,0,0-5.1-.2L552,726.2l-.9-.5-7.9-4.5V691.1L515.1,675V595L457,561.4l4.3-2.5.8-.4,6.7-3.9,78.5,45.3v68.2L617,708.4c-1.2.8-1,2.1.3,2.9a6.08,6.08,0,0,0,5.6,0c1.6-.9,1.6-2.3,0-3.2a5.81,5.81,0,0,0-5-.2l-69.8-40.3V599.4l-78.5-45.3,5.2-3,.9-.5,13.1-7.5,79.7,46,1.5.8,49.4,28.6v34l2.2,1.2.9.5,106.4,61.4c-1.1,1-1,2.2.4,3a6.08,6.08,0,0,0,5.6,0c1.5-.9,1.5-2.3,0-3.2a6.51,6.51,0,0,0-5.1-.3L622.5,653.2l-.9-.4-1.3-.8V618l-48.4-28.1-1.5-.8-23.5-13.6H605l23.6,13.6,1.4.8,42.2,24.4c-1.2.8-1.1,2.1.4,2.9a5.88,5.88,0,0,0,5.5,0c1.6-.9,1.6-2.3,0-3.2a5.59,5.59,0,0,0-4.9-.2l-41.4-23.9-1.4-.8-25.1-14.5H545.4l-7.3-4.2-48.4-27.9h.1l11.6-6.7.8-.5,9.7-5.6,32.6,18.7,1.4.9,13.7,7.8h76.8l21.5,12.4,1.4.8,64.3,37.2h48.6L791.9,619c-1.1.9-1,2.1.4,2.9a6.83,6.83,0,0,0,5.6,0C799.4,621.1,799.4,619.7,797.9,618.7ZM545,547.8l-32.2-18.7,2.8-1.6h-1.7l-12.6,7.3-.8.5.9.5.8-.5,9.7-5.6,32.6,18.7h9.9l1.2-.6Z"
                                fill="#0D0A3F" stroke="#FFF" strokeDashoffset="100%">
                                <animate
                                    attributeName="stroke-dasharray"
                                    dur="20s"
                                    values="80%;120%;80%"
                                    repeatCount="indefinite"
                                />
                            </path>
                        </g>
                    </g>
                </g>

            </svg> */}
        </div >
    )
}

export default About
