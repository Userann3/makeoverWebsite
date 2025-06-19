import React from "react";

const Hero = () => {
  return (
    <section className="w-full min-h-screen bg-gradient-to-r from-rose-50 to-indigo-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-rose-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-20 right-32 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 flex flex-col md:flex-row items-center justify-between relative z-10">
        {/* Left side - Text content */}
        <div className="md:w-1/2 mb-12 md:mb-0">
          <p className="text-rose-600 text-sm mb-4 uppercase tracking-widest font-medium">
            Professional Makeup Artist
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
            Beauty Crafted <br className="hidden md:block" /> 
            <span className="text-rose-500">With Passion</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
            I’ve always been passionate about transforming faces and bringing out the best in every individual.

          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 rounded-full font-medium transition duration-300 transform hover:scale-105">
              View My Work
            </button>
            <button className="border-2 border-gray-800 hover:bg-gray-800 hover:text-white text-gray-800 px-8 py-3 rounded-full font-medium transition duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            {/* Sample image with decorative elements */}
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80" 
              alt="Professional woman smiling" 
              className="w-full max-w-md rounded-lg shadow-2xl z-10 relative border-8 border-white"
            />
            {/* Decorative shape behind image */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-rose-300 rounded-lg z-0"></div>
          </div>
        </div>
      </div>

      {/* Custom animation keyframes - add to your global CSS */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default Hero;