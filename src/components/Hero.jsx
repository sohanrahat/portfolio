import React from 'react';
import { ChevronDown } from 'lucide-react';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import sohan from '../assets/Sohan.jpg';

const Hero = ({ scrollToSection }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-6">
      <div className="text-center z-10">
        <div className="mb-8 relative inline-block">
          <div className="w-36 h-36 sm:w-48 sm:h-48 mx-auto rounded-full overflow-hidden border-4 border-gray-200 shadow-xl">
            <img src={sohan} alt="M N Sohan profile picture" />
          </div>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-4 text-white">
          MERN Stack Developer
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-8">
          Front-end developer blending creativity with code. <br /> Passionate about design, Film & Photography, JS, and AI. <br />Open to remote roles.
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mt-8">
          {[
            { icon: FaGithubSquare, link: 'https://github.com/sohanrahat' },
            { icon: FaLinkedin, link: 'https://linkedin.com/in/sohan-dev' }
          ].map(({ icon: Icon, link }, idx) => (
            <a
              key={idx}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-gray-700 hover:text-gray-900"
            >
              <Icon size={24} />
            </a>
          ))}
        </div>
      </div>

      <ChevronDown
        size={32}
        className="absolute bottom-8 animate-bounce cursor-pointer text-gray-400"
        onClick={() => scrollToSection('about')}
      />
    </section>
  );
};

export default Hero;
