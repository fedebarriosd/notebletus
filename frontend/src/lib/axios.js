import axios from "axios";

// Resolución de la URL base de la API:
// 1. VITE_API_URL (opcional): URL del backend desplegado si va en otro dominio, p. ej. https://mi-api.onrender.com/api
// 2. En desarrollo: backend local en el puerto 5001
// 3. En producción (frontend servido por el mismo backend): ruta relativa "/api"
const BASE_URL =
  import.meta.env.VITE_API_URL ||
  (import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api");

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;
