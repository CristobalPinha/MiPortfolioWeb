import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { useScrollPosition } from '@shared/hooks/useScrollPosition';
import { NAV_LINKS, SOCIAL_LINKS } from '@shared/utils/constants';

const FONT_LEVELS = [
  { label: 'A', size: 10, aria: 'Texto pequeño' },
  { label: 'A', size: 13, aria: 'Texto mediano' },
  { label: 'A', size: 16, aria: 'Texto grande' },
];

export const Navigation = ({ isDark, toggleTheme, fontScale, setFontScale }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollPosition = useScrollPosition();
  const isScrolled = scrollPosition > 20;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-500 ${
      isScrolled
        ? 'border-b border-black/5 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-black/80 py-0 shadow-sm'
        : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="flex flex-col leading-none">
              <h1 className="text-sm font-black uppercase tracking-[0.32em] text-text-main group-hover:text-[#35d0c2] transition-colors">CRISTOBAL PIÑA R.</h1>
              <span className="mt-1 text-[10px] uppercase tracking-[0.32em] text-text-muted">Software Engineer</span>
            </div>
          </div>

          {/* Desktop Navigation */}
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
            {/* Font size toggle */}
            <div
              className="hidden md:flex items-center gap-px rounded-xl bg-black/[0.05] dark:bg-white/[0.05] border border-black/8 dark:border-white/8 p-0.5"
              role="group"
              aria-label="Tamaño de texto"
            >
              {FONT_LEVELS.map((level, i) => (
                <button
                  key={i}
                  onClick={() => setFontScale(i)}
                  aria-label={level.aria}
                  aria-pressed={fontScale === i}
                  className={`relative flex items-center justify-center w-7 h-7 rounded-[10px] font-black transition-all duration-200 select-none ${
                    fontScale === i
                      ? 'bg-[#35d0c2] text-[#0b0b0c] shadow-[0_2px_8px_rgba(53,208,194,0.35)]'
                      : 'text-text-muted hover:text-[#35d0c2] hover:bg-[#35d0c2]/8'
                  }`}
                  style={{ fontSize: `${level.size}px` }}
                >
                  {level.label}
                </button>
              ))}
            </div>

            {/* Separator */}
            <div className="hidden md:block w-px h-5 bg-black/10 dark:bg-white/10" />

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

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="p-2 text-text-main md:hidden focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 z-50 h-screen w-[280px] bg-white dark:bg-[#0b0b0c] p-8 shadow-2xl md:hidden"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-12">
                  <div className="flex flex-col leading-none">
                    <span className="text-xs font-black tracking-widest text-[#35d0c2]">MENU</span>
                  </div>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 text-text-main hover:bg-black/5 dark:hover:bg-white/5 rounded-full transition-colors"
                  >
                    <HiX size={24} />
                  </button>
                </div>

                <nav className="flex flex-col space-y-6">
                  {NAV_LINKS.map((link, i) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-xl font-bold uppercase tracking-[0.1em] text-text-main hover:text-[#35d0c2] transition-colors"
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </nav>

                {/* Mobile font size control */}
                <div className="mt-8 pt-6 border-t border-black/5 dark:border-white/5">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-text-muted block mb-3">Tamaño de texto</span>
                  <div className="flex items-center gap-1.5">
                    {FONT_LEVELS.map((level, i) => (
                      <button
                        key={i}
                        onClick={() => setFontScale(i)}
                        aria-label={level.aria}
                        aria-pressed={fontScale === i}
                        className={`flex items-center justify-center w-10 h-10 rounded-xl font-black transition-all duration-200 border ${
                          fontScale === i
                            ? 'bg-[#35d0c2] text-[#0b0b0c] border-[#35d0c2] shadow-[0_2px_10px_rgba(53,208,194,0.3)]'
                            : 'text-text-muted border-black/10 dark:border-white/10 hover:border-[#35d0c2]/40 hover:text-[#35d0c2]'
                        }`}
                        style={{ fontSize: `${level.size + 2}px` }}
                      >
                        {level.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-auto pt-8 border-t border-black/5 dark:border-white/5">
                  <div className="flex flex-col gap-4">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-text-muted">Encuéntrame en:</span>
                    <div className="flex gap-4 text-text-main/60">
                      <a
                        href={SOCIAL_LINKS.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] font-bold cursor-pointer hover:text-[#35d0c2]"
                      >
                        LINKEDIN
                      </a>
                      <a
                        href={SOCIAL_LINKS.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] font-bold cursor-pointer hover:text-[#35d0c2]"
                      >
                        GITHUB
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
