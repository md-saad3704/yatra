import { UtensilsCrossed } from "lucide-react";

function FoodSection({ foods }) {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20">

      <h2 className="mb-10 flex items-center gap-3 text-4xl font-bold text-[#1A1A2E]">
        <UtensilsCrossed className="text-[#FF6B35]" />
        Must Try Food
      </h2>

      <div className="flex flex-wrap gap-4">

        {foods.map((food) => (
          <span
            key={food}
            className="rounded-full bg-orange-100 px-6 py-3 font-medium text-[#FF6B35]"
          >
            {food}
          </span>
        ))}

      </div>

    </section>
  );
}

export default FoodSection;