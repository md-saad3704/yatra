/* ===========================================================
   File       : TravelTips.jsx
   Folder     : components/destination
   Purpose    : Display useful travel tips for a destination.
   Author     : Muhammad Saad Kamal
   Project    : YĀTRĀ - AI Travel Planner
=========================================================== */

import { Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

function TravelTips({ tips = [] }) {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="mb-10 flex items-center gap-3 text-4xl font-bold text-[#1A1A2E]">
          <Lightbulb
            size={34}
            className="text-[#FF6B35]"
          />
          Travel Tips
        </h2>

        <div className="space-y-5">
          {tips.length > 0 ? (
            tips.map((tip, index) => (
              <div
                key={index}
                className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 font-semibold text-[#FF6B35]">
                  {index + 1}
                </div>

                <p className="text-gray-700">
                  {tip}
                </p>
              </div>
            ))
          ) : (
            <div className="rounded-2xl bg-white p-6 shadow-md">
              <p className="text-gray-500">
                No travel tips available.
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
}

export default TravelTips;