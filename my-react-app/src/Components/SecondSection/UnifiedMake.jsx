// import { useEffect, useState } from "react";
// import {
//   RefreshCcw,
//   Globe,
//   MessageCircle,
//   Mail,
//   ArrowRight,
//   ShoppingCart,
// } from "lucide-react";

// export default function UnifiedLeadMake() {
//   const [mounted, setMounted] = useState(false);
//   const [showLeads, setShowLeads] = useState(false);

//   useEffect(() => {
//     setMounted(true);

//     const timer = setTimeout(() => {
//       setShowLeads(true);
//     }, 1000);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className="max-w-7xl mx-auto px-6 py-10 font-inter overflow-hidden">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

//         {/* LEFT PANEL */}
//         <div
//           className={`
//             border-4 border-black flex flex-col
//             transition-all duration-700 ease-out
//             ${mounted ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"}
//           `}
//         >
//           {/* HEADER */}
//           <div className="bg-yellow-50 border-b-4 border-black p-4">
//             <h2 className="text-xl font-semibold">
//               Unified Lead Intake & CRM Sync
//             </h2>

//             <div className="grid grid-cols-2 gap-4 mt-4">
//               <div className="border-2 border-black p-3">
//                 <p className="text-sm text-gray-600">New Leads Today</p>
//                 <p className="text-2xl font-bold">4</p>
//               </div>
//               <div className="border-2 border-black p-3">
//                 <p className="text-sm text-gray-600">Auto-Synced</p>
//                 <p className="text-2xl font-bold text-green-600">3</p>
//               </div>
//             </div>
//           </div>

//           {/* LEADS */}
//           <div className="flex-1 p-4 space-y-4">
//             {!showLeads && (
//               <p className="text-center text-gray-400 mt-10">
//                 Fetching leads...
//               </p>
//             )}

//             {showLeads && (
//               <>
//                 {/* Lead 1 */}
//                 <LeadCard
//                   icon={<Globe />}
//                   name="Jane Smith"
//                   source="Website Form"
//                   status="New"
//                   color="cyan"
//                   delay="delay-0"
//                 />

//                 {/* Lead 2 */}
//                 <LeadCard
//                   icon={<MessageCircle />}
//                   name="Robert Williams"
//                   source="Facebook Messenger"
//                   status="Contacted"
//                   color="blue"
//                   delay="delay-150"
//                 />

//                 {/* Lead 3 */}
//                 <LeadCard
//                   icon={<Mail />}
//                   name="Lisa Anderson"
//                   source="Email Inquiry"
//                   status="Synced to CRM"
//                   color="green"
//                   delay="delay-300"
//                 />
//               </>
//             )}
//           </div>
//         </div>

//         {/* RIGHT PANEL */}
//         <div
//           className={`
//             space-y-6
//             transition-all duration-700 ease-out
//             ${mounted ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"}
//           `}
//         >
//           {/* INFO */}
//           <div className="border-4 border-black p-6 relative">
//             <RefreshCcw className="absolute top-6 right-6 w-8 h-8 text-cyan-600" />

//             <h2 className="text-2xl font-semibold mb-2">
//               Unified Lead Intake & CRM Sync
//             </h2>

//             <p className="text-cyan-600 font-medium mb-4">
//               Centralized Lead Management Across All Channels
//             </p>

//             <p className="text-gray-600 mb-6">
//               Capture leads from websites, social media, emails, and calls.
//               Automatically sync them to your CRM with intelligent routing and
//               follow-up workflows.
//             </p>

//             <div className="flex items-center justify-between">
//               <div>
//                 <div className="text-4xl font-bold">
//                   $129
//                   <span className="text-lg text-gray-500">/mo</span>
//                 </div>
//                 <p className="text-green-600 mt-1">✓ 5-day free trial</p>
//               </div>

//               <button className="border-2 border-black px-6 py-3 font-semibold flex items-center gap-2">
//                 <ShoppingCart size={18} /> Start Trial
//               </button>
//             </div>
//           </div>

