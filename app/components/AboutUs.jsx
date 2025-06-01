import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const AboutUs = () => {
  return (
        <div id='about' className="min-h-screen bg-white px-4 py-10 md:px-20"> <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">ABOUT US</h1> <div className="w-24 h-2 bg-blue-500 mx-auto mb-10 rounded-full" />
        
        <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-5'>
            <div className='w-full lg:w-96 rounded-3xl max-w-none'>
                <Image src={assets.user_image} alt='user' className='w-full rounded5xl'/>
            </div>
            <div className='flex-1'>
                <p className='mb-10 max-w-2xl font-Inter'>
                Fresee  is a dynamic and forward- thinking career consultancy firm in Kathmandu. Fresee Biztech Career Consultancy Pvt. Ltd is dedicated to connecting international students with education providers worldwide. With a firm foundation in local expertise and a bold vision for the global marketplace, we are dedicated to guiding individuals and organizations toward brighter, purpose-driven futures.
                <br></br>
                At Fresee Biztech, we believe in the power of potential. Our mission is to bridge the gap between ambition and opportunity—whether it’s helping students pursue international education, supporting professionals in achieving global career goals, or enabling businesses to connect with top talent. We take pride in being a trusted partner throughout every step of your journey.
                </p>
            </div>
        </div>

    </div>
  )
}

export default AboutUs