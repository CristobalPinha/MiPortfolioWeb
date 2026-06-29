import React from 'react';
import { motion } from 'framer-motion';
import TemplateCard from '@shared/ui/TemplateCard';
import SectionHeader from '@shared/ui/SectionHeader';
import { TECHNOLOGIES } from '@shared/utils/constants';

const stats = [
  { value: '3',    label: 'Proyectos' },
  { value: '12+',  label: 'Tecnologías' },
  { value: '2026', label: 'Titulación' },
];

const skillTags = [
  'Backend & DevOps',
  'IA & Accesibilidad',
  'Machine Learning',
  'Análisis de Datos',
  'Liderazgo Técnico',
];

const highlights = [
  {
    color: '#35d0c2',
    overline: 'Líder de Equipo · UX-Lab UTEM',
    title: 'ACCEX + UX-Lab',
    body: 'Motor de perfiles adaptativos WCAG, agente de IA local y captura de voz nativa — desarrollado junto a UX-Lab para Teletón.',
  },
  {
    color: '#a855f7',
    overline: 'Trabajo de Título · UTEM 2026',
    title: 'Hacinamiento Crítico',
    body: 'Modelos predictivos y XAI sobre microdatos CENSO y CASEN para identificar focos de vulnerabilidad habitacional en la RM.',
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
});

export const About = () => {
  return (
    <section id="about" className="py-24 px-4 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#35d0c2]/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <motion.div
        {...fadeUp()}
        className="max-w-6xl mx-auto"
      >
        <SectionHeader overline="INFORMACIÓN" title="SOBRE MÍ" highlight="MÍ" />

        <TemplateCard title="Cristóbal Pinha · Ing. Informática UTEM" innerClassName="p-6 md:p-8">
          <div className="flex flex-col lg:flex-row gap-5">

            {/* ── COLUMNA IZQUIERDA ── */}
            <div className="flex-1 flex flex-col gap-5 min-w-0">

              {/* Bio card */}
              <motion.div
                {...fadeUp(0.1)}
                className="rounded-2xl border border-black/10 dark:border-white/10 bg-background-secondary/80 dark:bg-white/[0.03] p-6 md:p-7 relative overflow-hidden"
              >
                <div className="absolute -right-10 -top-10 w-36 h-36 rounded-full bg-[#35d0c2]/10 blur-3xl pointer-events-none" />

                <div className="relative">
                  <div className="text-[10px] font-black uppercase tracking-[0.3em] text-[#35d0c2] mb-3">
                    Lo fundamental
                  </div>

                  <h3 className="text-3xl md:text-[2.15rem] font-black text-text-main leading-[1.1] tracking-tight mb-4">
                    Ingeniería que conecta<br />personas y datos.
                  </h3>

                  <p className="text-[15px] text-text-muted leading-relaxed">
                    Estudiante de último año en UTEM. Construyo soluciones en tres frentes:{' '}
                    <strong className="text-text-main font-semibold">backend con APIs REST y CI/CD</strong>,{' '}
                    aplicaciones de escritorio con{' '}
                    <strong className="text-text-main font-semibold">IA local para accesibilidad</strong>{' '}
                    e investigación de{' '}
                    <strong className="text-text-main font-semibold">Machine Learning Explicable</strong>{' '}
                    orientada a políticas públicas.
                  </p>

                  <div className="flex flex-wrap gap-2 mt-5">
                    {skillTags.map((tag) => (
                      <div
                        key={tag}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-background border border-black/5 dark:border-white/5 hover:border-[#35d0c2]/30 transition-all duration-300 group cursor-default"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#35d0c2]/40 group-hover:bg-[#35d0c2] transition-colors" />
                        <span className="text-[10px] font-black uppercase tracking-[0.14em] text-text-muted group-hover:text-text-main transition-colors">
                          {tag}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Highlight cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {highlights.map((h, i) => (
                  <motion.div
                    key={i}
                    {...fadeUp(0.2 + i * 0.1)}
                    className="rounded-2xl p-5 relative overflow-hidden group cursor-default"
                    style={{ backgroundColor: `${h.color}0c`, border: `1px solid ${h.color}25` }}
                  >
                    {/* Blob */}
                    <div
                      className="absolute -right-6 -top-6 w-20 h-20 rounded-full blur-2xl pointer-events-none opacity-30 group-hover:opacity-60 transition-opacity duration-500"
                      style={{ backgroundColor: h.color }}
                    />
                    <div className="relative">
                      <div
                        className="text-[9px] font-black uppercase tracking-[0.2em] mb-2"
                        style={{ color: h.color }}
                      >
                        {h.overline}
                      </div>
                      <div className="text-[15px] font-black text-text-main mb-2 leading-tight">
                        {h.title}
                      </div>
                      <p className="text-[13px] text-text-muted leading-relaxed">{h.body}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* ── COLUMNA DERECHA ── */}
            <motion.div
              {...fadeUp(0.15)}
              className="lg:w-[296px] xl:w-[316px] flex flex-col gap-5 shrink-0"
            >
              {/* Stats */}
              <div className="grid grid-cols-3 gap-3">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="flex flex-col items-center justify-center py-4 px-2 rounded-2xl bg-background-secondary border border-[#35d0c2]/12 hover:border-[#35d0c2]/30 transition-colors duration-300 cursor-default"
                  >
                    <span className="text-[1.6rem] font-black text-[#35d0c2] leading-none">{s.value}</span>
                    <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-text-muted mt-2 text-center leading-tight">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Tech grid */}
              <TemplateCard
                title="Stack · 12 techs"
                withGrid={false}
                containerClassName="flex-1"
                innerClassName="p-4 md:p-5 flex flex-col gap-3"
              >
                <div className="grid grid-cols-3 gap-2">
                  {TECHNOLOGIES.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, scale: 0.75 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.25 + i * 0.04 }}
                        className="group/icon flex flex-col items-center justify-center rounded-xl border border-black/8 dark:border-white/8 bg-background px-1 py-3 text-center transition-all duration-300 hover:-translate-y-0.5 hover:border-[#35d0c2]/30 hover:shadow-[0_6px_14px_rgba(53,208,194,0.1)] dark:bg-white/[0.03] cursor-default"
                      >
                        <div
                          className="flex h-7 w-7 items-center justify-center rounded-lg text-base transition-transform duration-300 group-hover/icon:scale-110"
                          style={{ backgroundColor: `${item.color}18` }}
                        >
                          <Icon style={{ color: item.color }} />
                        </div>
                        <span className="mt-1.5 text-[8px] font-black uppercase tracking-[0.1em] text-text-muted group-hover/icon:text-text-main transition-colors leading-tight">
                          {item.name}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>

                <div className="rounded-xl border border-dashed border-black/10 dark:border-white/10 py-2 text-center">
                  <p className="text-[8.5px] font-bold uppercase tracking-[0.2em] text-text-muted/60">
                    Backend · IA · ML · Desktop
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
