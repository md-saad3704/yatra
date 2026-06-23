function InterestSelector({
  tripData,
  setTripData,
}) {
  const interests = [
    "Adventure",
    "Food",
    "History",
    "Nature",
    "Nightlife",
    "Photography",
    "Shopping",
    "Beaches",
  ];

  const toggleInterest = (interest) => {
    const exists =
      tripData.interests.includes(interest);

    if (exists) {
      setTripData({
        ...tripData,
        interests: tripData.interests.filter(
          (item) => item !== interest
        ),
      });
    } else {
      setTripData({
        ...tripData,
        interests: [
          ...tripData.interests,
          interest,
        ],
      });
    }
  };

  return (
    <div className="grid gap-4 md:grid-cols-4">
      {interests.map((interest) => (
        <button
          key={interest}
          onClick={() =>
            toggleInterest(interest)
          }
          className={`rounded-xl border p-4 transition-all ${
            tripData.interests.includes(
              interest
            )
              ? "border-[#FF6B35] bg-orange-50 text-[#FF6B35]"
              : "border-gray-200 hover:border-[#FF6B35]"
          }`}
        >
          {interest}
        </button>
      ))}
    </div>
  );
}

export default InterestSelector;