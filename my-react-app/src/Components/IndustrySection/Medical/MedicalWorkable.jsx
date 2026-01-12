export default function MedicalWorkable({ demoRef }) {
  return (
    <section ref={demoRef} className="py-12 bg-white">
      <div className="max-w-5xl mx-auto px-4 text-center mb-10">
        <h2 className="text-5xl font-bold mb-4">
          Try <span className="text-cyan-400">Live Demo</span>
        </h2>
        <p className="text-lg text-gray-600">
          Experience how NoteWhisper works in real-time.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4">
        <div className="rounded-3xl border-4 border-cyan-400 bg-white shadow-xl overflow-hidden">

          {/* TOP BAR */}
          <div className="bg-cyan-400 px-6 py-4 flex justify-between items-center border-b-4 border-black font-mono">
            <span>🎤 NOTEWHISPER</span>
            <span className="border-2 border-black px-4 py-1 bg-white">
              READY
            </span>
          </div>

          {/* BODY */}
          <div className="p-6">
            <div className="border-4 border-black px-6 py-6 flex justify-between items-center mb-6 font-mono">
              <span>VOICE_INPUT</span>
              <button className="bg-red-500 text-white px-6 py-2 border-4 border-black font-bold">
                ● START
              </button>
            </div>

            <div className="border-4 border-black h-56 mb-4" />

            <div className="p-4 text-center text-sm font-mono">
              Click START to record a sample medical note
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
