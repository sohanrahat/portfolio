import React from 'react';
import AnimatedCard from './AnimatedCard';
import { FaGraduationCap, FaUniversity, FaCertificate, FaSchool, FaBookOpen, FaAward } from 'react-icons/fa';
import { IoSchool } from 'react-icons/io5';
import { MdSchool } from 'react-icons/md';

const Education = ({ education }) => {
  const getEducationIcon = (degree, institution, index) => {
    const lowerDegree = degree?.toLowerCase() || '';
    const lowerInstitution = institution?.toLowerCase() || '';

    if (lowerDegree.includes('phd') || lowerDegree.includes('doctorate') || lowerDegree.includes('ph.d')) {
      return <FaGraduationCap className="text-gray-700 mt-1" size={28} />;
    } else if (lowerDegree.includes('master') || lowerDegree.includes('msc') || lowerDegree.includes('ma') || lowerDegree.includes('mba')) {
      return <FaUniversity className="text-gray-600 mt-1" size={28} />;
    } else if (lowerDegree.includes('bachelor') || lowerDegree.includes('bsc') || lowerDegree.includes('ba') || lowerDegree.includes('degree')) {
      return <FaAward className="text-gray-600 mt-1" size={28} />;
    } else if (lowerDegree.includes('diploma') || lowerDegree.includes('certificate') || lowerDegree.includes('certification')) {
      return <FaCertificate className="text-gray-500 mt-1" size={28} />;
    } else if (lowerDegree.includes('course') || lowerDegree.includes('program') || lowerDegree.includes('training')) {
      return <FaBookOpen className="text-gray-600 mt-1" size={28} />;
    } else if (lowerDegree.includes('school') || lowerDegree.includes('high') || lowerDegree.includes('secondary') || lowerInstitution.includes('school')) {
      return <IoSchool className="text-gray-500 mt-1" size={28} />;
    } else {
      // Default icons cycling through subtle gray variations
      const icons = [
        <FaGraduationCap className="text-gray-600 mt-1" size={28} />,
        <FaUniversity className="text-gray-700 mt-1" size={28} />,
        <FaAward className="text-gray-600 mt-1" size={28} />,
        <MdSchool className="text-gray-500 mt-1" size={28} />,
        <FaCertificate className="text-gray-600 mt-1" size={28} />,
        <FaBookOpen className="text-gray-700 mt-1" size={28} />
      ];
      return icons[index % icons.length];
    }
  };

  return (
    <section id="education" className="py-20 px-6" style={{ backgroundColor: '#b8c8fb' }}>
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-700">
          Education
        </h2>
        <div className="space-y-6">
          {education.map((edu, idx) => (
            <AnimatedCard key={idx} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20">
              <div className="flex items-start gap-4">
                {getEducationIcon(edu.degree, edu.institution, idx)}


                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1 text-gray-700">{edu.degree}</h3>
                  <p className="text-gray-600 mb-2">{edu.institution}</p>
                  <p className="text-sm text-gray-500 mb-2">{edu.year}</p>
                  <p className="text-gray-700">{edu.description}</p>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
