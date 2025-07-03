import React from 'react';
import AnimatedCard from './AnimatedCard';
import { VscBrowser, VscDatabase, VscTools } from 'react-icons/vsc';

const Skills = ({ skills }) => {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-700">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <AnimatedCard key={category} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                {category === 'Frontend' && <VscBrowser className="text-blue-600" size={28} />}
                {category === 'Backend' && <VscDatabase className="text-green-600" size={28} />}
                {category === 'Tools' && <VscTools className="text-orange-600" size={28} />}
                <h3 className="text-2xl font-bold text-gray-900">{category}</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {items.map((skill) => (
                  <div key={skill.name} className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors duration-300">
                    <skill.icon className={skill.color} size={18} />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
