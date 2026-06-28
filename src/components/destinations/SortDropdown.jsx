function SortDropdown({
  sortBy,
  setSortBy,
}) {
  return (
    <select
      value={sortBy}
      onChange={(e) =>
        setSortBy(e.target.value)
      }
      className="rounded-xl border border-gray-200 bg-white px-5 py-3 outline-none"
    >
      <option value="default">
        Default
      </option>

      <option value="rating">
        Highest Rating
      </option>

      <option value="priceLow">
        Lowest Price
      </option>

      <option value="priceHigh">
        Highest Price
      </option>

      <option value="az">
        A - Z
      </option>

      <option value="za">
        Z - A
      </option>
    </select>
  );
}

export default SortDropdown;