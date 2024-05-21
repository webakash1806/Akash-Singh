import React, { useEffect, useState } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom'
import { IoIosLink, IoMdArrowBack } from "react-icons/io";
import backendCertificate from '../assets/backendCert.png'
import fullStackCertificate from '../assets/fullCert.png'
import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiMui, SiExpress, SiDaisyui, SiRedux, SiMongodb } from "react-icons/si";
import { GoDotFill } from "react-icons/go";

const Resume = () => {

    const [backActive, setBackActive] = useState(false)
    const [fullActive, setFullActive] = useState(false)

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <>
            <div className={`flex flex-col ${backActive ? "block" : "hidden"} items-center justify-center p-1 fixed h-[100vh] top-0 z-[500] bg-[#11111177] w-[100%]`}>
                <div className='md:w-[70vw] lg:w-[55%] w-full bg-[#2a2a2a]'>
                    <div onClick={() => setBackActive(false)} className='flex pl-4 p-1 cursor-pointer items-center gap-2 font-semibold justify-start text-[#18D26E] '><IoMdArrowBack />Back</div>
                </div>
                <img src={backendCertificate} alt="" className=' md:w-[70vw] lg:w-[55%]' />
            </div >
            <div className={`flex flex-col ${fullActive ? "block" : "hidden"} items-center justify-center p-1 fixed h-[100vh] top-0 z-[500] bg-[#111111bb] w-[100%]`}>
                <div className='md:w-[70vw] lg:w-[55%] w-full bg-[#282828]'>
                    <div onClick={() => setFullActive(false)} className='flex pl-4 p-1 cursor-pointer items-center gap-2 font-semibold justify-start text-[#18D26E] '><IoMdArrowBack />Back</div>
                </div>
                <img src={fullStackCertificate} alt="" className=' md:w-[70vw] lg:w-[55%]' />
            </div >
            <div className='flex flex-col items-center justify-center w-full gap-3 p-2 py-10 bg-[#00000063] backdrop-blur-md lg:gap-20 lg:flex-row lg:items-start '>

                <div className='lg:max-w-[30rem] max-w-[40rem]'>
                    <div data-aos="fade-up" className='flex items-center justify-start gap-2'>
                        <p className='font-semibold tracking-widest text-[#c6c5c5]'>RESUME </p>
                        <div className='w-20 h-[0.85px] bg-[#18D26E]'></div>
                    </div>
                    <p data-aos="fade-up" className='text-white text-[1.8rem] tracking-wide font-poppins font-semibold uppercase'>CHECK MY RESUME</p>

                    <div>
                        <div data-aos="fade-up" className='text-white'>
                            <p className='font-semibold text-white text-[1.6rem] tracking-wide mb-2 mt-6' data-aos="fade-up">Summary</p>
                            <div className='relative flex flex-col gap-3 pb-3 pl-6 ml-2 border-l-[1.6px] border-[#808080c1] rounded-t-lg'>
                                <div className='w-4 absolute left-[-8.5px] top-[0.5px] h-4 rounded-full bg-[#18D26E]'></div>
                                <h3 className='text-[1.2rem] font-semibold text-[#18D26E] ' data-aos="fade-up">AKASH KUMAR SINGH</h3>
                                <p className='text-[0.98rem] leading-[22px] italic tracking-wide font-200' data-aos="fade-up">
                                    Motivated MERN Stack Web Developer adept in both front-end and back-end technologies. Eager to apply academic knowledge and practical skills to dynamic projects. Seeking a challenging and rewarding career in web development.</p>
                                <ul data-aos="fade-up" className='text-[0.92rem] tracking-wide list-disc pl-8 flex flex-col gap-2 mt-1'>
                                    <li data-aos="fade-up" className='font-[300]'>
                                        +91 6207234759
                                    </li>
                                    <li data-aos="fade-up" className='font-300'>
                                        itsakash18.06@gmail.com
                                    </li>
                                    <li data-aos="fade-up" className='font-300'>Varanasi, Uttar Pradesh, India</li>
                                </ul>
                            </div>
                        </div>
                        <div data-aos="fade-up" className='text-white'>
                            <p className='font-semibold text-white text-[1.6rem] tracking-wide mb-2 mt-6' data-aos="fade-up">Education</p>
                            <div className='relative flex flex-col gap-3 pb-8 pl-6 ml-2 border-l-[1.6px] border-[#808080c1] rounded-t-lg'>
                                <div className='w-4 absolute left-[-8.5px] top-[0.5px] h-4 rounded-full bg-[#18D26E]'></div>
                                <h3 className='text-[1.2rem] font-semibold text-[#18D26E]' data-aos="fade-up">BACHELOR OF COMPUTER APPLICATIONS</h3>
                                <div className='bg-[#3a3a3abe] w-fit px-3 py-1 rounded-sm' data-aos="fade-up">
                                    <p className='text-[0.85rem] font-cor flex items-center tracking-wide'>202<span className='text-[1rem] pr-1'>1</span>- 202<span className='text-[1rem]'>4</span></p>
                                </div>
                                <p data-aos="fade-up" className='text-[0.98rem] leading-[22px] italic tracking-wide font-200'>
                                    Veer Bahadur Singh Purvanchal University,<br /> Jaunpur, UP</p>
                            </div>
                        </div>

                        <div data-aos="fade-up" className='text-white relative  flex flex-col gap-3 pb-3 pl-6 ml-2 border-l-[1.6px] border-[#808080c1] rounded-t-lg' >
                            <div className='w-4 absolute left-[-8.5px] top-[0.5px] h-4 rounded-full bg-[#18D26E]'></div>
                            <h3 data-aos="fade-up" className='text-[1.2rem] font-semibold text-[#18D26E]'>SECONDARY HIGH EDUCATION (BCOM)</h3>
                            <div data-aos="fade-up" className='bg-[#3a3a3abe] w-fit px-3 py-1 rounded-sm'>
                                <p className='text-[0.85rem] font-cor flex items-center tracking-wide'>201<span className='text-[1rem] pr-1'>9</span> - 202<span className='text-[1rem]'>1</span></p>
                            </div>
                            <p data-aos="fade-up" className='text-[0.98rem] leading-[22px] italic tracking-wide font-200'>
                                SN Sinha College, Aurangabad, Bihar</p>
                        </div>
                        <div data-aos="fade-up" className='text-white'>
                            <p className='font-semibold text-white text-[1.6rem] tracking-wide mb-2 mt-6' data-aos="fade-up">Languages</p>
                            <div className='relative flex flex-col gap-3 pb-3 pl-6 ml-2 border-l-[1.6px] border-[#808080c1] rounded-t-lg'>
                                <div className='w-4 absolute left-[-8.5px] top-[0.5px] h-4 rounded-full bg-[#19d26f]'></div>
                                <ul data-aos="fade-up" className='text-[0.92rem]  w-fit tracking-wide pt-8 flex flex-col gap-2 mt-1'>
                                    <li className='font-[300] flex items-end justify-start gap-3 pb-1' data-aos="fade-up">
                                        <p className='text-[1.03rem] font-normal tracking-wide'>English</p>
                                        <div className='flex gap-2 pb-[5.9px]'>
                                            <div className='w-3 h-3 bg-[#19d26f] rounded-sm'></div>
                                            <div className='w-3 h-3 bg-[#19d26f] rounded-sm'></div>
                                            <div className='w-3 h-3 bg-[#19d26f] rounded-sm'></div>
                                            <div className='w-3 h-3 bg-[#19d26f] rounded-sm'></div>
                                            <div className='w-3 h-3 bg-[#19d26f] rounded-sm'></div>
                                            <div className='w-3 h-3 bg-[#19d26f] rounded-sm'></div>
                                            <div className='w-3 h-3 bg-[#19d26f] rounded-sm'></div>
                                            <div className='w-3 h-3 border-[#19d26f] border rounded-sm'>
                                                <div className='w-[40%] h-full bg-[#19d26f] '></div>
                                            </div>
                                            <div className='w-3 h-3 border-[#19d26f] border rounded-sm'></div>
                                            <div className='w-3 h-3 border-[#19d26f] border rounded-sm'></div>
                                        </div>
                                    </li>
                                    <li data-aos="fade-up" className='font-[300] flex items-end justify-between gap-3'>
                                        <p className='text-[1.03rem] font-normal tracking-wide'>Hindi</p>
                                        <div className='flex gap-2 pb-[5.9px]'>
                                            <div className='w-3 h-3 bg-[#19d26f] rounded-sm'></div>
                                            <div className='w-3 h-3 bg-[#19d26f] rounded-sm'></div>
                                            <div className='w-3 h-3 bg-[#19d26f] rounded-sm'></div>
                                            <div className='w-3 h-3 bg-[#19d26f] rounded-sm'></div>
                                            <div className='w-3 h-3 bg-[#19d26f] rounded-sm'></div>
                                            <div className='w-3 h-3 bg-[#19d26f] rounded-sm'></div>
                                            <div className='w-3 h-3 bg-[#19d26f] rounded-sm'></div>
                                            <div className='w-3 h-3 bg-[#19d26f] rounded-sm'></div>
                                            <div className='w-3 h-3 bg-[#19d26f] rounded-sm'></div>
                                            <div className='w-3 h-3 border-[#19d26f] border rounded-sm'>
                                                <div className='w-[50%] h-full bg-[#19d26f] '></div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div data-aos="fade-up" className='text-white'>
                            <p className='font-semibold text-white text-[1.6rem] tracking-wide mb-2 mt-6'>Courses</p>
                            <div className='relative flex flex-col gap-3 pb-8 pl-6 ml-2 border-l-[1.6px] border-[#808080c1] rounded-t-lg'>
                                <div className='w-4 absolute left-[-8.5px] top-[0.5px] h-4 rounded-full bg-[#18D26E]'></div>
                                <h3 className='text-[1.2rem] font-semibold text-[#18D26E]'>Full Stack Web Development</h3>
                                <div className='bg-[#3a3a3abe] w-fit px-3 py-1 rounded-sm'>
                                    <p className='text-[0.85rem] font-cor flex items-center tracking-wide'>02/202<span className='text-[1rem] pr-1'>3</span>- 11/202<span className='text-[1rem]'>3</span></p>
                                </div>
                                <p className='text-[0.98rem] leading-[22px] italic tracking-wide font-200'>
                                    PW Skills, Online</p>
                                <Link onClick={() => setBackActive(true)} className='flex w-fit items-center justify-start gap-2 bg-[#3a3a3abe] p-1 px-4 rounded-[3px] font-[400] text-[0.95rem] tracking-wide'><IoIosLink className='text-[#18D26E]' />Certificate</Link>

                            </div>
                        </div>

                        <div data-aos="fade-up" className='text-white relative  flex flex-col gap-3 pb-3 pl-6 ml-2 border-l-[1.6px] border-[#808080c1] rounded-t-lg'>
                            <div className='w-4 absolute left-[-8.5px] top-[0.5px] h-4 rounded-full bg-[#18D26E]'></div>
                            <h3 className='text-[1.2rem] font-semibold text-[#18D26E]'>Modern Backend Application Using Node.js</h3>
                            <div className='bg-[#3a3a3abe] w-fit px-3 py-1 rounded-sm'>
                                <p className='text-[0.85rem] font-cor flex items-center tracking-wide'>06/202<span className='text-[1rem] pr-1'>3</span> - 07/202<span className='text-[1rem]'>3</span></p>
                            </div>
                            <p className='text-[0.98rem] leading-[22px] italic tracking-wide font-200'>
                                PW Skills, Online</p>
                            <Link onClick={() => setFullActive(true)} className='flex w-fit items-center justify-start gap-2 bg-[#3a3a3abe] p-1 px-4 rounded-[3px] font-[400] text-[0.95rem] tracking-wide'><IoIosLink className='text-[#18D26E]' />Certificate</Link>
                        </div>
                    </div>
                </div>
                <div className='lg:max-w-[30rem] max-w-[40rem] lg:mt-[4.3rem]'>
                    <div data-aos="fade-up" className='text-white'>
                        <p className='font-semibold text-white text-[1.6rem] tracking-wide mb-2 mt-6' data-aos="fade-up">Summary</p>
                        <div className='relative flex flex-col gap-3 pb-3 pl-6 ml-2 border-l-[1.6px] border-[#808080c1] rounded-t-lg data-aos="fade-up"'>
                            <div className='w-4 absolute left-[-8.5px] top-[0.5px] h-4 rounded-full bg-[#18D26E]'></div>
                            <h3 className='text-[1.2rem] font-semibold text-[#18D26E] ' data-aos="fade-up">AKASH KUMAR SINGH</h3>
                            <p className='text-[0.98rem] leading-[22px] italic tracking-wide font-200' data-aos="fade-up">
                                Motivated MERN Stack Web Developer adept in both front-end and back-end technologies. Eager to apply academic knowledge and practical skills to dynamic projects. Seeking a challenging and rewarding career in web development.</p>
                            <ul className='text-[0.92rem] tracking-wide list-disc pl-8 flex flex-col gap-2 mt-1'>
                                <li data-aos="fade-up" className='font-300'>
                                    +91 6207234759
                                </li>
                                <li data-aos="fade-up" className='font-300'>
                                    itsakash18.06@gmail.com
                                </li>
                                <li data-aos="fade-up" className='font-300'>Varanasi, Uttar Pradesh, India</li>
                            </ul>
                        </div>
                    </div>
                    <div data-aos="fade-up" className='text-white '>
                        <p className='font-semibold text-white text-[1.6rem] tracking-wide mb-2 mt-6'>Projects</p>
                        <div className='relative flex flex-col gap-3 pb-10 pl-6 ml-2 border-l-[1.6px] border-[#808080c1] rounded-t-lg'>
                            <div className='w-4 absolute left-[-8.5px] top-[0.5px] h-4 rounded-full bg-[#18D26E]'></div>
                            <h3 className='text-[1.2rem] font-semibold text-[#18D26E]'>ZENSTUDY (LMS-MERN)</h3>

                            <div className='flex flex-wrap items-center justify-start gap-2'>
                                <div className='text-[#18D26E] bg-[#2F2F2F] p-[10px] rounded-full text-[1.1rem]'> <FaReact /> </div>
                                <div className='text-[#18D26E] bg-[#2F2F2F] p-[10px] rounded-full text-[1.1rem]'> <SiTailwindcss /> </div>
                                <div className='text-[#18D26E] bg-[#2F2F2F] p-[10px] rounded-full text-[1.1rem]'> <SiRedux /> </div>
                                <div className='text-[#18D26E] bg-[#2F2F2F] p-[10px] rounded-full text-[1.1rem]'> <FaNodeJs /> </div>
                                <div className='text-[#18D26E] bg-[#2F2F2F] p-[10px] rounded-full text-[1.1rem]'> <SiExpress /> </div>
                                <div className='text-[#18D26E] bg-[#2F2F2F] p-[10px] rounded-full text-[1.1rem]'> <SiMongodb /> </div>
                                <div className='text-[#18D26E] bg-[#2F2F2F] p-[5px] rounded-full text-[1.75rem]'> <SiDaisyui /> </div>
                            </div>

                            <p className='text-[0.98rem] leading-[22px] italic tracking-wide font-200'>
                                ZenStudy is an innovative Learning Management System (LMS)
                                built on the MERN (MongoDB, Express.js, React.js, Node.js) stack.
                                Designed with a focus on simplicity, efficiency, and user
                                experience, ZenStudy aims to revolutionize the way educational
                                content is managed, delivered, and consumed.</p>
                            <ul className='text-[0.92rem] tracking-wide list-disc pl-8 flex flex-col gap-1 mt-1'>
                                <li className='font-300'>
                                    Intuitive and clean design for easy navigation.
                                </li>
                                <li className='font-300'>
                                    Responsive UI ensuring a seamless experience across devices.
                                </li>
                                <li className='font-300'>Create, edit, and organize courses with a flexible and user-
                                    friendly course management system.</li>
                                <li className='font-300'>Secure user authentication with role-based access control.</li>
                                <li className='font-300'>Built on the MERN stack for scalability and robust
                                    performance.</li>
                            </ul>
                            <div className='flex gap-3 pl-3'>
                                <Link to="https://github.com/webakash1806/LMS-MERN" target='_blank' className='flex w-fit items-center justify-start gap-2 bg-[#3a3a3abe] p-2 px-3 rounded-[3px] font-[400] text-[0.95rem] tracking-wide'><FaGithub className='text-[#18D26E]' />Source Code</Link>
                                <Link to="https://zenstudy.webakash1806.com/" target='_blank' className='flex w-fit items-center justify-center gap-2 bg-[#3a3a3abe] p-2 px-3 rounded-[3px] font-[400] text-[0.95rem] tracking-wide'><GoDotFill className='text-[#18D26E] animate-ping text-[1rem]' />Preview</Link>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up" className='text-white'>
                        <div className='relative flex flex-col gap-3 pb-3 pl-6 ml-2 border-l-[1.6px] border-[#808080c1] rounded-t-lg'>
                            <div className='w-4 absolute left-[-8.5px] top-[0.5px] h-4 rounded-full bg-[#18D26E]'></div>
                            <h3 className='text-[1.2rem] font-semibold text-[#18D26E]'>CRYPTOWORLD</h3>
                            <div className='flex items-center justify-start gap-2'>
                                <div className='text-[#18D26E] bg-[#2F2F2F] p-[10px] rounded-full text-[1.1rem]'> <FaReact /> </div>
                                <div className='text-[#18D26E] bg-[#2F2F2F] p-[10px] rounded-full text-[1.1rem]'> <SiTailwindcss /> </div>
                                <div className='text-[#18D26E] bg-[#2F2F2F] p-[10px] rounded-full text-[1.1rem]'> <SiMui /> </div>
                            </div>
                            <p className='text-[0.98rem] leading-[22px] italic tracking-wide font-200'>
                                CryptoWorld provides real-time currency conversion options,
                                allowing users to view cryptocurrency prices in their
                                preferred fiat currencies.</p>
                            <ul className='text-[0.92rem] tracking-wide list-disc pl-8 flex flex-col gap-1 mt-1'>
                                <li className='font-300'>
                                    CryptoWorld fetches data from the CoinGecko API to display
                                    detailed information about a vast array of cryptocurrencies.
                                </li>
                                <li className='font-300'>
                                    The platform also offers information about cryptocurrency
                                    exchanges, including exchange name, location, and supported
                                    cryptocurrencies.
                                </li>
                                <li className='font-300'>One of the standout features of CryptoWorld is its integration
                                    with Chart.js, enabling users to visualize the historical price
                                    trends of cryptocurrencies.</li>
                                <li className='font-300'>Users can customize chart
                                    timeframes and zoom in to analyze price changes in detail.</li>

                            </ul>
                            <div className='flex gap-3 pl-3'>
                                <Link target='_blank' to="https://github.com/webakash1806/cryptoworld" className='flex w-fit items-center justify-start gap-2 bg-[#3a3a3abe] p-2 px-3 rounded-[3px] font-[400] text-[0.95rem] tracking-wide'><FaGithub className='text-[#18D26E]' />Source Code</Link>
                                <Link target='_blank' to="https://cryptoworld.webakash1806.com/" className='flex w-fit items-center justify-center gap-2 bg-[#3a3a3abe] p-2 px-3 rounded-[3px] font-[400] text-[0.95rem] tracking-wide'><GoDotFill className='text-[#18D26E] animate-ping text-[1rem]' />Preview</Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Resume
