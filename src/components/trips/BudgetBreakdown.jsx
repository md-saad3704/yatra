/* ===========================================================
   File       : BudgetBreakdown.jsx
   Folder     : components/trips
   Purpose    : Displays the budget allocation for the trip.
   Author     : Muhammad Saad Kamal
   Project    : YĀTRĀ - AI Travel Planner
=========================================================== */

/* ===========================================================
   Component : BudgetBreakdown
=========================================================== */

function BudgetBreakdown({ budget }) {
  return (
    <section className="mb-10 rounded-3xl bg-white p-8 shadow-lg">

      {/* ===========================================================
          Section Heading
      =========================================================== */}

      <h2 className="mb-6 text-3xl font-bold text-[#1A1A2E]">
        Budget Breakdown
      </h2>

      {/* ===========================================================
          Budget Cards
      =========================================================== */}

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

        <div className="rounded-2xl bg-orange-50 p-5">
          <p className="text-sm text-gray-500">
            Hotel Budget
          </p>

          <h3 className="mt-2 text-2xl font-bold text-[#FF6B35]">
            ₹{budget.hotelBudget.toLocaleString()}
          </h3>
        </div>

        <div className="rounded-2xl bg-orange-50 p-5">
          <p className="text-sm text-gray-500">
            Food Budget
          </p>

          <h3 className="mt-2 text-2xl font-bold text-[#FF6B35]">
            ₹{budget.foodBudget.toLocaleString()}
          </h3>
        </div>

        <div className="rounded-2xl bg-orange-50 p-5">
          <p className="text-sm text-gray-500">
            Transport Budget
          </p>

          <h3 className="mt-2 text-2xl font-bold text-[#FF6B35]">
            ₹{budget.transportBudget.toLocaleString()}
          </h3>
        </div>

        <div className="rounded-2xl bg-orange-50 p-5">
          <p className="text-sm text-gray-500">
            Activities Budget
          </p>

          <h3 className="mt-2 text-2xl font-bold text-[#FF6B35]">
            ₹{budget.activityBudget.toLocaleString()}
          </h3>
        </div>

      </div>

    </section>
  );
}

export default BudgetBreakdown;