<h1 align="center">📝 Notebletus</h1>

Aplicación de notas construida con el stack MERN (MongoDB, Express, React, Node).

Highlights:

- 🧱 Full-Stack App con MongoDB, Express, React y Node
- ✨ Crear, actualizar y eliminar notas con título y contenido
- 🛠️ API REST propia
- ⚙️ Rate limiting con Upstash Redis
- 🚀 UI totalmente responsive

---

## 🧪 Configuración de entorno (.env)

### Backend (`/backend`)

```
MONGO_URI=<your_mongo_uri>

UPSTASH_REDIS_REST_URL=<your_redis_rest_url>
UPSTASH_REDIS_REST_TOKEN=<your_redis_rest_token>

NODE_ENV=development
```

Hay una plantilla en `backend/.env.example`; el archivo `.env` real no se sube al repositorio.

## 🗄️ Base de datos (Indicador 5)

Las notas se guardan en MongoDB (Mongoose). Modelo de datos: [`docs/modelo-datos.md`](docs/modelo-datos.md).

```
cd backend
npm run db:init   # crea la colección "notes" y sincroniza índices
npm run db:show   # muestra los documentos directamente desde MongoDB
```

## 🔧 Levantar el Backend

```
cd backend
npm install
npm run dev
```

## 💻 Levantar el Frontend

```
cd frontend
npm install
npm run dev
```
