/* ===========================================================
   File       : TripHero.jsx
   Folder     : components/trips
   Purpose    : Displays the hero section for the generated trip.
   Author     : Muhammad Saad Kamal
   Project    : YĀTRĀ - AI Travel Planner
=========================================================== */

/* ===========================================================
   Component : TripHero
=========================================================== */

function TripHero({ destination }) {
  return (
    <section className="mb-12 text-center">
      <h1 className="mb-4 text-5xl font-bold text-[#1A1A2E]">
        Your {destination} Adventure Awaits
      </h1>

      <p className="mx-auto max-w-2xl text-lg text-gray-600">
        A personalized itinerary crafted around your
        interests, travel style, and budget.
      </p>
    </section>
  );
}

export default TripHero;