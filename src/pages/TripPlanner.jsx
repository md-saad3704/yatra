import { useState } from "react";

import StepIndicator from "../components/planner/StepIndicator";
import PlannerForm from "../components/planner/PlannerForm";
import { PageHeader } from "../components/ui";
import { PageTransition } from "../components/ui";

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
    <PageTransition>
      <div className="min-h-screen bg-[#FAFAF8]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <PageHeader
            title="Plan Your Perfect Journey"
            subtitle="Answer a few questions and let YĀTRĀ build your trip."
          />

          <StepIndicator currentStep={currentStep} />

          <PlannerForm
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            tripData={tripData}
            setTripData={setTripData}
          />
        </div>
      </div>
    </PageTransition>
  );
}

export default TripPlanner;