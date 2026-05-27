import React from 'react';
import { motion } from 'framer-motion';
import TemplateCard from '@shared/ui/TemplateCard';
import SectionHeader from '@shared/ui/SectionHeader';
import Badge from '@shared/ui/Badge';
import { TECHNOLOGIES } from '@shared/utils/constants';

export const About = () => {
  return (
    <section id="about" className="py-24 px-4 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#35d0c2]/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2 animate-pulse"></div>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <SectionHeader 
          overline="Mi perfil" 
          title="SOBRE MÍ" 
          highlight="MÍ" 
        />

        <TemplateCard title="Template System v1.0" innerClassName="p-8 md:p-10">
          <div className="relative grid lg:grid-cols-[1.15fr_0.85fr] gap-8 items-stretch">
            {/* Left Column: Context Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-[1.8rem] border border-black/10 dark:border-white/10 bg-background-secondary/80 dark:bg-white/[0.03] p-7 md:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.06)] relative overflow-hidden"
            >
              <div className="absolute -right-16 -top-16 w-40 h-40 rounded-full bg-[#35d0c2]/10 blur-3xl animate-pulse"></div>
              <div className="relative">
                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-[#35d0c2] mb-4">Lo fundamental</div>
                <h3 className="text-3xl md:text-4xl font-black text-text-main leading-tight mb-5">Ingeniería que conecta personas y datos.</h3>
                <div className="space-y-4">
                  <p className="text-lg text-text-muted leading-relaxed font-light">
                    Estudiante de último año de Ingeniería en Informática en la UTEM. Mis conocimientos se centran en el desarrollo de soluciones tecnológicas de alto impacto social, con experiencia en desarrollo web, data science, bases de datos, distintas arquitecturas y desarrollo de software.
                  </p>
                  
                  <div className="p-5 rounded-2xl bg-[#35d0c2]/5 border border-[#35d0c2]/10">
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-[#35d0c2] mb-2">Experiencia Destacada</div>
                    <p className="text-base text-text-muted leading-relaxed">
                      Como <strong className="text-text-main font-bold text-[#35d0c2]">Líder de Equipo en el proyecto AccEx de UX-Lab (UTEM) en conjunto con Teletón</strong>, coordiné el desarrollo de un motor de perfiles adaptativos con reconocimiento de voz, optimizando la inclusión digital para usuarios de la institución.
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {[
                    { label: 'Liderazgo de Proyectos' },
                    { label: 'IA para Inclusión' },
                    { label: 'Data-Driven Decisions' },
                    { label: 'Arquitectura Escalable' }
                  ].map((tag) => (
                    <div 
                      key={tag.label} 
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-background border border-black/5 dark:border-white/5 shadow-sm hover:border-[#35d0c2]/30 transition-all duration-300 group"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[#35d0c2]/40 group-hover:bg-[#35d0c2] transition-colors"></div>
                      <span className="text-[10px] font-black uppercase tracking-[0.15em] text-text-muted group-hover:text-text-main transition-colors">
                        {tag.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column: Nested TemplateCard for Technologies */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="h-full"
            >
              <TemplateCard 
                title="Terminal v1.0" 
                withGrid={false} 
                containerClassName="h-full" 
                innerClassName="p-6 md:p-8 flex flex-col justify-between"
              >
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#35d0c2]">Stack principal</p>
                  <h4 className="mt-2 text-2xl font-black text-text-main">Tecnologías clave</h4>
                </div>
                <Badge variant="emerald">
                  Tech icons
                </Badge>
              </div>

              <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-4">
                {TECHNOLOGIES.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.name}
                      className="group/icon flex flex-col items-center justify-center rounded-[1.2rem] border border-black/10 bg-white/80 px-3 py-4 text-center shadow-[0_8px_20px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#35d0c2]/35 hover:shadow-[0_12px_28px_rgba(53,208,194,0.12)] dark:border-white/10 dark:bg-white/[0.04]"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-black/[0.04] text-2xl text-[#1f1f1f] transition-colors group-hover/icon:text-[#35d0c2] dark:bg-white/[0.06] dark:text-white">
                        <Icon aria-hidden="true" />
                      </div>
                      <span className="mt-3 text-[10px] font-black uppercase tracking-[0.16em] text-text-muted dark:text-white/55">
                        {item.name}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 flex items-center justify-center rounded-[1.2rem] border border-dashed border-black/10 bg-black/[0.02] px-4 py-4 text-center dark:border-white/10 dark:bg-white/[0.03]">
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-text-muted dark:text-white/45">
                  Stack visual limpio y listo para seguir creciendo
                </p>
              </div>
            </TemplateCard>
          </motion.div>
          </div>
        </TemplateCard>
      </motion.div>
    </section>
  );
};

export default About;
