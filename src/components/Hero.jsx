import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Mail, Award, CheckCircle, Lock, Github } from 'lucide-react';


export default function Hero() {
  const [email, setEmail] = useState('');

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
      title: 'Secure & Verifiable',
      description: 'Each certificate comes with a unique QR code.',
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black via-purple-950 to-gray-950 text-gray-100">
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="container mx-auto px-4 pt-16 pb-8 md:py-20 text-center flex flex-col lg:flex-row lg:items-center lg:justify-center">
          <div className="">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] font-extrabold mb-10 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              CertiGen
            </motion.h1>
            <motion.p
              className="md:mb-3 mb-2 text-lg lg:font-semibold leading-2 tracking-wide text-gray-900 lg:text-3xl dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Generate, customize, and manage 
            </motion.p>
            <motion.p
              className="mb-4  lg:font-semibold leading-6 tracking-wide text-gray-900 text-lg lg:text-3xl dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
               certificates with ease.
            </motion.p>
            <motion.div
              className="flex flex-row justify-center items-center gap-4 lg:pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <button className="bg-[#5620AC] text-gray-50 px-6 py-3 sm:px-8 sm:py-3 rounded-sm text-lg font-semibold hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 hover:shadow-xl transition-all">
                Start Creating
              </button>
              <button className="bg-gray-100  flex items-center justify-between gap-2 text-gray-900 px-6 py-3 lg:px-8 sm:px-8 sm:py-3 rounded-sm text-lg font-semibold hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 hover:shadow-xl transition-all">
              <Github/>
                <span>Source</span>
              </button>
            </motion.div>
          </div>

          {/* Certificate Preview Section */}
          <div className="lg:w-1/2 lg:pl-8">
            <section id="preview" className="py-16">
              <div className="relative max-w-2xl mx-auto">
                {/* Gradient behind the certificate */}
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 blur-xl rounded-lg opacity-30 z-0"></div>

                {/* Certificate container */}
                <div className="relative bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 border border-gray-600 md:p-8 p-4 shadow-2xl z-10">
                  <div className="border-2 border-gray-600 p-6  bg-white certificate-preview shadow-md">
                    <h3 className="text-md md:text-3xl font-serif font-semibold text-center mb-6 text-gray-800">
                      Certificate of Achievement
                    </h3>
                    <p className="text-center text-md md:text-xl md:mb-6 mb-3 text-gray-700">
                      This is to certify that
                    </p>
                    <p className="text-md md:text-3xl font-bold text-center mb-3 md:mb-6 text-gray-800">
                      [Your Name]
                    </p>
                    <p className="text-sm md:text-xl mb-6 md:mb-6 text-gray-700">
                      has successfully completed the course
                    </p>
                    <p className="text-md md:text-2xl font-semibold text-center mb-3 md:mb-6 text-gray-800">
                      [Course Name]
                    </p>
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
              </div>
            </section>
          </div>
        </section>

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-24 h-24 sm:w-36 sm:h-36 bg-gradient-to-br from-pink-500 to-yellow-500 rounded-full opacity-30 blur-2xl"></div>
          <div className="absolute bottom-0 right-0 w-36 h-36 sm:w-48 sm:h-48 bg-gradient-to-tl from-green-400 to-blue-500 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute top-1/3 right-0 w-20 h-20 sm:w-28 sm:h-28 bg-gradient-to-tl from-purple-500 to-indigo-500 rounded-full opacity-20 blur-xl"></div>
        </div>

        {/* Features Section */}
        <section id="features" className="pb-16">
          <div className="container mx-auto px-4">
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