import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AboutSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
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
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const badgeVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.6,
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section className="w-full bg-gradient-to-b from-rose-50 to-indigo-50 py-20">
      <motion.div 
        className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Left side - images */}
        <div className="flex gap-4 h-full">
          <div className="w-1/2 flex flex-col gap-4">
            <motion.img
              src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
              alt="Makeup artist working"
              className="rounded-2xl w-full object-cover h-64 shadow-lg"
              variants={imageVariants}
              whileHover={{ scale: 1.02 }}
            />
            <motion.img
              src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              alt="Makeup products"
              className="rounded-2xl w-full object-cover h-48 shadow-lg"
              variants={imageVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ delay: 0.2 }}
            />
          </div>
          <div className="w-1/2 relative">
            <motion.img
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              alt="Professional makeup artist smiling"
              className="rounded-2xl w-full object-cover h-full shadow-lg"
              variants={imageVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ delay: 0.4 }}
            />
            {/* Experience Badge */}
            <motion.div 
              className="absolute -bottom-6 -left-6 bg-rose-500 text-white text-center rounded-full w-32 h-32 flex flex-col items-center justify-center shadow-xl border-4 border-white"
              variants={badgeVariants}
              whileHover={{ rotate: 5 }}
            >
              <span className="text-3xl font-bold">30+</span>
              <span className="text-xs uppercase tracking-wider">Years Experience</span>
            </motion.div>
          </div>
        </div>

        {/* Right side - text content */}
        <motion.div className="space-y-6" variants={containerVariants}>
          <motion.p variants={itemVariants} className="text-sm text-rose-600 uppercase font-medium tracking-wider">
            About Me
          </motion.p>
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Your Beauty Journey <br />
            <span className="text-rose-500">Begins Here</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-700 text-lg">
            Hello, I'm Pawan, a Professional Makeup Artist with a passion for enhancing natural beauty. 
            I specialize in creating looks that make you feel confident and radiant for any occasion.
          </motion.p>
          
          <motion.ul variants={containerVariants} className="space-y-4">
            <motion.li variants={itemVariants} className="flex items-start gap-3">
              <div className="bg-rose-100 p-1 rounded-full mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-rose-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-700">Certified professional with 30+ years of experience</span>
            </motion.li>
            <motion.li variants={itemVariants} className="flex items-start gap-3">
              <div className="bg-rose-100 p-1 rounded-full mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-rose-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-700">Specialized in bridal, editorial, and special effects makeup</span>
            </motion.li>
            <motion.li variants={itemVariants} className="flex items-start gap-3">
              <div className="bg-rose-100 p-1 rounded-full mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-rose-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-700">Using only premium, skin-friendly products</span>
            </motion.li>
          </motion.ul>

          <motion.div variants={itemVariants} className="flex gap-4 pt-4">
            <Link to='/contact'>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 rounded-full font-medium shadow-lg shadow-rose-200"
              >
                LEARN MORE
              </motion.button>
            </Link>
            <Link to='/portfolio'>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-gray-800 hover:bg-gray-800 hover:text-white text-gray-800 px-8 py-3 rounded-full font-medium"
              >
                PORTFOLIO
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;