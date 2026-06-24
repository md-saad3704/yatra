import { getSavedTrips } from "./storage";

export function getAnalytics() {
  const trips = getSavedTrips();

  if (trips.length === 0) {
    return {
      totalTrips: 0,
      averageBudget: 0,
      topDestination: "-",
      topStyle: "-",
      destinationData: [],
    };
  }

  const totalTrips = trips.length;

  const averageBudget = Math.round(
    trips.reduce(
      (sum, trip) => sum + (trip.totalBudget || 0),
      0
    ) / totalTrips
  );

  const destinationCount = {};
  const styleCount = {};

  trips.forEach((trip) => {
    destinationCount[trip.destination] =
      (destinationCount[trip.destination] || 0) + 1;

    styleCount[trip.travelStyle] =
      (styleCount[trip.travelStyle] || 0) + 1;
  });

  const topDestination =
    Object.entries(destinationCount).sort(
      (a, b) => b[1] - a[1]
    )[0][0];

  const topStyle =
    Object.entries(styleCount).sort(
      (a, b) => b[1] - a[1]
    )[0][0];

  const destinationData = Object.entries(
    destinationCount
  ).map(([name, trips]) => ({
    name,
    trips,
  }));

  return {
    totalTrips,
    averageBudget,
    topDestination,
    topStyle,
    destinationData,
  };
}