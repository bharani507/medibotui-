import { useNavigate } from "react-router-dom";

export default function Solopreneurs() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/#industry");
  };

  return (
    <div className="bg-black text-white">
      <div className="px-10 py-16 bg-gradient-to-r from-black to-slate-900 border-b border-cyan-400">
        <button
          onClick={handleBack}
          className="text-cyan-400 mb-4 hover:underline cursor-pointer"
        >
          &larr; Back to All Industries
        </button>

        <h1 className="text-4xl font-bold text-cyan-400">Solopreneurs</h1>
        <p className="mt-3 text-gray-300">
          Save time and increase consistency running solo
        </p>
      </div>

      <div className="bg-white text-black px-10 py-16">
        <h2 className="text-2xl font-bold mb-8">
          AI Products for{" "}
          <span className="text-cyan-500">Solopreneurs</span>
        </h2>

        <div className="border p-6 mb-6 rounded-lg flex justify-between">
          <div>
            <h3 className="font-semibold text-lg">
              ContentPulse{" "}
              <span className="ml-2 text-xs bg-yellow-100 px-2 py-1">
                COMING SOON
              </span>
            </h3>
            <p className="text-sm text-gray-600">
              AI Content Planning Assistant
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Weekly content ideas and ready-to-post drafts.
            </p>
            <div className="mt-3 flex gap-3">
              <strong>$49</strong>
              <span>/month</span>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <button className="border px-4 py-2">Start Trial</button>
            <button className="border px-4 py-2">View Details →</button>
          </div>
        </div>

        <div className="border p-6 rounded-lg flex justify-between">
          <div>
            <h3 className="font-semibold text-lg">
              LeadFollow Agent{" "}
              <span className="ml-2 text-xs bg-yellow-100 px-2 py-1">
                COMING SOON
              </span>
            </h3>
            <p className="text-sm text-gray-600">
              Automated Lead Follow-Up
            </p>
            <p className="text-sm text-gray-500 mt-2">
              WhatsApp + Email bot for lead qualification.
            </p>
            <div className="mt-3 flex gap-3">
              <strong>$39</strong>
              <span>/month</span>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <button className="border px-4 py-2">Start Trial</button>
            <button className="border px-4 py-2">View Details →</button>
          </div>
        </div>
      </div>
    </div>
  );
}
