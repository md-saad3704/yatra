/* ===========================================================
   File       : FilterSummary.jsx
   Folder     : components/trips
   Purpose    : Displays filter summary and clear button.
   Author     : Muhammad Saad Kamal
   Project    : YĀTRĀ - AI Travel Planner
=========================================================== */

/* ===========================================================
   Imports
=========================================================== */

import { X } from "lucide-react";

/* ===========================================================
   Component
=========================================================== */

function FilterSummary({
  totalTrips,
  onClear,
}) {
  return (
    <div className="mb-10 flex items-center justify-between">

      <p className="text-gray-500">
        Showing{" "}
        <span className="font-semibold text-[#1A1A2E]">
          {totalTrips}
        </span>{" "}
        trip{totalTrips !== 1 ? "s" : ""}
      </p>

      <button
        onClick={onClear}
        className="flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm font-medium transition hover:border-[#FF6B35] hover:text-[#FF6B35]"
      >
        <X size={16} />
        Clear Filters
      </button>

    </div>
  );
}

export default FilterSummary;