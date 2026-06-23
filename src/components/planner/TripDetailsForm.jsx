function TripDetailsForm({
  tripData,
  setTripData,
}) {
  const styles = [
    "Solo",
    "Couple",
    "Family",
    "Friends",
  ];

  return (
    <div className="space-y-8">
      <div>
        <label className="mb-2 block font-medium">
          Trip Duration (Days)
        </label>

        <input
          type="number"
          min="1"
          max="30"
          value={tripData.days}
          onChange={(e) =>
            setTripData({
              ...tripData,
              days: Number(e.target.value),
            })
          }
          className="w-full rounded-xl border border-gray-200 px-4 py-3"
        />
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Number of Travelers
        </label>

        <input
          type="number"
          min="1"
          max="20"
          value={tripData.travelers}
          onChange={(e) =>
            setTripData({
              ...tripData,
              travelers: Number(e.target.value),
            })
          }
          className="w-full rounded-xl border border-gray-200 px-4 py-3"
        />
      </div>

      <div>
        <label className="mb-4 block font-medium">
          Travel Style
        </label>

        <div className="grid gap-4 md:grid-cols-4">
          {styles.map((style) => (
            <button
              key={style}
              onClick={() =>
                setTripData({
                  ...tripData,
                  travelStyle: style,
                })
              }
              className={`rounded-xl border p-4 transition ${
                tripData.travelStyle === style
                  ? "border-[#FF6B35] bg-orange-50"
                  : "border-gray-200"
              }`}
            >
              {style}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TripDetailsForm;