//           {/* WHAT IT DOES */}
//           <div className="border-4 border-black bg-cyan-50 p-6">
//             <h3 className="text-xl font-semibold mb-4">⚡ What It Does</h3>
//             <ul className="space-y-2">
//               <li>▶ Captures leads from website, social, email, phone</li>
//               <li>▶ Auto-syncs to CRM platforms</li>
//               <li>▶ Intelligent lead routing</li>
//               <li>▶ Automated follow-up workflows</li>
//             </ul>
//           </div>

//           {/* KEY BENEFITS */}
//           <div className="border-4 border-black bg-yellow-50 p-6">
//             <h3 className="text-xl font-semibold mb-4">🎯 Key Benefits</h3>
//             <ul className="space-y-2">
//               <li>✓ Never lose a lead again</li>
//               <li>✓ Eliminate manual data entry</li>
//               <li>✓ Faster responses</li>
//               <li>✓ Full visibility</li>
//             </ul>
//           </div>

//           {/* IDEAL FOR */}
//           <div className="border-4 border-black p-6">
//             <h3 className="text-xl font-semibold mb-4">👥 Ideal For</h3>
//             <div className="flex flex-wrap gap-3">
//               {[
//                 "Sales teams",
//                 "Customer service teams",
//                 "Marketing operations",
//                 "Agency owners",
//               ].map((item) => (
//                 <span
//                   key={item}
//                   className="border-2 border-black px-4 py-2 font-medium"
//                 >
//                   {item}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// /* ---------------- COMPONENT ---------------- */

// function LeadCard({ icon, name, source, status, color, delay }) {
//   return (
//     <div
//       className={`
//         border-2 border-black p-4
//         flex items-center justify-between
//         transition-all duration-500 ease-out
//         translate-x-0 opacity-100
//         animate-in slide-in-from-left
//         ${delay}
//       `}
//     >
//       <div className="flex items-start gap-3">
//         <div
//           className={`border-2 border-black p-2 bg-${color}-100 text-${color}-600`}
//         >
//           {icon}
//         </div>

//         <div>
//           <p className="font-semibold">{name}</p>
//           <p className="text-sm text-gray-600">{source}</p>
//           <span
//             className={`inline-block mt-2 px-3 py-1 text-sm border-2 border-${color}-600 text-${color}-600`}
//           >
//             {status}
//           </span>
//         </div>
//       </div>

//       <span className="text-gray-500 flex items-center gap-1">
//         Salesforce <ArrowRight size={16} />
//       </span>
//     </div>
//   );
// }


import { useEffect, useState } from "react";
import {
  RefreshCcw,
  Globe,
  MessageCircle,
  Mail,
  ArrowRight,
  ShoppingCart,
  Zap,
  CheckCircle,
  Users,
} from "lucide-react";

/* ---------------- DATA ---------------- */

const LEADS = [
  {
    id: 1,
    name: "Jane Smith",
    source: "Website Form",
    status: "New",
    color: "cyan",
    icon: Globe,
    time: "2 min ago",
  },
  {
    id: 2,
    name: "Robert Williams",
    source: "Facebook Messenger",
    status: "Contacted",
    color: "blue",
    icon: MessageCircle,
    time: "15 min ago",
  },
  {
    id: 3,
    name: "Lisa Anderson",
    source: "Email Inquiry",
    status: "Synced to CRM",
    color: "green",
    icon: Mail,
    time: "1 hour ago",
  },
];

/* ---------------- MAIN ---------------- */

