import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='mt-20'>
        <div className='text-center'>
            <Image src={assets.logo} alt='' className='w-36 mx-auto mb-2'/>

           <div className='flex flex-col items-center gap-4 '>
  <a href='mailto:foreseebiztech01@gmail.com' className='flex items-center gap-2'>
    <Image src={assets.mail_icon} alt='' className='w-6' />
    foreseebiztech01@gmail.com
  </a>
  
    <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3531.2901794718387!2d85.3383611!3d27.7391944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjfCsDQ0JzIxLjEiTiA4NcKwMjAnMTguMSJF!5e0!3m2!1sen!2snp!4v1748749017929!5m2!1sen!2snp"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-md 
               w-full aspect-video 
               sm:w-[400px] sm:h-[300px] sm:aspect-auto"
            ></iframe>

</div>

        </div>

        <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
            <p>&copy; 2025 <a href='#top'> Foresee Biztech & Career Consultancy P.Ltd. All rights Reversed</a></p>
            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                <li>
                    <a target='_blank' href="https://www.facebook.com/foreseebiz?rdid=xwmkCzftQbb5sNba&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1E3nDW3xKr%2F">Facebook</a>
                </li>
                <li>
                    <a target='_blank' href="https://www.instagram.com/foreseebiztech_">Instagram</a>
                </li>
            </ul>
            
        </div>

        <p className="text-center text-xl text-gray-600 mb-6">
            || Developed & Designed by <a href='http://sujjalbhusal.com.np/' target='_blank' ><span className="font-semibold">Sujjal Bhusal</span> </a>||
        </p>

    </div>
  )
}

export default Footer