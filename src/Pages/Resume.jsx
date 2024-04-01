import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

const Resume = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div className='flex flex-col items-center justify-center w-full gap-3 p-2 py-10 bg-[#00000063] backdrop-blur-md lg:gap-20 lg:flex-row lg:items-start '>
            <div className='lg:max-w-[30rem] max-w-[40rem]'>
                <div data-aos="fade-up" className='flex items-center justify-start gap-2'>
                    <p className='font-semibold tracking-widest text-[#c6c5c5]'>RESUME </p>
                    <div className='w-20 h-[0.85px] bg-[#18D26E]'></div>
                </div>
                <p data-aos="fade-up" className='text-white text-[1.8rem] tracking-wide font-poppins font-semibold uppercase'>CHECK MY RESUME</p>

                <div>
                    <div data-aos="fade-up" className='text-white'>
                        <p className='font-semibold text-white text-[1.6rem] tracking-wide mb-2 mt-6'>Summary</p>
                        <div className='relative flex flex-col gap-3 pb-3 pl-6 ml-2 border-l-[1.6px] border-[#808080c1] rounded-t-lg'>
                            <div className='w-4 absolute left-[-8.5px] top-[0.5px] h-4 rounded-full bg-[#18D26E]'></div>
                            <h3 className='text-[1.2rem] font-semibold text-[#18D26E]'>AKASH KUMAR SINGH</h3>
                            <p className='text-[0.98rem] leading-[22px] italic tracking-wide font-200'>
                                Motivated MERN Stack Web Developer adept in both front-end and back-end technologies. Eager to apply academic knowledge and practical skills to dynamic projects. Seeking a challenging and rewarding career in web development.</p>
                            <ul className='text-[0.92rem] tracking-wide list-disc pl-8 flex flex-col gap-2 mt-1'>
                                <li className='font-[300]'>
                                    +91 6207234759
                                </li>
                                <li className='font-300'>
                                    itsakash18.06@gmail.com
                                </li>
                                <li className='font-300'>Varanasi, Uttar Pradesh, India</li>
                            </ul>
                        </div>
                    </div>
                    <div data-aos="fade-up" className='text-white'>
                        <p className='font-semibold text-white text-[1.6rem] tracking-wide mb-2 mt-6'>Education</p>
                        <div className='relative flex flex-col gap-3 pb-8 pl-6 ml-2 border-l-[1.6px] border-[#808080c1] rounded-t-lg'>
                            <div className='w-4 absolute left-[-8.5px] top-[0.5px] h-4 rounded-full bg-[#18D26E]'></div>
                            <h3 className='text-[1.2rem] font-semibold text-[#18D26E]'>BACHELOR OF COMPUTER APPLICATIONS</h3>
                            <div className='bg-[#3a3a3abe] w-fit px-3 py-1 rounded-sm'>
                                <p className='text-[0.85rem] font-cor flex items-center tracking-wide'>202<span className='text-[1rem] pr-1'>1</span>- 202<span className='text-[1rem]'>4</span></p>
                            </div>
                            <p className='text-[0.98rem] leading-[22px] italic tracking-wide font-200'>
                                Veer Bahadur Singh Purvanchal University,<br /> Jaunpur, UP</p>
                        </div>
                    </div>

                    <div data-aos="fade-up" className='text-white relative  flex flex-col gap-3 pb-3 pl-6 ml-2 border-l-[1.6px] border-[#808080c1] rounded-t-lg'>
                        <div className='w-4 absolute left-[-8.5px] top-[0.5px] h-4 rounded-full bg-[#18D26E]'></div>
                        <h3 className='text-[1.2rem] font-semibold text-[#18D26E]'>SECONDARY HIGH EDUCATION (BCOM)</h3>
                        <div className='bg-[#3a3a3abe] w-fit px-3 py-1 rounded-sm'>
                            <p className='text-[0.85rem] font-cor flex items-center tracking-wide'>201<span className='text-[1rem] pr-1'>9</span> - 202<span className='text-[1rem]'>1</span></p>
                        </div>
                        <p className='text-[0.98rem] leading-[22px] italic tracking-wide font-200'>
                            SN Sinha College, Aurangabad, Bihar</p>
                    </div>
                    <div data-aos="fade-up" className='text-white'>
                        <p className='font-semibold text-white text-[1.6rem] tracking-wide mb-2 mt-6'>Languages</p>
                        <div className='relative flex flex-col gap-3 pb-3 pl-6 ml-2 border-l-[1.6px] border-[#808080c1] rounded-t-lg'>
                            <div className='w-4 absolute left-[-8.5px] top-[0.5px] h-4 rounded-full bg-[#19d26f]'></div>
                            <ul className='text-[0.92rem]  w-fit tracking-wide pt-8 flex flex-col gap-2 mt-1'>
                                <li className='font-[300] flex items-end justify-start gap-3 pb-1'>
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
                                <li className='font-[300] flex items-end justify-between gap-3'>
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
                </div>
            </div>
            <div className='lg:max-w-[30rem] max-w-[40rem] lg:mt-[4.3rem]'>
                <div data-aos="fade-up" className='text-white'>
                    <p className='font-semibold text-white text-[1.6rem] tracking-wide mb-2 mt-6'>Summary</p>
                    <div className='relative flex flex-col gap-3 pb-3 pl-6 ml-2 border-l-[1.6px] border-[#808080c1] rounded-t-lg'>
                        <div className='w-4 absolute left-[-8.5px] top-[0.5px] h-4 rounded-full bg-[#18D26E]'></div>
                        <h3 className='text-[1.2rem] font-semibold text-[#18D26E]'>AKASH KUMAR SINGH</h3>
                        <p className='text-[0.98rem] leading-[22px] italic tracking-wide font-200'>
                            Motivated MERN Stack Web Developer adept in both front-end and back-end technologies. Eager to apply academic knowledge and practical skills to dynamic projects. Seeking a challenging and rewarding career in web development.</p>
                        <ul className='text-[0.92rem] tracking-wide list-disc pl-8 flex flex-col gap-2 mt-1'>
                            <li className='font-[300]'>
                                +91 6207234759
                            </li>
                            <li className='font-300'>
                                itsakash18.06@gmail.com
                            </li>
                            <li className='font-300'>Varanasi, Uttar Pradesh, India</li>
                        </ul>
                    </div>
                </div>
                <div data-aos="fade-up" className='text-white'>
                    <p className='font-semibold text-white text-[1.6rem] tracking-wide mb-2 mt-6'>Summary</p>
                    <div className='relative flex flex-col gap-3 pb-3 pl-6 ml-2 border-l-[1.6px] border-[#808080c1] rounded-t-lg'>
                        <div className='w-4 absolute left-[-8.5px] top-[0.5px] h-4 rounded-full bg-[#18D26E]'></div>
                        <h3 className='text-[1.2rem] font-semibold text-[#18D26E]'>AKASH KUMAR SINGH</h3>
                        <p className='text-[0.98rem] leading-[22px] italic tracking-wide font-200'>
                            Motivated MERN Stack Web Developer adept in both front-end and back-end technologies. Eager to apply academic knowledge and practical skills to dynamic projects. Seeking a challenging and rewarding career in web development.</p>
                        <ul className='text-[0.92rem] tracking-wide list-disc pl-8 flex flex-col gap-2 mt-1'>
                            <li className='font-[300]'>
                                +91 6207234759
                            </li>
                            <li className='font-300'>
                                itsakash18.06@gmail.com
                            </li>
                            <li className='font-300'>Varanasi, Uttar Pradesh, India</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume
