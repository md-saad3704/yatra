/* ===========================================================
   File       : PlannerCard.jsx
   Folder     : components/planner
   Purpose    : Common layout wrapper for all planner steps.
   Author     : Muhammad Saad Kamal
   Project    : YĀTRĀ - AI Travel Planner
=========================================================== */

/* ===========================================================
   Imports
=========================================================== */

import { Card } from "../ui";

/* ===========================================================
   Component
=========================================================== */

function PlannerCard({
  title,
  subtitle,
  children,
}) {
  return (
    <Card className="p-10">

      {/* ===========================================================
          Header
      =========================================================== */}

      <h2 className="mb-4 text-3xl font-bold text-[#1A1A2E]">
        {title}
      </h2>

      {subtitle && (
        <p className="mb-8 text-gray-600">
          {subtitle}
        </p>
      )}

      {/* ===========================================================
          Content
      =========================================================== */}

      {children}

    </Card>
  );
}

export default PlannerCard;