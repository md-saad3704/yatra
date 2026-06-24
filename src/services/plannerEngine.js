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

  const itinerary = [];

  for (let day = 1; day <= days; day++) {
    itinerary.push({
      day,
      title: `Day ${day} in ${destination}`,
      activities: [
        "Explore local attractions",
        `Enjoy ${interests[0] || "popular"} experiences`,
        "Try local food",
      ],
    });
  }

  return {
    destination,
    days,
    travelers,
    travelStyle,
    interests,

    budgetBreakdown: {
      hotelBudget,
      foodBudget,
      transportBudget,
      activityBudget,
    },

    itinerary,
  };
}