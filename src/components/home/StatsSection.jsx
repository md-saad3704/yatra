import { stats } from "../../data/stats";

function StatsSection() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-[40px] bg-[#1A1A2E] px-8 py-16 text-white shadow-2xl">
          <div className="grid gap-10 text-center md:grid-cols-2 lg:grid-cols-4">
            {stats.map((item) => (
              <div key={item.label}>
                <h3 className="font-mono mb-2 text-5xl font-bold text-[#FF6B35]">
                  {item.value}
                </h3>

                <p className="text-lg text-gray-300">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default StatsSection;