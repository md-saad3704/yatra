import { useState } from "react";

import StepIndicator from "../components/planner/StepIndicator";
import PlannerForm from "../components/planner/PlannerForm";

function TripPlanner() {
  const [currentStep, setCurrentStep] = useState(1);

  const [tripData, setTripData] = useState({
    destination: "",
    budget: 25000,
    days: 3,
    travelers: 2,
    travelStyle: "",
    interests: [],
  });

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 text-center">
          <h1 className="font-display text-5xl font-bold text-[#1A1A2E]">
            Plan Your Perfect Journey
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            Answer a few questions and let
            YĀTRĀ build your trip.
          </p>
        </div>

        <StepIndicator currentStep={currentStep} />

        <PlannerForm
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          tripData={tripData}
          setTripData={setTripData}
        />
      </div>
    </div>
  );
}

export default TripPlanner;