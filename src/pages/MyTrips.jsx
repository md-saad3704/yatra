import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CalendarDays,
  Users,
  Trash2,
  MapPin,
  Wallet,
  Heart,
  Search,
  Filter,
  ArrowUpDown,
  X
} from "lucide-react";

import {
  getSavedTrips,
  deleteTrip,
} from "../services/storage";

function MyTrips() {
  const [trips, setTrips] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [styleFilter, setStyleFilter] = useState("All");
  const [sortBy, setSortBy] = useState("Newest");
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


  const filteredTrips = [...trips]
    .filter((trip) =>
      trip.destination
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    )
    .filter((trip) =>
      styleFilter === "All"
        ? true
        : trip.travelStyle === styleFilter
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "Oldest":
          return (
            new Date(a.createdAt) -
            new Date(b.createdAt)
          );

        case "Highest Budget":
          return (
            b.totalBudget - a.totalBudget
          );

        case "Lowest Budget":
          return (
            a.totalBudget - b.totalBudget
          );

        default:
          return (
            new Date(b.createdAt) -
            new Date(a.createdAt)
          );
      }
    });

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


        <div className="mb-6 grid gap-4 rounded-2xl bg-white p-6 shadow-sm md:grid-cols-3">

          <div className="relative">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search destinations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-xl border bg-white py-3 pl-11 pr-4 outline-none transition focus:border-[#FF6B35]"
            />
          </div>

          <div className="relative">
            <Filter
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <select
              value={styleFilter}
              onChange={(e) => setStyleFilter(e.target.value)}
              className="w-full appearance-none rounded-xl border bg-white py-3 pl-11 pr-4 outline-none transition focus:border-[#FF6B35]"
            >
              <option>All</option>
              <option>Solo</option>
              <option>Couple</option>
              <option>Friends</option>
              <option>Family</option>
            </select>
          </div>

          <div className="relative">
            <ArrowUpDown
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full appearance-none rounded-xl border bg-white py-3 pl-11 pr-4 outline-none transition focus:border-[#FF6B35]"
            >
              <option>Newest</option>
              <option>Oldest</option>
              <option>Highest Budget</option>
              <option>Lowest Budget</option>
            </select>
          </div>

        </div>

        <div className="mb-10 flex items-center justify-between">

          <p className="text-gray-500">
            Showing{" "}
            <span className="font-semibold text-[#1A1A2E]">
              {filteredTrips.length}
            </span>{" "}
            trip{filteredTrips.length !== 1 ? "s" : ""}
          </p>

          <button
            onClick={() => {
              setSearchTerm("");
              setStyleFilter("All");
              setSortBy("Newest");
            }}
            className="flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm font-medium transition hover:border-[#FF6B35] hover:text-[#FF6B35]"
          >
            <X size={16} />
            Clear Filters
          </button>

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
            {filteredTrips.map((trip) => (
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