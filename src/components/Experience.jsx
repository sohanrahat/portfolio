import React from 'react';
import AnimatedCard from './AnimatedCard';
import { FaBriefcase, FaCode, FaLaptopCode, FaDesktop, FaMobile, FaDatabase, FaServer } from 'react-icons/fa';
import { MdDeveloperMode, MdWork, MdDesignServices, MdBusinessCenter } from 'react-icons/md';
import { SiReact, SiJavascript, SiPython, SiNodedotjs } from 'react-icons/si';
import { RiTeamFill } from 'react-icons/ri';

const Experience = ({ experience }) => {
  const getExperienceIcon = (position, company, description, index) => {
    const lowerPosition = position?.toLowerCase() || '';
    const lowerCompany = company?.toLowerCase() || '';
    const lowerDescription = description?.toLowerCase() || '';
    const allText = `${lowerPosition} ${lowerCompany} ${lowerDescription}`;
    
    // Technology-specific roles
    if (allText.includes('react') || allText.includes('frontend') || allText.includes('front-end')) {
      return <SiReact className="text-gray-600 mt-1" size={28} />;
    } else if (allText.includes('javascript') || allText.includes('js') || allText.includes('node')) {
      return <SiJavascript className="text-gray-700 mt-1" size={28} />;
    } else if (allText.includes('python') || allText.includes('django') || allText.includes('flask')) {
      return <SiPython className="text-gray-600 mt-1" size={28} />;
    } else if (allText.includes('backend') || allText.includes('back-end') || allText.includes('api')) {
      return <FaServer className="text-gray-700 mt-1" size={28} />;
    } else if (allText.includes('database') || allText.includes('sql') || allText.includes('data')) {
      return <FaDatabase className="text-gray-600 mt-1" size={28} />;
    } else if (allText.includes('mobile') || allText.includes('ios') || allText.includes('android')) {
      return <FaMobile className="text-gray-600 mt-1" size={28} />;
    }
    // Role-specific icons
    else if (lowerPosition.includes('senior') || lowerPosition.includes('lead') || lowerPosition.includes('principal')) {
      return <MdBusinessCenter className="text-gray-700 mt-1" size={28} />;
    } else if (lowerPosition.includes('developer') || lowerPosition.includes('engineer') || lowerPosition.includes('programmer')) {
      return <MdDeveloperMode className="text-gray-600 mt-1" size={28} />;
    } else if (lowerPosition.includes('designer') || lowerPosition.includes('ui') || lowerPosition.includes('ux')) {
      return <MdDesignServices className="text-gray-600 mt-1" size={28} />;
    } else if (lowerPosition.includes('manager') || lowerPosition.includes('team') || lowerPosition.includes('director')) {
      return <RiTeamFill className="text-gray-700 mt-1" size={28} />;
    } else if (lowerPosition.includes('full') || lowerPosition.includes('stack') || lowerPosition.includes('web')) {
      return <FaLaptopCode className="text-gray-600 mt-1" size={28} />;
    } else if (allText.includes('software') || allText.includes('development') || allText.includes('coding')) {
      return <FaCode className="text-gray-600 mt-1" size={28} />;
    } else if (allText.includes('desktop') || allText.includes('application') || allText.includes('app')) {
      return <FaDesktop className="text-gray-600 mt-1" size={28} />;
    } else {
      // Default icons cycling through subtle colors
      const icons = [
        <FaBriefcase className="text-gray-600 mt-1" size={28} />,
        <MdWork className="text-gray-700 mt-1" size={28} />,
        <FaCode className="text-gray-600 mt-1" size={28} />,
        <MdDeveloperMode className="text-gray-700 mt-1" size={28} />,
        <FaLaptopCode className="text-gray-600 mt-1" size={28} />,
        <MdBusinessCenter className="text-gray-700 mt-1" size={28} />
      ];
      return icons[index % icons.length];
    }
  };

  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-700">
          Experience
        </h2>
        <div className="space-y-6">
          {experience.map((exp, idx) => (
            <AnimatedCard key={idx} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-start gap-4">
                {getExperienceIcon(exp.position, exp.company, exp.description, idx)}
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1 text-gray-700">{exp.position}</h3>
                  <p className="text-gray-600 mb-2">{exp.company}</p>
                  <p className="text-sm text-gray-500 mb-2">{exp.period}</p>
                  <p className="text-gray-700">{exp.description}</p>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
