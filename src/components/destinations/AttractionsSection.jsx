import { Landmark } from "lucide-react";

function AttractionsSection({
  attractions,
}) {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20">

      <h2 className="mb-10 text-4xl font-bold text-[#1A1A2E]">
        Top Attractions
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        {attractions.map((place) => (
          <div
            key={place}
            className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-xl"
          >
            <Landmark
              className="mb-5 text-[#FF6B35]"
              size={34}
            />

            <h3 className="text-xl font-semibold">
              {place}
            </h3>

          </div>
        ))}

      </div>

    </section>
  );
}

export default AttractionsSection;