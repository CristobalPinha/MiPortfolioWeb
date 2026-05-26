import React from 'react';
import { motion } from 'framer-motion';
import DownloadButton from '../ui/DownloadButton';
import TemplateCard from '../ui/TemplateCard';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import AvatarSVG from '../ui/AvatarSVG';
import { Decoration, SectionBackground } from '../ui/Decoration';

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
              title="Template System v1.0"
              className="min-h-[640px]"
              innerClassName="flex flex-col justify-between p-5"
            >
              <div className="rounded-[1.5rem] border border-black/10 dark:border-white/10 bg-background-secondary/80 dark:bg-[linear-gradient(180deg,#262626_0%,#171717_100%)] p-4 relative overflow-hidden">
                <div className="absolute -left-12 -top-12 w-32 h-32 rounded-full bg-[#35d0c2]/5 blur-2xl"></div>
                
                <div className="flex justify-center relative">
                  <div className="profileImage flex h-[290px] w-[220px] items-center justify-center overflow-hidden rounded-[1.35rem] bg-[linear-gradient(145deg,#3b3b3b,#1f1f1f)] shadow-[5px_10px_20px_rgba(0,0,0,0.33)] border border-white/5 relative group">
                    <div className="absolute inset-0 bg-[#35d0c2]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <AvatarSVG className="h-[178px] w-[178px] relative z-10" />
                  </div>
                </div>

                <div className="mt-5 flex flex-col items-center gap-3 relative">
                  <DownloadButton 
                    href="/cv-cristobal-pina-rivas.pdf" 
                    fileName="cv-cristobal-pina-rivas.pdf" 
                    tooltip="Size: 1.2Mb"
                  />
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
                    {['Machine Learning', 'Data Science', 'Accesibilidad Web'].map((value) => (
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
              Ingeniero en Informática en constante evolución. Combino mi experiencia creando interfaces web accesibles con el análisis profundo de datos. Como profesional en formación, mi mayor herramienta es la curiosidad: siempre buscando aprender nuevas tecnologías y transformar ese aprendizaje en soluciones con impacto real.            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button onClick={onDemoClick} variant="primary">Ver proyectos</Button>
              <Button onClick={onLearnMore} variant="outline">Sobre mí</Button>
            </div>
          </motion.div>
          
        </div>
      </div>
    </SectionBackground>
  );
};

export default Hero;
