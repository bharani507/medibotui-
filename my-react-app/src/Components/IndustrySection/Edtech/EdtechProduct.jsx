import { useNavigate } from "react-router-dom";

export default function EdTechProviders() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/#industry");
  };

  return (
    <div className="bg-black text-white">
      {/* ================= HEADER ================= */}
      <div className="px-10 py-16 bg-gradient-to-r from-black to-slate-900 border-b border-cyan-400">
        <button
          onClick={handleBack}
          className="text-cyan-400 mb-4 hover:underline cursor-pointer"
        >
          &larr; Back to All Industries
        </button>

        <h1 className="text-4xl font-bold text-cyan-400">
          EdTech Providers
        </h1>

        <p className="mt-3 text-gray-300">
          Automate course creation, student support, and engagement
        </p>
      </div>

      {/* ================= PRODUCTS ================= */}
      <div className="bg-white text-black px-10 py-16">
        <h2 className="text-2xl font-bold mb-8">
          AI Products for{" "}
          <span className="text-cyan-500">EdTech Providers</span>
        </h2>

        {/* PRODUCT 1 */}
        <div className="border p-6 mb-6 rounded-lg flex justify-between items-start hover:bg-cyan-50 transition">
          <div>
            <h3 className="font-semibold text-lg">
              CourseGenie{" "}
              <span className="ml-2 text-xs bg-yellow-100 px-2 py-1 rounded">
                COMING SOON
              </span>
            </h3>

            <p className="text-sm text-gray-600">
              AI Course Content Generator
            </p>

            <p className="text-sm text-gray-500 mt-2 max-w-xl">
              Auto-generate course descriptions, lessons, and quizzes.
            </p>

            <div className="mt-3 flex gap-2 items-center">
              <strong>$49</strong>
              <span className="text-gray-500">/month</span>
            </div>
          </div>

          <div className="flex flex-col gap-2 min-w-[140px]">
            <button className="border px-4 py-2 hover:bg-gray-100 transition">
              Start Trial
            </button>
            <button className="border px-4 py-2 hover:bg-gray-100 transition">
              View Details →
            </button>
          </div>
        </div>

        {/* PRODUCT 2 */}
        <div className="border p-6 rounded-lg flex justify-between items-start hover:bg-cyan-50 transition">
          <div>
            <h3 className="font-semibold text-lg">
              LearnBot{" "}
              <span className="ml-2 text-xs bg-yellow-100 px-2 py-1 rounded">
                COMING SOON
              </span>
            </h3>

            <p className="text-sm text-gray-600">
              AI Student Support Chatbot
            </p>

            <p className="text-sm text-gray-500 mt-2 max-w-xl">
              Handles onboarding, doubt clarification, reminders.
            </p>

            <div className="mt-3 flex gap-2 items-center">
              <strong>$39</strong>
              <span className="text-gray-500">/month</span>
            </div>
          </div>

          <div className="flex flex-col gap-2 min-w-[140px]">
            <button className="border px-4 py-2 hover:bg-gray-100 transition">
              Start Trial
            </button>
            <button className="border px-4 py-2 hover:bg-gray-100 transition">
              View Details →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
