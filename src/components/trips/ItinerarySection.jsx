/* ===========================================================
   File       : ItinerarySection.jsx
   Folder     : components/trips
   Purpose    : Displays the complete itinerary for a trip.
   Author     : Muhammad Saad Kamal
   Project    : YĀTRĀ - AI Travel Planner
=========================================================== */

/* ===========================================================
   Component : ItinerarySection
=========================================================== */

function ItinerarySection({ itinerary }) {
  return (
    <section className="mb-10">

      {/* ===========================================================
          Section Heading
      =========================================================== */}

      <h2 className="mb-6 text-3xl font-bold text-[#1A1A2E]">
        Suggested Itinerary
      </h2>

      {/* ===========================================================
          Daily Itinerary
      =========================================================== */}

      <div className="space-y-6">

        {itinerary?.map((day) => (
          <div
            key={day.day}
            className="rounded-3xl bg-white p-6 shadow-lg"
          >

            <h3 className="mb-4 text-2xl font-bold">
              {day.title}
            </h3>

            <ul className="space-y-2">

              {day.activities?.map((activity, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-gray-600"
                >
                  <span className="text-[#FF6B35]">✓</span>
                  {activity}
                </li>
              ))}

            </ul>

          </div>
        ))}

      </div>

    </section>
  );
}

export default ItinerarySection;