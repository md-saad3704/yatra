/* ===========================================================
   File       : DestinationHero.jsx
   Folder     : components/destination
   Purpose    : Hero section for destination details.
   Author     : Muhammad Saad Kamal
   Project    : YĀTRĀ - AI Travel Planner
=========================================================== */

import { Search } from "lucide-react";
import { motion } from "framer-motion";

function DestinationExplorerHero({
  search,
  setSearch,
}) {
  return (
    <section className="relative overflow-hidden rounded-[40px]">

      {/* Background */}

      <img
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
        alt=""
        className="h-[420px] w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

      {/* Content */}

      <div className="absolute inset-0 flex items-center">

        <div className="mx-auto w-full max-w-7xl px-8">

          <motion.h1
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            className="max-w-3xl text-6xl font-bold leading-tight text-white"
          >
            Explore Incredible Destinations
          </motion.h1>

          <motion.p
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
            }}
            className="mt-6 max-w-2xl text-xl text-white/90"
          >
            Discover unforgettable places across India and
            around the world.
          </motion.p>

          {/* Search */}

          <div className="relative mt-10 max-w-xl">

            <Search
              className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              placeholder="Search destinations..."
              className="w-full rounded-2xl bg-white py-5 pl-14 pr-5 text-lg outline-none"
            />

          </div>

        </div>

      </div>

    </section>
  );
}

export default DestinationExplorerHero;