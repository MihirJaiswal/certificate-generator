import React, { useState } from 'react';
import google from '../assets/cloudLogo.svg'
import udemy from '../assets/udemy.png'
import fcc from '../assets/freecodecamp.png'
import { motion } from 'framer-motion';

export default function Certificate() {
  const [activeTemplate, setActiveTemplate] = useState(0);

  const handleSwitchTemplate = (index) => {
    setActiveTemplate(index);
  };

  return  (
    <div className='relative mt-4 z-10'>
      {/* Background gradients coming from behind the certificate */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden lg:overflow-visible ">
        <div className="absolute top-12 left-1/4 w-72 h-72 bg-gradient-to-br from-purple-500 via-blue-500 to-indigo-500 rounded-full opacity-30 blur-2xl -z-10"></div>
        <div className="absolute top-12 left-2/4 w-96 h-96 bg-gradient-to-tl from-pink-400 via-purple-500 to-blue-600 rounded-full opacity-20 blur-3xl -z-10"></div>
        <div className="absolute top-12 right-16 w-72 h-72 bg-gradient-to-br from-indigo-600 via-purple-500 to-pink-500 rounded-full opacity-20 blur-2xl -z-10"></div>
      </div>
      {/* Buttons to switch between certificates */}
      <div className="flex justify-start bg-zinc-950 mt-4 py-2 relative z-50">
        {['fcc', 'udemy', 'google'].map((logo, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`px-4 py-3 rounded-md flex items-center gap-2 text-lg ${
              activeTemplate === index ? 'bg-[#3e177c]' : 'text-gray-700'
            }`}
            onClick={() => handleSwitchTemplate(index)}
          >
            <img src={index === 0 ? fcc : index === 1 ? udemy : google} alt="" className="w-6" />
          </motion.button>
        ))}
      </div>

      {/* Certificate Preview */}
      <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative max-w-4xl mx-auto  w-full z-50">
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
      </motion.div>
    </div>
  );
}
