import { useLocation } from "react-router-dom";

function SavedTripDetails() {
  const location = useLocation();

  const trip = location.state?.trip;

  if (!trip) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <h2 className="text-2xl font-bold">
          Trip not found
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="mb-12 text-center">
          <h1 className="mb-4 text-5xl font-bold text-[#1A1A2E]">
            {trip.destination}
          </h1>

          <p className="text-gray-600">
            Saved Trip Details
          </p>
        </div>

        <img
          src={trip.image}
          alt={trip.destination}
          className="mb-10 h-[400px] w-full rounded-3xl object-cover shadow-lg"
        />

        <div className="rounded-3xl bg-white p-8 shadow-lg">
          <h2 className="mb-6 text-3xl font-bold">
            Budget Breakdown
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <p>Hotel</p>
              <h3>
                ₹{trip.budgetBreakdown.hotelBudget.toLocaleString()}
              </h3>
            </div>

            <div>
              <p>Food</p>
              <h3>
                ₹{trip.budgetBreakdown.foodBudget.toLocaleString()}
              </h3>
            </div>

            <div>
              <p>Transport</p>
              <h3>
                ₹{trip.budgetBreakdown.transportBudget.toLocaleString()}
              </h3>
            </div>

            <div>
              <p>Activities</p>
              <h3>
                ₹{trip.budgetBreakdown.activityBudget.toLocaleString()}
              </h3>
            </div>
          </div>
        </div>

        <div className="mt-10 space-y-6">
          {trip.itinerary?.map((day) => (
            <div
              key={day.day}
              className="rounded-3xl bg-white p-6 shadow-lg"
            >
              <h3 className="mb-4 text-2xl font-bold">
                {day.title}
              </h3>

              <ul className="space-y-2">
                {day.activities?.map(
                  (activity, index) => (
                    <li key={index}>
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

export default SavedTripDetails;