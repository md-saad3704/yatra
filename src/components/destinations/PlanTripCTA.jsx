/* ===========================================================
   File       : PlanTripCTA.jsx
   Folder     : components/destination
=========================================================== */

import { useNavigate } from "react-router-dom";

function PlanTripCTA({
  destination,
}) {

  const navigate = useNavigate();

  return (
    <section className="mx-auto max-w-7xl px-6 pb-24">

      <div className="rounded-[40px] bg-[#1A1A2E] p-16 text-center text-white">

        <h2 className="mb-5 text-5xl font-bold">
          Ready to Visit {destination.name}?
        </h2>

        <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-300">
          Let YĀTRĀ create a personalized itinerary
          based on your budget, travel style,
          interests, and duration.
        </p>

        <button
          onClick={() =>
            navigate("/plan", {
              state: {
                destination:
                  destination.name,
              },
            })
          }
          className="rounded-xl bg-[#FF6B35] px-8 py-4 text-lg font-semibold text-white transition hover:bg-[#e85d2c]"
        >
          Plan My Trip
        </button>

      </div>

    </section>
  );
}

export default PlanTripCTA;