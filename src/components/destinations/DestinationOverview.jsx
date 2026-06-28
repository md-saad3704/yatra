/* ===========================================================
   File       : DestinationOverview.jsx
   Folder     : components/destination
   Purpose    : Destination overview section.
   Author     : Muhammad Saad Kamal
   Project    : YĀTRĀ - AI Travel Planner
=========================================================== */

import {
  CalendarDays,
  Clock3,
  IndianRupee,
} from "lucide-react";

function DestinationOverview({
  destination,
}) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">

      <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">

        <div>

          <h2 className="mb-6 text-4xl font-bold text-[#1A1A2E]">
            About {destination.name}
          </h2>

          <p className="leading-8 text-gray-600">
            {destination.description}
          </p>

        </div>

        <div className="rounded-3xl bg-white p-8 shadow-lg">

          <h3 className="mb-8 text-2xl font-semibold">
            Trip Information
          </h3>

          <div className="space-y-6">

            <div className="flex items-center gap-4">
              <CalendarDays
                className="text-[#FF6B35]"
              />

              <div>

                <p className="text-sm text-gray-500">
                  Best Time
                </p>

                <p className="font-medium">
                  {destination.bestTime}
                </p>

              </div>

            </div>

            <div className="flex items-center gap-4">
              <Clock3
                className="text-[#FF6B35]"
              />

              <div>

                <p className="text-sm text-gray-500">
                  Duration
                </p>

                <p className="font-medium">
                  {destination.duration}
                </p>

              </div>

            </div>

            <div className="flex items-center gap-4">
              <IndianRupee
                className="text-[#FF6B35]"
              />

              <div>

                <p className="text-sm text-gray-500">
                  Budget
                </p>

                <p className="font-medium">
                  {destination.budget}
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default DestinationOverview;