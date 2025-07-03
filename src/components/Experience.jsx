import React from 'react';
import AnimatedCard from './AnimatedCard';
import { Briefcase } from 'lucide-react';

const Experience = ({ experience }) => {
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
                <Briefcase className="text-gray-700 mt-1" size={24} />
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
