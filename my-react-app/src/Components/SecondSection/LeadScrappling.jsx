// // export default function LeadEnrichmentPage() {
// //   return (
// //     <div className="max-w-7xl mx-auto px-6 py-10 font-inter">

// //       {/* TOP SECTION */}
// //       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

// //         {/* LEFT TOOL PANEL */}
// //         <div className="border-4 border-black flex flex-col">

// //           {/* Header */}
// //           <div className="bg-cyan-50 border-b-4 border-black p-4">
// //             <h2 className="text-xl font-semibold mb-4">
// //               Lead Scraping & Enrichment
// //             </h2>

// //             <div className="flex gap-3">
// //               <input
// //                 className="flex-1 border-2 border-black px-4 py-3 text-gray-600"
// //                 placeholder="Enter search criteria (e.g., 'Marketing Directors in Tech')"
// //               />
// //               <button className="bg-cyan-400 border-2 border-black px-6 py-3 font-medium whitespace-nowrap">
// //                 🔍 Search
// //               </button>
// //             </div>
// //           </div>

// //           {/* BODY — FULL HEIGHT */}
// //           <div className="flex-1 flex flex-col items-center justify-center text-gray-500">
// //             <div className="text-6xl mb-3">🔍</div>
// //             <p className="text-center max-w-xs">
// //               Enter search criteria and click "Search" to find leads
// //             </p>
// //           </div>
// //         </div>

// //         {/* RIGHT INFO PANEL */}
// //         <div className="border-4 border-black p-6 relative flex flex-col">
// //           <div className="absolute top-6 right-6 text-3xl">🎯</div>

// //           <h2 className="text-2xl font-semibold mb-2">
// //             Lead Scraping & Enrichment
// //           </h2>

// //           <p className="text-cyan-600 font-medium mb-4">
// //             Automated Lead Discovery & Data Enrichment
// //           </p>

// //           <p className="text-gray-600 leading-relaxed mb-6">
// //             Automatically discover, scrape, and enrich leads from multiple
// //             sources including LinkedIn, Google Maps, and industry directories.
// //             Get verified emails, phone numbers, and company data.
// //           </p>

// //           {/* Push pricing to bottom if needed */}
// //           <div className="mt-auto flex items-center justify-between">
// //             <div>
// //               <div className="text-4xl font-bold">
// //                 $99
// //                 <span className="text-lg font-medium text-gray-500">/mo</span>
// //               </div>
// //               <p className="text-green-600 mt-1">✓ 5-day free trial</p>
// //             </div>

// //             <button className="border-2 border-black px-6 py-3 font-semibold whitespace-nowrap">
// //               🛒 Start Trial
// //             </button>
// //           </div>
// //         </div>

// //       </div>

// //       {/* WHAT IT DOES */}
// //       <div className="mt-12 border-4 border-black bg-cyan-50 p-6 max-w-xl ml-auto">
// //         <h3 className="text-xl font-semibold mb-4">⚡ What It Does</h3>
// //         <ul className="space-y-2 text-gray-700">
// //           <li>▶ Scrapes leads from LinkedIn, Google Maps, and directories</li>
// //           <li>▶ Enriches contact data with verified emails and phone numbers</li>
// //           <li>▶ Finds company information and social profiles</li>
// //           <li>▶ Exports to CSV or syncs directly to your CRM</li>
// //         </ul>
// //       </div>

// //       {/* KEY BENEFITS */}
// //       <div className="mt-6 border-4 border-black bg-yellow-50 p-6 max-w-xl ml-auto">
// //         <h3 className="text-xl font-semibold mb-4">🎯 Key Benefits</h3>
// //         <ul className="space-y-2 text-gray-700">
// //           <li>✓ Save 10+ hours per week on prospecting</li>
// //           <li>✓ Build targeted lead lists in minutes</li>
// //           <li>✓ Get verified contact information</li>
// //           <li>✓ Always up-to-date company data</li>
// //         </ul>
// //       </div>

