import { itineraryTemplates } from "../data/itineraryTemplates";
import { featuredDestinations } from "../data/featuredDestinations";

export function generateTripPlan(tripData) {
    console.log("Trip Data:", tripData);
    const {
        budget,
        days,
        destination,
        travelStyle,
        interests,
        travelers,
    } = tripData;

    const hotelBudget = Math.round(budget * 0.4);
    const foodBudget = Math.round(budget * 0.2);
    const transportBudget = Math.round(budget * 0.15);
    const activityBudget = Math.round(budget * 0.25);

    const destinationTemplate =
        itineraryTemplates[destination] || [];

    const itinerary = [];

    for (let day = 1; day <= days; day++) {
        const templateDay =
            destinationTemplate[
            Math.min(day - 1, destinationTemplate.length - 1)
            ];

        itinerary.push({
            day,
            title: `Day ${day} in ${destination}`,
            activities:
                templateDay || [
                    "Explore Local Attractions",
                    "Try Local Food",
                    "Free Time",
                ],
        });
    }

    const destinationData =
        featuredDestinations.find(
            (item) => item.name === destination
        );

    return {
        destination,
        image: destinationData?.image || "",

        days,
        travelers,
        travelStyle,
        interests,
        totalBudget: budget,

        budgetBreakdown: {
            hotelBudget,
            foodBudget,
            transportBudget,
            activityBudget,
        },

        itinerary,
    };
}