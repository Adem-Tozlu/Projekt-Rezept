import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";
import rezeptRoutes from "./routes/rezeptRoutes.js";
import authRoutes from "./routes/authRoutes.js"; 
import path from "path";
import { fileURLToPath } from "url";
const server = express();
server.use(cors());
server.use(express.json());



const PORT = process.env.PORT || 5000;
const mongoDB = process.env.MONGODB_URL;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


(async () => {
  try {
    await mongoose.connect(mongoDB, {});
    console.log("Die Verbindung wurde hergestellt");
  } catch (error) {
    console.error("Die Verbindung konnte nicht hergestellt werden:", error);
  }
})();
server.use("/api/rezepte", rezeptRoutes);
server.use("/api/auth", authRoutes);

const reactAppPath = path.join(__dirname, "../../frontend/build");
server.use(express.static(reactAppPath));

// Catch-all handler to serve the React app for any route not handled by the API
server.get("*", (req, res) => {
  res.sendFile(path.join(reactAppPath, "index.html"));
});



server.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});

