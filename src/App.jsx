import React, { useState, useEffect } from 'react';
import AnimatedCard from './components/AnimatedCard';
import { ChevronDown, Download, Github, Linkedin, ExternalLink, Award, Briefcase, GraduationCap, Menu, X, ArrowUp } from 'lucide-react';
import { VscBrowser, VscDatabase, VscTools, VscPlug, VscCode, VscVscode } from 'react-icons/vsc';
import {
  FaAws, FaEnvelope, FaGithubSquare, FaLinkedin, FaPhone, FaWhatsapp
} from 'react-icons/fa';
import {
  SiReact, SiTailwindcss, SiHtml5, SiCss3,
  SiNodedotjs, SiExpress, SiMongodb,
  SiVercel, SiFigma, SiGooglegemini,
  SiAdobeillustrator
} from 'react-icons/si';
import sohan from '../src/assets/Sohan.jpg';
import { DiGithubBadge, DiJavascript } from 'react-icons/di';
import { RiClaudeLine } from 'react-icons/ri';
import { IoLogoFirebase } from 'react-icons/io5';

const Portfolio = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const skills = {
    Frontend: [
      { name: 'React', icon: SiReact, color: 'text-sky-400' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-500' },
      { name: 'HTML5', icon: SiHtml5, color: 'text-orange-600' },
      { name: 'CSS3', icon: SiCss3, color: 'text-blue-600' },
      { name: 'JavaScript', icon: DiJavascript, color: 'text-yellow-400' },
      { name: 'Illustrator', icon: SiAdobeillustrator, color: 'text-yellow-400' },
    ],
    Backend: [
      { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-600' },
      { name: 'Express.js', icon: SiExpress, color: 'text-black' },
      { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
      { name: 'REST APIs', icon: VscPlug, color: 'text-purple-500' },
    ],
    Tools: [
      { name: 'Github', icon: DiGithubBadge, color: 'text-orange-600' },
      { name: 'AWS', icon: FaAws, color: 'text-orange-500' },
      { name: 'firebase', icon: IoLogoFirebase, color: 'text-orange-500' },
      { name: 'Vercel', icon: SiVercel, color: 'text-black' },
      { name: 'VS Code', icon: VscVscode, color: 'text-blue-600' },
      { name: 'Figma', icon: SiFigma, color: 'text-orange-500' },
      { name: 'Gemini', icon: SiGooglegemini, color: 'text-blue-500' },
      { name: 'Claude', icon: RiClaudeLine, color: 'text-[#C15F3C]' },
    ]
  };

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
      description: 'A full-featured e-commerce platform with user authentication, product management, shopping cart, and payment integration.',
      liveDemo: 'https://example-ecommerce.com',
      github: 'https://github.com/yourusername/ecommerce',
      challenges: 'Implementing secure payment processing and optimizing database queries for large product catalogs.',
      improvements: 'Adding recommendation engine and implementing microservices architecture.'
    },
    {
      id: 2,
      title: 'Task Management App',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80',
      tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'TailwindCSS'],
      description: 'A collaborative task management application with real-time updates, team workspaces, and productivity analytics.',
      liveDemo: 'https://example-taskapp.com',
      github: 'https://github.com/yourusername/taskapp',
      challenges: 'Implementing real-time synchronization across multiple users and maintaining data consistency.',
      improvements: 'Adding AI-powered task prioritization and mobile app development.'
    },
    {
      id: 3,
      title: 'Social Media Dashboard',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80',
      tech: ['React', 'D3.js', 'Express', 'MySQL', 'Socket.io'],
      description: 'Analytics dashboard for social media managers to track engagement, schedule posts, and analyze performance metrics.',
      liveDemo: 'https://example-dashboard.com',
      github: 'https://github.com/yourusername/dashboard',
      challenges: 'Creating interactive data visualizations and handling large datasets efficiently.',
      improvements: 'Integration with more social platforms and predictive analytics features.'
    }
  ];

  const education = [
    {
      degree: 'BSc in EEE',
      institution: 'American International University - Bangladesh',
      year: '2007-2012',
    },
    {
      degree: 'Post Graduate Diploma in Documentary Photography',
      institution: 'Counter Foto - A Center for Visual Arts',
      year: '2013-2015',
    },

  ];

  const bootcamps = [
    {
      degree: 'Full Stack Web Development',
      institution: 'Programming Hero',
      year: '2024',
      description: 'Intensive 6-month program covering MERN stack'
    }

  ]

  const experience = [
    {
      position: 'Founder',
      company: 'Nree Productions',
      period: '2018 - Present',
      description: 'Production house based in Bangladesh with diverse team members from multidisciplinary sections of art and journalism. The team consists of Fixers,  Writers, Researchers, Visual Artists, cinematographers, Visual Artists, Researchers, and translators.',
      web: 'https://nreeproductions.com/'
    },
    {
      position: 'Faculty Member (Part Time)',
      company: 'Counter Foto - Center for Visual Arts',
      period: '2019 - 2019',
      description: 'Taught advanced diploma-level photography and mentored students to refine their creative vision and develop documentary projects.',
      web: 'https://counterfoto.org/'
    },
    {
      position: 'Global Coordinator',
      company: 'Counter Foto - Center for Visual Arts',
      period: '2016 - 2018',
      description: 'Taught advanced diploma-level photography and mentored students to refine their creative vision and develop documentary projects.',
      web: 'https://counterfoto.org/'
    },
    {
      position: 'Prezi Presentation Designer',
      company: 'WoW Prezi',
      period: '2019 - 2019',
      description: 'Planned, designed, and deployed animated Prezi presentations, crafting dynamic visual narratives with seamless transitions to engage diverse audiences.',
      web: 'https://wowprezi.com'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Subtle Background Pattern */}
      <div className="fixed inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">
              M N Sohan
            </h1>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['About', 'Skills', 'Education', 'Bootcamps', 'Projects', 'Experience', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-300 font-medium cursor-pointer"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-600"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg">
              <div className="flex flex-col space-y-4 p-6">
                {['About', 'Skills', 'Education', 'Bootcamps', 'Projects', 'Experience', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-300 font-medium text-left"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative px-6">
        <div className="text-center z-10">
          <div className="mb-8 relative inline-block">
            <div className="w-36 h-36 sm:w-48 sm:h-48 mx-auto rounded-full overflow-hidden border-4 border-gray-200 shadow-xl">
              <img src={sohan} alt="M N Sohan profile picture" />
            </div>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-4 text-gray-900">
            MERN Stack Developer
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Front-end developer blending creativity with code. Passionate about design, JS, and AI. Based in Dhaka. <br /> Open to remote roles.
          </p>

          <button className="bg-gray-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transform transition-all duration-300 shadow-lg flex items-center gap-2 mx-auto">
            <Download size={20} />
            Download Resume
          </button>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mt-8">
            {[
              { icon: FaGithubSquare, link: 'https://github.com/sohanrahat' },
              { icon: FaLinkedin, link: 'https://linkedin.com' }

            ].map(({ icon: Icon, link }, idx) => (
              <a
                key={idx}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-gray-600 hover:text-gray-900"
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

      {/* About Me Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            About Me
          </h2>
          <AnimatedCard className="bg-gray-50 rounded-2xl p-8 shadow-sm">
            <p className="text-lg leading-relaxed mb-6 text-gray-700 text-start">
              Hey there! I am a junior front-end web developer based in Dhaka, Bangladesh, specializing in building robust and user-friendly web applications.

              My background as a photographer and filmmaker equips me with a keen eye for design, visual storytelling, and user experience—unique strengths I bring to front-end development.

              Driven by curiosity and a commitment to continuous learning, I combine creative thinking with technical problem-solving and am ready to contribute to a forward-thinking team.
            </p>
            {/* <p className="text-lg leading-relaxed mb-6 text-gray-700">
              I specialize in building modern web applications using cutting-edge technologies. Whether it's crafting
              pixel-perfect frontends with React or architecting robust backend systems with Node.js, I approach every
              project with enthusiasm and attention to detail.
            </p> */}
            {/* <p className="text-lg leading-relaxed text-gray-700">
              When I'm not coding, you'll find me exploring new hiking trails, experimenting with photography, or
              diving into the latest tech blogs. I believe in continuous learning and love sharing knowledge with
              the developer community through open-source contributions and tech talks.
            </p> */}
          </AnimatedCard>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
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

      {/* Education Section */}
      <section id="education" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Education
          </h2>
          <div className="space-y-6">
            {education.map((edu, idx) => (
              <AnimatedCard key={idx} className="bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-start gap-4">
                  <GraduationCap className="text-blue-600 mt-1" size={24} />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1 text-gray-900">{edu.degree}</h3>
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

      {/* Bootcamps Section */}
      <section id="bootcamps" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Bootcamps & Certifications
          </h2>
          <div className="space-y-6">
            {bootcamps.map((bootcamp, idx) => (
              <AnimatedCard key={idx} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-start gap-4">
                  <Award className="text-purple-600 mt-1" size={24} />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1 text-gray-900">{bootcamp.degree}</h3>
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

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <AnimatedCard key={project.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{project.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span key={tech} className="text-xs bg-gray-200 px-2 py-1 rounded-full text-gray-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => setActiveProject(project)}
                    className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors duration-300"
                  >
                    View Details
                  </button>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Experience
          </h2>
          <div className="space-y-6">
            {experience.map((exp, idx) => (
              <AnimatedCard key={idx} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-start gap-4">
                  <Briefcase className="text-green-600 mt-1" size={24} />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1 text-gray-900">{exp.position}</h3>
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



      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Get In Touch
          </h2>
          <AnimatedCard className="bg-gray-50 rounded-2xl p-8 shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              <a href="mailto:mnsohan.dev@gmail.com" className="group">
                <FaEnvelope className="mx-auto mb-3 text-gray-500 group-hover:scale-110 transition-transform duration-300" size={32} />
                <h3 className="font-semibold mb-1 text-gray-900">Email</h3>
                <p className="text-gray-600">mnsohan.dev@gmail.com</p>
              </a>
              <a href="tel:+8801714069155" className="group">
                <FaPhone className="mx-auto mb-3 text-gray-500 group-hover:scale-110 transition-transform duration-300" size={32} />
                <h3 className="font-semibold mb-1 text-gray-900">Phone</h3>
                <p className="text-gray-600">+88 01714069155</p>
              </a>
              <a href="https://wa.me/8801714069155" className="group">
                <FaWhatsapp className="mx-auto mb-3 text-gray-500 group-hover:scale-110 transition-transform duration-300" size={32} />
                <h3 className="font-semibold mb-1 text-gray-900">WhatsApp</h3>
                <p className="text-gray-600">+88 01714069155</p>
              </a>
            </div>
          </AnimatedCard>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gray-100">
        <div className="container mx-auto text-center">
          <p className="text-gray-600">
            © 2024 M N Sohan. Built with passion and React.
          </p>
        </div>
      </footer>

      {/* Project Modal */}
      {activeProject && (
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
      )}

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gray-900 text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition-colors duration-300 hover:scale-110"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
};

export default Portfolio;