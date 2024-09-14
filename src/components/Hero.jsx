import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, CheckCircle, Mail, Lock, Award } from 'lucide-react';

const Hero = () => {
  const [email, setEmail] = useState('');
  const [activeAccordion, setActiveAccordion] = useState(null);

  const features = [
    { icon: <Mail className="h-6 w-6 text-blue-400" />, title: 'Easy to Use', description: 'Intuitive interface for quick certificate creation' },
    { icon: <Award className="h-6 w-6 text-yellow-400" />, title: 'Customizable Templates', description: 'Wide range of professional templates to choose from' },
    { icon: <CheckCircle className="h-6 w-6 text-green-400" />, title: 'Bulk Generation', description: 'Create multiple certificates in one go' },
    { icon: <Lock className="h-6 w-6 text-red-400" />, title: 'Secure & Verifiable', description: 'Each certificate comes with a unique QR code' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-gray-900  text-gray-100">
      <main>
        <section className="container mx-auto px-4 py-20 text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6 text-gradient"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Create Stunning Certificates in Minutes
          </motion.h1>
          <motion.p 
            className="text-xl mb-8 text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Generate, customize, and manage professional certificates for your courses, events, and achievements with ease.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button className="bg-blue-500 text-gray-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-400 transition-colors mr-4">
              Start Creating
            </button>
            <button className="border border-blue-500 text-blue-500 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors">
              Learn More
            </button>
          </motion.div>
        </section>

        <section id="features" className="bg-gray-950 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-100">Why Choose Our Certificate Generator?</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="bg-gray-800 border border-gray-500 p-6 rounded-lg text-center shadow-lg flex flex-col items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className={`mb-4 ${index === 0 ? 'text-blue-400' : index === 1 ? 'text-yellow-400' : index === 2 ? 'text-green-400' : 'text-red-400'}`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="preview" className="py-20 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-100">See Your Certificate Come to Life</h2>
            <div className="bg-bg1 bg-center border p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
              <div className="border-2 border-gray-600 p-6 rounded-lg">
                <h3 className="text-2xl font-serif text-center mb-4 text-gray-900">Certificate of Achievement</h3>
                <p className="text-center mb-4 text-gray-900">This is to certify that</p>
                <p className="text-2xl font-bold text-center mb-4 text-gray-900">[Your Name]</p>
                <p className="text-center mb-8 text-gray-900">has successfully completed the course</p>
                <p className="text-xl font-semibold text-center mb-8 text-gray-900">[Course Name]</p>
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
        </section>
      </main>
    </div>
  );
};

export default Hero;
