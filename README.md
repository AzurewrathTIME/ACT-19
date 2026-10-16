# 🏫 Sistema Escolar

Sistema web para la organización y administración visual de información escolar.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![DOM](https://img.shields.io/badge/DOM-Manipulation-blueviolet)
![Status](https://img.shields.io/badge/status-en%20desarrollo-yellow)

---

## 📌 Descripción

El **Sistema Escolar** es un proyecto desarrollado en **HTML5**, **CSS3** y **JavaScript** que presenta una interfaz visual e interactiva para gestionar la información de los alumnos de una institución educativa.

Incluye un formulario de registro, una tabla dinámica con CRUD (Crear, Leer, Actualizar, Eliminar) y un panel de resumen que se actualiza automáticamente. Todo vive únicamente en el navegador, sin backend todavía.

---

## ✨ Características

- 🏠 **Encabezado:** logotipo y nombre del sistema.
- 🧭 **Menú de navegación:** accesos a las diferentes secciones.
- 📂 **Panel lateral:** enlaces a alumnos, maestros y administradores.
- 📝 **Registro de alumnos:** formulario para capturar datos personales.
- 📋 **Tabla dinámica:** se llena automáticamente al registrar alumnos.
- ✏️ **Editar filas:** permite modificar datos de un alumno existente.
- 🗑️ **Eliminar filas:** permite borrar un alumno con confirmación.
- 📊 **Resumen en vivo:** contador de alumnos y último registrado.
- 🎨 **Diseño con CSS:** colores, layout responsive y fondo con imagen.
- ⚡ **Interactividad con JavaScript:** eventos, DOM y delegación.
- 🖼️ **Fondo animado:** GIF con velo translúcido.

---

## 🛠️ Tecnologías

| Tecnología | Uso |
|------------|-----|
| HTML5 | Estructura de la página web |
| Formularios HTML | Captura de información |
| Tablas HTML | Presentación dinámica de datos |
| CSS3 | Estilos, layout y colores |
| CSS Grid | Distribución del layout principal |
| CSS Flexbox | Alineación de menús, formularios y tarjetas |
| Variables CSS | Paleta de colores reutilizable |
| Media Queries | Diseño responsive básico |
| JavaScript | Interactividad y manejo de eventos |
| DOM | Manipulación dinámica del HTML |
| addEventListener | Escucha de eventos (click, submit) |
| Delegación de eventos | Un solo listener para botones dinámicos |
| Template literals | Construcción de HTML con `${...}` |

---

## 📁 Estructura del proyecto

```
Sistema-Escolar/
├── public/
│   ├── index.html
│   ├── styless.css
│   ├── app.js
│   └── img/
│       ├── mi.png
│       └── fondo.gif
├── main.cpp
└── README.md
```

---

## 🚀 Instalación y ejecución

1. Descarga el proyecto o clona el repositorio.
2. Abre la carpeta `Sistema-Escolar`.
3. Comprueba que las imágenes estén en `public/img/`.
4. Abre `public/index.html` en tu navegador.

**Requisitos:** un navegador web moderno. No es necesario instalar dependencias.

---

## ⚡ Funcionalidades

| Acción | Descripción |
|--------|-------------|
| **Registrar alumno** | Agrega una fila a la tabla con los datos del formulario |
| **Editar** | Modifica nombre y edad de un alumno existente |
| **Eliminar** | Borra una fila con confirmación previa |
| **Mostrar mensaje** | Muestra u oculta un mensaje en pantalla |
| **Limpiar** | Borra todos los campos del formulario |
| **Calcular promedio** | Suma 3 calificaciones y muestra el promedio con 2 decimales |
| **Resumen** | Se actualiza automáticamente al agregar o eliminar |

---

## 🧠 Conceptos aplicados

### HTML
- Estructura básica: `<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`.
- Etiquetas semánticas: `<header>`, `<nav>`, `<main>`, `<section>`, `<aside>`, `<footer>`.
- Formularios: `<form>`, `<input>`, `<label>`, `<button>`, `<fieldset>`, `<legend>`.
- Tablas dinámicas: `<table>`, `<thead>`, `<tbody>`, `<tr>`, `<th>`, `<td>`.

### CSS
- Selectores: etiqueta, clase, id, atributo, pseudo-clases.
- Variables CSS (`:root` y `var(--...)`).
- Box model: `box-sizing: border-box`.
- Layout con **CSS Grid** y **Flexbox**.
- Colores con **HEX** y **RGBA**.
- Transiciones y hovers.
- **Media queries** para responsive básico.
- **Imagen de fondo animada** con velo translúcido usando `body::before`.

### JavaScript
- Modo estricto: `'use strict'`.
- Variables: `const` por defecto, `let` cuando se reasigna.
- Selección de elementos: `document.querySelector`.
- Creación de elementos: `document.createElement`.
- Modificación del DOM: `textContent`, `innerHTML`, `classList`, `dataset`.
- Inserción: `appendChild`.
- Eliminación: `elemento.remove()`, `innerHTML = ""`.
- Eventos: `addEventListener` para `click` y `submit`.
- Prevención de recarga: `e.preventDefault()`.
- **Delegación de eventos** en el `<tbody>` para botones dinámicos.
- `closest('tr')` para subir al padre.
- `data-id` para identificar cada fila.
- **Patrón modelo + vista**: arreglo de objetos como fuente de verdad.
- Función `render()` que reconstruye la tabla completa.
- Validación con `isNaN` y comparación estricta `===`.
- Redondeo con `toFixed(2)`.

### Buenas prácticas
- Separación de HTML, CSS y JS en archivos distintos.
- `alt` en imágenes, `for` en labels, un solo `<h1>`.
- Codificación **UTF-8**.
- CSS externo enlazado desde `<head>`.
- JS enlazado antes de `</body>`.
- Nombres de clases en kebab-case.
- Variables y funciones en camelCase.
- Sincronización del modelo y la vista.

---

## 🧪 Cómo probarlo

1. Abre `public/index.html` en el navegador.
2. Pasa el mouse sobre el menú → cambia a fondo azul.
3. Escribe un nombre y presiona **"Registrar"** → aparece una fila en la tabla.
4. Presiona **"Editar"** en una fila → cambia nombre y edad.
5. Presiona **"Eliminar"** en una fila → confirma y desaparece.
6. Presiona **"Calcular promedio"** con 3 calificaciones → muestra el promedio.
7. Recarga la página → todo se borra (no hay persistencia todavía).

---

## 📌 Estado del proyecto

| Actividad | Estado |
|-----------|--------|
| Actividad 16 — Estructura HTML | ✅ Completada |
| Actividad 17 — Estilos CSS | ✅ Completada |
| Actividad 18 — JavaScript | ✅ Completada |
| Actividad 19 — DOM + Tabla dinámica | ✅ Completada |
| Actividad 20 — Conexión con backend | ⏳ Pendiente |

En esta etapa los datos **se pierden al recargar** porque no hay backend ni `localStorage` todavía.

---

## 🎯 Próximas mejoras

- [ ] Guardar datos en `localStorage`.
- [ ] Agregar columna "Promedio" en la tabla.
- [ ] Validar correos con expresión regular.
- [ ] Buscador de alumnos en la tabla.
- [ ] Ordenar columnas al hacer clic.
- [ ] Modo oscuro.
- [ ] Conectar con el backend en C++.

---

## 📄 Licencia

MIT License
