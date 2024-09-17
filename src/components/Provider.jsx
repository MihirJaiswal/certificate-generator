import React from "react";
import { cn } from "../lib/utils";
import { motion } from "framer-motion";
import certi from '../assets/certi1.webp'
import certi1 from '../assets/certi2.jpg'
import certi2 from '../assets/certi3.jpg'
import certi3 from '../assets/certi4.webp'
import certi4 from '../assets/certi5.jpg'
import img from '../assets/heroimg.png'

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "Automate Name Insertion",
      description:
      "Generate multiple certificates by automatically inserting names from a provided list.",
      skeleton: <SkeletonOne />,
      className:
        "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800",
    },
    {
      title: "Create Custom Certificates",
      description:
        "Easily design and generate certificates with customizable templates, fonts, and colors.",
      skeleton: <SkeletonTwo />,
      className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
    },
  
  ];
  return (
    (<div className="relative z-20 py-10 lg:py-20 max-w-7xl mx-auto">
      <div className="px-8 mb-4">
        <h4
          className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
          Packed with features
        </h4>

        <p
          className="text-sm lg:text-base  max-w-xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
          From customizable templates to automated name insertion, our tool makes certificate generation simple and efficient, perfect for events, and more.
        </p>
      </div>
      <div className="relative  before:absolute before:inset-0 before:z-[-1] before:bg-gradient-to-r before:from-indigo-950 before:via-purple-950 before:to-pink-950 before:rounded-md before:blur-xl">
  <div className="relative grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border lg:border-gray-700 rounded-md bg-gradient-to-b from-[#120f23] border-t border-gray-800 md:from-black via-gray-950 to-neutral-900">
    {features.map((feature) => (
      <FeatureCard key={feature.title} className={feature.className}>
        <FeatureTitle>{feature.title}</FeatureTitle>
        <FeatureDescription>{feature.description}</FeatureDescription>
        <div className="h-full w-auto">{feature.skeleton}</div>
      </FeatureCard>
    ))}
  </div>
</div>

    </div>)
  );
}

const FeatureCard = ({
  children,
  className
}) => {
  return (
    (<div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>)
  );
};

const FeatureTitle = ({
  children
}) => {
  return (
    (<p
      className=" max-w-5xl mx-auto text-left tracking-tight text-black dark:text-white text-xl md:text-2xl md:leading-snug">
      {children}
    </p>)
  );
};

const FeatureDescription = ({
  children
}) => {
  return (
    (<p
      className={cn(
        "text-sm md:text-base  max-w-4xl text-left mx-auto",
        "text-neutral-500 text-center font-normal dark:text-neutral-300",
        "text-left max-w-sm mx-0 md:text-sm my-2"
      )}>
      {children}
    </p>)
  );
};

export const SkeletonOne = () => {
    return (
      <div className="relative flex py-8 px-2 gap-10 h-full">
        <div className="w-full p-3 m-auto md:m-1 md:mx-auto bg-white dark:bg-neutral-900 shadow-2xl group h-auto">
          <div className="flex flex-1 w-full h-auto flex-col space-y-2">
            <img
              src={img}
              alt="header"
              className="w-full h-44 md:h-96 aspect-square object-cover object-left-top rounded-sm" // Reduced size here
            />
          </div>
        </div>
  
        <div className="hidden md:block absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-white dark:from-black via-white dark:via-black to-transparent w-full pointer-events-none" />
        <div className="hidden md:block absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-white dark:from-black via-transparent to-transparent w-full pointer-events-none" />
      </div>
    );
  };
  



export const SkeletonTwo = () => {
  const images = [
   certi,
   certi1,
   certi2,
   certi3,
   certi4
  ];

  const imageVariants = {
    whileHover: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
    whileTap: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
  };
  return (
    (<div
      className="relative flex flex-col items-start p-8 gap-10 h-full overflow-hidden">
      {/* TODO */}
      <div className="flex flex-row -ml-20">
        {images.map((image, idx) => (
          <motion.div
            variants={imageVariants}
            key={"images-first" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden">
            <img
              src={image}
              alt="bali images"
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0" />
          </motion.div>
        ))}
      </div>
      <div className="flex flex-row">
        {images.map((image, idx) => (
          <motion.div
            key={"images-second" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            variants={imageVariants}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden">
            <img
              src={image}
              alt="bali images"
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0" />
          </motion.div>
        ))}
      </div>
      <div
        className="absolute left-0 z-[100] inset-y-0 w-20 bg-gradient-to-r from-white dark:from-black to-transparent  h-full pointer-events-none" />
      <div
        className="absolute right-0 z-[100] inset-y-0 w-20 bg-gradient-to-l from-white dark:from-black  to-transparent h-full pointer-events-none" />
    </div>)
  );
};


