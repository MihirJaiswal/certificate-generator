import React, { useState } from 'react';
import google from '../assets/cloudLogo.svg'
import udemy from '../assets/udemy.png'
import fcc from '../assets/freecodecamp.png'

export default function Certificate() {
  const [activeTemplate, setActiveTemplate] = useState(0);

  const handleSwitchTemplate = (index) => {
    setActiveTemplate(index);
  };

  return (
    <div className='z-50 mt-4'>
      {/* Buttons to switch between certificates */}
      <div className="flex justify-start bg-zinc-950 mt-4 py-2">
        <button
          className={`px-4 py-3 rounded-md flex items-center gap-2 text-lg ${activeTemplate === 0 ? 'bg-[#3e177c]' : ' text-gray-700 '}`}
          onClick={() => handleSwitchTemplate(0)}
        >
          <img src={fcc} alt="" className='w-8 ' />
        </button>
        <button
          className={`px-4 py-3 rounded-md flex items-center gap-2 text-lg ${activeTemplate === 1 ? ' bg-[#3e177c]' : ' text-gray-700 '}`}
          onClick={() => handleSwitchTemplate(1)}
        >
          <img src={udemy} alt="" className='w-6  ' />
        </button>
        <button
          className={`px-4 py-3 rounded-md flex items-center gap-2 text-lg ${activeTemplate === 2 ? ' bg-[#3e177c]' : ' text-gray-700 '}`}
          onClick={() => handleSwitchTemplate(2)}
        >
          <img src={google} alt="" className='w-6 ' />
        </button>
      </div>

      {/* Certificate Preview */}
      <div className="relative max-w-4xl mx-auto  w-full">
        {activeTemplate === 0 && (
          <div className="relative bg-neutral-900 border border-gray-600 md:h-full p-4 shadow-2xl z-10">
            <div className="p-6 bg-gradient-to-b from-black via-gray-950 to-indigo-950  shadow-md h-full flex flex-col justify-center">
              <h3 className="text-sm md:text-3xl font-serif font-semibold text-center mb-6 text-gray-200">
                Certificate of Achievement
              </h3>
              <p className="text-center text-md md:text-xl md:mb-6 mb-3 text-gray-300">This is to certify that</p>
              <p className="text-md md:text-3xl font-bold text-center mb-3 md:mb-6 text-gray-100">[Your Name]</p>
              <p className="text-sm md:text-xl mb-3 md:mb-6 text-gray-300">has successfully completed the</p>
              <p className="text-md md:text-2xl font-semibold text-center mb-3 md:mb-6 text-gray-300">[Course Name]</p>
              <div className="flex justify-between items-center">
                <div className="text-center text-gray-100">
                  <p className="font-semibold md:text-lg text-sm">[Date]</p>
                  <p className="text-sm">Date</p>
                </div>
                <div className="text-center text-gray-100">
                  <p className="font-semibold md:text-lg text-sm">[Signature]</p>
                  <p className="text-sm">Instructor</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTemplate === 1 && (
          <div className="relative bg-neutral-900 border border-gray-600 md:h-full p-4 shadow-2xl z-10">
            <div className="p-6 bg-bg2 bg-bottom bg-contain bg-no-repeat bg-white shadow-md h-full flex flex-col justify-center">
              <h3 className="text-sm md:text-3xl font-serif font-semibold text-center mb-6 text-gray-800">
                Certificate of Achievement
              </h3>
              <p className="text-center text-md md:text-xl md:mb-6 mb-3 text-gray-700">This is to certify that</p>
              <p className="text-md md:text-3xl font-bold text-center mb-3 md:mb-6 text-gray-800">[Your Name]</p>
              <p className="text-sm md:text-xl mb-3 md:mb-6 text-white ">.</p>
              <p className="text-md md:text-2xl font-semibold text-center mb-3 md:mb-6 text-gray-50">.</p>
              <div className="flex justify-between items-center">
                <div className="text-center text-gray-50">
                  <p className="font-semibold md:text-lg text-sm">.</p>
                  <p className="text-sm">.</p>
                </div>
                <div className="text-center text-gray-50">
                  <p className="font-semibold md:text-lg text-sm">.</p>
                  <p className="text-sm">.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTemplate === 2 && (
          <div className="relative bg-neutral-900 border border-gray-600 md:h-full p-4 shadow-2xl z-10">
            <div className="p-6 bg-bg1 bg-center shadow-md h-full flex flex-col justify-center">
              <h3 className="text-sm md:text-3xl font-serif font-semibold text-center mb-6 text-gray-800">
                Certificate of Achievement
              </h3>
              <p className="text-center text-md md:text-xl md:mb-6 mb-3 text-gray-700">This is to certify that</p>
              <p className="text-md md:text-3xl font-bold text-center mb-3 md:mb-6 text-gray-800">[Your Name]</p>
              <p className="text-sm md:text-xl mb-3 md:mb-6 text-gray-700">has successfully completed the</p>
              <p className="text-md md:text-2xl font-semibold text-center mb-3 md:mb-6 text-gray-800">[Course Name]</p>
              <div className="flex justify-between items-center">
                <div className="text-center text-gray-800">
                  <p className="font-semibold md:text-lg text-sm">[Date]</p>
                  <p className="text-sm">Date</p>
                </div>
                <div className="text-center text-gray-800">
                  <p className="font-semibold md:text-lg text-sm">[Signature]</p>
                  <p className="text-sm">Instructor</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
