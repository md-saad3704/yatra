import { useState } from "react";
import { motion } from "framer-motion";

import DestinationCard from "./DestinationCard";
import { featuredDestinations } from "../../data/featuredDestinations";

function PopularDestinations() {
  const [activeTab, setActiveTab] = useState("India");

  const filteredDestinations = featuredDestinations.filter(
    (destination) => destination.country === activeTab
  );

  return (
    <section className="relative overflow-hidden py-24">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFF8F3] via-[#FAFAF8] to-[#F7FBFF]" />

      {/* Decorative Blob */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-orange-200/60 blur-[140px]" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-sky-200/60 blur-[140px]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="font-display mb-4 text-5xl font-bold text-[#1A1A2E]">
            Explore Popular Destinations
          </h2>

          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Discover India's most loved destinations and
            trending international getaways.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="mb-14 flex justify-center">
          <div className="flex rounded-full border border-white/50 bg-white/80 p-2 shadow-xl backdrop-blur-md">

            {/* {activeTab === "India" && (
              
            )} */}
            <button
              onClick={() => setActiveTab("India")}
              className={`rounded-full px-8 py-3 font-medium transition-colors duration-100 ${activeTab === "India"
                ? "bg-[#FF6B35] text-white"
                : "text-gray-600 hover:bg-orange-50"
                }`}
            >
              India
            </button>

            {/* {activeTab === "International" && (
             
            )} */}
            <button
              onClick={() => setActiveTab("International")}
              className={`rounded-full px-8 py-3 font-medium transition-colors duration-100 ${activeTab === "International"
                  ? "bg-[#FF6B35] text-white"
                  : "text-gray-600 hover:bg-orange-50"
                }`}
            >
              International
            </button>
          </div>
        </div>

        {/* Destination Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredDestinations.map((destination) => (
            <DestinationCard
              key={destination.id}
              {...destination}
            />
          ))}
        </div>
      </div>
    </section>


  );
}

export default PopularDestinations;