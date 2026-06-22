function SearchPlanner() {
  return (
    <div className="mt-16 w-full max-w-4xl rounded-3xl border border-white/60 bg-white p-6 shadow-xl backdrop-blur-md">
      <div className="grid gap-4 md:grid-cols-4">
        <div className="rounded-xl bg-gray-50 p-4 text-left">
          <p className="text-xs text-gray-500">From</p>
          <p className="font-medium">Lucknow</p>
        </div>

        <div className="rounded-xl bg-gray-50 p-4 text-left">
          <p className="text-xs text-gray-500">To</p>
          <p className="font-medium">Manali</p>
        </div>

        <div className="rounded-xl bg-gray-50 p-4 text-left">
          <p className="text-xs text-gray-500">Dates</p>
          <p className="font-medium">Select Dates</p>
        </div>

        <div className="rounded-xl bg-gray-50 p-4 text-left">
          <p className="text-xs text-gray-500">Travelers</p>
          <p className="font-medium">2 Adults</p>
        </div>
      </div>
    </div>
  );
}

export default SearchPlanner;