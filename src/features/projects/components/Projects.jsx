import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SiPython, SiDjango, SiMysql, SiDocker, SiGithubactions, SiElectron, SiNodedotjs, SiExpress, SiOpenai, SiPandas, SiNumpy, SiScikitlearn, SiJupyter } from 'react-icons/si';
import SectionHeader from '@shared/ui/SectionHeader';
import Badge from '@shared/ui/Badge';
import Button from '@shared/ui/Button';

const techIcons = {
  Python:           { Icon: SiPython,        color: '#3776AB' },
  Django:           { Icon: SiDjango,        color: '#44B78B' },
  MySQL:            { Icon: SiMysql,         color: '#4479A1' },
  Docker:           { Icon: SiDocker,        color: '#2496ED' },
  'GitHub Actions': { Icon: SiGithubactions, color: '#2088FF' },
  Electron:         { Icon: SiElectron,      color: '#47848F' },
  'Node.js':        { Icon: SiNodedotjs,     color: '#339933' },
  Express:          { Icon: SiExpress,       color: '#888888' },
  Whisper:          { Icon: SiOpenai,        color: '#74AA9C' },
  Pandas:           { Icon: SiPandas,        color: '#150458' },
  NumPy:            { Icon: SiNumpy,         color: '#4DABCF' },
  'Scikit-Learn':   { Icon: SiScikitlearn,   color: '#F7931E' },
  Jupyter:          { Icon: SiJupyter,       color: '#F37626' },
};

const projects = [
  {
    title: "LendIn",
    subtitle: "Gestión de Préstamos a Empleados",
    description: "Sistema full-stack para digitalizar la gestión de préstamos corporativos: automatiza solicitudes, calcula cuotas y detecta morosidad en tiempo real. Valida RUT chileno con algoritmo Módulo 11, expone una API REST de 11 endpoints documentados y centraliza el monitoreo en un dashboard con exportación a Excel/PDF.",
    github: "https://github.com/CristobalPinha/LendIn",
    demo: null,
    features: [
      "Arquitectura relacional con MySQL y Django ORM",
      "Dashboard con exportación de reportes en Excel/PDF",
      "11 endpoints con Django REST Framework",
      "CI/CD con GitHub Actions + Docker en 1 comando",
    ],
    tags: ["Python", "Django", "MySQL", "Docker", "GitHub Actions"],
    category: "Backend · DevOps",
    year: "2024",
  },
  {
    title: "ACCEX",
    subtitle: "Navegador de Accesibilidad Asistido por IA",
    description: "Evolución y optimización de un navegador de escritorio para personas con discapacidad, desarrollado junto a UX-Lab y la Fundación Teletón Chile. Lideré el motor adaptativo de perfiles, la optimización de latencia del LLM local (Phi-4) y la renovación del sistema de entrada de voz, logrando una experiencia 100% local, fluida y sin fricciones.",
    github: null,
    demo: "https://www.youtube.com/watch?v=REEMPLAZAR",
    features: [
      "Motor de perfiles adaptativos según prioridades WCAG",
      "Reducción de latencia del LLM local con timeouts híbridos",
      "Captura de voz nativa integrada con faster-whisper",
      "Interconexión entre Electron, Express 4 y Subprocesos Python",
    ],
    tags: ["Electron", "Node.js", "Python", "Express", "Whisper"],
    category: "Electron · IA · Accesibilidad",
    year: "2026",
  },
  {
    title: "Hacinamiento Crítico",
    subtitle: "Análisis Predictivo y Explicable · Trabajo de Título",
    description: "Investigación analítica para predecir focos de vulnerabilidad habitacional en la Región Metropolitana. Unifica microdatos oficiales (CENSO, CASEN) y evalúa comparativamente algoritmos de Machine Learning, incorporando IA Explicable (XAI) para identificar el peso real de variables demográficas y socioeconómicas — transformando datos complejos en una herramienta para el codiseño de políticas públicas.",
    github: "https://github.com/CristobalPinha/Project-PMHC",
    demo: null,
    features: [
      "Ingesta, limpieza e imputación de microdatos CENSO y CASEN",
      "Modelamiento supervisado con mitigación de desbalanceo (SMOTE)",
      "XAI global y local con SHAP y LIME sobre variables demográficas",
      "Resultados orientados al codiseño de políticas públicas habitacionales",
    ],
    tags: ["Python", "Pandas", "NumPy", "Scikit-Learn", "Jupyter"],
    category: "Machine Learning · XAI",
    year: "2025",
  },
];

const slideVariants = {
  enter: (dir) => ({
    x: dir > 0 ? 120 : -120,
    opacity: 0,
    scale: 0.96,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x:     { type: 'spring', stiffness: 320, damping: 30 },
      scale: { type: 'spring', stiffness: 320, damping: 30 },
      opacity: { duration: 0.2 },
    },
  },
  exit: (dir) => ({
    x: dir < 0 ? 120 : -120,
    opacity: 0,
    scale: 0.96,
    transition: { duration: 0.18, ease: [0.4, 0, 1, 1] },
  }),
};

const ArrowButton = ({ onClick, direction }) => (
  <button
    onClick={onClick}
    aria-label={direction === 'prev' ? 'Proyecto anterior' : 'Proyecto siguiente'}
    className="flex-shrink-0 w-11 h-11 rounded-2xl flex items-center justify-center border border-[#35d0c2]/15 bg-background-secondary text-text-muted hover:border-[#35d0c2]/50 hover:text-[#35d0c2] hover:bg-[#35d0c2]/5 transition-all duration-300 hover:scale-105 active:scale-95"
  >
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
      {direction === 'prev'
        ? <polyline points="15 18 9 12 15 6" />
        : <polyline points="9 18 15 12 9 6" />
      }
    </svg>
  </button>
);

