import {
  BrainCircuit,
  Wallet,
  Globe2,
} from "lucide-react";

function FeatureCard({
  title,
  description,
  icon,
}) {
  const iconMap = {
    brain: BrainCircuit,
    wallet: Wallet,
    globe: Globe2,
  };

  const Icon = iconMap[icon];

  return (
    <div className="group rounded-3xl border border-orange-100 bg-white/80 backdrop-blur-sm p-8 shadow-md transition-all duration-300 hover:-translate-y-4 hover:shadow-2xl">
      <div className="mb-6 inline-flex rounded-2xl bg-orange-100 transition-all duration-300 group-hover:bg-orange-200 p-4">
        <Icon
          size={30}
          className="text-[#FF6B35]"
        />
      </div>

      <h3 className="font-heading mb-4 text-2xl font-semibold text-[#1A1A2E]">
        {title}
      </h3>

      <p className="leading-relaxed text-gray-600">
        {description}
      </p>
    </div>
  );
}

export default FeatureCard;