export default function UnifiedLeadMake() {
  const [mounted, setMounted] = useState(false);
  const [visibleLeads, setVisibleLeads] = useState([]);

  useEffect(() => {
    setMounted(true);

    LEADS.forEach((lead, index) => {
      setTimeout(() => {
        setVisibleLeads((prev) => [...prev, lead]);
      }, 900 + index * 700);
    });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 font-inter overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

        {/* ================= LEFT PANEL ================= */}
        <div
          className={`border-4 border-black bg-yellow-50 transition-all duration-700
          ${mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
        >
          {/* Header */}
          <div className="border-b-4 border-black p-4">
            <h2 className="text-xl font-bold">
              Unified Lead Intake & CRM Sync
            </h2>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <StatCard label="New Leads Today" value="4" />
              <StatCard label="Auto-Synced" value="3" success />
            </div>
          </div>

          {/* Leads */}
          <div className="p-4 space-y-4">
            {visibleLeads.length === 0 && (
              <p className="text-center text-gray-400 py-12">
                Fetching leads…
              </p>
            )}

            {visibleLeads.map((lead, index) => (
              <LeadCard key={lead.id} lead={lead} index={index} />
            ))}
          </div>
        </div>

        {/* ================= RIGHT PANEL ================= */}
        <div
          className={`space-y-6 transition-all duration-700
          ${mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}`}
        >
          {/* INFO CARD */}
          <div className="border-4 border-black bg-white p-6 relative">
            <RefreshCcw className="absolute top-6 right-6 w-8 h-8 text-cyan-600" />

            <h2 className="text-2xl font-bold mb-2">
              Unified Lead Intake & CRM Sync
            </h2>

            <p className="text-cyan-600 font-semibold mb-4">
              Centralized Lead Management Across All Channels
            </p>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Capture leads from websites, social media, emails, and calls.
              Automatically sync them to your CRM with intelligent routing and
              follow-up workflows.
            </p>

            <div className="flex items-center justify-between">
              <div>
                <div className="text-4xl font-bold">
                  $129
                  <span className="text-lg text-gray-500 font-medium">/mo</span>
                </div>
                <p className="text-green-600 mt-1 font-medium">
                  ✓ 5-day free trial
                </p>
              </div>

              <button className="border-2 border-black px-6 py-3 font-semibold flex items-center gap-2">
                <ShoppingCart size={18} />
                Start Trial
              </button>
            </div>
          </div>

          {/* WHAT IT DOES */}
          <InfoCard
            title="What It Does"
            icon={<Zap />}
            bg="bg-cyan-50"
            items={[
              "Captures leads from website, social, email, phone",
              "Auto-syncs to CRM platforms",
              "Intelligent lead routing",
              "Automated follow-up workflows",
            ]}
          />

          {/* KEY BENEFITS */}
          <InfoCard
            title="Key Benefits"
            icon={<CheckCircle />}
            bg="bg-yellow-50"
            items={[
              "Never lose a lead again",
              "Eliminate manual data entry",
              "Faster response times",
              "Complete lead visibility",
            ]}
          />

          {/* IDEAL FOR */}
          <div className="border-4 border-black bg-white p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Users /> Ideal For
            </h3>

            <div className="flex flex-wrap gap-3">
              {[
                "Sales teams",
                "Customer service teams",
                "Marketing operations",
                "Agency owners",
              ].map((item) => (
                <span
                  key={item}
                  className="border-2 border-black px-4 py-2 font-medium bg-white"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Keyframes */}
      <style>
        {`
          @keyframes leadEnter {
            from {
              opacity: 0;
              transform: translateX(-16px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}
      </style>
    </div>
  );
}

/* ================= COMPONENTS ================= */

function StatCard({ label, value, success }) {
  return (
    <div className="border-2 border-black p-3 bg-white">
      <p className="text-sm text-gray-600">{label}</p>
      <p className={`text-2xl font-bold ${success ? "text-green-600" : ""}`}>
        {value}
      </p>
    </div>
  );
}

function LeadCard({ lead, index }) {
  const Icon = lead.icon;

  return (
    <div
      className="border-2 border-black bg-white p-4"
      style={{
        animation: `leadEnter 0.5s ease-out ${index * 0.15}s both`,
      }}
    >
      <div className="flex justify-between items-start">
        <div className="flex gap-3">
          <div className="border-2 border-black p-2 bg-gray-100">
            <Icon size={18} />
          </div>

          <div>
            <p className="font-semibold">{lead.name}</p>
            <p className="text-sm text-gray-600">{lead.source}</p>
          </div>
        </div>

        <span className="text-sm text-gray-500">{lead.time}</span>
      </div>

      <div className="h-1 bg-cyan-500 my-3" />

      <div className="flex justify-between items-center">
        <span className="px-3 py-1 text-sm border-2 border-black">
          {lead.status}
        </span>

        <span className="text-gray-500 flex items-center gap-1">
          Salesforce <ArrowRight size={16} />
        </span>
      </div>
    </div>
  );
}

function InfoCard({ title, icon, items, bg }) {
  return (
    <div className={`border-4 border-black p-6 ${bg}`}>
      <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
        {icon} {title}
      </h3>

      <ul className="space-y-2 text-gray-700">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span>▶</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
