import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import pawanMain from '../assets/pawan/pawanMain.jpeg'
import pawan1 from '../assets/pawan/pawan1.jpeg'
import pawan2 from '../assets/pawan/pawan2.jpg'
import pawan3 from '../assets/pawan/pawan3.jpeg'
import pawan4 from '../assets/pawan/pawan4.jpeg'
import { AnimatePresence } from "framer-motion";


// Sample beauty/makeup images from Unsplash that match the color theme
const sliderImages = [
  pawanMain,
  pawan1,
  pawan2,
  pawan3,
  pawan4
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-rotate images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Animation variants (keeping all your original animations)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const blobVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 0.2,
      transition: {
        duration: 1.5,
        ease: "easeOut"
      }
    }
  };

  // New animation for image transitions
  const imageTransitionVariants = {
    enter: { opacity: 0, scale: 0.9 },
    center: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.1 }
  };

  return (
    <section className="w-full min-h-screen bg-gradient-to-r from-rose-50 to-indigo-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 bg-rose-200 rounded-full mix-blend-multiply filter blur-xl"
          variants={blobVariants}
          initial="hidden"
          animate="visible"
          custom={0}
        />
        <motion.div
          className="absolute bottom-20 right-32 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl"
          variants={blobVariants}
          initial="hidden"
          animate="visible"
          custom={1}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl"
          variants={blobVariants}
          initial="hidden"
          animate="visible"
          custom={2}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 flex flex-col md:flex-row items-center justify-between relative z-10">
        {/* Left side - Text content (unchanged) */}
        <motion.div
          className="md:w-1/2 mb-12 md:mb-0"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={itemVariants} className="text-rose-600 text-sm mb-4 uppercase tracking-widest font-medium">
            Professional Makeup Artist
          </motion.p>
          <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
            Beauty Crafted <br className="hidden md:block" />
            <span className="text-rose-500">With Passion</span>
          </motion.h1>
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
            I've always been passionate about transforming faces and bringing out the best in every individual.
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
            <Link to='/portfolio'>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 rounded-full font-medium transition duration-300"
              >
                View My Work
              </motion.button>
            </Link>
            <Link to='/contact'>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-gray-800 hover:bg-gray-800 hover:text-white text-gray-800 px-8 py-3 rounded-full font-medium transition duration-300"
              >
                Learn More
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right side - Image Slider */}

        <motion.div
          className="md:w-1/2 flex justify-center"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="relative w-full max-w-md h-auto">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                src={sliderImages[currentImageIndex]}
                alt="Professional makeup examples"
                className="w-full rounded-lg shadow-2xl z-10 relative border-8 border-white"
                variants={imageTransitionVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.8, ease: "easeInOut" }}
                whileHover={{ scale: 1.02 }}
              />
            </AnimatePresence>

            {/* Image slider indicators */}
            <div className="flex justify-center mt-4 space-x-2">
              {sliderImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${index === currentImageIndex ? 'bg-rose-500' : 'bg-gray-300'}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <motion.div
              className="absolute -bottom-6 -right-6 w-full h-full border-4 border-rose-300 rounded-lg z-0"
              initial={{ x: -20, y: -20, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            />
          </div>
        </motion.div>


      </div>
    </section>
  );
};

export default Hero;