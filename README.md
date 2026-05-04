# Pizzería Mamma Mia! 🍕

Una aplicación web interactiva para una pizzería construida como una Single Page Application (SPA) utilizando React y Vite. Este proyecto se enfoca en la construcción de interfaces dinámicas, modularización del código y una excelente experiencia de usuario (UX).

## 🚀 Tecnologías Aplicadas

- **React.js**: Biblioteca principal para la construcción de interfaces de usuario interactivas.
- **Vite**: Herramienta de compilación y servidor de desarrollo ultrarrápido.
- **Bootstrap 5**: Framework de CSS utilizado para el diseño responsivo, sistema de grillas y estilizado de componentes (Cards, Navbars, Buttons).
- **JavaScript (ES6+)**: Uso extensivo de *destructuring*, *arrow functions*, *ternary operators* y métodos de arreglos.

## 🧠 Conceptos Técnicos Implementados

- **Arquitectura de Componentes**: Separación lógica de la interfaz en componentes reutilizables y atómicos (`Navbar`, `Header`, `CardPizza`, `Footer`, `Home`).
- **Manejo de Props**: Comunicación unidireccional de datos para poblar dinámicamente las tarjetas de los productos (imágenes, nombres, precios e ingredientes).
- **Renderizado Condicional**: Lógica dinámica en el menú de navegación que muestra opciones diferentes dependiendo del estado de autenticación del usuario.
- **Funciones Utilitarias (Helpers)**: Extracción de la lógica de formato de moneda a módulos independientes para mantener el principio DRY (*Don't Repeat Yourself*).
- **Ajustes de UI/UX**: Uso de propiedades CSS modernas (`object-fit: cover`) para unificar proporciones de imágenes externas y garantizar simetría visual en las grillas.

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
