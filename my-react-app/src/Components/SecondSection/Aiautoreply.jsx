// import { motion } from "framer-motion";
// import {
//   Mail,
//   ShoppingCart,
//   Zap,
//   Target,
//   Users,
//   CheckCircle,
// } from "lucide-react";

// const messages = [
//   {
//     email: "customer1@email.com",
//     subject: "Pricing inquiry",
//     time: "2 min ago",
//     text: "Hi, I'm interested in your premium plan. Can you share pricing details?",
//   },
//   {
//     email: "client@email.com",
//     subject: "Support request",
//     time: "5 min ago",
//     text: "Does your AI support WhatsApp and SMS automation?",
//   },
//   {
//     email: "lead@email.com",
//     subject: "Demo request",
//     time: "8 min ago",
//     text: "Can I book a demo for next week?",
//   },
// ];

// export default function Aiautoreply() {
//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto py-16">
//       {/* LEFT PANEL */}
//       <motion.div
//         initial={{ x: -80, opacity: 0 }}
//         whileInView={{ x: 0, opacity: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6 }}
//         className="border-4 border-black bg-cyan-50 flex flex-col"
//       >
//         {/* Header */}
//         <div className="border-b-4 border-black p-4">
//           <h3 className="text-lg font-bold">AI Auto-Reply & Follow-Up</h3>

//           <div className="grid grid-cols-3 gap-3 mt-4">
//             <StatBox value="3" label="Auto-Replied" color="text-green-600" />
//             <StatBox value="45s" label="Avg Response" color="text-cyan-600" />
//             <StatBox value="98%" label="Success Rate" color="text-black" />
//           </div>
//         </div>

//         {/* Messages */}
//         <div className="p-4 space-y-4 overflow-y-auto h-[420px]">
//           {messages.map((msg, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: i * 0.8, duration: 0.5 }}
//               className="border-4 border-black bg-white p-4"
//             >
//               <div className="flex justify-between items-start">
//                 <div className="flex gap-3">
//                   <div className="w-9 h-9 rounded-full bg-gray-300 flex items-center justify-center">
//                     <Mail className="w-4 h-4" />
//                   </div>
//                   <div>
//                     <p className="font-semibold text-sm">{msg.email}</p>
//                     <p className="text-xs text-gray-500">{msg.subject}</p>
//                   </div>
//                 </div>
//                 <span className="text-xs text-gray-500">{msg.time}</span>
//               </div>

//               <div className="border-2 border-gray-200 p-3 text-sm mt-3">
//                 {msg.text}
//               </div>

//               <div className="flex justify-between items-center mt-3">
//                 <span className="text-xs text-gray-500">WYN AI Assistant</span>
//                 <span className="flex items-center gap-1 text-green-600 text-xs border-2 border-green-600 px-2 py-1">
//                   <CheckCircle className="w-3 h-3" /> Sent
//                 </span>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>

//       {/* RIGHT PANEL */}
//       <motion.div
//         initial={{ x: 80, opacity: 0 }}
//         whileInView={{ x: 0, opacity: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6 }}
//         className="space-y-6"
//       >
//         {/* Pricing Card */}
//         <div className="border-4 border-black p-6 relative">
//           <Mail className="absolute top-5 right-5 w-6 h-6 text-cyan-500 fill-cyan-500" />

//           <h3 className="text-lg font-bold">AI Auto-Reply & Follow-Up</h3>
//           <p className="text-cyan-600 text-sm mt-1">
//             Intelligent Email & Message Automation
//           </p>

//           <p className="text-sm text-gray-700 mt-3 leading-relaxed">
//             AI-powered auto-replies and follow-ups for emails, SMS, and social
//             messages. Responds instantly and routes priority messages.
//           </p>

//           <div className="flex justify-between items-end mt-5">
//             <div>
//               <p className="text-3xl font-bold">
//                 $69<span className="text-sm font-normal">/mo</span>
//               </p>
//               <p className="text-green-600 text-sm mt-1">✓ 5-day free trial</p>
//             </div>

