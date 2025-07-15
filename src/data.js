import {
  SiReact, SiTailwindcss, SiHtml5, SiCss3,
  SiNextdotjs, SiNodedotjs, SiExpress, SiMongodb,
  SiVercel, SiFigma, SiGooglegemini,
  SiAdobeillustrator,
  SiWordpress,
  SiElementor
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
    { name: 'WordPress', icon: SiWordpress, color: 'text-blue-700' },
    { name: 'Elementor', icon: SiElementor, color: 'text-pink-500' },
  ]
};

export const projects = [
  {
    id: 1,
    title: 'MIYAWAKI FOREST HOME',
    image: 'https://i.ibb.co/k2zsVGWG/Miyawaki-Forest-Home.png',
    tech: ['React', 'JavaScript', 'CSS3', 'Vercel'],
    description: 'Open web application that generates personalized Miyawaki forest plans based on land area and plant species selection. Features interactive forest planning system with automated calculations and downloadable layout plans.',
    liveDemo: 'https://miyawaki-forest-home.vercel.app/',
    github: 'https://github.com/sohanrahat/Miyawaki-Forest-Home',
    challenges: 'Implementing automated calculation algorithms for optimal tree quantities and planting layouts while ensuring accurate budget estimation.',
    improvements: 'Adding 3D visualization of forest layouts and integration with local nursery APIs for real-time plant availability.'
  },
  {
    id: 2,
    title: 'PLANT PLANET',
    image: 'https://i.ibb.co/7tJvpV9d/Plant-Planet.png',
    tech: ['React', 'Firebase', 'Node.js', 'JavaScript', 'CSS3'],
    description: 'Comprehensive plant tracking platform with integrated e-commerce marketplace for gardening enthusiasts. Features secure authentication, plant management system, and integrated marketplace for buying and selling plants.',
    liveDemo: 'https://plantplanet-14750.web.app/',
    github: 'https://github.com/sohanrahat/simple-plant-tracker',
    challenges: 'Creating a seamless integration between plant tracking functionality and e-commerce features while maintaining secure user authentication.',
    improvements: 'Adding plant health monitoring with AI-powered disease detection and social features for gardening community building.'
  },
  {
    id: 3,
    title: 'MARATHON MANIA',
    image: 'https://i.ibb.co/5xrhrRQT/Marathon-Mania.png',
    tech: ['React', 'Firebase', 'JavaScript', 'CSS3', 'Node.js'],
    description: 'Complete marathon event management platform for organizers and participants with training resources. Features event creation, participant registration, and training material subscription service.',
    liveDemo: 'https://marathonmania-6aea4.web.app/',
    github: 'https://github.com/sohanrahat/MarathonMania',
    challenges: 'Building a scalable event management system that handles both organizer and participant workflows while providing comprehensive training resources.',
    improvements: 'Adding real-time race tracking, mobile app development, and integration with wearable devices for training analytics.'
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
