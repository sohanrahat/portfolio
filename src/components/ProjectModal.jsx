import React from 'react';
import { X, ExternalLink, Github } from 'lucide-react';

const ProjectModal = ({ activeProject, setActiveProject }) => {
  if (!activeProject) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6" onClick={() => setActiveProject(null)}>
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-xl" onClick={(e) => e.stopPropagation()}>
        <div className="relative">
          <img
            src={activeProject.image}
            alt={activeProject.title}
            className="w-full h-64 object-cover rounded-t-2xl"
          />
          <button
            onClick={() => setActiveProject(null)}
            className="absolute top-4 right-4 bg-white/90 p-2 rounded-full hover:bg-white transition-colors shadow-md"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-8">
          <h3 className="text-3xl font-bold mb-4 text-gray-900">{activeProject.title}</h3>

          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2 text-gray-800">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {activeProject.tech.map((tech) => (
                <span key={tech} className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2 text-gray-800">Description</h4>
            <p className="text-gray-600">{activeProject.description}</p>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2 text-gray-800">Challenges Faced</h4>
            <p className="text-gray-600">{activeProject.challenges}</p>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2 text-gray-800">Future Improvements</h4>
            <p className="text-gray-600">{activeProject.improvements}</p>
          </div>

          <div className="flex gap-4">
            <a
              href={activeProject.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-300"
            >
              <ExternalLink size={18} />
              Live Demo
            </a>
            <a
              href={activeProject.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-100 text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-300"
            >
              <Github size={18} />
              View Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