//             <button className="border-4 border-black px-6 py-2 flex items-center gap-2 font-semibold">
//               <ShoppingCart className="w-4 h-4" /> Start Trial
//             </button>
//           </div>
//         </div>

//         {/* What It Does */}
//         <InfoCard
//           title="What It Does"
//           icon={<Zap className="w-4 h-4 text-orange-500" />}
//           items={[
//             "Auto-responds to emails, SMS, social messages",
//             "Understands inquiry intent",
//             "Schedules follow-ups automatically",
//             "Routes urgent messages",
//             "Learns your communication style",
//           ]}
//           bg="bg-cyan-50"
//         />

//         {/* Key Benefits */}
//         <InfoCard
//           title="Key Benefits"
//           icon={<Target className="w-4 h-4 text-pink-500" />}
//           items={[
//             "Never miss an inquiry",
//             "Respond instantly 24/7",
//             "Increase conversion rates",
//             "Reduce response time by 95%",
//           ]}
//           bg="bg-yellow-50"
//         />

//         {/* Ideal For */}
//         <div className="border-4 border-black p-5">
//           <h4 className="font-bold flex items-center gap-2 mb-4">
//             <Users className="w-4 h-4 text-purple-600" />
//             Ideal For
//           </h4>

//           <div className="flex flex-wrap gap-3 text-sm">
//             {[
//               "Customer support teams",
//               "Sales professionals",
//               "Small business owners",
//               "Consultants and coaches",
//             ].map((item) => (
//               <span
//                 key={item}
//                 className="border-2 border-black px-3 py-1"
//               >
//                 {item}
//               </span>
//             ))}
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// }

// /* Small Components */
// function StatBox({ value, label, color }) {
//   return (
//     <div className="border-2 border-black bg-white p-3 text-center">
//       <p className={`text-lg font-bold ${color}`}>{value}</p>
//       <p className="text-xs text-gray-600 mt-1">{label}</p>
//     </div>
//   );
// }

// function InfoCard({ title, icon, items, bg }) {
//   return (
//     <div className={`border-4 border-black p-5 ${bg}`}>
//       <h4 className="font-bold flex items-center gap-2 mb-3">
//         {icon} {title}
//       </h4>
//       <ul className="space-y-2 text-sm">
//         {items.map((item) => (
//           <li key={item} className="flex gap-2">
//             <span className="text-cyan-600">▶</span> {item}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
import { motion } from "framer-motion";
import {
  Mail,
  ShoppingCart,
  Zap,
  Target,
  Users,
  CheckCircle,
} from "lucide-react";

const messages = [
  {
    email: "jane@company.com",
    subject: "Pricing inquiry",
    time: "2 min ago",
    text: "Hi, I'm interested in your premium plan. Can you share pricing?",
    reply:
      "Sure! Our premium plan includes automation, priority support, and unlimited usage.",
  },
  {
    email: "robert@startup.io",
    subject: "WhatsApp automation",
    time: "6 min ago",
    text: "Does this support WhatsApp & SMS?",
    reply:
      "Yes 🚀 We support Email, SMS, WhatsApp, and social platforms.",
  },
  {
    email: "alex@agency.co",
    subject: "Demo request",
    time: "10 min ago",
    text: "Can I book a demo next week?",
    reply:
      "Absolutely! Please share your preferred date and time.",
  },
];

