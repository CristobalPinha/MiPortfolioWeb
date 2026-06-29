<div align="center">

# CRISTÓBAL PIÑA RIVAS

**Software Engineer · Accesibilidad Web & Data Science · UTEM 2026**

<a href="https://cristobalpinha.github.io/MiPortfolioWeb/"><img src="https://img.shields.io/badge/Ver%20Portfolio-35d0c2?style=flat-square&logo=vercel&logoColor=white" /></a>
<a href="https://github.com/CristobalPinha"><img src="https://img.shields.io/badge/GitHub-CristobalPinha-181717?style=flat-square&logo=github&logoColor=white" /></a>
<a href="https://www.linkedin.com/in/cristobbalp"><img src="https://img.shields.io/badge/LinkedIn-cristobbalp-0A66C2?style=flat-square&logo=linkedin&logoColor=white" /></a>
<a href="mailto:cristobbalp@gmail.com"><img src="https://img.shields.io/badge/Email-cristobbalp@gmail.com-EA4335?style=flat-square&logo=gmail&logoColor=white" /></a>
<img src="https://img.shields.io/badge/Estado-Buscando%20práctica%20profesional-35d0c2?style=flat-square" />

<br />

<img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black" />
<img src="https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white" />
<img src="https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" />
<img src="https://img.shields.io/badge/Framer_Motion-12-0055FF?style=flat-square&logo=framer&logoColor=white" />
<img src="https://img.shields.io/badge/pnpm-F69220?style=flat-square&logo=pnpm&logoColor=white" />

</div>

---

Portfolio profesional desarrollado con **Feature-Driven Architecture**, diseño *glassmorphism Mac-style*, soporte nativo de modo oscuro/claro y animaciones con Framer Motion. Presenta tres proyectos reales en los dominios de Backend & DevOps, Accesibilidad con IA local y Machine Learning Explicable.

---

## Proyectos

### LendIn — Gestión de Préstamos Corporativos `2024`

Sistema full-stack para digitalizar el ciclo completo de préstamos entre empresa y empleados. Valida RUT chileno con algoritmo Módulo 11, detecta morosidad en tiempo real y expone **11 endpoints REST documentados**.

```
Python · Django · MySQL · Docker · GitHub Actions
```

- Arquitectura relacional con Django ORM y exportación de reportes a Excel / PDF
- Pipeline CI/CD completo: entorno local a producción en un comando con Docker + GitHub Actions
- Dashboard de monitoreo con detección automática de morosidad

<a href="https://github.com/CristobalPinha/LendIn"><img src="https://img.shields.io/badge/Ver%20repositorio-181717?style=flat-square&logo=github&logoColor=white" /></a>

---

### ACCEX — Navegador de Accesibilidad con IA Local `2026`

Navegador de escritorio para personas con discapacidad, desarrollado junto a **UX-Lab UTEM** para la **Fundación Teletón Chile**. Liderazgo técnico del motor adaptativo de perfiles, optimización de latencia del LLM local Phi-4 y sistema de voz con `faster-whisper` — 100% offline, sin dependencias externas.

```
Electron · Node.js · Express · Python · Phi-4 · faster-whisper
```

- Motor de perfiles adaptativos según prioridades WCAG
- LLM local Phi-4 con timeouts híbridos para reducir latencia perceptible
- Interconexión modular entre Electron, Express 4 y subprocesos Python

<img src="https://img.shields.io/badge/En%20desarrollo-35d0c2?style=flat-square" />

---

### Hacinamiento Crítico — ML & XAI · Trabajo de Título `2025`

Investigación para predecir focos de vulnerabilidad habitacional en la Región Metropolitana unificando microdatos oficiales de **CENSO** y **CASEN**. Incorpora IA Explicable (XAI) con SHAP y LIME para identificar el peso real de variables demográficas, transformando resultados técnicos en insumos para el codiseño de políticas públicas.

```
Python · Pandas · NumPy · Scikit-Learn · SHAP · LIME · Jupyter
```

- Modelamiento supervisado comparativo con mitigación de desbalanceo (SMOTE)
- XAI global y local: qué factores predicen hacinamiento y por qué
- Resultados orientados a tomadores de decisión en política habitacional

<a href="https://github.com/CristobalPinha/Project-PMHC"><img src="https://img.shields.io/badge/Ver%20repositorio-181717?style=flat-square&logo=github&logoColor=white" /></a>

---

## Capacidades Técnicas

| Área | Stack |
|------|-------|
| Backend & API REST | Python · Django · MySQL · REST Framework |
| DevOps & CI/CD | Docker · GitHub Actions |
| Apps de Escritorio | Electron · Node.js · Express |
| IA Local & Reconocimiento de Voz | Phi-4 · LM Studio · faster-whisper |
| Machine Learning | Scikit-Learn · Random Forest · SMOTE |
| Análisis & Explicabilidad | Pandas · NumPy · SHAP · LIME · Jupyter |
| Frontend | React 19 · Tailwind CSS · Framer Motion · Vite |

---

## Arquitectura del Sitio

El proyecto implementa **Feature-Driven Architecture (FDA)**: cada sección es un módulo independiente y *self-contained*; los recursos compartidos están explícitamente delimitados en `shared/`.

```
src/
├── features/
│   ├── hero/           # Presentación y redes sociales
│   ├── about/          # Bio, stats y stack tecnológico
│   ├── projects/       # Carrusel animado de proyectos
│   └── experience/     # Servicios y capacidades
└── shared/
    ├── components/     # Navigation, Footer
    ├── ui/             # Badge, Button, TemplateCard, SectionHeader, Decoration
    ├── hooks/          # useScrollPosition
    └── utils/          # Constantes globales y TECHNOLOGIES
```

Los alias `@features`, `@shared` y `@assets` mantienen los imports limpios independiente de la profundidad del módulo.

---

## Instalación

```bash
git clone https://github.com/CristobalPinha/MiPortfolioWeb.git
cd MiPortfolioWeb
pnpm install
```

| Comando | Descripción |
|---------|-------------|
| `pnpm dev` | Servidor de desarrollo con HMR |
| `pnpm build` | Compilación optimizada para producción |
| `pnpm preview` | Vista previa del build de producción |
| `pnpm lint` | Análisis estático con ESLint |

---

<div align="center">

Desarrollado por <a href="https://github.com/CristobalPinha">Cristóbal Piña Rivas</a>

</div>
