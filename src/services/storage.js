const STORAGE_KEY = "yatra_saved_trips";

export function getSavedTrips() {
  const trips = localStorage.getItem(STORAGE_KEY);

  return trips ? JSON.parse(trips) : [];
}

export function saveTrip(trip) {
  const trips = getSavedTrips();

  trips.push({
    id: Date.now(),
    createdAt: new Date().toISOString(),
    ...trip,
  });

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(trips)
  );
}


export function deleteTrip(id) {
  const trips = getSavedTrips().filter(
    (trip) => trip.id !== id
  );

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(trips)
  );
}