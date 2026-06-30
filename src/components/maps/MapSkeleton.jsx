/* ===========================================================
   File       : MapSkeleton.jsx
   Folder     : components/maps
   Purpose    : Loading skeleton for destination map
   Author     : Muhammad Saad Kamal
   Project    : YĀTRĀ - AI Travel Planner
=========================================================== */

function MapSkeleton() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20">

      <div className="overflow-hidden rounded-3xl bg-white shadow-xl">

        {/* Header Skeleton */}

        <div className="border-b p-8">

          <div className="h-8 w-64 animate-pulse rounded-lg bg-gray-200" />

          <div className="mt-4 h-4 w-96 animate-pulse rounded bg-gray-100" />

        </div>

        {/* Map Skeleton */}

        <div className="relative h-[500px] w-full overflow-hidden bg-gray-200">

          <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200" />

          <div className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF6B35]" />

        </div>

        {/* Buttons Skeleton */}

        <div className="flex gap-4 p-8">

          <div className="h-12 w-48 animate-pulse rounded-xl bg-gray-200" />

          <div className="h-12 w-48 animate-pulse rounded-xl bg-gray-200" />

        </div>

      </div>

    </section>
  );
}

export default MapSkeleton;