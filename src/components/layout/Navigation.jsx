import React from 'react';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { NAV_LINKS } from '../../utils/constants';

export const Navigation = ({ isDark, toggleTheme }) => {
  const scrollPosition = useScrollPosition();
  const isScrolled = scrollPosition > 20;

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'border-b border-black/5 bg-white/75 backdrop-blur-xl dark:border-white/10 dark:bg-black/70 py-0' 
        : 'bg-transparent py-2'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <div className="flex flex-col leading-none">
              <h1 className="text-sm font-black uppercase tracking-[0.32em] text-text-main">CRISTOBAL PIÑA R.</h1>
              <span className="mt-1 text-[10px] uppercase tracking-[0.32em] text-text-muted">Software Engineer</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className="text-[11px] font-black uppercase tracking-[0.2em] text-text-main/70 transition-colors duration-300 hover:text-[#35d0c2]"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <div
              className="theme-switch scale-90"
              role="switch"
              tabIndex={0}
              aria-checked={isDark}
              aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
              onKeyDown={(e) => e.key === 'Enter' && toggleTheme()}
            >
              <input 
                type="checkbox" 
                checked={isDark} 
                onChange={toggleTheme} 
                tabIndex={-1}
                className="sr-only"
              />
              <span className="theme-slider" onClick={toggleTheme}>
                <span className="theme-slider-inner" />
              </span>
            </div>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
