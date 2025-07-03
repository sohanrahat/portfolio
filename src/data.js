import {
  SiReact, SiTailwindcss, SiHtml5, SiCss3,
  SiNextdotjs, SiNodedotjs, SiExpress, SiMongodb,
  SiVercel, SiFigma, SiGooglegemini,
  SiAdobeillustrator
} from 'react-icons/si';
import { DiGithubBadge, DiJavascript } from 'react-icons/di';
import { RiClaudeLine } from 'react-icons/ri';
import { IoLogoFirebase } from 'react-icons/io5';
import { VscPlug, VscVscode } from 'react-icons/vsc';
import { FaAws } from 'react-icons/fa';

export const skills = {
  Frontend: [
    { name: 'React', icon: SiReact, color: 'text-sky-400' },
    { name: 'Next.js', icon: SiNextdotjs, color: 'text-black' },
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
    { name: 'Github', icon: DiGithubBadge, color: 'text-black' },
    { name: 'AWS', icon: FaAws, color: 'text-orange-500' },
    { name: 'firebase', icon: IoLogoFirebase, color: 'text-orange-500' },
    { name: 'Vercel', icon: SiVercel, color: 'text-black' },
    { name: 'VS Code', icon: VscVscode, color: 'text-blue-600' },
    { name: 'Figma', icon: SiFigma, color: 'text-orange-500' },
    { name: 'Gemini', icon: SiGooglegemini, color: 'text-blue-500' },
    { name: 'Claude', icon: RiClaudeLine, color: 'text-[#C15F3C]' },
  ]
};

export const projects = [
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

export const education = [
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

export const bootcamps = [
  {
    degree: 'Full Stack Web Development',
    institution: 'Programming Hero',
    year: '2024',
    description: 'Intensive 6-month program covering MERN stack'
  }
];

export const experience = [
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
