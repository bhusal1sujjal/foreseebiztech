import React, { useState } from 'react';
import { assets } from '@/assets/assets';
import Image from 'next/image';

const ContactUs = () => {
  const [selectedCountry, setSelectedCountry] = useState('');

  const options = [
    "Australia",
    "USA",
    "UK",
    "Japan",
    "Canada",
    "European Union",
    "South Korea",
    "New Zealand",
  ];

   const [result, setResult] = useState("");
  
    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "4ea5642d-471a-4d18-b860-133adf65b581");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <div id='contact' className="min-h-screen bg-white px-4 py-10 md:px-20 bg-gray-100 ">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">CONTACT US</h1>
      <div className="w-24 h-2 bg-blue-500 mx-auto mb-10 rounded-full" />

      <div className="flex flex-col md:flex-row gap-10 items-center max-w-6xl mx-auto">
        <div className="w-full md:w-2/3 lg:w-1/2 flex justify-center">
          <Image
            src={assets.download_icon}
            alt="Globe"
            className="w-full max-w-lg object-contain"
          />
        </div>

        <form onSubmit={onSubmit} className="w-full md:w-2/3 lg:w-[450px] p-8 rounded-xl shadow space-y-6">
          <input
            className="w-full p-3 outline-none border border-gray-400 rounded-md"
            type="text"
            placeholder="Enter Name (e.g.Sujjal Bhusal)"
            required name='name'
          />
          <input
            className="w-full p-3 outline-none border border-gray-400 rounded-md"
            type="email"
            placeholder="Enter Email (e.g.bhusalsujjal063@gmail.com)"
            required name='email'
          />
          <input
            className="w-full p-3 outline-none border border-gray-400 rounded-md"
            type="text"
            placeholder="Enter Phone Number (e.g.9846930063)" name='phone number'
            required
          />

          {/* Country Selector */}
          <div className="w-full">
            <label className="block mb-2 text-gray-700 font-medium">Choose a Wished Country</label>
            <select
              className="w-full p-3 border border-gray-400 rounded-md bg-white"
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              required name='option'
            >
              <option value="" disabled>Select a country</option>
              {options.map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select>
            {selectedCountry && (
              <p className="mt-2 text-sm text-gray-600">Selected: <strong>{selectedCountry}</strong></p>
            )}
          </div>

          <textarea
            rows="6"
            placeholder="Enter your message"
            className="w-full p-4 outline-none border border-gray-400 rounded-md"
            required name='message'
          ></textarea>

          <button
            type="submit"
            className="py-3 px-8 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
          >
            Submit Now
          </button>

          <p className='mt-4'>{result}</p>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
