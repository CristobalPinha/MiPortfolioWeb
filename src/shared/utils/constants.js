import {
  SiPython, SiDjango, SiMysql, SiDocker,
  SiJavascript, SiReact, SiNodedotjs, SiElectron,
  SiPandas, SiScikitlearn, SiJupyter,
} from 'react-icons/si';
import { FaGitAlt } from 'react-icons/fa';

export const NAV_LINKS = [
  { name: 'Inicio',    href: '#hero' },
  { name: 'Sobre mí', href: '#about' },
  { name: 'Proyectos', href: '#projects' },
  { name: 'Servicios', href: '#experience' },
];

export const SOCIAL_LINKS = {
  github:    'https://github.com/CristobalPinha',
  linkedin:  'https://www.linkedin.com/in/cristobbalp',
  instagram: 'https://www.instagram.com/cristobbal27/',
  email:     'cristobbalp@gmail.com',
  number:    '+56 9 6507 6547',
  whatsapp:  'https://wa.me/56965076547'
};

export const TECHNOLOGIES = [
  { name: 'Python',       icon: SiPython,      color: '#3776AB' },
  { name: 'Django',       icon: SiDjango,      color: '#44B78B' },
  { name: 'MySQL',        icon: SiMysql,       color: '#4479A1' },
  { name: 'Docker',       icon: SiDocker,      color: '#2496ED' },
  { name: 'JavaScript',   icon: SiJavascript,  color: '#F7DF1E' },
  { name: 'React',        icon: SiReact,       color: '#61DAFB' },
  { name: 'Node.js',      icon: SiNodedotjs,   color: '#339933' },
  { name: 'Electron',     icon: SiElectron,    color: '#47848F' },
  { name: 'Pandas',       icon: SiPandas,      color: '#150458' },
  { name: 'Scikit-Learn', icon: SiScikitlearn, color: '#F7931E' },
  { name: 'Jupyter',      icon: SiJupyter,     color: '#F37626' },
  { name: 'Git',          icon: FaGitAlt,      color: '#F05032' },
];
