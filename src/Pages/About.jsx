import React from 'react'
import aboutBg from '../assets/aboutBg.jpg'
import aboutBoy from '../assets/aboutBoy.jpg'
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { TbBrandHtml5 } from "react-icons/tb";
import { RiCss3Line } from "react-icons/ri";
import { FaReact, FaCity, FaLinkedinIn } from "react-icons/fa6";
import { SiTailwindcss, SiFreelancer } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { CiCalendarDate, CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";


const About = () => {
    const skillsStyle = 'flex  items-center justify-between px-1 pr-2 text-white text-[0.87rem] tracking-wide font-semibold'
    return (
        <div className='bg-[#141219ce] font-poppins flex flex-col items-center justify-center text-white py-10'>
            <img src={aboutBg} alt="" className='fixed left-0 top-16 h-[100vh] w-[100%] z-[-20]' />
            <div className='flex flex-col gap-3 md:flex-row md:items-end md:justify-center'>
                <div>
                    <div className='flex items-center justify-start gap-2'>
                        <p className='font-semibold tracking-widest text-[#c6c5c5]'>ABOUT </p>
                        <div className='w-20 h-[0.85px] bg-[#18D26E]'></div>
                    </div>
                    <p className='text-white text-[1.8rem] tracking-wide font-poppins font-semibold uppercase'>Know more about me</p>
                    <img src={aboutBoy} alt="" className='w-[20rem]' />
                </div>
                <div className='max-w-[40rem] flex flex-col gap-3'>
                    <h1 className='text-[#18D26E] font-semibold tracking-wide text-[1.6rem]'>Web developer MERN</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam totam dicta, qui voluptatem recusandae dolores ratione odit voluptatibus optio molestias.</p>
                    <div className='flex flex-col md:items-center gap-1 md:gap-[10rem] md:flex-row'>
                        <div className='flex flex-col gap-2'>
                            <p className='flex items-center text-[0.9rem] gap-1 tracking-wide   cursor-pointer '><LiaBirthdayCakeSolid className='text-[#18D26E] text-[ 1.1rem]' /><span className='font-[500] text-[1rem] tracking-wider'>Birthday:</span>18th Dec 2004</p>

                            <p className='flex items-center text-[0.9rem] gap-1 tracking-wide   cursor-pointer '><CiCalendarDate className='text-[#18D26E] text-[ 1.1rem]' /><span className='font-[500] text-[1rem] tracking-wider'>Age:</span>19</p>
                            <p className='flex items-center text-[0.9rem] gap-1 tracking-wide   cursor-pointer '><FaCity className='text-[#18D26E] text-[ 1.1rem]' /><span className='font-[500] text-[1rem] tracking-wider'>City:</span>Varanasi, India</p>
                            <p className='flex items-center text-[0.9rem] gap-1 tracking-wide   cursor-pointer '><SiFreelancer className='text-[#18D26E] text-[ 1.1rem]' /><span className='font-[500] text-[1rem] tracking-wider'>Freelance:</span>Available</p>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <p className='flex items-center text-[0.9rem] gap-1 tracking-wide   cursor-pointer '><IoCallOutline className='text-[#18D26E] text-[ 1.1rem]' /><span className='font-[500] text-[1rem] tracking-wider'>Phone:</span>+91 6207234759</p>
                            <p className='flex items-center text-[0.9rem] gap-1 tracking-wide   cursor-pointer '><CiMail className='text-[#18D26E] text-[ 1.1rem]' /><span className='font-[500] text-[1rem] tracking-wider'>Email:</span>itsakash18.06@gmail.com</p>
                            <p className='flex items-center text-[0.9rem] gap-1 tracking-wide   cursor-pointer '><FiGithub className='text-[#18D26E] text-[1.1rem]' /><span className='font-[500] text-[1rem] tracking-wider'>Github:</span>@webakash1806</p>
                            <p className='flex items-center text-[0.9rem] gap-1 tracking-wide   cursor-pointer '><FaLinkedinIn className='text-[#18D26E] text-[1.1rem]' /><span className='font-[500] text-[1rem] tracking-wider'>Linkedin:</span>@itsakash18
                            </p>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, consectetur dolorum? Quis excepturi corporis nostrum inventore reprehenderit sit quidem, expedita ad animi voluptas tempora enim assumenda, a accusamus consequatur molestiae omnis consequuntur quos, laudantium aut doloremque dolorum necessitatibus ex? Eveniet.</p>
                </div>
            </div>
            <div className='w-full py-8 px-14'>

                <div className='flex flex-col items-center justify-center w-full md:gap-8 md:flex-row md:items-end'>
                    <div className='w-full md:w-[35%] flex flex-col gap-3'>
                        <div className='flex items-center justify-start gap-2 py-4'>
                            <p className='font-semibold tracking-widest text-[#c6c5c5]'>SKILLS </p>
                            <div className='w-20 h-[0.85px] bg-[#18D26E]'></div>
                        </div>
                        <div >
                            <div className={skillsStyle}><p className='flex items-center justify-center gap-1'><TbBrandHtml5 className='text-[1.2rem] text-[#18D26E]' />HTML</p>
                                <p>99%</p></div>
                            <progress className="h-[9px] w-full [&::-webkit-progress-bar]:rounded-sm  [&::-webkit-progress-value]:rounded-sm   [&::-webkit-progress-bar]:bg-grey [&::-webkit-progress-value]:bg-[#18D26E] " value="99" max="100"></progress>
                        </div>
                        <div >
                            <div className={skillsStyle}><p className='flex items-center justify-center gap-1'><RiCss3Line className='text-[1.2rem] text-[#18D26E]' />CSS</p>
                                <p>90%</p></div>
                            <progress className="h-[9px] w-full [&::-webkit-progress-bar]:rounded-sm  [&::-webkit-progress-value]:rounded-sm   [&::-webkit-progress-bar]:bg-grey [&::-webkit-progress-value]:bg-[#18D26E] " value="90" max="100"></progress>
                        </div>
                        <div >
                            <div className={skillsStyle}><p className='flex items-center justify-center gap-1'><FaReact className='text-[1.2rem] text-[#18D26E]' />ReactJS</p>
                                <p>85%</p></div>
                            <progress className="h-[9px] w-full [&::-webkit-progress-bar]:rounded-sm  [&::-webkit-progress-value]:rounded-sm   [&::-webkit-progress-bar]:bg-grey [&::-webkit-progress-value]:bg-[#18D26E] " value="85" max="100"></progress>
                        </div>
                    </div>
                    <div className='w-full md:w-[35%]  flex flex-col gap-3'>
                        <div >
                            <div className={skillsStyle}><p className='flex items-center justify-center gap-1'><SiTailwindcss className='text-[1.2rem] text-[#18D26E]' />TailwindCSS</p>
                                <p>95%</p></div>
                            <progress className="h-[9px] w-full [&::-webkit-progress-bar]:rounded-sm  [&::-webkit-progress-value]:rounded-sm   [&::-webkit-progress-bar]:bg-grey [&::-webkit-progress-value]:bg-[#18D26E] " value="95" max="100"></progress>
                        </div>
                        <div >
                            <div className={skillsStyle}><p className='flex items-center justify-center gap-1'><FaNodeJs className='text-[1.2rem] text-[#18D26E]' />NodeJS</p>
                                <p>80%</p></div>
                            <progress className="h-[9px] w-full [&::-webkit-progress-bar]:rounded-sm  [&::-webkit-progress-value]:rounded-sm   [&::-webkit-progress-bar]:bg-grey [&::-webkit-progress-value]:bg-[#18D26E] " value="80" max="100"></progress>
                        </div>
                        <div >
                            <div className={skillsStyle}><p className='flex items-center justify-center gap-1'><SiExpress className='text-[1.2rem] text-[#18D26E]' />ExpressJS</p>
                                <p>85%</p></div>
                            <progress className="h-[9px] w-full [&::-webkit-progress-bar]:rounded-sm  [&::-webkit-progress-value]:rounded-sm   [&::-webkit-progress-bar]:bg-grey [&::-webkit-progress-value]:bg-[#18D26E] " value="85" max="100"></progress>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default About
