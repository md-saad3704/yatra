/* ===========================================================
   File       : TripFilters.jsx
   Folder     : components/trips
   Purpose    : Search, filter and sort controls.
   Author     : Muhammad Saad Kamal
   Project    : YĀTRĀ - AI Travel Planner
=========================================================== */

/* ===========================================================
   Imports
=========================================================== */

import {
  Search,
  Filter,
  ArrowUpDown,
} from "lucide-react";

import { Card } from "../ui";

/* ===========================================================
   Component
=========================================================== */

function TripFilters({
  searchTerm,
  setSearchTerm,
  styleFilter,
  setStyleFilter,
  sortBy,
  setSortBy,
}) {
  return (
    <Card className="mb-6">
      <div className="grid gap-4 md:grid-cols-3">

        {/* Search */}

        <div className="relative">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search destinations..."
            value={searchTerm}
            onChange={(e) =>
              setSearchTerm(e.target.value)
            }
            className="w-full rounded-xl border bg-white py-3 pl-11 pr-4 outline-none transition focus:border-[#FF6B35]"
          />

        </div>

        {/* Style Filter */}

        <div className="relative">

          <Filter
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <select
            value={styleFilter}
            onChange={(e) =>
              setStyleFilter(e.target.value)
            }
            className="w-full appearance-none rounded-xl border bg-white py-3 pl-11 pr-4 outline-none transition focus:border-[#FF6B35]"
          >
            <option>All</option>
            <option>Solo</option>
            <option>Couple</option>
            <option>Friends</option>
            <option>Family</option>
          </select>

        </div>

        {/* Sort */}

        <div className="relative">

          <ArrowUpDown
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <select
            value={sortBy}
            onChange={(e) =>
              setSortBy(e.target.value)
            }
            className="w-full appearance-none rounded-xl border bg-white py-3 pl-11 pr-4 outline-none transition focus:border-[#FF6B35]"
          >
            <option>Newest</option>
            <option>Oldest</option>
            <option>Highest Budget</option>
            <option>Lowest Budget</option>
          </select>

        </div>

      </div>
    </Card>
  );
}

export default TripFilters;