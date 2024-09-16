import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Mail, Award, CheckCircle, Lock, } from 'lucide-react';
import Particles from './Particles';
import Certificate from './Certificate';
import {FaGithub} from 'react-icons/fa'


export default function Hero() {
  const color = "#ffffff";
  const features = [
    {
      icon: <Mail className="h-6 w-6 text-blue-400" />,
      title: 'Easy to Use',
      description: 'Intuitive interface for quick certificate creation.',
    },
    {
      icon: <Award className="h-6 w-6 text-yellow-400" />,
      title: 'Customizable Templates',
      description: 'Wide range of professional templates to choose from.',
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-green-400" />,
      title: 'Bulk Generation',
      description: 'Create multiple certificates in one go.',
    },
    {
      icon: <Lock className="h-6 w-6 text-red-400" />,
      title: 'QR code generation',
      description: 'Generate and add QR code easily.',
    },
  ];

  return (
    <div className="relative min-h-screen text-gray-100">
      <main className="relative  z-10">
        {/* Hero Section */}
      
        <section className=" bg-gradient-to-b from-black via-neutral-800 to-gray-950 mx-auto px-4 pt-16 pb-8 md:py-20 text-center flex flex-col lg:flex-row lg:items-center gap-x-12 lg:justify-center">
        
          <div className="">
          <Particles
        className="absolute inset-0 pointer-events-none"
        quantity={250}
        ease={100}
        color={color}
        
        size={1}
        refresh
      />
      <div className="absolute pointer-events-none inset-0 w-full h-full bg-gradient-to-r from-black via-gray-900 to-gray-950 blur-xl rounded-lg opacity-60 z-0"></div>
            <motion.h1
              className="text-5xl relative md:text-6xl lg:text-[5rem] font-extrabold mb-5 md:mb-10 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Certi-
              <span className='text-red-50  '>GEN</span>
            </motion.h1>
            <motion.p
              className="md:mb-3 relative mb-2 text-lg lg:font-bold leading-2 tracking-wide text-gray-900 lg:text-3xl dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Generate, customize, and manage 
            </motion.p>
            <motion.p
              className="mb-10 lg:mb-6 relative lg:font-bold leading-6 tracking-wide text-gray-900 text-lg lg:text-3xl dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
               certificates with ease.
            </motion.p>
            <motion.div  
              className="flex relative flex-row justify-center items-center gap-4 lg:pt-6 z-50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a href="/generate">
              <button className="bg-[#5620AC] text-gray-50 px-6 py-3 sm:px-8 sm:py-3 rounded-md text-lg font-semibold  cursor-pointer transition-all">
                Start Creating
              </button>
              </a>
              <a href="https://github.com/MihirJaiswal/certificate-generator">
              <button className="bg-gray-100  flex items-center justify-between gap-2 text-gray-900 px-6 py-3 lg:px-8 sm:px-8 sm:py-3 rounded-md text-lg font-semibold  cursor-pointer transition-all">
              <FaGithub size={20} />
                <span>Source</span>
              </button>
              </a>
            </motion.div>
          </div>

          {/* Certificate Preview Section */}
         <Certificate/>
        </section>

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-24 h-24 sm:w-36 sm:h-36 bg-gradient-to-br from-pink-500 to-yellow-500 rounded-full opacity-30 blur-2xl"></div>
          <div className="absolute bottom-0 right-0 w-36 h-36 sm:w-48 sm:h-48 bg-gradient-to-tl from-green-400 to-blue-500 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute top-64 lg:top-28 lg:right-40 w-20 h-20 sm:w-28 sm:h-28 bg-gradient-to-tl from-purple-500 to-indigo-500 rounded-full opacity-5 blur-xl"></div>
        </div>

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-24 h-24 sm:w-36 sm:h-36 bg-gradient-to-br from-pink-500 to-yellow-500 rounded-full opacity-5 blur-2xl"></div>
          <div className="absolute bottom-0 right-0 w-36 h-36 sm:w-48 sm:h-48 bg-gradient-to-tl from-green-400 to-blue-500 rounded-full opacity-5 blur-3xl"></div>
          <div className="absolute top-28 right-0 w-20 h-20 sm:w-28 sm:h-28 bg-gradient-to-tl from-pink-500 to-yellow-500 rounded-full opacity-5 blur-xl"></div>
        </div>

        {/* Features Section */}
        <section id="features" className="pb-16 pt-10 bg-gradient-to-b from-[#090E18] to-[#080E18]  relative">
          <div className="container mx-auto px-4 relative font-poppins">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-100">
              Features
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-900 border border-gray-500 p-6 rounded-lg text-center shadow-lg flex flex-col items-center justify-center hover:shadow-2xl transition-shadow"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}