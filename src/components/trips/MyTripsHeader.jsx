/* ===========================================================
   File       : MyTripsHeader.jsx
   Folder     : components/trips
   Purpose    : Displays the My Trips page header.
   Author     : Muhammad Saad Kamal
   Project    : YĀTRĀ - AI Travel Planner
=========================================================== */

/* ===========================================================
   Imports
=========================================================== */

import { PageHeader } from "../ui";

/* ===========================================================
   Component
=========================================================== */

function MyTripsHeader() {
  return (
    <PageHeader
      title="My Trips"
      subtitle="View and manage your saved adventures."
    />
  );
}

export default MyTripsHeader;