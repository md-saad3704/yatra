/* ===========================================================
   File       : TripSummary.jsx
   Folder     : components/trips
   Purpose    : Displays summary information about the trip.
   Author     : Muhammad Saad Kamal
   Project    : YĀTRĀ - AI Travel Planner
=========================================================== */

/* ===========================================================
   Imports
=========================================================== */

import {
  MapPin,
  CalendarDays,
  Users,
  Heart,
  Wallet,
  Tag,
} from "lucide-react";

/* ===========================================================
   Component : TripSummary
=========================================================== */

function TripSummary({ trip }) {
  return (
    <section className="mb-10 rounded-3xl bg-white p-8 shadow-lg">

      {/* ===========================================================
          Summary Details
      =========================================================== */}

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">

        <div className="flex items-center gap-3">
          <MapPin
            size={22}
            className="text-[#FF6B35]"
          />

          <div>
            <p className="text-sm text-gray-500">
              Destination
            </p>

            <h3 className="font-semibold">
              {trip.destination}
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <CalendarDays
            size={22}
            className="text-[#FF6B35]"
          />

          <div>
            <p className="text-sm text-gray-500">
              Duration
            </p>

            <h3 className="font-semibold">
              {trip.days} Days
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Users
            size={22}
            className="text-[#FF6B35]"
          />

          <div>
            <p className="text-sm text-gray-500">
              Travelers
            </p>

            <h3 className="font-semibold">
              {trip.travelers}
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Heart
            size={22}
            className="text-[#FF6B35]"
          />

          <div>
            <p className="text-sm text-gray-500">
              Travel Style
            </p>

            <h3 className="font-semibold">
              {trip.travelStyle}
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Wallet
            size={22}
            className="text-[#FF6B35]"
          />

          <div>
            <p className="text-sm text-gray-500">
              Total Budget
            </p>

            <h3 className="font-semibold">
              ₹{trip.totalBudget.toLocaleString()}
            </h3>
          </div>
        </div>

      </div>

      {/* ===========================================================
          Interest Tags
      =========================================================== */}

      <div className="mt-8 border-t border-gray-200 pt-6">

        <div className="mb-3 flex items-center gap-2">

          <Tag
            size={18}
            className="text-[#FF6B35]"
          />

          <h3 className="font-semibold text-[#1A1A2E]">
            Interests
          </h3>

        </div>

        <div className="flex flex-wrap gap-3">

          {trip.interests?.map((interest) => (
            <span
              key={interest}
              className="rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-[#FF6B35]"
            >
              {interest}
            </span>
          ))}

        </div>

      </div>

    </section>
  );
}

export default TripSummary;