export default function Aiautoreply() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto py-16 font-inter overflow-hidden">
      {/* LEFT PANEL */}
      <motion.div
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="border-4 border-black bg-cyan-50 ml-4"
      >
        {/* Header */}
        <div className="border-b-4 border-black p-5">
          <h3 className="text-xl font-bold">
            AI Auto-Reply & Follow-Up
          </h3>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <StatBox value="3" label="Auto-Replied" color="text-green-600" />
            <StatBox value="45s" label="Avg Response" color="text-cyan-600" />
            <StatBox value="98%" label="Success Rate" color="text-black" />
          </div>
        </div>

        {/* Messages */}
        <div className="p-5 space-y-6">
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 1.2, duration: 0.45 }}
              className="border-4 border-black bg-white p-5 mx-3"
            >
              {/* Customer */}
              <div className="flex justify-between items-start">
                <div className="flex gap-3">
                  <div className="w-9 h-9 bg-cyan-400 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-black" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{msg.email}</p>
                    <p className="text-xs text-gray-500">{msg.subject}</p>
                  </div>
                </div>
                <span className="text-xs text-gray-400">{msg.time}</span>
              </div>

              <div className="border-2 border-gray-300 p-3 text-sm mt-3">
                {msg.text}
              </div>

              {/* Typing */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 1.2 + 0.6 }}
                className="flex items-center gap-2 text-xs text-gray-500 mt-3"
              >
                <span className="w-7 h-7 bg-cyan-200 flex items-center justify-center text-[11px] font-bold">
                  AI
                </span>
                WYN AI is typing…
              </motion.div>

              {/* Reply */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 1.2 + 1.1 }}
                className="border-2 border-cyan-500 bg-cyan-50 p-3 text-sm mt-2 mx-2"
              >
                {msg.reply}
              </motion.div>

              {/* Sent */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 1.2 + 1.5 }}
                className="flex justify-end mt-3"
              >
                <span className="flex items-center gap-1 text-xs border-2 border-green-600 px-2 py-1 text-green-600">
                  <CheckCircle className="w-3 h-3" /> Sent
                </span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* RIGHT PANEL */}
      <motion.div
        initial={{ x: 40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="space-y-6 mr-4"
      >
        <div className="border-4 border-black p-6 relative mx-3">
          <Mail
            className="absolute top-5 right-5 w-6 h-6 text-cyan-500"
            fill="currentColor"
            stroke="none"
          />

          <h3 className="text-2xl font-bold">
            AI Auto-Reply & Follow-Up
          </h3>
          <p className="text-sm text-cyan-600 mt-1">
            Intelligent Message Automation
          </p>

          <p className="text-sm text-gray-700 mt-3">
            Automatically respond to emails, SMS, and social messages using AI.
          </p>

          <div className="flex justify-between items-end mt-5">
            <div>
              <p className="text-3xl font-bold">
                $69<span className="text-base font-normal">/mo</span>
              </p>
              <p className="text-green-600 text-sm mt-1">
                ✓ 5-day free trial
              </p>
            </div>

            <button className="border-4 border-black px-6 py-2 flex items-center gap-2 text-sm font-semibold">
              <ShoppingCart className="w-4 h-4" /> Start Trial
            </button>
          </div>
        </div>

        <InfoCard
          title="What It Does"
          icon={<Zap className="w-4 h-4 text-orange-500" />}
          bg="bg-cyan-50"
          items={[
            "Instant auto-responses",
            "Smart intent detection",
            "Automated follow-ups",
            "Multi-channel support",
          ]}
        />

        <InfoCard
          title="Key Benefits"
          icon={<Target className="w-4 h-4 text-pink-500" />}
          bg="bg-yellow-50"
          items={[
            "Never miss a lead",
            "24/7 availability",
            "Higher conversions",
          ]}
        />

        <div className="border-4 border-black p-5 mx-3">
          <h4 className="font-bold flex items-center gap-2 mb-3 text-sm">
            <Users className="w-4 h-4 text-purple-600" />
            Ideal For
          </h4>

          <div className="flex flex-wrap gap-3 text-sm">
            {["Sales teams", "Support teams", "Agencies", "Founders"].map(
              (item) => (
                <span key={item} className="border-2 border-black px-3 py-1">
                  {item}
                </span>
              )
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* ---------- SMALL COMPONENTS ---------- */

function StatBox({ value, label, color }) {
  return (
    <div className="border-2 border-black bg-white p-3 text-center">
      <p className={`text-lg font-bold ${color}`}>{value}</p>
      <p className="text-xs text-gray-600 mt-1">{label}</p>
    </div>
  );
}

function InfoCard({ title, icon, items, bg }) {
  return (
    <div className={`border-4 border-black p-5 ${bg} mx-3`}>
      <h4 className="font-bold flex items-center gap-2 mb-3 text-sm">
        {icon} {title}
      </h4>
      <ul className="space-y-2 text-sm">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="text-cyan-600">▶</span> {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
