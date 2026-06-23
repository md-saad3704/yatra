function BudgetSlider({
  tripData,
  setTripData,
}) {
  const getBudgetCategory = (budget) => {
    if (budget < 25000) return "Budget Traveler";
    if (budget < 60000) return "Comfort Traveler";
    return "Luxury Traveler";
  };

  return (
    <div>
      <div className="mb-8">
        <h3 className="mb-3 text-4xl font-bold text-[#1A1A2E]">
          ₹{tripData.budget.toLocaleString()}
        </h3>

        <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-[#FF6B35]">
          {getBudgetCategory(tripData.budget)}
        </span>
      </div>

      <input
        type="range"
        min="10000"
        max="100000"
        step="5000"
        value={tripData.budget}
        onChange={(e) =>
          setTripData({
            ...tripData,
            budget: Number(e.target.value),
          })
        }
        className="w-full accent-[#FF6B35]"
      />

      <div className="mt-3 flex justify-between text-sm text-gray-500">
        <span>₹10K</span>
        <span>₹100K</span>
      </div>
    </div>
  );
}

export default BudgetSlider;