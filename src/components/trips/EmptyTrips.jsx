/* ===========================================================
   File       : EmptyTrips.jsx
   Folder     : components/trips
   Purpose    : Displays an empty state when no trips are saved.
   Author     : Muhammad Saad Kamal
   Project    : YĀTRĀ - AI Travel Planner
=========================================================== */

/* ===========================================================
   Imports
=========================================================== */

import { Map } from "lucide-react";
import { Card } from "../ui";

/* ===========================================================
   Component
=========================================================== */

function EmptyTrips() {
  return (
    <Card className="py-16 text-center">

      <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-orange-100">
        <Map
          size={40}
          className="text-[#FF6B35]"
        />
      </div>

      <h2 className="mb-3 text-3xl font-bold text-[#1A1A2E]">
        No Saved Trips Yet
      </h2>

      <p className="mx-auto max-w-md text-gray-500">
        Generate a trip and save it to build your personal
        travel collection.
      </p>

    </Card>
  );
}

export default EmptyTrips;