/* ===========================================================
   File       : PackingList.jsx
   Folder     : components/destination
=========================================================== */

import { Backpack } from "lucide-react";

function PackingList({ destination }) {

  const packingItems = [
    "Passport / ID",
    "Power Bank",
    "Phone Charger",
    "Comfortable Shoes",
    "Water Bottle",
  ];

  if (
    destination.category === "Beach"
  ) {
    packingItems.push(
      "Swimwear",
      "Sunglasses",
      "Sunscreen",
      "Flip Flops"
    );
  }

  if (
    destination.category === "Adventure"
  ) {
    packingItems.push(
      "Jacket",
      "Trekking Shoes",
      "Gloves",
      "First Aid Kit"
    );
  }

  if (
    destination.category === "Heritage"
  ) {
    packingItems.push(
      "Camera",
      "Cap",
      "Walking Shoes"
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-6 pb-20">

      <h2 className="mb-10 flex items-center gap-3 text-4xl font-bold text-[#1A1A2E]">
        <Backpack className="text-[#FF6B35]" />
        AI Packing Suggestions
      </h2>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

        {packingItems.map((item) => (
          <div
            key={item}
            className="rounded-2xl bg-white p-5 shadow-md"
          >
            ✅ {item}
          </div>
        ))}

      </div>

    </section>
  );
}

export default PackingList;