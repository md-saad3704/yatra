import { plannerDestinations } from "../../data/plannerDestinations";
import TripDetailsForm from "./TripDetailsForm";
import InterestSelector from "./InterestSelector";
import { useNavigate } from "react-router-dom";
import { generateTripPlan } from "../../services/plannerEngine";

import BudgetSlider from "./BudgetSlider";

function PlannerForm({
    currentStep,
    setCurrentStep,
    tripData,
    setTripData,
}) {
    const navigate = useNavigate();

    if (currentStep === 2) {
        return (
            <div className="rounded-3xl bg-white p-10 shadow-lg">
                <h2 className="mb-4 text-3xl font-bold text-[#1A1A2E]">
                    What's your trip budget?
                </h2>

                <p className="mb-8 text-gray-600">
                    Choose a budget range for your trip.
                </p>

                <BudgetSlider
                    tripData={tripData}
                    setTripData={setTripData}
                />

                <div className="flex justify-between">
                    <button
                        onClick={() => setCurrentStep(1)}
                        className="rounded-xl border border-gray-300 px-8 py-3"
                    >
                        Previous
                    </button>

                    <button
                        onClick={() => setCurrentStep(3)}
                        className="rounded-xl bg-[#FF6B35] px-8 py-3 text-white"
                    >
                        Next
                    </button>
                </div>
            </div>
        );
    }


    if (currentStep === 3) {
        return (
            <div className="rounded-3xl bg-white p-10 shadow-lg">
                <h2 className="mb-4 text-3xl font-bold text-[#1A1A2E]">
                    Tell us about your trip
                </h2>

                <TripDetailsForm
                    tripData={tripData}
                    setTripData={setTripData}
                />

                <div className="mt-10 flex justify-between">
                    <button
                        onClick={() => setCurrentStep(2)}
                        className="rounded-xl border border-gray-300 px-8 py-3"
                    >
                        Previous
                    </button>

                    <button
                        onClick={() => setCurrentStep(4)}
                        className="rounded-xl bg-[#FF6B35] px-8 py-3 text-white"
                    >
                        Next
                    </button>
                </div>
            </div>
        );
    }

    if (currentStep === 4) {
        return (
            <div className="rounded-3xl bg-white p-10 shadow-lg">
                <h2 className="mb-4 text-3xl font-bold text-[#1A1A2E]">
                    What interests you?
                </h2>

                <p className="mb-8 text-gray-600">
                    Select all that apply.
                </p>

                <InterestSelector
                    tripData={tripData}
                    setTripData={setTripData}
                />

                <div className="mt-10 flex justify-between">
                    <button
                        onClick={() => setCurrentStep(3)}
                        className="rounded-xl border border-gray-300 px-8 py-3"
                    >
                        Previous
                    </button>

                    <button
                        onClick={() => setCurrentStep(5)}
                        className="rounded-xl bg-[#FF6B35] px-8 py-3 text-white"
                    >
                        Review
                    </button>
                </div>
            </div>
        );
    }

    if (currentStep === 5) {
        return (
            <div className="rounded-3xl bg-white p-10 shadow-lg">
                <h2 className="mb-8 text-3xl font-bold text-[#1A1A2E]">
                    Review Your Trip
                </h2>

                <div className="space-y-5">
                    <div className="flex justify-between border-b pb-3">
                        <span className="font-medium">
                            Destination
                        </span>
                        <span>{tripData.destination}</span>
                    </div>

                    <div className="flex justify-between border-b pb-3">
                        <span className="font-medium">
                            Budget
                        </span>
                        <span>
                            ₹{tripData.budget.toLocaleString()}
                        </span>
                    </div>

                    <div className="flex justify-between border-b pb-3">
                        <span className="font-medium">
                            Duration
                        </span>
                        <span>
                            {tripData.days} Days
                        </span>
                    </div>

                    <div className="flex justify-between border-b pb-3">
                        <span className="font-medium">
                            Travelers
                        </span>
                        <span>
                            {tripData.travelers}
                        </span>
                    </div>

                    <div className="flex justify-between border-b pb-3">
                        <span className="font-medium">
                            Travel Style
                        </span>
                        <span>
                            {tripData.travelStyle}
                        </span>
                    </div>

                    <div>
                        <p className="mb-3 font-medium">
                            Interests
                        </p>

                        <div className="flex flex-wrap gap-3">
                            {tripData.interests.map(
                                (interest) => (
                                    <span
                                        key={interest}
                                        className="rounded-full bg-orange-100 px-4 py-2 text-sm text-[#FF6B35]"
                                    >
                                        {interest}
                                    </span>
                                )
                            )}
                        </div>
                    </div>
                </div>

                <div className="mt-10 flex justify-between">
                    <button
                        onClick={() => setCurrentStep(4)}
                        className="rounded-xl border border-gray-300 px-8 py-3"
                    >
                        Previous
                    </button>

                    <button
                        onClick={() => {
                            const tripPlan = generateTripPlan(tripData);

                            console.log("Generated Trip:", tripPlan);

                            navigate("/trip/result", {
                                state: {
                                    tripPlan,
                                },
                            });
                        }}
                        className="rounded-xl bg-[#FF6B35] px-8 py-3 font-medium text-white"
                    >
                        Generate Trip
                    </button>
                </div>
            </div>
        );
    }
    return (
        <div className="rounded-3xl bg-white p-10 shadow-lg">
            <h2 className="mb-2 text-3xl font-bold text-[#1A1A2E]">
                Where do you want to go?
            </h2>

            <p className="mb-8 text-gray-600">
                Choose a destination to begin planning.
            </p>

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
                <button
                    disabled={!tripData.destination}
                    onClick={() => setCurrentStep(2)}
                    className="rounded-xl bg-[#FF6B35] px-8 py-3 font-medium text-white disabled:cursor-not-allowed disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default PlannerForm;