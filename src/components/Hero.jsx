import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Award, CheckCircle, Lock } from 'lucide-react';
import Particles from './Particles';
import Certificate from './Certificate';
import { FaGithub } from 'react-icons/fa';

export default function Hero() {
  const color = "#CE93D8";
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
      <main className="relative z-10">
        {/* Hero Section */}
        <Particles
              className="absolute inset-0 pointer-events-none z-0"
              quantity={250}
              ease={100}
              color={color}
              refresh
            />
        <section className="bg-gradient-to-b from-black via-neutral-800 to-gray-950 mx-auto px-4 pt-16 pb-8 md:py-20 text-center flex flex-col lg:flex-row  gap-x-12 lg:justify-center">
    <div className="flex-col flex justify-start gap-10 lg:py-8 mx-8 lg:mt-16 relative">
      <div className="flex flex-col gap-8 justify-center py-2 items-center w-full ">
        <span className="text-6xl font-black lg:text-8xl">Auto.gen</span>
        <div className="flex flex-col gap-4 justify-center text-2xl font-bold text-center lg:text-3xl">
          <div>Generate, customize, and manage</div>
          <div className="underline-highlight">certificates with ease..</div>
        </div>
      </div>
      
      <div className="text-lg justify-center items-center flex gap-4 z-50 relative">
        <a
          className="p-3 w-1/2 text-center bg-violet-600 dark:bg-violet-800 text-white hover:dark:bg-violet-900 transition hover:bg-violet-700 duration-300"
          href="/generate"
        >
          <p>Get Started</p>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 w-1/2 justify-center flex gap-2 items-center dark:bg-gray-300 bg-violet-200 text-black transition duration-300 hover:dark:bg-gray-400 hover:bg-violet-300"
          href="https://github.com/MihirJaiswal/certificate-generator"
        >
          <FaGithub size={20} />
          <p>Source</p>
        </a>
      </div>
      
      <div className="text-lg flex-col flex gap-2 items-center z-50 relative">
        <a
          href="/templates"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col md:flex-row w-full items-center md:justify-between text-sm dark:bg-neutral-900/50 font-medium text-neutral-700 dark:text-neutral-300 bg-neutral-50/60 backdrop-blur px-4 py-3 border border-neutral-300 dark:border-neutral-800 rounded-md ring-[6px] ring-black/[0.02] dark:ring-black/10"
        >
          <span>Looking for some templates?</span>
          <span className="flex gap-0.5 items-center font-semibold text-violet-600 dark:text-violet-400 group mt-1 md:mt-0">
            <p className=''>checkout</p>
            <svg
              className="size-3 [&_polyline]:stroke-[px] transition group-hover:translate-x-0.5 mt-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
            >
              <rect width="256" height="256" fill="none"></rect>
              <polyline
                points="96 48 176 128 96 208"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              ></polyline>
            </svg>
          </span>
        </a>
      </div>
    </div>
          {/* Certificate Preview Section */}
          <Certificate />
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
        <section id="features" className="pb-16 pt-10 bg-gradient-to-b from-[#040813] to-[#021b3b] relative">
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
