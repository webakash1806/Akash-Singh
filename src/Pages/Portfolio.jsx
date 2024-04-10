import React from 'react'
import { Link } from 'react-router-dom'

const Portfolio = () => {

    const images = [
        "https://picsum.photos/200/300?image=1050",
        //...
        "https://picsum.photos/300/300?image=206",
    ]

    return (
        <div className='flex flex-col  justify-center w-full gap-3 p-2 py-10 bg-[#00000063] backdrop-blur-md lg:gap-20 items-center '>
            <div className='lg:max-w-[65rem] sm:max-w-[40rem] w-full  px-1 '>
                <div data-aos="fade-up" className='flex items-center justify-start gap-2'>
                    <p className='font-semibold tracking-widest text-[#c6c5c5]'>PORTFOLIO </p>
                    <div className='w-20 h-[0.85px] bg-[#18D26E]'></div>
                </div>
                <p data-aos="fade-up" className='text-white text-[1.8rem] tracking-wide font-poppins font-semibold uppercase'>Our Works</p>
                <div className=' columns-1 mx-1 gap-5 lg:gap-8 mt-4 sm:columns-2 lg:columns-3 [&>img:not(:first-child)]:mt-5'>
                    <Link> <img className='rounded  shadow-[0px_0px_1px_#18D26E]' src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=700" alt="" />
                    </Link>

                    <img src="https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
                    <img src="https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />

                    <img src="https://images.pexels.com/photos/757889/pexels-photo-757889.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
                    <Link> <img className='rounded  shadow-[0px_0px_1px_#18D26E]' src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=700" alt="" />
                    </Link>

                    <img src="https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
                    <img src="https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />

                    <img src="https://images.pexels.com/photos/757889/pexels-photo-757889.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />

                </div>
            </div>

        </div>
    )
}

export default Portfolio
