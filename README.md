# Pizzería Mamma Mia! 🍕

Una aplicación web interactiva para una pizzería construida como una Single Page Application (SPA) utilizando React y Vite. Este proyecto se enfoca en la construcción de interfaces dinámicas, modularización del código, gestión de estados y una excelente experiencia de usuario (UX).

## 🚀 Tecnologías Aplicadas

- **React.js**: Biblioteca principal para la construcción de interfaces de usuario interactivas.
- **Vite**: Herramienta de compilación y servidor de desarrollo ultrarrápido.
- **Bootstrap 5**: Framework de CSS utilizado para el diseño responsivo, sistema de grillas y estilizado avanzado de componentes (Cards flotantes, botones, alertas).
- **JavaScript (ES6+)**: Uso extensivo de *destructuring*, *arrow functions*, *ternary operators* y métodos de arreglos.

## 🧠 Conceptos Técnicos Implementados

- **Arquitectura de Componentes**: Separación lógica de la interfaz en componentes reutilizables y atómicos (`Navbar`, `Header`, `CardPizza`, `Footer`, `Home`, `Login`, `Register`).
- **Manejo de Estados (State)**: Uso del hook `useState` para gestionar dinámicamente los datos ingresados por el usuario en los formularios y el control de alertas UI.
- **Manejo de Eventos**: Implementación de eventos nativos de React (`onChange`, `onSubmit`) para la captura de datos en tiempo real y prevención del comportamiento por defecto del navegador.
- **Componentes Controlados**: Formularios (Login y Registro) donde React controla de forma centralizada el valor de cada input (Single Source of Truth).
- **Validación de Formularios**: Lógica condicional estricta para asegurar que los campos sean obligatorios, tengan longitudes mínimas y coincidan entre sí, devolviendo feedback visual inmediato al usuario.
- **Manejo de Props**: Comunicación unidireccional de datos para poblar dinámicamente las tarjetas de los productos (imágenes, nombres, precios e ingredientes).
- **Renderizado Condicional**: Lógica dinámica que muestra vistas de éxito o error en los formularios, además de opciones en el menú de navegación dependiendo de si existe un token de sesión.
- **Funciones Utilitarias (Helpers)**: Extracción de la lógica de formato de moneda a módulos independientes para mantener el principio DRY (*Don't Repeat Yourself*).

## 🎯 Estado del Proyecto (Hitos)

- ✅ **Hito 1 - Componentes y Props:** Creación de la estructura básica de la SPA con componentes funcionales (`Navbar`, `Home`, `CardPizza`, `Footer`). Renderizado dinámico y modularización.
- ✅ **Hito 2 - Estado y Eventos:** Implementación de componentes para registro (`Register`) e inicio de sesión (`Login`) con gestión de estados para capturar inputs, renderizado condicional de alertas estéticas y validaciones completas de formularios.

## 🛠️ Instalación y Uso

1. Clona este repositorio:
   ```bash
   git clone <url-del-repositorio>
   ```
2. Ingresa al directorio del proyecto:
   ```bash
   cd pizzeria-mamma-mia
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```
4. Ejecuta el servidor de desarrollo:
   ```bash
   npm run dev
   ```
