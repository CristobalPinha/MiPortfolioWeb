import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp, FaDownload } from 'react-icons/fa';
import TemplateCard from '@shared/ui/TemplateCard';
import Badge from '@shared/ui/Badge';
import Button from '@shared/ui/Button';
import profileImg from '../assets/profile.png';
import { SOCIAL_LINKS } from '@shared/utils/constants';
import { Decoration, SectionBackground } from '@shared/ui/Decoration';

export const Hero = ({ onDemoClick, onLearnMore }) => {
  return (
    <SectionBackground id="hero" variant="hero" className="min-h-screen flex items-center px-4 pt-24 pb-16">
      <Decoration variant="hero-glow" />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          
          {/* Card Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-[430px] lg:max-w-[480px]"
          >
            <TemplateCard 
              title="Profile v1.0"
              className="min-h-[550px]"
              innerClassName="flex flex-col justify-between p-5"
            >
              <div className="p-0 relative">
                <div className="flex justify-center">
                  <div className="group">
                    <div className="rounded-2xl overflow-hidden h-[240px] w-[240px] shadow-2xl ring-1 ring-black/5 dark:ring-white/5 transition-transform duration-500 group-hover:scale-105">
                      <img 
                        src={profileImg} 
                        alt="Cristobal Piña Rivas" 
                        className="h-full w-full object-cover relative z-10 transition-transform duration-700 ease-out group-hover:scale-105" 
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-col items-center gap-3">
                  <div className="flex gap-2">
                    <a 
                      href={SOCIAL_LINKS.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg border border-black/15 bg-white/70 text-text-main backdrop-blur-md hover:border-[#35d0c2]/60 hover:text-[#127c73] dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:text-[#6ee7dd] transition-all duration-300"
                      title="GitHub"
                    >
                      <FaGithub className="w-5 h-5" />
                    </a>
                    <a 
                      href={SOCIAL_LINKS.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg border border-black/15 bg-white/70 text-text-main backdrop-blur-md hover:border-[#35d0c2]/60 hover:text-[#127c73] dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:text-[#6ee7dd] transition-all duration-300"
                      title="LinkedIn"
                    >
                      <FaLinkedin className="w-5 h-5" />
                    </a>
                    <a 
                      href={SOCIAL_LINKS.instagram} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg border border-black/15 bg-white/70 text-text-main backdrop-blur-md hover:border-[#35d0c2]/60 hover:text-[#127c73] dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:text-[#6ee7dd] transition-all duration-300"
                      title="Instagram"
                    >
                      <FaInstagram className="w-5 h-5" />
                    </a>
                    <a 
                      href={SOCIAL_LINKS.whatsapp} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg border border-black/15 bg-white/70 text-text-main backdrop-blur-md hover:border-[#35d0c2]/60 hover:text-[#127c73] dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:text-[#6ee7dd] transition-all duration-300"
                      title="WhatsApp"
                    >
                      <FaWhatsapp className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Bottom Tags */}
              <div className="mt-8 flex flex-col gap-6 px-4 pb-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#35d0c2]">Especialización</span>
                    <div className="h-[1px] flex-1 bg-[#35d0c2]/20"></div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['Machine Learning', 'Data Science', 'Accesibilidad Web', 'Backend', 'Full Stack'].map((value) => (
                      <Badge key={value}>{value}</Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-black uppercase tracking-[0.25em] text-text-muted opacity-50">Soft Skills</span>
                    <div className="h-[1px] flex-1 bg-white/5"></div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['Buenas Prácticas', 'Liderazgo', 'Trabajo en Equipo'].map((value) => (
                      <Badge key={value} variant="outline">{value}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </TemplateCard>
          </motion.div>

          {/* Content Section */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl lg:pt-8"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#35d0c2]/10 border border-[#35d0c2]/30">
                <span className="w-2 h-2 rounded-full bg-[#35d0c2] animate-pulse"></span>
                <span className="text-xs font-medium text-[#35d0c2]">Buscando práctica profesional</span>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.92] tracking-[-0.05em] text-text-main">
              CRISTOBAL<br />PIÑA RIVAS
            </h1>

            <p className="mt-5 text-sm md:text-base uppercase tracking-[0.34em] text-text-muted">
              Software Engineer | Accesibilidad Web & Data Science
            </p>

            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "6rem" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-6 h-1 rounded-full bg-[#35d0c2]"
            ></motion.div>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-text-muted md:text-xl lg:text-2xl">
              Ingeniero en Informática en constante evolución. Combino mi experiencia creando interfaces web accesibles con el análisis profundo de datos. Como profesional en formación, mi mayor herramienta es la curiosidad: siempre buscando aprender nuevas tecnologías y transformar ese aprendizaje en soluciones con impacto real.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button onClick={onDemoClick} variant="primary">Ver proyectos</Button>
              <Button onClick={onLearnMore} variant="outline">Sobre mí</Button>
              <a 
                href="/cv-cristobal-pina-rivas.pdf" 
                download="cv-cristobal-pina-rivas.pdf"
                className="group inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-black uppercase tracking-[0.18em] bg-gradient-to-r from-[#35d0c2] to-[#2ab5a8] text-white shadow-lg hover:shadow-[0_0_30px_rgba(53,208,194,0.4)] dark:shadow-[0_0_30px_rgba(53,208,194,0.3)] transition-all duration-300 hover:-translate-y-1 border border-[#35d0c2]/30"
                title="Descargar CV - 1.2 Mb"
              >
                <FaDownload className="w-5 h-5 group-hover:animate-bounce" />
                CV
              </a>
            </div>
          </motion.div>
          
        </div>
      </div>
    </SectionBackground>
  );
};

export default Hero;