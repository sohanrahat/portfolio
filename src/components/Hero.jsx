import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import sohan from '../assets/Sohan.jpg';

const Hero = ({ scrollToSection }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);
  const fullText = 'MERN Stack Developer';

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-6">
      {/* Subtle Dot Pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
          backgroundSize: '20px 20px'
        }}
      ></div>

      <div className="text-center z-10">
        <div className="mb-6 relative inline-block">
          <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full overflow-hidden border-4 border-gray-200 shadow-xl relative">
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gray-300 animate-pulse flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
            <img
              src={sohan}
              alt="M N Sohan profile picture"
              className={`transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageLoaded(true)}
            />
          </div>
        </div>

        <motion.h1
          className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-3 text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          {displayedText}
          {isTyping && <span className="animate-pulse">|</span>}
        </motion.h1>
        <motion.p
          className="text-lg text-white mb-4 italic"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          "Blending creativity with code."
        </motion.p>
        <motion.p
          className="text-xl md:text-2xl text-gray-700 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          Passionate about Code, Design, Film & Photography
        </motion.p>

        {/* Availability Status */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        >
          <span className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
            Open to remote roles
          </span>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          className="flex justify-center gap-6 mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
        >
          {/* <div className="text-center">
            <div className="text-2xl font-bold text-white">3+</div>
            <div className="text-sm text-gray-400">Years Experience</div>
          </div> */}
          <div className="text-center">
            <div className="text-2xl font-bold text-white">5+</div>
            <div className="text-sm text-white">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">5+</div>
            <div className="text-sm text-white">Technologies</div>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
        >
          {[
            { icon: FaGithubSquare, link: 'https://github.com/sohanrahat', label: 'GitHub Profile' },
            { icon: FaLinkedin, link: 'https://linkedin.com/in/sohan-dev', label: 'LinkedIn Profile' }
          ].map(({ icon: Icon, link, label }, idx) => (
            <a
              key={idx}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-white hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 rounded-lg bg-gray-800/30 backdrop-blur-sm"
            >
              <Icon size={36} />
            </a>
          ))}
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4, ease: "easeOut" }}
        onClick={() => scrollToSection('about')}
        aria-label="Scroll to about section"
        className="absolute bottom-8 animate-bounce cursor-pointer text-gray-400 hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 rounded-md p-2 transition-colors duration-300"
      >
        <ChevronDown size={32} />
      </motion.button>
    </section>
  );
};

export default Hero;