// //       {/* IDEAL FOR */}
// //       <div className="mt-6 border-4 border-black p-6 max-w-xl ml-auto">
// //         <h3 className="text-xl font-semibold mb-4">👥 Ideal For</h3>

// //         <div className="flex flex-wrap gap-3">
// //           {[
// //             "Sales teams",
// //             "Marketing agencies",
// //             "Business development professionals",
// //             "Recruiters",
// //           ].map((item) => (
// //             <span
// //               key={item}
// //               className="border-2 border-black px-4 py-2 font-medium whitespace-nowrap"
// //             >
// //               {item}
// //             </span>
// //           ))}
// //         </div>
// //       </div>

// //     </div>
// //   );
// // }


// export default function LeadEnrichmentPage() {
//   return (
//     <div className="max-w-7xl mx-auto px-6 py-10 font-inter">

//       {/* MAIN TWO COLUMN LAYOUT */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

//         {/* LEFT SEARCH PANEL — FULL HEIGHT */}
//         <div className="border-4 border-black flex flex-col h-full">

//           {/* SEARCH SECTION — EXPANDS FULL HEIGHT */}
//           <div className="bg-cyan-50 border-b-4 border-black p-4 flex-1 flex flex-col justify-center">
//             <h2 className="text-xl font-semibold mb-4">
//               Lead Scraping & Enrichment
//             </h2>

//             <div className="flex gap-3">
//               <input
//                 className="flex-1 border-2 border-black px-4 py-3 text-gray-600"
//                 placeholder="Enter search criteria (e.g., 'Marketing Directors in Tech')"
//               />
//               <button className="bg-cyan-400 border-2 border-black px-6 py-3 font-medium whitespace-nowrap">
//                 🔍 Search
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT COLUMN — STACKED CONTENT */}
//         <div className="flex flex-col gap-6 h-full">

//           {/* INFO PANEL */}
//           <div className="border-4 border-black p-6 relative">
//             <div className="absolute top-6 right-6 text-3xl">🎯</div>

//             <h2 className="text-2xl font-semibold mb-2">
//               Lead Scraping & Enrichment
//             </h2>

//             <p className="text-cyan-600 font-medium mb-4">
//               Automated Lead Discovery & Data Enrichment
//             </p>

//             <p className="text-gray-600 leading-relaxed mb-6">
//               Automatically discover, scrape, and enrich leads from multiple
//               sources including LinkedIn, Google Maps, and industry directories.
//               Get verified emails, phone numbers, and company data.
//             </p>

//             <div className="flex items-center justify-between">
//               <div>
//                 <div className="text-4xl font-bold">
//                   $99
//                   <span className="text-lg font-medium text-gray-500">/mo</span>
//                 </div>
//                 <p className="text-green-600 mt-1">✓ 5-day free trial</p>
//               </div>

//               <button className="border-2 border-black px-6 py-3 font-semibold">
//                 🛒 Start Trial
//               </button>
//             </div>
//           </div>

//           {/* WHAT IT DOES */}
//           <div className="border-4 border-black bg-cyan-50 p-6">
//             <h3 className="text-xl font-semibold mb-4">⚡ What It Does</h3>
//             <ul className="space-y-2 text-gray-700">
//               <li>▶ Scrapes leads from LinkedIn, Google Maps, and directories</li>
//               <li>▶ Enriches contact data with verified emails and phone numbers</li>
//               <li>▶ Finds company information and social profiles</li>
//               <li>▶ Exports to CSV or syncs directly to your CRM</li>
//             </ul>
//           </div>

//           {/* KEY BENEFITS */}
//           <div className="border-4 border-black bg-yellow-50 p-6">
//             <h3 className="text-xl font-semibold mb-4">🎯 Key Benefits</h3>
//             <ul className="space-y-2 text-gray-700">
//               <li>✓ Save 10+ hours per week on prospecting</li>
//               <li>✓ Build targeted lead lists in minutes</li>
//               <li>✓ Get verified contact information</li>
//               <li>✓ Always up-to-date company data</li>
//             </ul>
//           </div>

