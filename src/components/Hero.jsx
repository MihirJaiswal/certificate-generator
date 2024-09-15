import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Award, CheckCircle, Lock } from 'lucide-react';

const Hero = () => {
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
    <div className="relative min-h-screen bg-gradient-to-b from-indigo-950 via-purple-950 to-gray-950 text-gray-100">
      <main className="relative z-10">
        
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 md:py-20 text-center">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Create Stunning Certificates in Minutes
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl mb-6 sm:mb-8 text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Generate, customize, and manage professional certificates for your courses, events, and achievements with ease.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row sm:justify-center items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-gray-900 px-6 py-3 sm:px-8 sm:py-3 rounded-full text-lg font-semibold hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 hover:shadow-xl transition-all">
              Start Creating
            </button>
            <button className="border border-blue-500 text-blue-500 px-6 py-3 sm:px-8 sm:py-3 rounded-full text-lg font-semibold hover:bg-gray-800 hover:text-gray-200 hover:shadow-lg transition-all">
              Learn More
            </button>
          </motion.div>
        </section>

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-24 h-24 sm:w-40 sm:h-40 bg-gradient-to-br from-pink-500 to-yellow-500 rounded-full opacity-30 blur-2xl"></div>
          <div className="absolute bottom-0 right-0 w-36 h-36 sm:w-60 sm:h-60 bg-gradient-to-tl from-green-400 to-blue-500 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute top-1/3 right-0 w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-tl from-purple-500 to-indigo-500 rounded-full opacity-20 blur-xl"></div>
        </div>

        {/* Features Section */}
        <section id="features" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-100">
              Why Choose Our Certificate Generator?
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

        {/* Certificate Preview Section */}
        <section id="preview" className="py-16">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-12 text-gray-100">
      See Your Certificate Come to Life
    </h2>
    <div className="relative max-w-2xl mx-auto">
      {/* Gradient behind the certificate */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 blur-xl rounded-lg opacity-30 z-0"></div>

      {/* Certificate container */}
      <div className="relative bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 border border-gray-600 md:p-8 p-4 rounded-lg shadow-lg z-10">
        <div className="border-2 border-gray-600 p-6 rounded-lg bg-white certificate-preview">
          <h3 className="text-2xl font-serif text-center mb-4 text-gray-900">
            Certificate of Achievement
          </h3>
          <p className="text-center mb-4 text-gray-900">
            This is to certify that
          </p>
          <p className="text-2xl font-bold text-center mb-4 text-gray-900">
            [Your Name]
          </p>
          <p className="text-center mb-8 text-gray-900">
            has successfully completed the course
          </p>
          <p className="text-xl font-semibold text-center mb-8 text-gray-900">
            [Course Name]
          </p>
          <div className="flex justify-between items-center">
            <div className="text-center text-gray-900">
              <p className="font-semibold">[Date]</p>
              <p>Date</p>
            </div>
            <div className="text-center text-gray-900">
              <p className="font-semibold">[Signature]</p>
              <p>Instructor</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      </main>
    </div>
  );
};

export default Hero;
