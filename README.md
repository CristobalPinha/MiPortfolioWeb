# Digitaliza Tu Work

Landing page desarrollada con React y Vite para presentar soluciones web orientadas a negocios, combinando ciencia de datos, inteligencia artificial aplicada e ingeniería HCI en una experiencia visual moderna e interactiva.

Los datos mostrados en esta landing son ficticios y se utilizan únicamente con fines académicos y de demostración.

## ¿Qué hace esta landing?

La página funciona como una carta de presentación del proyecto y del equipo. Su objetivo es mostrar el enfoque técnico de la propuesta, destacar proyectos relevantes y permitir que un usuario potencial envíe una solicitud de contacto mediante un formulario integrado para que se guarde localmente.

Incluye una opción para variar entre los temas dark y light.

## Arquitectura

La solución sigue una arquitectura modular orientada a secciones. Su estructura se organiza de la siguiente manera:

```
src/
├── App.jsx
│   └── Orquesta toda la landing, administra el tema global y coordina el scroll entre secciones.
├── components/
│   ├── Navigation.jsx
│   │   └── Navegación principal y selector de tema.
│   ├── Hero.jsx
│   │   └── Presentación inicial, mensaje principal y llamadas a la acción.
│   ├── About.jsx
│   │   └── Perfil del equipo, formación y propuesta de valor.
│   ├── Projects.jsx
│   │   └── Proyectos destacados y evidencia técnica.
│   ├── Contact.jsx
│   │   └── Formulario de contacto, validaciones y envío.
│   └── Footer.jsx
│       └── Cierre de la página con enlaces y datos de contacto.
└── hooks/
	└── useFormStorage.js
		└── Persistencia local de los datos del formulario mediante localStorage.
```

Flujo funcional:

1. El usuario navega por una sola página mediante anclas internas.
2. El componente principal alterna entre dark y light.
3. El formulario captura y almacena los datos localmente en el dispositivo.

## Colaboración del equipo

El desarrollo se distribuyó entre Victor Salazar y Cristóbal Piña, trabajando de forma colaborativa en tiempo real mediante la extensión de VS Code Live Share.

- Victor Salazar: estructura general de la landing y organización de secciones.
- Cristóbal Piña: lógica para guardar localmente el formulario.
- Ambos: definición visual, ajustes de diseño y revisión final de la interfaz.

## Tecnologías usadas

- React
- Vite
- Tailwind CSS
- JavaScript

## Estructura general

La landing está pensada como una experiencia de navegación continua, con foco en presentación, credibilidad técnica y conversión. Cada sección cumple un rol concreto dentro del flujo:

1. Captar la atención con el hero.
2. Presentar al equipo y su perfil técnico.
3. Mostrar proyectos y capacidades.
4. Facilitar el contacto con un formulario simple.
5. Cerrar con información de referencia y enlaces rápidos.

## Verificación de la tarea

La app cumple con la consigna de la tarea web y mobile:

- Permite seleccionar estilo de la app entre dark y light.
- Contiene un formulario funcional de contacto.
- Almacena el resultado del formulario en el almacenamiento local del dispositivo mediante `localStorage`.
- La participación del grupo queda documentada con responsabilidades concretas para Victor Salazar y Cristóbal Piña.

Si se requiere una evidencia más formal de reparto de tareas, se puede agregar una sección adicional con el detalle de qué hizo cada integrante.
