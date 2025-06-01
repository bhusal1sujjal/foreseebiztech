import { assets } from "@/assets/assets";
import Image from "next/image";
import { useState } from "react";

export default function Countries() {

  return (
    <div id="countries" className="bg-white flex flex-col items-center pt-5">
      <h1 className="text-4xl font-bold text-center mb-4">PLAN YOUR COUNTRY</h1>
      <div className="h-2 w-48 bg-blue-400 rounded-full mb-10"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 cursor-pointer">
        
        <div className="flex flex-col items-center">
          <Image src={assets.austraila} alt="Australia" width={300} height={200} className="object-contain" />
          <p className="mt-0.5 text-lg font-semibold">AUSTRALIA</p>
        </div>

        <div className="flex flex-col items-center">
          <Image src={assets.usa} alt="United Kingdom" width={300} height={200} className="object-contain" />
          <p className="mt-0.5text-lg font-semibold">USA</p>
        </div>

        <div className="flex flex-col items-center">
          <Image src={assets.uk} alt="USA" width={300} height={200} className="object-contain" />
          <p className="mt-0.5 text-lg font-semibold">UNITED KINGDOM</p>
        </div>

        <div className="flex flex-col items-center">
          <Image src={assets.europe} alt="France" width={300} height={200} className="object-contain" />
          <p className="mt-0.5 text-lg font-semibold">EUROPE</p>
        </div>

        <div className="flex flex-col items-center">
          <Image src={assets.canada} alt="France" width={300} height={200} className="object-contain" />
          <p className="mt-0.5 text-lg font-semibold">CANADA</p>
        </div>

        <div className="flex flex-col items-center">
          <Image src={assets.japan} alt="France" width={300} height={200} className="object-contain" />
          <p className="mt-0.5 text-lg font-semibold">JAPAN</p>
        </div>

        <div className="flex flex-col items-center">
          <Image src={assets.sk} alt="France" width={300} height={200} className="object-contain" />
          <p className="mt-0.5 text-lg font-semibold">SOUTH KOREA</p>
        </div>

        <div className="flex flex-col items-center">
          <Image src={assets.nz} alt="France" width={300} height={200} className="object-contain" />
          <p className="mt-0.5 text-lg font-semibold">NEW ZEALAND</p>
        </div>

      </div>
    </div>
  );
}