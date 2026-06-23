import { useState } from "react";
import { plannerDestinations } from "../../data/plannerDestinations";

function PlannerForm() {
  const [selectedDestination, setSelectedDestination] =
    useState("");

  return (
    <div className="rounded-3xl bg-white p-10 shadow-lg">
      <h2 className="mb-2 text-3xl font-bold text-[#1A1A2E]">
        Where do you want to go?
      </h2>

      <p className="mb-8 text-gray-600">
        Choose a destination to begin planning.
      </p>

      <input
        type="text"
        placeholder="Search destination..."
        value={selectedDestination}
        onChange={(e) =>
          setSelectedDestination(e.target.value)
        }
        className="mb-8 w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none focus:border-[#FF6B35]"
      />

      <div className="grid gap-4 md:grid-cols-3">
        {plannerDestinations.map((destination) => (
          <button
            key={destination.id}
            onClick={() =>
              setSelectedDestination(destination.name)
            }
            className={`rounded-2xl border p-5 text-left transition-all ${
              selectedDestination === destination.name
                ? "border-[#FF6B35] bg-orange-50"
                : "border-gray-200 hover:border-[#FF6B35]"
            }`}
          >
            <div className="mb-2 text-3xl">
              {destination.emoji}
            </div>

            <div className="font-semibold">
              {destination.name}
            </div>
          </button>
        ))}
      </div>

      <div className="mt-10 flex justify-end">
        <button className="rounded-xl bg-[#FF6B35] px-8 py-3 font-medium text-white">
          Next
        </button>
      </div>
    </div>
  );
}

export default PlannerForm;