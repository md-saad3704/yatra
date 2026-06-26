/* ===========================================================
   File       : MyTrips.jsx
   Folder     : pages
   Purpose    : Displays all saved trips.
   Author     : Muhammad Saad Kamal
   Project    : YĀTRĀ - AI Travel Planner
=========================================================== */

/* ===========================================================
   React Imports
=========================================================== */

import { useEffect, useState } from "react";

/* ===========================================================
   Third Party Imports
=========================================================== */


/* ===========================================================
   Components
=========================================================== */

import {
  MyTripsHeader,
  SavedTripCard,
  EmptyTrips,
  TripFilters,
  FilterSummary,
} from "../components/trips";


/* ===========================================================
   Services
=========================================================== */

import {
  getSavedTrips,
  deleteTrip,
} from "../services/storage";

/* ===========================================================
   Component
=========================================================== */

function MyTrips() {
  /* ===========================================================
     State
  =========================================================== */

  const [trips, setTrips] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [styleFilter, setStyleFilter] =
    useState("All");
  const [sortBy, setSortBy] =
    useState("Newest");

  /* ===========================================================
     Effects
  =========================================================== */

  useEffect(() => {
    setTrips(getSavedTrips());
  }, []);

  /* ===========================================================
     Event Handlers
  =========================================================== */

  const handleDelete = (id) => {
    deleteTrip(id);
    setTrips(getSavedTrips());
  };

  /* ===========================================================
     Filter Trips
  =========================================================== */

  const filteredTrips = [...trips]
    .filter((trip) =>
      trip.destination
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    )
    .filter((trip) =>
      styleFilter === "All"
        ? true
        : trip.travelStyle === styleFilter
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "Oldest":
          return (
            new Date(a.createdAt) -
            new Date(b.createdAt)
          );

        case "Highest Budget":
          return (
            b.totalBudget -
            a.totalBudget
          );

        case "Lowest Budget":
          return (
            a.totalBudget -
            b.totalBudget
          );

        default:
          return (
            new Date(b.createdAt) -
            new Date(a.createdAt)
          );
      }
    });

  /* ===========================================================
     Render
  =========================================================== */

  return (
    <div className="min-h-screen bg-[#FAFAF8]">

      <div className="mx-auto max-w-7xl px-6 py-20">

        <MyTripsHeader />

        {/* ===========================================================
            Filters
        =========================================================== */}

        <TripFilters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          styleFilter={styleFilter}
          setStyleFilter={setStyleFilter}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />

        {/* ===========================================================
            Results Summary
        =========================================================== */}

        <FilterSummary
          totalTrips={filteredTrips.length}
          onClear={() => {
            setSearchTerm("");
            setStyleFilter("All");
            setSortBy("Newest");
          }}
        />

        {/* ===========================================================
            Trips
        =========================================================== */}

        {trips.length === 0 ? (
          <EmptyTrips />
        ) : (
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {filteredTrips.map((trip) => (
              <SavedTripCard
                key={trip.id}
                trip={trip}
                onDelete={handleDelete}
              />
            ))}

          </div>
        )}

      </div>

    </div>
  );
}

export default MyTrips;