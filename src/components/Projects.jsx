import React from 'react';
import AnimatedCard from './AnimatedCard';

const Projects = ({ projects, setActiveProject }) => {
  return (
    <section id="projects" className="py-20 px-6" style={{ backgroundColor: '#b8c8fb' }}>
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-700">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <AnimatedCard key={project.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 border border-gray-200 transition-all duration-500 hover:scale-105">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span key={tech} className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-medium hover:bg-gray-200 transition-all duration-300">
                      {tech}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => setActiveProject(project)}
                  className="bg-gray-700 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  View Details
                </button>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
