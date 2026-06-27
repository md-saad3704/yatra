/* ===========================================================
   File       : ReviewStep.jsx
   Folder     : components/planner
   Purpose    : Displays the final trip review before generation.
   Author     : Muhammad Saad Kamal
   Project    : YĀTRĀ - AI Travel Planner
=========================================================== */

/* ===========================================================
   Imports
=========================================================== */

import { Card, Badge } from "../ui";
import PlannerCard from "./PlannerCard";
import StepNavigation from "./StepNavigation";

/* ===========================================================
   Component
=========================================================== */

function ReviewStep({
  tripData,
  onPrevious,
  onGenerate,
}) {
  return (
    <PlannerCard
      title="Review Your Trip"
      subtitle="Please verify your trip details before generating your itinerary."
    >
      {/* Trip Information */}

      <div className="grid gap-6 md:grid-cols-2">

        <div>
          <p className="text-sm text-gray-500">
            Destination
          </p>

          <h3 className="text-xl font-semibold">
            {tripData.destination}
          </h3>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            Budget
          </p>

          <h3 className="text-xl font-semibold">
            ₹{tripData.budget.toLocaleString()}
          </h3>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            Duration
          </p>

          <h3 className="text-xl font-semibold">
            {tripData.days} Days
          </h3>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            Travelers
          </p>

          <h3 className="text-xl font-semibold">
            {tripData.travelers}
          </h3>
        </div>

        <div className="md:col-span-2">
          <p className="text-sm text-gray-500">
            Travel Style
          </p>

          <h3 className="text-xl font-semibold">
            {tripData.travelStyle}
          </h3>
        </div>

      </div>

      {/* Interests */}

      <div className="mt-10">

        <p className="mb-4 text-sm text-gray-500">
          Interests
        </p>

        <div className="flex flex-wrap gap-3">

          {tripData.interests.map((interest) => (
            <Badge key={interest}>
              {interest}
            </Badge>
          ))}

        </div>

      </div>

      {/* Navigation */}

      <StepNavigation
        previousLabel="Previous"
        nextLabel="Generate Trip"
        onPrevious={onPrevious}
        onNext={onGenerate}
      />

    </PlannerCard>
  );
}

export default ReviewStep;