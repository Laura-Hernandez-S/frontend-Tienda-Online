# Sistema de Tienda Online

Sistema fullstack de gestión para tienda online desarrollado con:

- Backend en Python + FastAPI
- Frontend en Angular + TypeScript
- PostgreSQL como base de datos
- Angular Material para la interfaz gráfica

El proyecto permite administrar:

- Usuarios
- Categorías
- Productos
- Pedidos
- Pagos
- Detalles de pedido

Además incluye:

- autenticación básica
- integración frontend/backend mediante API REST
- operaciones CRUD completas
- manejo de UUIDs
- conexión HTTP real entre Angular y FastAPI

---

# Tecnologías utilizadas

## Backend

- Python
- FastAPI
- SQLAlchemy
- PostgreSQL
- Uvicorn
- Pydantic

## Frontend

- Angular
- TypeScript
- Angular Material
- RxJS

---

# Estructura general

## Backend

```txt
backend-Tienda-Online/
├── src/
│   ├── crud/
│   ├── entities/
│   ├── routes/
│   ├── database/
│   └── main.py
```

## Frontend

```txt
frontend-Tienda-Online/
├── web/
│   ├── src/
│   │   ├── app/
│   │   ├── environments/
│   │   └── styles.scss
```

---

# Funcionalidades implementadas

- CRUD de usuarios
- CRUD de categorías
- CRUD de productos
- CRUD de pedidos
- Login conectado al backend
- Registro de usuarios
- Integración Angular ↔ FastAPI
- Consumo de API REST con HttpClient
- Validaciones básicas
- Persistencia en PostgreSQL

---

# Configuración backend

## Instalar dependencias

```bash
pip install -r requirements.txt
```

## Ejecutar servidor

```bash
py -m uvicorn src.main:app --reload
```

Backend disponible en:

```txt
http://127.0.0.1:8000
```

Swagger:

```txt
http://127.0.0.1:8000/docs
```

---

# Configuración frontend

## Instalar dependencias

```bash
npm install
```

## Ejecutar Angular

```bash
npm start
```

Frontend disponible en:

```txt
http://localhost:4200
```

---

# Configuración de conexión API

Archivo:

```txt
src/environments/environment.ts
```

```ts
export const environment = {
  production: false,
  apiUrl: 'http://127.0.0.1:8000',
};
```

---

# Video demostrativo

Link del video explicando el funcionamiento del proyecto:

```
https://youtu.be/2aYdSOv_cyQ?si=dZlOCAfHZ1cp787R

```

---

# Autor

Laura Hernandez
Brahyam Scharlok

---

# Observaciones

Este proyecto fue desarrollado con enfoque académico para practicar:

- arquitectura frontend/backend
- consumo de APIs REST
- integración Angular + FastAPI
- manejo de base de datos relacional
- flujo GitFlow con ramas feature/dev/qa/main

Basado parcialmente en la estructura guía proporcionada por el docente.