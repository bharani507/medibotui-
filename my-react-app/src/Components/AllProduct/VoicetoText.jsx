import { useState, useEffect } from "react";

export default function ClinNoteAI() {
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [audioBlob, setAudioBlob] = useState(null);

  const [sent, setSent] = useState(false);
  const [step, setStep] = useState(0);
  const [filled, setFilled] = useState(false);

  const [isRecording, setIsRecording] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);

  const steps = [
    "Audio Received",
    "Transcribing",
    "Extracting Data",
    "Generating Report",
  ];

  // ⏱ Recording timer
  useEffect(() => {
    let interval;
    if (isRecording && !isPaused) {
      interval = setInterval(() => {
        setRecordingTime((p) => p + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRecording, isPaused]);

  // 🤖 Fake AI processing animation
  useEffect(() => {
    if (sent && step < steps.length) {
      const t = setTimeout(() => setStep((s) => s + 1), 900);
      return () => clearTimeout(t);
    }

    if (step === steps.length) {
      setTimeout(() => setFilled(true), 600);
    }
  }, [sent, step]);

  const formatTime = (s) =>
    `${Math.floor(s / 60)
      .toString()
      .padStart(2, "0")}:${(s % 60).toString().padStart(2, "0")}`;

  // 🎤 Start recording
  const handleStartRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const recorder = new MediaRecorder(stream);

    const chunks = [];

    recorder.ondataavailable = (e) => {
      if (e.data.size > 0) chunks.push(e.data);
    };

    recorder.onstop = () => {
      const blob = new Blob(chunks, { type: "audio/wav" });
      setAudioBlob(blob);
    };

    recorder.start();
    setMediaRecorder(recorder);
    setIsRecording(true);
    setRecordingTime(0);
  };

  // ⏹ Stop recording
  const handleStopRecording = () => {
    mediaRecorder?.stop();
    setIsRecording(false);
    setIsPaused(false);
  };

  // ⏸ Pause / resume (UI only)
  const handlePauseRecording = () => {
    setIsPaused((p) => !p);
  };

  // 🚀 Send to AI
  const handleSendToAI = async () => {
  if (!audioBlob) return;

  setSent(true);
  setStep(0);
  setFilled(false);

  try {
    const formData = new FormData(); // ✅ correct variable
    formData.append("audio", audioBlob, "recording.webm");

    const res = await fetch("http://localhost:3001/api/medibot/voice", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    console.log("BACKEND RESPONSE:", data);

    const ai =
      Array.isArray(data) ? data[0] :
      Array.isArray(data?.data) ? data.data[0] :
      data;

    const replyText = `
      Patient: ${ai?.patient_name || "—"}
      Symptoms: ${ai?.symptoms || "—"}
      Medicines: ${ai?.medicines || "—"}
      Doctor Notes: ${ai?.doctor_notes || "—"}
      Follow-up Required: ${ai?.follow_up_required ? "Yes" : "No"}
     `.trim();


    setAiText(replyText);
    setFilled(true);

  } catch (err) {
    console.error("AI send failed:", err);
    alert("Failed to send audio to AI");
  }
};



  return (
    <div className="min-h-screen bg-black text-white p-10 space-y-6">
      <h1 className="text-4xl font-bold text-cyan-400">CLINNOTE_AI</h1>

      {/* Recorder */}
      <div className="space-y-3">
        <div className="text-2xl font-mono">{formatTime(recordingTime)}</div>

        <div className="flex gap-2">
          {!isRecording ? (
            <button
              onClick={handleStartRecording}
              className="bg-green-600 px-4 py-2 rounded"
            >
              START
            </button>
          ) : (
            <button
              onClick={handleStopRecording}
              className="bg-red-600 px-4 py-2 rounded"
            >
              STOP
            </button>
          )}

          <button
            onClick={handlePauseRecording}
            disabled={!isRecording}
            className="bg-gray-600 px-4 py-2 rounded"
          >
            {isPaused ? "RESUME" : "PAUSE"}
          </button>
        </div>

        <button
          onClick={handleSendToAI}
          className="bg-cyan-500 text-black px-4 py-2 rounded"
        >
          SEND TO AI
        </button>
      </div>

      {/* AI Steps */}
      <div className="space-y-2">
        {steps.map((s, i) => (
          <div
            key={i}
            className={`p-2 rounded ${
              i < step ? "bg-green-500 text-black" : "bg-gray-800"
            }`}
          >
            {s}
          </div>
        ))}
      </div>

      {/* Result */}
      {filled && (
        <div className="bg-gray-900 p-4 rounded">
          Patient has frontal headache with photophobia. Vitals normal.
        </div>
      )}
    </div>
  );
}
