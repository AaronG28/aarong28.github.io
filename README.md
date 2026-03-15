# Analítica360

**Analítica360** es una plataforma digital dedicada al análisis y la reflexión sobre economía, política, tecnología e historia. El objetivo del proyecto es ofrecer contenido claro, riguroso y accesible que ayude a comprender los fenómenos sociales, económicos y políticos del mundo actual.

El sitio está construido con **Astro**, lo que permite un rendimiento rápido, una estructura optimizada para SEO y una arquitectura moderna basada en contenido.

---

## Tecnologías utilizadas

* **Astro** – Framework principal del sitio
* **Markdown / MDX** – Creación de artículos
* **TypeScript** – Tipado y organización del código
* **CSS** – Estilos personalizados
* **Astro Content Collections** – Gestión de artículos

---

## Estructura del proyecto

```
.
├── public/              # Archivos estáticos (imágenes, favicon, etc.)
├── src/
│   ├── components/      # Componentes reutilizables
│   ├── content/         # Artículos en Markdown
│   │   └── articulos/
│   ├── layouts/         # Layouts del sitio
│   ├── pages/           # Páginas y rutas
│   └── styles/          # Estilos globales
├── astro.config.mjs     # Configuración de Astro
├── package.json
└── tsconfig.json
```

---

## Categorías del sitio

El contenido se organiza en cuatro áreas principales:

* **Economía**
* **Política**
* **Tecnología**
* **Historia**

Cada artículo pertenece a una categoría y se genera automáticamente en su ruta correspondiente.

Ejemplo:

```
/economia/mi-articulo
/politica/analisis-electoral
```

---

## Desarrollo local

Para ejecutar el proyecto en tu máquina:

Instalar dependencias

```
npm install
```

Iniciar servidor de desarrollo

```
npm run dev
```

Abrir en el navegador:

```
http://localhost:4321
```

---

## Compilar para producción

```
npm run build
```

La versión final del sitio se generará en la carpeta:

```
/dist
```

---

## Licencia

© Analítica360. Todos los derechos reservados.

