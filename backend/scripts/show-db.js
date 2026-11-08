// Muestra directamente desde MongoDB (sin pasar por la API) los documentos de "notes".
// Uso: npm run db:show   (requiere MONGO_URI en backend/.env)
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

try {
  await mongoose.connect(process.env.MONGO_URI);
  const col = mongoose.connection.db.collection("notes");
  const total = await col.countDocuments();
  const docs = await col.find().sort({ createdAt: -1 }).toArray();
  console.log(`> db.notes.find().sort({ createdAt: -1 })   (${total} documentos, BD "${mongoose.connection.name}")`);
  for (const d of docs) console.log(JSON.stringify(d));
} catch (error) {
  console.error("Error consultando la base de datos:", error.message);
  process.exitCode = 1;
} finally {
  await mongoose.disconnect();
}
