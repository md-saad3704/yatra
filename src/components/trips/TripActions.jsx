/* ===========================================================
   File       : TripActions.jsx
   Folder     : components/trips
   Purpose    : Displays actions available for the generated trip.
   Author     : Muhammad Saad Kamal
   Project    : YĀTRĀ - AI Travel Planner
=========================================================== */

/* ===========================================================
   Imports
=========================================================== */

import { BookmarkPlus, Download } from "lucide-react";

/* ===========================================================
   Component : TripActions
=========================================================== */

function TripActions({
  onSave,
  onExport,
}) {
  return (
    <section className="mb-8 flex justify-center gap-4">

      <button
        onClick={onSave}
        className="flex items-center gap-2 rounded-xl bg-[#FF6B35] px-6 py-3 font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-[#e85d2c]"
      >
        <BookmarkPlus size={18} />
        Save Trip
      </button>

      <button
        onClick={onExport}
        className="flex items-center gap-2 rounded-xl border border-[#FF6B35] bg-white px-6 py-3 font-medium text-[#FF6B35] transition-all duration-300 hover:bg-orange-50"
      >
        <Download size={18} />
        Export PDF
      </button>

    </section>
  );
}

export default TripActions;