/* ===========================================================
   File       : TripActions.jsx
   Folder     : components/trips
   Purpose    : Displays actions available for the generated trip.
   Author     : Muhammad Saad Kamal
   Project    : YĀTRĀ - AI Travel Planner
=========================================================== */

/* ===========================================================
   Imports
=========================================================== */

import { BookmarkPlus, Download } from "lucide-react";
import { Button } from "../ui";

/* ===========================================================
   Component : TripActions
=========================================================== */

function TripActions({
  onSave,
  onExport,
}) {
  return (
    <section className="mb-8 flex justify-center gap-4">

      <Button
        icon={<BookmarkPlus size={18} />}
        onClick={onSave}
      >
        Save Trip
      </Button>

      <Button
        variant="outline"
        icon={<Download size={18} />}
        onClick={onExport}
      >
        Export PDF
      </Button>

    </section>
  );
}

export default TripActions;