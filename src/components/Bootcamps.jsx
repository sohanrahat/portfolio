import React from 'react';
import AnimatedCard from './AnimatedCard';
import { FaAward, FaCertificate, FaCode, FaLaptopCode, FaTools, FaGraduationCap } from 'react-icons/fa';
import { SiPython, SiJavascript, SiReact, SiNodedotjs } from 'react-icons/si';
import { MdDeveloperMode, MdSchool } from 'react-icons/md';

const Bootcamps = ({ bootcamps }) => {
  const getBootcampIcon = (degree, institution, description, index) => {
    const lowerDegree = degree?.toLowerCase() || '';
    const lowerInstitution = institution?.toLowerCase() || '';
    const lowerDescription = description?.toLowerCase() || '';
    const allText = `${lowerDegree} ${lowerInstitution} ${lowerDescription}`;

    // Technology-specific icons
    if (allText.includes('python') || allText.includes('django') || allText.includes('flask')) {
      return <SiPython className="text-gray-600 mt-1" size={28} />;
    } else if (allText.includes('javascript') || allText.includes('js') || allText.includes('node')) {
      return <SiJavascript className="text-gray-700 mt-1" size={28} />;
    } else if (allText.includes('react') || allText.includes('frontend') || allText.includes('front-end')) {
      return <SiReact className="text-gray-600 mt-1" size={28} />;
    } else if (allText.includes('node') || allText.includes('backend') || allText.includes('back-end')) {
      return <SiNodedotjs className="text-gray-700 mt-1" size={28} />;
    }
    // Bootcamp/Course type icons
    else if (lowerDegree.includes('bootcamp') || lowerInstitution.includes('bootcamp')) {
      return <FaLaptopCode className="text-gray-600 mt-1" size={28} />;
    } else if (lowerDegree.includes('certification') || lowerDegree.includes('certificate')) {
      return <FaCertificate className="text-gray-500 mt-1" size={28} />;
    } else if (allText.includes('coding') || allText.includes('programming') || allText.includes('development')) {
      return <FaCode className="text-gray-600 mt-1" size={28} />;
    } else if (allText.includes('developer') || allText.includes('software')) {
      return <MdDeveloperMode className="text-gray-700 mt-1" size={28} />;
    } else if (allText.includes('tools') || allText.includes('framework') || allText.includes('technology')) {
      return <FaTools className="text-gray-500 mt-1" size={28} />;
    } else if (allText.includes('course') || allText.includes('training') || allText.includes('program')) {
      return <MdSchool className="text-gray-600 mt-1" size={28} />;
    } else {
      // Default icons cycling through subtle colors
      const icons = [
        <FaAward className="text-gray-600 mt-1" size={28} />,
        <FaCertificate className="text-gray-700 mt-1" size={28} />,
        <FaCode className="text-gray-500 mt-1" size={28} />,
        <FaLaptopCode className="text-gray-600 mt-1" size={28} />,
        <MdDeveloperMode className="text-gray-700 mt-1" size={28} />,
        <FaGraduationCap className="text-gray-600 mt-1" size={28} />
      ];
      return icons[index % icons.length];
    }
  };

  return (
    <section id="bootcamps" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-700">
          Bootcamps & Certifications
        </h2>
        <div className="space-y-6">
          {bootcamps.map((bootcamp, idx) => (
            <AnimatedCard key={idx} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-start gap-4">
                {getBootcampIcon(bootcamp.degree, bootcamp.institution, bootcamp.description, idx)}
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1 text-gray-700">{bootcamp.degree}</h3>
                  <p className="text-gray-600 mb-2">{bootcamp.institution}</p>
                  <p className="text-sm text-gray-500 mb-2">{bootcamp.year}</p>
                  <p className="text-gray-700">{bootcamp.description}</p>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bootcamps;
