# Menús Digitales Landing Page

**Menús Digitales** es una landing page dinámica desarrollada con **Laravel + Inertia.js + React (TypeScript)**, utilizando **TailwindCSS** y **Shadcn/UI** para lograr una interfaz limpia, minimalista y completamente responsive.

---

## 🧩 Tecnologías principales

- ⚙️ **Laravel 11** — Backend, routing y controladores.  
- ⚡ **Inertia.js** — Comunicación sin API REST entre Laravel y React.  
- ⚛️ **React + TypeScript** — Frontend moderno, rápido y tipado.  
- 🎨 **TailwindCSS + Shadcn/UI** — Sistema de estilos potente y componentes reutilizables.  
- 🧠 **Vite** — Compilador rápido con hot reload en desarrollo.  
- 🔤 **Lucide Icons** — Iconografía profesional y elegante.  

---

## 🖼️ Características principales

✅ Landing page moderna, limpia y totalmente responsive.  
✅ Secciones: **Inicio**, **Nosotros**, **Precios** y **Contacto**.  
✅ Formularios validados con experiencia de usuario cuidada.  
✅ Componentes UI reutilizables (botones, inputs, cards, secciones, etc.).  
✅ Diseño basado en el color principal **`#406D96`**.  
✅ Estructura lista para expandirse a dashboard o panel administrativo.  
✅ Código limpio, modular y fácil de mantener.

---

## ⚙️ Requisitos previos

Antes de comenzar, asegúrate de tener instalado:

- 🐘 **PHP ≥ 8.2**
- 📦 **Composer**
- 🟢 **Node.js ≥ 18**
- 🧰 **npm** (o **pnpm** / **yarn**)
- 🗄️ **Base de datos MySQL / MariaDB / SQLite**

---

## 🚀 Instalación y configuración

Sigue estos pasos para clonar y ejecutar el proyecto en tu entorno local.

### 1️⃣ Instalar dependencias de Laravel
```bash
composer install
```

### 2️⃣ Instalar dependencias de Node
Si todo va bien:
```bash
npm install
```
Si tienes errores de dependencias:
```bash
npm install --legacy-peer-deps
```

### 3️⃣ Configurar el archivo `.env`
Copia el ejemplo y modifica tus credenciales:
```bash
cp .env.example .env
```
Y cambia en `.env`:
```
DB_CONNECTION=sqlite
DB_DATABASE=${PWD}/database/database.sqlite
```

### 4️⃣ Generar la clave de aplicación
```bash
php artisan key:generate
```

### 5️⃣ Ejecutar migraciones y seeders
Ejecuta las migraciones:
```bash
php artisan migrate
```
Y luego los seeders para crear los usuarios iniciales:
```bash
php artisan db:seed
```

📌 *Seeder incluido:* `UsersSeeder.php`  
Crea los usuarios:
- moises@example.com  
- santiago@example.com  
- alfred@example.com  
- ribeyro@example.com  
- patrick@example.com  
Contraseña por defecto: **password**

---

## 💻 Ejecución del proyecto

En **dos terminales diferentes**, corre estos comandos:

### Servidor backend (Laravel)
```bash
php artisan serve
```
Abrirá el backend en:
👉 http://127.0.0.1:8000

### Servidor frontend (Vite + React)
```bash
npm run dev
```
Abrirá el frontend con hot reload en:
👉 http://localhost:5173

---

## 🏗️ Compilar para producción

Cuando el proyecto esté listo para subir:
```bash
npm run build
```
Y asegúrate de servir los archivos compilados desde Laravel.

---

## 👨‍💻 Autor

**Santiago Pisconte**  
🧠 *Frontend & Software Developer*  
💌 Contacto: [santiago.pisconte@tecsup.edu.pe](mailto:santiago.pisconte@tecsup.edu.pe)

---

> Desarrollado por PisconteDev.
