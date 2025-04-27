import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download } from 'lucide-react';
import Typed from 'typed.js'; 

const Home = () => {
  // Reference for the typed text animation
  const typedTextRef = useRef(null);
  
  useEffect(() => {
    // Initialize Typed.js
    const typed = new Typed(typedTextRef.current, {
      strings: ['CSE Student','Full Stack Developer','Tech Enthusiast'],
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 1500,
      loop: true,
      smartBackspace: true
    });
    
    // Clean up on component unmount
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="bg-gradient-to-r from-blue-900 to-purple-900 text-white min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm Inigashree</h1>
            <h2 className="text-2xl md:text-3xl mb-6">
              <span ref={typedTextRef}></span>
            </h2>
            <p className="text-lg mb-8">
              A passionate developer focused on creating impactful solutions through innovative technology.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/projects" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium flex items-center">
                View My Work <ArrowRight className="ml-2" size={18} />
              </Link>
              <Link to="/contact" className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 px-6 py-3 rounded-lg font-medium transition-colors">
                Get In Touch
              </Link>
              <a 
                href="/N_S_Inigashree_Resume.pdf" 
                download="Inigashree_Resume.pdf" 
                className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-medium flex items-center"
              >
                Download CV <Download className="ml-2" size={18} />
              </a>
            </div>
          </div>
          <div className="flex justify-center fade-in">
            <div className="w-80 h-80 rounded-full bg-blue-300 border-4 border-white overflow-hidden shadow-xl">
              {/* Larger profile image */}
              <img src="src/assets/IMG-20250214-WA0072.jpg" alt="Inigashree" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
