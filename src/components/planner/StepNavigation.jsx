/* ===========================================================
   File       : StepNavigation.jsx
   Folder     : components/planner
   Purpose    : Navigation buttons for planner steps.
   Author     : Muhammad Saad Kamal
   Project    : YĀTRĀ - AI Travel Planner
=========================================================== */

/* ===========================================================
   Imports
=========================================================== */

import { Button } from "../ui";

/* ===========================================================
   Component
=========================================================== */

function StepNavigation({
  showPrevious = true,
  previousLabel = "Previous",
  nextLabel = "Next",
  onPrevious,
  onNext,
  nextDisabled = false,
}) {
  return (
    <div className="mt-10 flex justify-between">

      {/* Previous Button */}

      {showPrevious ? (
        <Button
          variant="outline"
          onClick={onPrevious}
        >
          {previousLabel}
        </Button>
      ) : (
        <div />
      )}

      {/* Next Button */}

      <Button
        onClick={onNext}
        disabled={nextDisabled}
      >
        {nextLabel}
      </Button>

    </div>
  );
}

export default StepNavigation;