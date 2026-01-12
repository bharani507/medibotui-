import { motion } from "framer-motion";

export default function AutomaticSocialPage() {
  return (
    <div className="w-full bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

          {/* ================= LEFT PANEL (SLIDE FROM LEFT) ================= */}
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="border-[3px] border-black h-full flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b-[3px] border-black">
              <h2 className="text-2xl font-bold mb-4">
                Automatic Social Media Content
              </h2>

              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Enter topic or theme (e.g., 'Product Launch')"
                  className="flex-1 border-[2px] border-black px-4 py-2"
                />
                <button className="border-[2px] border-black px-6 font-semibold flex items-center gap-2">
                  ✨ Generate
                </button>
              </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 flex flex-col items-center justify-center text-center text-gray-500">
              <div className="text-4xl mb-4">🪄</div>
              <p>
                Enter a topic and click <b>"Generate"</b> to create content
              </p>
            </div>
          </motion.div>

          {/* ================= RIGHT PANEL (SLIDE FROM RIGHT) ================= */}
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
            className="flex flex-col gap-6"
          >
            {/* Intro / Pricing */}
            <div className="border-[3px] border-black">
              <div className="p-6 border-b-[3px] border-black">
                <h3 className="text-2xl font-bold mb-2">
                  Automatic Social Media Content
                </h3>
                <p className="text-blue-600 font-medium">
                  AI-Powered Content Creation & Scheduling
                </p>
              </div>

              <div className="p-6">
                <p className="text-gray-700 mb-6">
                  Generate engaging social media posts, images, and videos automatically.
                  Schedule content across all platforms with AI-optimized timing.
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-3xl font-bold">
                      $79<span className="text-base font-medium">/mo</span>
                    </p>
                    <p className="text-green-600 mt-1">✓ 5-day free trial</p>
                  </div>
                  <button className="border-[2px] border-black px-6 py-3 font-semibold flex items-center gap-2">
                    🛒 Start Trial
                  </button>
                </div>
              </div>
            </div>

            {/* What It Does */}
            <div className="border-[3px] border-black bg-cyan-50 p-6">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                ⚡ What It Does
              </h4>
              <ul className="space-y-2">
                <li>▶ Generates posts for Instagram, Facebook, LinkedIn, Twitter</li>
                <li>▶ Creates images and graphics with AI</li>
                <li>▶ Suggests optimal posting times</li>
                <li>▶ Auto-schedules content calendar</li>
                <li>▶ Provides hashtag and caption suggestions</li>
              </ul>
            </div>

            {/* Key Benefits */}
            <div className="border-[3px] border-black bg-yellow-50 p-6">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                🎯 Key Benefits
              </h4>
              <ul className="space-y-2">
                <li>✓ Post consistently without effort</li>
                <li>✓ Increase engagement rates</li>
                <li>✓ Save 15+ hours per week</li>
                <li>✓ Maintain brand voice automatically</li>
              </ul>
            </div>

            {/* Ideal For */}
            <div className="border-[3px] border-black p-6">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                👥 Ideal For
              </h4>
              <div className="flex flex-wrap gap-3">
                <span className="border-[2px] border-black px-4 py-2">
                  Small business owners
                </span>
                <span className="border-[2px] border-black px-4 py-2">
                  Social media managers
                </span>
                <span className="border-[2px] border-black px-4 py-2">
                  Marketing teams
                </span>
                <span className="border-[2px] border-black px-4 py-2">
                  Content creators
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
