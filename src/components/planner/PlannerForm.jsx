import { plannerDestinations } from "../../data/plannerDestinations";
import TripDetailsForm from "./TripDetailsForm";
import InterestSelector from "./InterestSelector";
import { useNavigate } from "react-router-dom";
import { generateTripPlan } from "../../services/plannerEngine";

import StepNavigation from "./StepNavigation";
import { Button } from "../ui";
import BudgetSlider from "./BudgetSlider";
import PlannerCard from "./PlannerCard";
import ReviewStep from "./ReviewStep";
import { showSuccess } from "../../services/toastService";

function PlannerForm({
    currentStep,
    setCurrentStep,
    tripData,
    setTripData,
}) {
    const navigate = useNavigate();

    if (currentStep === 2) {
        return (
            <PlannerCard
                title="What's your trip budget?"
                subtitle="Choose a budget range for your trip."
            >

                <BudgetSlider
                    tripData={tripData}
                    setTripData={setTripData}
                />

                <StepNavigation
                    onPrevious={() => setCurrentStep(1)}
                    onNext={() => setCurrentStep(3)}
                />

            </PlannerCard>
        );
    }


    if (currentStep === 3) {
        return (
            <PlannerCard
                title="Tell us about your trip"
            >
                <h2 className="mb-4 text-3xl font-bold text-[#1A1A2E]">
                    Tell us about your trip
                </h2>

                <TripDetailsForm
                    tripData={tripData}
                    setTripData={setTripData}
                />

                <StepNavigation
                    onPrevious={() => setCurrentStep(2)}
                    onNext={() => setCurrentStep(4)}
                />
            </PlannerCard>
        );
    }

    if (currentStep === 4) {
        return (
            <PlannerCard
                title="What interests you?"
                subtitle="Select all that apply."
            >

                <InterestSelector
                    tripData={tripData}
                    setTripData={setTripData}
                />

                <StepNavigation
                    onPrevious={() => setCurrentStep(3)}
                    onNext={() => setCurrentStep(5)}
                    nextLabel="Review"
                />
            </PlannerCard>
        );
    }

    if (currentStep === 5) {
        return (
            <ReviewStep
                tripData={tripData}
                onPrevious={() => setCurrentStep(4)}
                onGenerate={() => {
                    const tripPlan = generateTripPlan(tripData);

                    showSuccess(
                        `${tripPlan.destination} itinerary is ready!`
                    );

                    navigate("/trip/result", {
                        state: {
                            tripPlan,
                        },
                    });
                }}
            />
        );
    }
    return (
        <PlannerCard
            title="Where do you want to go?"
            subtitle="Choose a destination to begin planning."
        >

            <input
                type="text"
                placeholder="Search destination..."
                value={tripData.destination}
                onChange={(e) =>
                    setTripData({
                        ...tripData,
                        destination: e.target.value,
                    })
                }
                className="mb-8 w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none focus:border-[#FF6B35]"
            />

            <div className="grid gap-4 md:grid-cols-3">
                {plannerDestinations.map((destination) => (
                    <button
                        key={destination.id}
                        onClick={() =>
                            setTripData({
                                ...tripData,
                                destination: destination.name,
                            })
                        }
                        className={`rounded-2xl border p-5 text-left transition-all ${tripData.destination === destination.name
                            ? "border-[#FF6B35] bg-orange-50"
                            : "border-gray-200 hover:border-[#FF6B35]"
                            }`}
                    >
                        <div className="mb-2 text-3xl">
                            {destination.emoji}
                        </div>

                        <div className="font-semibold">
                            {destination.name}
                        </div>
                    </button>
                ))}
            </div>

            <div className="mt-10 flex justify-end">
                <Button
                    disabled={!tripData.destination}
                    onClick={() => setCurrentStep(2)}
                >
                    Next
                </Button>
            </div>
        </PlannerCard>
    );
}

export default PlannerForm;