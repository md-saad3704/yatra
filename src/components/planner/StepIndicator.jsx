function StepIndicator({ currentStep }) {
  const steps = [
    "Destination",
    "Budget",
    "Details",
    "Interests",
    "Review",
  ];

  return (
    <div className="mb-12">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div
            key={step}
            className="flex flex-1 items-center"
          >
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-full font-semibold ${
                currentStep > index
                  ? "bg-[#FF6B35] text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              {index + 1}
            </div>

            {index < steps.length - 1 && (
              <div
                className={`h-1 flex-1 ${
                  currentStep > index + 1
                    ? "bg-[#FF6B35]"
                    : "bg-gray-200"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      <div className="mt-4 flex justify-between text-sm text-gray-600">
        {steps.map((step) => (
          <span key={step}>{step}</span>
        ))}
      </div>
    </div>
  );
}

export default StepIndicator;