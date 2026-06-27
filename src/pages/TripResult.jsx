/* ===========================================================
   File       : TripResult.jsx
   Folder     : pages
   Purpose    : Displays the generated travel itinerary.
   Author     : Muhammad Saad Kamal
   Project    : YĀTRĀ - AI Travel Planner
=========================================================== */

/* ===========================================================
   Imports
=========================================================== */

import { useLocation } from "react-router-dom";

import {
  TripHero,
  TripActions,
  TripSummary,
  BudgetBreakdown,
  ItinerarySection,
} from "../components/trips";

import { saveTrip } from "../services/storage";
import { exportTripPDF } from "../services/pdfGenerator";
import { showSuccess } from "../services/toastService";

/* ===========================================================
   Component : TripResult
=========================================================== */

function TripResult() {
  /* ===========================================================
     Get Trip Data
  =========================================================== */

  const location = useLocation();
  const tripPlan = location.state?.tripPlan;

  /* ===========================================================
     Guard Clause
  =========================================================== */

  if (!tripPlan) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <h2 className="text-2xl font-bold">
          No trip data found.
        </h2>
      </div>
    );
  }

  /* ===========================================================
     Event Handlers
  =========================================================== */

  const handleSaveTrip = () => {
    saveTrip(tripPlan);
    showSuccess(
      `${tripPlan.destination} trip saved successfully!`
    );
  };

  const handleExportPDF = () => {
  exportTripPDF(tripPlan);

  showSuccess("Trip PDF exported successfully. 📄");
};

  /* ===========================================================
     Render
  =========================================================== */

  return (
    <div className="min-h-screen bg-[#FAFAF8]">

      <div className="mx-auto max-w-7xl px-6 py-20">

        <TripHero
          destination={tripPlan.destination}
        />

        <TripActions
          onSave={handleSaveTrip}
          onExport={handleExportPDF}
        />

        <TripSummary trip={tripPlan} />

        <BudgetBreakdown
          budget={tripPlan.budgetBreakdown}
        />

        <ItinerarySection
          itinerary={tripPlan.itinerary}
        />

      </div>

    </div>
  );
}

export default TripResult;