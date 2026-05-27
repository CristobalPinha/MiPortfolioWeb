import React from 'react';
import { SOCIAL_LINKS, NAV_LINKS } from '@shared/utils/constants';
import { SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export const Footer = () => {
  return (
    <footer className="border-t border-black/5 dark:border-white/5 py-16 px-4 bg-background transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[1.5fr_1fr_1fr] gap-12 mb-16">
          {/* Column 1: Brand */}
          <div className="space-y-6">
            <div className="flex flex-col leading-none">
              <h3 className="text-xl font-black uppercase tracking-[0.32em] text-text-main">
                CRISTOBAL<br/>PIÑA R.
              </h3>
              <span className="mt-2 text-[10px] uppercase tracking-[0.32em] text-[#35d0c2] font-bold">
                Software Engineer
              </span>
            </div>
            <p className="text-sm text-text-muted leading-relaxed max-w-sm">
              Especializado en el desarrollo de soluciones tecnológicas de alto impacto social y accesibilidad digital.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-[12px] font-black uppercase tracking-[0.2em] text-text-main mb-6">Explorar</h4>
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-text-muted hover:text-[#35d0c2] transition-colors duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact/Social */}
          <div>
            <h4 className="text-[12px] font-black uppercase tracking-[0.2em] text-text-main mb-6">Conectar</h4>
            <div className="flex flex-col gap-4">
              <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-text-muted hover:text-[#35d0c2] transition-colors duration-300 group">
                <SiGithub className="text-lg group-hover:scale-110 transition-transform" />
                <span>GitHub</span>
              </a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-text-muted hover:text-[#35d0c2] transition-colors duration-300 group">
                <FaLinkedin className="text-lg group-hover:scale-110 transition-transform" />
                <span>LinkedIn</span>
              </a>
              <a href={SOCIAL_LINKS.email} className="flex items-center gap-3 text-sm text-text-muted hover:text-[#35d0c2] transition-colors duration-300 group">
                <MdEmail className="text-lg group-hover:scale-110 transition-transform" />
                <span>{SOCIAL_LINKS.email}</span>
              </a>
              <a href={`tel:${SOCIAL_LINKS.number.replace(/\s/g, '')}`} className="flex items-center gap-3 text-sm text-text-muted hover:text-[#35d0c2] transition-colors duration-300 group">
                <svg className="w-[18px] h-[18px] group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <span>{SOCIAL_LINKS.number}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-black/5 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-text-muted/60">
            &copy; {new Date().getFullYear()} Cristóbal Piña Rivas • Santiago, Chile
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#35d0c2] animate-pulse"></div>
            <span className="text-[10px] font-black uppercase tracking-[0.15em] text-text-muted/60">Disponible para nuevos desafíos</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
