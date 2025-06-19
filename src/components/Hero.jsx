import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  // Animation variants
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
        {/* Left side - Text content */}
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

        {/* Right side - Image */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="relative">
            <motion.img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80" 
              alt="Professional woman smiling" 
              className="w-full max-w-md rounded-lg shadow-2xl z-10 relative border-8 border-white"
              whileHover={{ scale: 1.02 }}
            />
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