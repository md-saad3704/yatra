/* ===========================================================
   File       : SavedTripCard.jsx
   Folder     : components/trips
   Purpose    : Displays a saved trip card.
   Author     : Muhammad Saad Kamal
   Project    : YĀTRĀ - AI Travel Planner
=========================================================== */

/* ===========================================================
   Imports
=========================================================== */

import { useNavigate } from "react-router-dom";

import {
  CalendarDays,
  Users,
  Trash2,
  MapPin,
  Wallet,
  Heart,
} from "lucide-react";

import {
  Card,
  Badge,
  Button,
} from "../ui";

/* ===========================================================
   Component
=========================================================== */

function SavedTripCard({
  trip,
  onDelete,
}) {
  const navigate = useNavigate();

  return (
    <Card className="overflow-hidden p-0 transition hover:-translate-y-1 hover:shadow-xl">

      {/* ===========================================================
          Trip Image
      =========================================================== */}

      <img
        src={trip.image}
        alt={trip.destination}
        className="h-56 w-full object-cover"
      />

      <div className="p-6">

        {/* Destination */}

        <div className="mb-4 flex items-center gap-2">

          <MapPin
            size={18}
            className="text-[#FF6B35]"
          />

          <h2 className="text-2xl font-bold">
            {trip.destination}
          </h2>

        </div>

        {/* Trip Details */}

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

            <span>{trip.travelStyle}</span>

          </div>

          <p className="text-sm text-gray-400">
            Saved on{" "}
            {new Date(
              trip.createdAt
            ).toLocaleDateString()}
          </p>

        </div>

        {/* Interests */}

        <div className="mt-5 flex flex-wrap gap-2">

          {trip.interests?.map((interest) => (
            <Badge key={interest}>
              {interest}
            </Badge>
          ))}

        </div>

        {/* Actions */}

        <div className="mt-6 space-y-3">

          <Button
            className="w-full"
            onClick={() =>
              navigate("/saved-trip", {
                state: { trip },
              })
            }
          >
            View Trip
          </Button>

          <button
            onClick={() =>
              onDelete(trip.id)
            }
            className="flex items-center gap-2 text-red-500 transition hover:text-red-600"
          >
            <Trash2 size={16} />
            Delete Trip
          </button>

        </div>

      </div>

    </Card>
  );
}

export default SavedTripCard;