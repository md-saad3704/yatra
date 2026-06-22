import { useState } from "react";

import DestinationCard from "./DestinationCard";
import { featuredDestinations } from "../../data/featuredDestinations";

function PopularDestinations() {
  const [activeTab, setActiveTab] = useState("India");

  const filteredDestinations =
    featuredDestinations.filter(
      (destination) =>
        destination.country === activeTab
    );

  return (
    <section className="bg-[#FAFAF8] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="font-display mb-4 text-center text-5xl font-bold">
          Explore Popular Destinations
        </h2>

        <p className="mx-auto mb-10 max-w-2xl text-center text-gray-600">
          Discover incredible places across India
          and around the world.
        </p>

        <div className="mb-12 flex justify-center gap-4">
          <button
            onClick={() => setActiveTab("India")}
            className={`rounded-full px-6 py-3 ${
              activeTab === "India"
                ? "bg-[#FF6B35] text-white"
                : "bg-white"
            }`}
          >
            India
          </button>

          <button
            onClick={() => setActiveTab("International")}
            className={`rounded-full px-6 py-3 ${
              activeTab === "International"
                ? "bg-[#FF6B35] text-white"
                : "bg-white"
            }`}
          >
            International
          </button>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredDestinations.map(
            (destination) => (
              <DestinationCard
                key={destination.id}
                {...destination}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default PopularDestinations;