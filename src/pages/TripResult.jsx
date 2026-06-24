import { useLocation } from "react-router-dom";
import {
  MapPin,
  CalendarDays,
  Users,
  Heart,
  Wallet,
  Tag,
  BookmarkPlus,
} from "lucide-react";
import { saveTrip } from "../services/storage";
import { Download } from "lucide-react";
import { exportTripPDF } from "../services/pdfGenerator";

function TripResult() {
  const location = useLocation();

  const tripPlan = location.state?.tripPlan;
  console.log("Trip Plan:", tripPlan);
  console.log("Itinerary:", tripPlan?.itinerary);
  if (!tripPlan) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-bold">
          No trip data found.
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-5xl font-bold text-[#1A1A2E]">
            Your {tripPlan.destination} Adventure Awaits
          </h1>

          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            A personalized itinerary crafted around your interests, travel style, and budget.
          </p>
        </div>

        {/* Save Trip */}
        <div className="mb-8 flex justify-center gap-4">
          <button
            onClick={() => {
              saveTrip(tripPlan);
              alert("Trip saved successfully!");
            }}
            className="flex items-center gap-2 rounded-xl bg-[#FF6B35] px-6 py-3 font-medium text-white transition hover:scale-105"
          >
            <BookmarkPlus size={18} />
            Save Trip
          </button>
          {/* Download */}
          <button
            onClick={() => exportTripPDF(tripPlan)}
            className="flex items-center gap-2 rounded-xl border border-[#FF6B35] px-6 py-3 font-medium text-[#FF6B35] transition hover:bg-orange-50"
          >
            <Download size={18} />
            Export PDF
          </button>
        </div>

        {/* Summary Card */}

        <div className="mb-10 rounded-3xl bg-white p-8 shadow-lg">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">

            <div className="flex items-center gap-3">
              <MapPin className="text-[#FF6B35]" size={22} />
              <div>
                <p className="text-sm text-gray-500">
                  Destination
                </p>
                <h3 className="font-semibold">
                  {tripPlan.destination}
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <CalendarDays className="text-[#FF6B35]" size={22} />
              <div>
                <p className="text-sm text-gray-500">
                  Duration
                </p>
                <h3 className="font-semibold">
                  {tripPlan.days} Days
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Users className="text-[#FF6B35]" size={22} />
              <div>
                <p className="text-sm text-gray-500">
                  Travelers
                </p>
                <h3 className="font-semibold">
                  {tripPlan.travelers}
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Heart className="text-[#FF6B35]" size={22} />
              <div>
                <p className="text-sm text-gray-500">
                  Travel Style
                </p>
                <h3 className="font-semibold">
                  {tripPlan.travelStyle}
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Wallet className="text-[#FF6B35]" size={22} />
              <div>
                <p className="text-sm text-gray-500">
                  Budget
                </p>
                <h3 className="font-semibold">
                  ₹{tripPlan.totalBudget.toLocaleString()}
                </h3>
              </div>
            </div>

          </div>

          {/* Interests */}
          <div className="mt-8 border-t pt-6">
            <div className="mb-3 flex items-center gap-2">
              <Tag size={18} className="text-[#FF6B35]" />
              <h3 className="font-semibold text-[#1A1A2E]">
                Interests
              </h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {tripPlan.interests.map((interest) => (
                <span
                  key={interest}
                  className="rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-[#FF6B35]"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>


        <div className="rounded-3xl bg-white p-8 shadow-lg">
          <h2 className="mb-6 text-3xl font-bold">
            {tripPlan.destination}
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl bg-orange-50 p-5">
              <p className="text-sm text-gray-500">
                Hotel Budget
              </p>

              <h3 className="text-2xl font-bold text-[#FF6B35]">
                ₹
                {tripPlan.budgetBreakdown.hotelBudget.toLocaleString()}
              </h3>
            </div>

            <div className="rounded-2xl bg-orange-50 p-5">
              <p className="text-sm text-gray-500">
                Food Budget
              </p>

              <h3 className="text-2xl font-bold text-[#FF6B35]">
                ₹
                {tripPlan.budgetBreakdown.foodBudget.toLocaleString()}
              </h3>
            </div>

            <div className="rounded-2xl bg-orange-50 p-5">
              <p className="text-sm text-gray-500">
                Transport Budget
              </p>

              <h3 className="text-2xl font-bold text-[#FF6B35]">
                ₹
                {tripPlan.budgetBreakdown.transportBudget.toLocaleString()}
              </h3>
            </div>

            <div className="rounded-2xl bg-orange-50 p-5">
              <p className="text-sm text-gray-500">
                Activities Budget
              </p>

              <h3 className="text-2xl font-bold text-[#FF6B35]">
                ₹
                {tripPlan.budgetBreakdown.activityBudget.toLocaleString()}
              </h3>
            </div>

          </div>


        </div>
      </div>

      {/* Suggested Itinerary */}
      <div className="mt-10">
        <h2 className="mb-6 text-3xl font-bold text-[#1A1A2E]">
          Suggested Itinerary
        </h2>

        <div className="space-y-6">
          {tripPlan.itinerary?.map((dayPlan) => (
            <div
              key={dayPlan.day}
              className="rounded-3xl bg-white p-6 shadow-lg"
            >
              <h3 className="mb-4 text-2xl font-bold">
                {dayPlan.title}
              </h3>

              <ul className="space-y-2">
                {dayPlan.activities?.map(
                  (activity, index) => (
                    <li
                      key={index}
                      className="text-gray-600"
                    >
                      ✓ {activity}
                    </li>
                  )
                )}
              </ul>
            </div>
          ))}
        </div>
      </div>

    </div>

  );
}

export default TripResult;