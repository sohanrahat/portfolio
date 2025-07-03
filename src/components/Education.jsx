import React from 'react';
import AnimatedCard from './AnimatedCard';
import { GraduationCap } from 'lucide-react';

const Education = ({ education }) => {
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
                <GraduationCap className="text-blue-600 mt-1" size={24} />
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
