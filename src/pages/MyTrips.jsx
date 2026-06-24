import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CalendarDays,
  Users,
  Trash2,
  MapPin,
  Wallet,
  Heart
} from "lucide-react";

import {
  getSavedTrips,
  deleteTrip,
} from "../services/storage";

function MyTrips() {
  const [trips, setTrips] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedTrips = getSavedTrips();

    console.log(savedTrips);

    setTrips(savedTrips);
  }, []);

  const handleDelete = (id) => {
    deleteTrip(id);
    setTrips(getSavedTrips());
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="mb-12 text-center">
          <h1 className="mb-4 text-5xl font-bold text-[#1A1A2E]">
            My Trips
          </h1>

          <p className="text-lg text-gray-600">
            View and manage your saved adventures.
          </p>
        </div>

        {trips.length === 0 ? (
          <div className="rounded-3xl bg-white p-12 text-center shadow-lg">
            <h2 className="mb-3 text-2xl font-bold">
              No Saved Trips Yet
            </h2>

            <p className="text-gray-500">
              Generate and save a trip to see it here.
            </p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {trips.map((trip) => (
              <div
                key={trip.id}
                className="overflow-hidden rounded-3xl bg-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
              >
                <img
                  src={trip.image}
                  alt={trip.destination}
                  className="h-56 w-full object-cover"
                />
                <div className="p-6">
                  <div className="mb-4 flex items-center gap-2">
                    <MapPin
                      size={18}
                      className="text-[#FF6B35]"
                    />

                    <h2 className="text-2xl font-bold">
                      {trip.destination}
                    </h2>
                  </div>
                  <div className="space-y-3">

                    <div className="flex items-center gap-2 text-gray-600">
                      <CalendarDays size={16} />
                      {trip.days} Days
                    </div>

                    <div className="flex items-center gap-2 text-gray-600">
                      <Users size={16} />
                      {trip.travelers} Travelers
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Wallet size={16} />
                      ₹{trip.totalBudget?.toLocaleString()}
                    </div>

                    <div className="flex items-center gap-2 text-gray-600">
                      <Heart size={16} />
                      {trip.travelStyle}
                      <div className="text-sm text-gray-400">
                        Saved on{" "}
                        {new Date(
                          trip.createdAt
                        ).toLocaleDateString()}
                      </div>
                    </div>

                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {trip.interests?.map(
                      (interest) => (
                        <span
                          key={interest}
                          className="rounded-full bg-orange-100 px-3 py-1 text-sm text-[#FF6B35]"
                        >
                          {interest}
                        </span>
                      )
                    )}
                  </div>


                  <button
                    onClick={() =>
                      navigate("/saved-trip", {
                        state: {
                          trip,
                        },
                      })
                    }
                    className="mt-6 w-full rounded-xl bg-[#FF6B35] px-4 py-3 font-medium text-white transition hover:bg-[#e85d2c]"
                  >
                    View Trip
                  </button>
                  <button
                    onClick={() =>
                      handleDelete(trip.id)
                    }
                    className="mt-6 flex items-center gap-2 text-red-500 transition hover:text-red-600"
                  >
                    <Trash2 size={16} />
                    Delete Trip
                  </button>
                </div>

              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default MyTrips;