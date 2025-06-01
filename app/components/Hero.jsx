import { useEffect, useState } from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  const [count, setCount] = useState(0); useEffect(() => {
     if (count >= 10000) return; const interval = setInterval(() => {
    setCount((prev) => { 
      if (prev >= 10000) {
        clearInterval(interval);
        return 10000;
      }
        return prev + 50;
      }); }, 20);
       return () => clearInterval(interval);
      }, [count]);
  return (
    <div className="w-full bg-gray-100 py-30">
  <div className="w-11/12 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
    {/* Left Side: Text */}
    <div className="flex-1 text-left space-y-6">
      <h1 className="text-6xl sm:text-xl lg:text-[66px] font-Inter font-bold">
        OVER <span className="text-red-600">{count.toLocaleString()}+</span>
      </h1>
      <h3 className="text-3xl md:text-6xl mb-3 font-Inter">Students' Trust</h3>
      <p className="max-w-xl text-base font-Inter leading-relaxed">
        <br></br>Fresee Biztech and Career Consultancy Pvt. Ltd is the best career consultancy in town which is the driving force since 2022 A.D.
      </p>

      <div className="flex flex-col sm:flex-row items-start gap-4 mt-4">
        <a
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2"
        >
          Inquiry Now
          <Image src={assets.right_arrow_white} className="w-4" alt="arrow" />
        </a>
      </div>
    </div>

    {/* Right Side: Enlarged Image */}
    <div className="flex-1 flex justify-center">
      <Image
        src={assets.mongodb}
        alt="Consultancy Illustration"
        width={5000}
        height={5000}
        className="object-contain"
      />
    </div>
  </div>
</div>

  )
}

export default Hero

