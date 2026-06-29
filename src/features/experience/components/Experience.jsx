import React from 'react';
import { motion } from 'framer-motion';
import {
  SiDjango, SiDocker, SiElectron, SiOpenai, SiScikitlearn, SiPandas,
} from 'react-icons/si';
import SectionHeader from '@shared/ui/SectionHeader';

const services = [
  {
    Icon: SiDjango,
    color: '#44B78B',
    title: 'Backend & API REST',
    description: 'Diseño e implementación de APIs RESTful documentadas, arquitecturas relacionales y lógica de negocio robusta. Desde el modelado de datos hasta el despliegue en producción.',
    tech: ['Python', 'Django', 'MySQL', 'REST Framework'],
  },
  {
    Icon: SiDocker,
    color: '#2496ED',
    title: 'DevOps & CI/CD',
    description: 'Pipelines de integración y despliegue continuo que automatizan el ciclo completo de desarrollo, eliminando fricciones entre entorno local y producción.',
    tech: ['Docker', 'GitHub Actions', 'Automatización'],
  },
  {
    Icon: SiElectron,
    color: '#47848F',
    title: 'Apps de Escritorio',
    description: 'Aplicaciones de escritorio multiplataforma (Windows / macOS) con integración de servicios internos, arquitectura modular y experiencia de usuario accesible.',
    tech: ['Electron', 'Node.js', 'Express'],
  },
  {
    Icon: SiOpenai,
    color: '#74AA9C',
    title: 'IA Local & Voz',
    description: 'Integración de LLMs y reconocimiento de voz completamente locales, sin dependencias externas. Agentes de UI, asistentes y STT para entornos offline.',
    tech: ['LM Studio', 'Phi-4', 'faster-whisper'],
  },
  {
    Icon: SiScikitlearn,
    color: '#F7931E',
    title: 'Machine Learning',
    description: 'Modelamiento supervisado comparativo con manejo estricto de desbalanceo de clases y validación estadística rigurosa orientada a problemas del mundo real.',
    tech: ['Scikit-Learn', 'Random Forest', 'SMOTE'],
  },
  {
    Icon: SiPandas,
    color: '#4DABCF',
    title: 'Datos & Explicabilidad',
    description: 'Transformación de datos complejos en insights accionables mediante IA Explicable (XAI), identificando causas, pesos y factores determinantes de cada predicción.',
    tech: ['Pandas', 'SHAP', 'LIME', 'Jupyter'],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export const Experience = () => {
  return (
    <section id="experience" className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            title="Servicios y Alcance"
            highlight="Alcance"
            overline="Lo que ofrezco"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group relative p-px rounded-2xl"
            >
              {/* Glow border on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `linear-gradient(135deg, ${service.color}40, transparent 60%)` }}
              />

              <div className="relative h-full rounded-[calc(1rem-1px)] bg-background-secondary border border-[#35d0c2]/10 group-hover:border-[service.color]/20 p-7 flex flex-col transition-colors duration-300">

                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${service.color}18`, border: `1px solid ${service.color}28` }}
                >
                  <service.Icon style={{ color: service.color }} className="w-5 h-5" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-black text-text-main mb-3 leading-tight">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-text-muted leading-relaxed flex-1">
                  {service.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mt-5 pt-5 border-t border-[#35d0c2]/8">
                  {service.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-bold uppercase tracking-[0.12em] px-2.5 py-1 rounded-full"
                      style={{ backgroundColor: `${service.color}12`, color: service.color }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
