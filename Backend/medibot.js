// // import express from "express";
// // import multer from "multer";

// // const router = express.Router();
// // const upload = multer();

// // /* 🔗 n8n Webhooks */
// // const VOICE_WEBHOOK =
// //   "https://dharinisrisubramanian.n8n-wsk.com/webhook-test/prodvoicebasedurl";

// // const SAVE_WEBHOOK =
// //   "https://dharinisrisubramanian.n8n-wsk.com/webhook-test/savetodrive";

// // /* ---------------- VOICE → n8n ---------------- */
// // router.post("/voice", upload.single("audio"), async (req, res) => {
// //   try {
// //     if (!req.file) {
// //       return res.status(400).json({ error: "No audio received" });
// //     }

// //     // ✅ Native FormData (Node 18+)
// //     const formData = new FormData();
// //     const audioBlob = new Blob([req.file.buffer], {
// //       type: "audio/wav",
// //     });

// //     formData.append("audio", audioBlob, "doctor_note.wav");

// //     const response = await fetch(VOICE_WEBHOOK, {
// //       method: "POST",
// //       body: formData,
// //     });

// //     const data = await response.json();
// //     res.json(data);

// //   } catch (err) {
// //     console.error("❌ Voice processing error:", err);
// //     res.status(500).json({ error: "Voice processing failed" });
// //   }
// // });

// // /* ---------------- SAVE CONFIRMED DATA ---------------- */
// // router.post("/confirm", async (req, res) => {
// //   try {
// //     await fetch(SAVE_WEBHOOK, {
// //       method: "POST",
// //       headers: { "Content-Type": "application/json" },
// //       body: JSON.stringify(req.body),
// //     });

// //     res.json({ success: true });

// //   } catch (err) {
// //     console.error("❌ Save error:", err);
// //     res.status(500).json({ error: "Save failed" });
// //   }
// // });

// // export default router;



// import express from "express";
// import multer from "multer";

// const router = express.Router();
// const upload = multer();

// const patients = [];

// const VOICE_WEBHOOK =
//   "https://dharinisrisubramanian.n8n-wsk.com/webhook-test/prodvoicebasedurl";

// const SAVE_WEBHOOK =
//   "https://dharinisrisubramanian.n8n-wsk.com/webhook-test/savetodrive";

// /* ---------- VOICE ---------- */
// router.post("/voice", upload.single("audio"), async (req, res) => {
//   try {
//     const formData = new FormData();
//     const audioBlob = new Blob([req.file.buffer], {
//       type: req.file.mimetype,
//     });

//     formData.append("audio", audioBlob, "doctor_note.wav");

//     const response = await fetch(VOICE_WEBHOOK, {
//       method: "POST",
//       body: formData,
//     });

//     const data = await response.json();
//     res.json(data);
//   } catch {
//     res.status(500).json({ error: "Voice processing failed" });
//   }
// });

// /* ---------- CONFIRM ---------- */
// router.post("/confirm", async (req, res) => {
//   try {
//     const patient = {
//       ...req.body,
//       createdAt: new Date().toISOString(),
//     };

//     patients.push(patient);

//     await fetch(SAVE_WEBHOOK, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(patient),
//     });

//     res.json({ success: true });
//   } catch {
//     res.status(500).json({ error: "Save failed" });
//   }
// });

// /* ---------- DASHBOARD ---------- */
// router.get("/patients", (req, res) => {
//   res.json(patients);
// });

// export default router;


import express from "express";
import multer from "multer";
import fetch from "node-fetch";
import FormData from "form-data";

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

/* ---------- n8n WEBHOOKS ---------- */
const VOICE_WEBHOOK =
  "https://dharinisrisubramanian.n8n-wsk.com/webhook-test/prodvoicebasedurl";

const SAVE_WEBHOOK =
  "https://dharinisrisubramanian.n8n-wsk.com/webhook-test/savetodrive";

/* ---------- TEMP MEMORY DB ---------- */
const patients = [];

/* =========================================================
   🎙️ VOICE → n8n → RETURN CLEAN MEDICAL JSON
========================================================= */
router.post("/voice", upload.single("audio"), async (req, res) => {
  try {
    console.log("🎙️ /voice route hit");

    if (!req.file) {
      return res.status(400).json({ error: "Audio file missing" });
    }

    /* ---------- SEND AUDIO TO n8n ---------- */
    const formData = new FormData();
    formData.append("audio", req.file.buffer, {
      filename: req.file.originalname,
      contentType: req.file.mimetype,
    });

    const response = await fetch(VOICE_WEBHOOK, {
      method: "POST",
      body: formData,
      headers: formData.getHeaders(),
    });

    console.log("📡 n8n status:", response.status);

    const data = await response.json();
    console.log("📨 Raw n8n response:", data);

    /* 🔥 IMPORTANT: return SAME JSON to frontend */
    return res.json(data);

  } catch (err) {
    console.error("🔥 VOICE ERROR:", err);
    res.status(500).json({ error: "Voice processing failed" });
  }
});


/* =========================================================
   💾 CONFIRM → SAVE TO n8n + MEMORY
========================================================= */
router.post("/confirm", async (req, res) => {
  try {
    const patient = {
      ...req.body,
      createdAt: new Date().toISOString(),
    };

    patients.push(patient);

    await fetch(SAVE_WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(patient),
    });

    res.json({ success: true });

  } catch (err) {
    console.error("🔥 CONFIRM ERROR:", err);
    res.status(500).json({ error: "Save failed" });
  }
});

/* =========================================================
   📊 DASHBOARD DATA
========================================================= */
router.get("/patients", (req, res) => {
  res.json(patients);
});

export default router;