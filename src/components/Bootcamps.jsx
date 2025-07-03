import React from 'react';
import AnimatedCard from './AnimatedCard';
import { Award } from 'lucide-react';

const Bootcamps = ({ bootcamps }) => {
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
                <Award className="text-purple-600 mt-1" size={24} />
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
