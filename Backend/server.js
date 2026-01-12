import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import drivebotRoutes from "./drivebot.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

/* -------------------- CORS -------------------- */
app.use(
  cors({
    origin: process.env.FRONTEND_ORIGIN,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// IMPORTANT: handle preflight
app.options("*", cors());

/* -------------------- BODY PARSER -------------------- */
app.use(express.json({ limit: "20mb" }));
app.use(express.urlencoded({ extended: true }));

/* -------------------- ROOT -------------------- */
app.get("/", (req, res) => {
  res.json({ ok: true, message: "DriveBot Backend Running 🚗" });
});

/* -------------------- DRIVEBOT ROUTES -------------------- */
app.use("/api", drivebotRoutes);

/* -------------------- ERROR HANDLER -------------------- */
app.use((err, req, res, next) => {
  console.error("🔥 Server Error:", err);
  res.status(500).json({
    error: err.message || "Internal Server Error",
  });
});

/* -------------------- START SERVER -------------------- */
app.listen(PORT, () => {
  console.log(`
🚀 DriveBot Server Started
────────────────────────
📍 http://localhost:${PORT}
🌐 Allowed Origin: ${process.env.FRONTEND_ORIGIN}

🩺 GET  /api/health
💬 POST /api/chat
🧪 POST /api/test
🆕 POST /api/session/new
`);
});
