const categories = [
  "All",
  "Adventure",
  "Beach",
  "Heritage",
  "Nature",
  "Luxury",
  "Culture",
];

function CategoryFilter({
  activeCategory,
  setActiveCategory,
}) {
  return (
    <div className="flex flex-wrap justify-center gap-4">

      {categories.map((category) => (
        <button
          key={category}
          onClick={() =>
            setActiveCategory(category)
          }
          className={`rounded-full px-6 py-3 transition

          ${
            activeCategory === category
              ? "bg-[#FF6B35] text-white"
              : "bg-white hover:bg-orange-50"
          }`}
        >
          {category}
        </button>
      ))}

    </div>
  );
}

export default CategoryFilter;