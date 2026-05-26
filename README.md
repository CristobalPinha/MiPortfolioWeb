# Project - Cristóbal Piña R.

Portfolio profesional

## 🏗️ Arquitectura: Feature-Driven Architecture (FDA)

Este proyecto utiliza un patrón **FDA**, lo que permite una escalabilidad total y un desacoplamiento de componentes. La estructura se organiza en:

- **Features**: Módulos independientes por sección (Hero, About, Projects, Experience). Cada feature es *self-contained*.
- **UI Library**: Componentes atómicos reutilizables (Botones, Badges, Cards) con estética Mac-style.
- **Shared**: Lógica compartida, hooks y utilidades globales.

### Estructura del Proyecto

```
src/
├── components/
│   ├── features/      # Secciones de la página con lógica propia
│   ├── ui/            # Sistema de diseño y átomos visuales
│   └── layout/        # Estructura global (Navbar, Footer)
├── hooks/             # Lógica de React reutilizable (useScroll)
├── utils/             # Constantes y funciones puras (Iconos, Enlaces)
└── assets/            # Recursos estáticos
```

## ✨ Características Técnicas

- **React 19 + Vite**: Rendimiento de nueva generación.
- **Tailwind CSS**: Diseño atómico y responsivo.
- **Dark Mode First**: Gestión de tema con persistencia.
- **Accesibilidad**: Enfoque radical en semántica y navegación.
- **Glassmorphism**: Estética moderna basada en capas y desenfoques.

## 🚀 Próximas Etapas

- [ ] **Fase 5: Finalización de Contenido**: Completar el apartado de **Proyectos** y la sección de **Alcances** con casos de uso Reales.
- [ ] **Fase 6: Proyecto Secreto**: Desarrollo de componente experimental para la base del portfolio.

## Instalación

```bash
git clone https://github.com/CristobalPinha/WebPortfolio.git
cd WebPortfolio
pnpm install
```

## Desarrollo

```bash
pnpm dev
```

```bash
pnpm dev
```

## Build

```bash
pnpm build
```
