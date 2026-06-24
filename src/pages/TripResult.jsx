import { useLocation } from "react-router-dom";

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
        <h1 className="mb-8 text-5xl font-bold text-[#1A1A2E]">
          Your Trip Plan
        </h1>

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