export const Projects = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const navigate = (dir) => {
    setDirection(dir);
    setCurrent((prev) => (prev + dir + projects.length) % projects.length);
  };

  const goTo = (index) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const project = projects[current];

  return (
    <section id="projects" className="py-24 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            title="Proyectos Destacados"
            highlight="Destacados"
            overline="Portafolio"
          />
        </motion.div>

        <div className="flex items-center gap-4">
          <ArrowButton onClick={() => navigate(-1)} direction="prev" />

          <div className="flex-1 overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="group relative p-px rounded-3xl"
              >
                {/* Hover glow border */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#35d0c2]/50 via-transparent to-fuchsia-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />

                <div className="relative bg-background-secondary rounded-[calc(1.5rem-1px)] border border-[#35d0c2]/10 overflow-hidden flex flex-col min-h-[560px]">

                  {/* ── HERO ── */}
                  <div className="relative px-8 pt-8 pb-10 md:px-10 md:pt-10 overflow-hidden min-h-[220px]">
                    {/* Gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#35d0c2]/[0.07] via-transparent to-fuchsia-900/[0.12]" />
                    {/* Dot-grid texture */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        backgroundImage: 'radial-gradient(circle, rgba(53,208,194,0.18) 1px, transparent 1px)',
                        backgroundSize: '22px 22px',
                        maskImage: 'linear-gradient(to bottom right, black 20%, transparent 80%)',
                        WebkitMaskImage: 'linear-gradient(to bottom right, black 20%, transparent 80%)',
                      }}
                    />
                    {/* Glow blob */}
                    <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-[#35d0c2]/10 blur-3xl pointer-events-none" />

                    {/* Watermark project number */}
                    <span
                      className="absolute right-6 bottom-1 font-black leading-none select-none pointer-events-none"
                      style={{ fontSize: '9rem', color: 'rgba(53,208,194,0.055)' }}
                    >
                      {String(current + 1).padStart(2, '0')}
                    </span>

                    <div className="relative">
                      {/* Category + year */}
                      <div className="flex items-center gap-3 mb-5">
                        <Badge variant="emerald">{project.category}</Badge>
                        <span className="text-[10px] font-bold text-text-muted/40 tracking-[0.2em] uppercase">{project.year}</span>
                      </div>

                      {/* Title */}
                      <h3 className="text-5xl md:text-6xl font-black text-text-main leading-[1.0] tracking-tight">
                        {project.title}
                      </h3>

                      <p className="text-sm font-semibold mt-3 tracking-wide min-h-[20px]" style={{ color: '#35d0c2' }}>
                        {project.subtitle ?? ''}
                      </p>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-transparent via-[#35d0c2]/20 to-transparent" />

                  {/* ── CONTENT ── */}
                  <div className="flex-1 px-8 py-7 md:px-10">
                    <p className="text-sm text-text-muted leading-relaxed line-clamp-4">
                      {project.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mt-6 min-h-[88px]">
                      {project.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-[13px] text-text-muted">
                          <span className="mt-[3px] w-3.5 h-3.5 flex-shrink-0 rounded-full bg-[#35d0c2]/15 border border-[#35d0c2]/35 flex items-center justify-center">
                            <span className="w-1 h-1 rounded-full bg-[#35d0c2]" />
                          </span>
                          {feat}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-transparent via-[#35d0c2]/10 to-transparent" />

                  {/* ── FOOTER BAR: tech icons + CTA ── */}
                  <div className="flex items-center justify-between gap-4 px-8 py-4 md:px-10">
                    <div className="flex items-center gap-1.5">
                      {project.tags.map((tag, i) => {
                        const tech = techIcons[tag];
                        if (!tech) return null;
                        return (
                          <div
                            key={i}
                            title={tag}
                            className="w-8 h-8 rounded-lg flex items-center justify-center transition-transform duration-200 hover:scale-110 cursor-default"
                            style={{ backgroundColor: `${tech.color}18`, border: `1px solid ${tech.color}28` }}
                          >
                            <tech.Icon style={{ color: tech.color }} className="w-[15px] h-[15px]" />
                          </div>
                        );
                      })}
                    </div>

                    {project.demo ? (
                      <Button href={project.demo} target="_blank" rel="noopener noreferrer" variant="outline" className="shrink-0 gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                        </svg>
                        Ver Demo
                      </Button>
                    ) : project.github ? (
                      <Button href={project.github} target="_blank" rel="noopener noreferrer" variant="outline" className="shrink-0 gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                        Ver en GitHub
                      </Button>
                    ) : (
                      <span className="shrink-0 flex items-center gap-2 px-4 py-2 rounded-full border border-[#35d0c2]/20 bg-[#35d0c2]/5 text-[11px] font-bold text-[#35d0c2]/70 uppercase tracking-[0.15em]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#35d0c2] animate-pulse" />
                        En desarrollo
                      </span>
                    )}
                  </div>

                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <ArrowButton onClick={() => navigate(1)} direction="next" />
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center items-center gap-2 mt-6">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Ir al proyecto ${i + 1}`}
              className="relative flex items-center justify-center focus:outline-none"
            >
              <motion.span
                animate={{
                  width:           i === current ? 24 : 8,
                  backgroundColor: i === current ? '#35d0c2' : 'rgba(156,163,175,0.3)',
                }}
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                className="block h-2 rounded-full"
                style={{ display: 'block' }}
              />
            </button>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            href="https://github.com/CristobalPinha"
            variant="primary"
            className="inline-flex items-center gap-3"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" height="20" width="20">
              <path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z" />
            </svg>
            <span>Ver más en GitHub</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