//           {/* IDEAL FOR */}
//           <div className="border-4 border-black p-6">
//             <h3 className="text-xl font-semibold mb-4">👥 Ideal For</h3>

//             <div className="flex flex-wrap gap-3">
//               {[
//                 "Sales teams",
//                 "Marketing agencies",
//                 "Business development professionals",
//                 "Recruiters",
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


import { motion } from "framer-motion";

export default function LeadEnrichmentPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10 font-inter overflow-hidden">
      {/* MAIN TWO COLUMN LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

        {/* LEFT SEARCH PANEL — SLIDE IN FROM LEFT */}
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="border-4 border-black flex flex-col h-full"
        >
          {/* SEARCH SECTION — FULL HEIGHT */}
          <div className="bg-cyan-50 border-b border-black p-4 flex-1 flex flex-col justify-start">
            <h2 className="text-xl font-semibold mb-4">
              Lead Scraping & Enrichment
            </h2>

            <div className="flex gap-3">
              <input
                className="flex-1 border-2 border-black px-4 py-3 text-gray-600"
                placeholder="Enter search criteria (e.g., 'Marketing Directors in Tech')"
              />
              <button className="bg-cyan-400 border-2 border-black px-6 py-3 font-medium whitespace-nowrap">
                🔍 Search
              </button>
            </div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN — SLIDE IN FROM RIGHT */}
        <motion.div
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
          className="flex flex-col gap-6 h-full"
        >
          {/* INFO PANEL */}
          <div className="border-4 border-black p-6 relative">
            <div className="absolute top-6 right-6 text-3xl">🎯</div>

            <h2 className="text-2xl font-semibold mb-2">
              Lead Scraping & Enrichment
            </h2>

            <p className="text-cyan-600 font-medium mb-4">
              Automated Lead Discovery & Data Enrichment
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              Automatically discover, scrape, and enrich leads from multiple
              sources including LinkedIn, Google Maps, and industry directories.
              Get verified emails, phone numbers, and company data.
            </p>

            <div className="flex items-center justify-between">
              <div>
                <div className="text-4xl font-bold">
                  $99
                  <span className="text-lg font-medium text-gray-500">/mo</span>
                </div>
                <p className="text-green-600 mt-1">✓ 5-day free trial</p>
              </div>

              <button className="border-2 border-black px-6 py-3 font-semibold">
                🛒 Start Trial
              </button>
            </div>
          </div>

          {/* WHAT IT DOES */}
          <div className="border-4 border-black bg-cyan-50 p-6">
            <h3 className="text-xl font-semibold mb-4">⚡ What It Does</h3>
            <ul className="space-y-2 text-gray-700">
              <li>▶ Scrapes leads from LinkedIn, Google Maps, and directories</li>
              <li>▶ Enriches contact data with verified emails and phone numbers</li>
              <li>▶ Finds company information and social profiles</li>
              <li>▶ Exports to CSV or syncs directly to your CRM</li>
            </ul>
          </div>

          {/* KEY BENEFITS */}
          <div className="border-4 border-black bg-yellow-50 p-6">
            <h3 className="text-xl font-semibold mb-4">🎯 Key Benefits</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Save 10+ hours per week on prospecting</li>
              <li>✓ Build targeted lead lists in minutes</li>
              <li>✓ Get verified contact information</li>
              <li>✓ Always up-to-date company data</li>
            </ul>
          </div>

          {/* IDEAL FOR */}
          <div className="border-4 border-black p-6">
            <h3 className="text-xl font-semibold mb-4">👥 Ideal For</h3>

            <div className="flex flex-wrap gap-3">
              {[
                "Sales teams",
                "Marketing agencies",
                "Business development professionals",
                "Recruiters",
              ].map((item) => (
                <span
                  key={item}
                  className="border-2 border-black px-4 py-2 font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
