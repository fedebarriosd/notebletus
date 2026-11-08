// Crea la colección "notes" y sus índices en MongoDB a partir del modelo Note.
// Uso: npm run db:init   (requiere MONGO_URI en backend/.env)
import dotenv from "dotenv";
import mongoose from "mongoose";

import Note from "../src/models/Note.js";

dotenv.config();

try {
  await mongoose.connect(process.env.MONGO_URI);
  const db = mongoose.connection;

  const existing = await db.db.listCollections({ name: Note.collection.name }).toArray();
  if (existing.length === 0) {
    await Note.createCollection();
    console.log(`Colección "${Note.collection.name}" creada.`);
  } else {
    console.log(`Colección "${Note.collection.name}" ya existía.`);
  }

  await Note.syncIndexes();
  const indexes = await Note.collection.indexes();
  console.log(`Base de datos: ${db.name}`);
  console.log("Índices:", JSON.stringify(indexes));
} catch (error) {
  console.error("Error inicializando la base de datos:", error.message);
  process.exitCode = 1;
} finally {
  await mongoose.disconnect();
}
