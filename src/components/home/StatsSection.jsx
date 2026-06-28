/* ===========================================================
   File       : StatsSection.jsx
   Folder     : components/home
   Purpose    : Displays platform statistics.
   Author     : Muhammad Saad Kamal
   Project    : YĀTRĀ - AI Travel Planner
=========================================================== */

import { AnimatedCounter } from "../ui";
import { motion } from "framer-motion";



const stats = [
  {
    value: 5000,
    suffix: "+",
    label: "Destinations",
  },
  {
    value: 50,
    suffix: "+",
    label: "Countries",
  },
  {
    value: 100,
    suffix: "K+",
    label: "Trips Planned",
  },
  {
    value: 4.9,
    suffix: "★",
    label: "User Rating",
    decimals: 1,
  },
];

function StatsSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="rounded-[32px] bg-[#1A1A2E] p-12 shadow-2xl"
      >
        <div className="grid grid-cols-2 gap-10 text-center md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
            >
              <h2 className="mb-2 text-5xl font-bold text-[#FF6B35]">
                <AnimatedCounter
                  end={stat.value}
                  decimals={stat.decimals || 0}
                  suffix={stat.suffix}
                  delay={index * 180}
                />
              </h2>

              <p className="text-white/80">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default StatsSection;