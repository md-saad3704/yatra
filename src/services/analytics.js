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

  // Travel Style Data

  const travelStyleData = Object.entries(styleCount).map(
    ([name, value]) => ({
      name,
      value,
    })
  );

  //Budget Distribution

  const budgetRanges = {
    "<10K": 0,
    "10K-25K": 0,
    "25K-50K": 0,
    "50K+": 0,
  };

  trips.forEach((trip) => {
    const budget = trip.totalBudget;

    if (budget < 10000)
      budgetRanges["<10K"]++;

    else if (budget < 25000)
      budgetRanges["10K-25K"]++;

    else if (budget < 50000)
      budgetRanges["25K-50K"]++;

    else budgetRanges["50K+"]++;
  });

  const budgetData = Object.entries(
    budgetRanges
  ).map(([range, trips]) => ({
    range,
    trips,
  }));

  // Unterest Trends

  const interestCount = {};

  trips.forEach((trip) => {
    trip.interests.forEach((interest) => {
      interestCount[interest] =
        (interestCount[interest] || 0) + 1;
    });
  });

  const topInterests = Object.entries(
    interestCount
  )
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  return {
    totalTrips,
    averageBudget,
    topDestination,
    topStyle,

    destinationData,
    travelStyleData,
    budgetData,
    topInterests,
  };
}