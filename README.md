# Pizzería Mamma Mia! 🍕

Una aplicación web interactiva para una pizzería construida como una Single Page Application (SPA) utilizando React y Vite. Este proyecto se enfoca en la construcción de interfaces dinámicas, modularización del código, gestión de estados y una excelente experiencia de usuario (UX).

## Tecnologías Aplicadas

- **React.js**: Biblioteca principal para la construcción de interfaces de usuario interactivas.
- **React Router DOM**: Biblioteca para el manejo de rutas y navegación en aplicaciones Single Page Application (SPA).
- **Context API**: Funcionalidad nativa de React para la gestión y propagación de estado global a lo largo de toda la aplicación.
- **Vite**: Herramienta de compilación y servidor de desarrollo ultrarrápido.
- **Bootstrap 5**: Framework CSS utilizado para el diseño responsivo, sistema de grillas y componentes pre-estilizados.
- **JavaScript (ES6+)**: Uso extensivo de *destructuring*, *arrow functions*, *ternary operators* y métodos de arreglos.

## Conceptos Técnicos Implementados

- **Arquitectura de Componentes**: Separación lógica de la interfaz en componentes reutilizables y atómicos (`Navbar`, `Header`, `CardPizza`, `Footer`).
- **Estado Global (Context API)**: Creación de proveedores (`Providers`) para mantener una única fuente de la verdad para entidades transversales como el Carrito de Compras (`CartContext`), el inventario de pizzas (`PizzaContext`) y la autenticación de usuarios (`UserContext`), permitiendo acceso a estos datos desde componentes anidados sin *prop drilling*.
- **Enrutamiento (Routing)**: Uso de `react-router-dom` para crear múltiples páginas (`Home`, `Cart`, `Login`, `Register`, `Pizza`, `Profile`, `NotFound`) sin recargar el navegador.
- **Rutas Dinámicas y Protegidas**: Uso de parámetros en rutas (`useParams`) para renderizar vistas basadas en identificadores únicos (ej. detalles de una pizza específica) y protección de rutas privadas redireccionando a los usuarios mediante el componente `<Navigate>` según su estado de autenticación.
- **Manejo de Estados (State)**: Uso del hook `useState` para gestionar dinámicamente los datos ingresados por el usuario en los formularios y el control de alertas UI.
- **Manejo de Eventos**: Implementación de eventos nativos de React (`onChange`, `onSubmit`) para la captura de datos en tiempo real y prevención del comportamiento por defecto del navegador.
- **Componentes Controlados**: Formularios (Login y Registro) donde React controla de forma centralizada el valor de cada input (Single Source of Truth).
- **Validación de Formularios**: Lógica condicional estricta para asegurar que los campos sean obligatorios, tengan longitudes mínimas y coincidan entre sí, devolviendo feedback visual inmediato al usuario.
- **Manejo de Props**: Comunicación unidireccional de datos para poblar dinámicamente las tarjetas de los productos (imágenes, nombres, precios e ingredientes).
- **Renderizado Condicional**: Lógica dinámica que muestra vistas de éxito o error en los formularios, además de opciones en el menú de navegación dependiendo de si existe un token de sesión.
- **Renderizado de Listas (List Rendering)**: Uso del método `.map()` y asignación de la prop única `key` para construir interfaces repetitivas dinámicamente a partir de arrays de datos.
- **Mutabilidad Controlada de Arrays**: Manipulación del estado de manera inmutable utilizando funciones de orden superior de JavaScript (`.map()`, `.filter()`, `.reduce()`) para el manejo lógico de la información del carrito.
- **Funciones Utilitarias (Helpers)**: Extracción de la lógica de formato de moneda a módulos independientes para mantener el principio DRY (*Don't Repeat Yourself*).
- **JWT (JSON Web Tokens)**: Implementación de seguridad basada en tokens para la autenticación de usuarios y autorización de peticiones protegidas (como el proceso de pago).
- **Consumo de APIs**: Uso de `fetch` y el hook `useEffect` para obtener datos desde un backend (API REST), manejar operaciones asíncronas de autenticación (Login/Register) y envío de órdenes de compra (Checkout).

## Estado del Proyecto (Hitos)

- ✅ **Hito 1 - Componentes y Props:** Creación de la estructura básica de la SPA con componentes funcionales (`Navbar`, `Home`, `CardPizza`, `Footer`). Renderizado dinámico y modularización.
- ✅ **Hito 2 - Estado y Eventos:** Implementación de componentes para registro (`Register`) e inicio de sesión (`Login`) con gestión de estados para capturar inputs, renderizado condicional de alertas estéticas y validaciones completas de formularios.
- ✅ **Hito 3 - Renderización Dinámica:** Uso del método `.map()` en la vista `Home` para iterar un array de pizzas (`pizzas.js`) y renderizar el componente `CardPizza`. Creación del componente interactivo `Cart` con manejo de estados múltiples para simular un carrito de compras real (modificar cantidades de cada producto, eliminación dinámica al llegar a cero y cálculo de un Total actualizado al vuelo).
- ✅ **Hito 4 - Consumo de API:** Integración con un backend de prueba. El componente `Home` ahora obtiene la lista de pizzas dinámicamente mediante el hook `useEffect` y `fetch`. Se creó el nuevo componente `Pizza` para renderizar el detalle de una pizza individual consultando su propio endpoint en la API.
- ✅ **Hito 5 - React Router:** Refactorización de la estructura de carpetas (separando `pages` de `components`). Configuración de enrutamiento con `react-router-dom` definiendo rutas para todas las vistas y creación de los nuevos componentes `Profile` y `NotFound` (404). Navegación con `<Link>`.
- ✅ **Hito 6 - Context API:** Implementación de estado global. Se creó `CartContext` para manejar de manera unificada la información y acciones del carrito de compras (añadir, sumar, restar, total) impactando automáticamente el `Navbar`, la vista `Home` y el `Cart`. Además, se implementó de forma opcional el `PizzaContext` para globalizar el array de pizzas traídas por fetch.
- ✅ **Hito 7 - React Router II:** Se implementaron rutas dinámicas (para cada pizza mediante su `id`) consumiendo información desde la API en base al ID extraído con `useParams`. Se crearon rutas protegidas redirigiendo al usuario usando `<Navigate>` en `react-router-dom`. Se añadió también `UserContext` para simular un inicio de sesión global (token) y restringir o habilitar elementos de la UI como el botón "Pagar" en el carrito o los links en el Navbar.
- ✅ **Hito 8 - Autenticación Real (Final):** Implementación de autenticación persistente con el backend mediante JWT. Se integraron los métodos `login`, `register` y `getProfile` en el `UserContext`. Se implementó el envío real del carrito al backend (`checkout`) y se añadió feedback visual (mensajes de éxito/error) para todas las operaciones asíncronas.

## Instalación y Uso

### 1. Clonar el repositorio
```bash
git clone https://github.com/JulianGon87/pizzeria_mamma_mia.git
cd pizzeria_mamma_mia
```

### 2. Configurar el Backend (API)
El repositorio incluye el archivo `simple-api-backend-nodejs-express-fs-json-jwt-main.rar` con la API necesaria.
1. Descomprime el archivo `.rar` en una carpeta de tu elección.
2. Abre una terminal en esa carpeta.
3. Instala las dependencias:
   ```bash
   npm install
   ```
4. Inicia el servidor:
   ```bash
   npm start
   ```
   *La API correrá en `http://localhost:5000`.*

### 3. Configurar el Frontend (React)
1. En la carpeta raíz del proyecto (`pizzeria-mamma-mia`), instala las dependencias:
   ```bash
   npm install
   ```
2. Inicia la aplicación:
   ```bash
   npm run dev
   ```
3. Abre `http://localhost:5173` en tu navegador.
