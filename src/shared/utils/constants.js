import {
  SiGithub,
  SiPython,
  SiJavascript,
  SiHtml5,
  SiReact,
  SiNodedotjs,
  SiDjango,
  SiMongodb,
  SiTailwindcss,
} from 'react-icons/si';
import { FaGitAlt, FaCss3Alt } from 'react-icons/fa';
import { MdLayers } from 'react-icons/md';

/**
 * Global constants for the portfolio.
 */

export const NAV_LINKS = [
  { name: 'Inicio', href: '#hero' },
  { name: 'Sobre mí', href: '#about' },
  { name: 'Experiencia', href: '#experience' },
  { name: 'Proyectos', href: '#projects' },
];

export const SOCIAL_LINKS = {
  github: 'https://github.com/CristobalPinha',
  linkedin: 'https://www.linkedin.com/in/cristobbalp',
  instagram: 'https://www.instagram.com/cristobbal27/',
  email: 'cristobbalp@gmail.com',
  number: '+56 9 6507 6547',
  whatsapp: 'https://wa.me/56965076547'
};

export const TECHNOLOGIES = [
  { name: 'GitHub', icon: SiGithub },
  { name: 'Git', icon: FaGitAlt },
  { name: 'Python', icon: SiPython },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'HTML5', icon: SiHtml5 },
  { name: 'CSS3', icon: FaCss3Alt },
  { name: 'React', icon: SiReact },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'Django', icon: SiDjango },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'Tailwind', icon: SiTailwindcss },
  { name: 'LM Studio', icon: MdLayers }
];
