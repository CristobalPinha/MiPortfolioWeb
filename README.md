# MiPortfolioWeb - Cristóbal Piña R.

Portfolio profesional desarrollado con un enfoque en accesibilidad, data science y una arquitectura moderna.

## 🏗️ Arquitectura: Feature-Driven Architecture (FDA)

Este proyecto utiliza el patrón **FDA**, lo que permite una escalabilidad total y un desacoplamiento de componentes. La estructura se organiza de la siguiente manera:

- **Features**: Módulos independientes por sección (`hero`, `about`, `projects`, `experience`). Cada feature es *self-contained*.
- **Shared**: Recursos reutilizables compartidos en todo el proyecto.
  - **UI**: Componentes atómicos con estética *Mac-style* y *Glassmorphism*.
  - **Components**: Elementos de layout global como navegación y footer.
  - **Hooks & Utils**: Lógica de React reutilizable y constantes globales.

### Estructura del Proyecto

```
src/
├── features/          # Características principales (Hero, About, etc.)
│   └── [feature]/
│       └── components/
├── shared/            # Recursos compartidos
│   ├── components/    # Layout global
│   ├── ui/            # Sistema de diseño
│   ├── hooks/         # Lógica reutilizable
│   └── utils/         # Constantes y funciones
└── assets/            # Recursos estáticos
```

## ✨ Características Técnicas

- **React 19 + Vite**: Aprovechando las últimas mejoras de rendimiento y hooks.
- **Alias de Rutas**: Configuración de `@features`, `@shared` y `@assets` para imports limpios.
- **Tailwind CSS**: Estilizado atómico, responsivo y optimizado.
- **Framer Motion**: Animaciones fluidas y estados de interacción avanzados.
- **Dark Mode**: Soporte nativo para modo oscuro/claro.
- **Accesibilidad**: Enfoque radical en semántica y navegación inclusiva.

## 🚀 Instalación y Uso

Este proyecto utiliza `pnpm` como gestor de paquetes.

```bash
# Clonar el repositorio
git clone https://github.com/CristobalPinha/MiPortfolioWeb.git

# Instalar dependencias
pnpm install

# Iniciar servidor de desarrollo
pnpm dev

# Construir para producción
pnpm build
```

## 🛠️ Próximas Etapas

- [ ] **Fase Siguiente: Contenido Real**: Completar el apartado de proyectos con casos de éxito.

---
Desarrollado con ❤️ por [Cristóbal Piña Rivas](https://github.com/CristobalPinha)
