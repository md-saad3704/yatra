import { useMemo, useState } from "react";
import { motion } from "framer-motion";

import DestinationCard from "../components/home/DestinationCard";
import DestinationExplorerHero from "../components/destinations/DestinationHero";
import CategoryFilter from "../components/destinations/CategoryFilter";
import SortDropdown from "../components/destinations/SortDropdown";

import { featuredDestinations } from "../data/featuredDestinations";

function Destinations() {
  const [search, setSearch] = useState("");

  const [country, setCountry] = useState("India");

  const [activeCategory, setActiveCategory] =
    useState("All");

  const [sortBy, setSortBy] =
    useState("default");

  const [visibleCount, setVisibleCount] =
    useState(6);

  const filteredDestinations = useMemo(() => {
    let destinations = featuredDestinations.filter(
      (destination) =>
        destination.country === country
    );

    if (activeCategory !== "All") {
      destinations = destinations.filter(
        (destination) =>
          destination.category ===
          activeCategory
      );
    }

    if (search) {
      destinations = destinations.filter(
        (destination) =>
          destination.name
            .toLowerCase()
            .includes(search.toLowerCase())
      );
    }

    switch (sortBy) {
      case "rating":
        destinations.sort(
          (a, b) => b.rating - a.rating
        );
        break;

      case "priceLow":
        destinations.sort(
          (a, b) =>
            parseInt(
              a.price.replace(/[^\d]/g, "")
            ) -
            parseInt(
              b.price.replace(/[^\d]/g, "")
            )
        );
        break;

      case "priceHigh":
        destinations.sort(
          (a, b) =>
            parseInt(
              b.price.replace(/[^\d]/g, "")
            ) -
            parseInt(
              a.price.replace(/[^\d]/g, "")
            )
        );
        break;

      case "az":
        destinations.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        break;

      case "za":
        destinations.sort((a, b) =>
          b.name.localeCompare(a.name)
        );
        break;

      default:
        break;
    }

    return destinations;
  }, [
    country,
    activeCategory,
    search,
    sortBy,
  ]);

  return (
    <div className="bg-[#FAFAF8]">

      <DestinationExplorerHero
        search={search}
        setSearch={setSearch}
      />

      <section className="mx-auto max-w-7xl px-6 py-20">

        {/* Country */}

        <div className="mb-10 flex justify-center gap-4">

          {[
            "India",
            "International",
          ].map((item) => (
            <button
              key={item}
              onClick={() =>
                setCountry(item)
              }
              className={`rounded-full px-8 py-3 transition

              ${
                country === item
                  ? "bg-[#FF6B35] text-white"
                  : "bg-white"
              }`}
            >
              {item}
            </button>
          ))}

        </div>

        {/* Category */}

        <CategoryFilter
          activeCategory={
            activeCategory
          }
          setActiveCategory={
            setActiveCategory
          }
        />

        {/* Sort */}

        <div className="my-10 flex justify-end">

          <SortDropdown
            sortBy={sortBy}
            setSortBy={setSortBy}
          />

        </div>

        {/* Cards */}

        <motion.div
          layout
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {filteredDestinations
            .slice(0, visibleCount)
            .map((destination) => (
              <DestinationCard
                key={destination.id}
                {...destination}
              />
            ))}
        </motion.div>

        {/* Load More */}

        {visibleCount <
          filteredDestinations.length && (
          <div className="mt-16 text-center">

            <button
              onClick={() =>
                setVisibleCount(
                  (prev) => prev + 3
                )
              }
              className="rounded-xl bg-[#FF6B35] px-8 py-4 font-medium text-white transition hover:scale-105"
            >
              Load More
            </button>

          </div>
        )}

      </section>

    </div>
  );
}

export default Destinations;