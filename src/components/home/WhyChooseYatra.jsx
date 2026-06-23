import { motion } from "framer-motion";

import FeatureCard from "./FeatureCard";
import { features } from "../../data/features";

function WhyChooseYatra() {
    return (
        <section className="relative overflow-hidden py-28">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-[#FFF8F3] to-white" />

            <div className="absolute left-20 top-40 h-72 w-72 rounded-full bg-orange-200/60 blur-[120px]" />

            <div className="absolute right-20 bottom-20 h-72 w-72 rounded-full bg-sky-300/60 blur-[120px]" />

            <div className="relative z-10 mx-auto max-w-7xl px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-14 text-center"
                >
                    <span className="mb-4 inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-[#FF6B35]">
                        Why Choose YĀTRĀ
                    </span>

                    <h2 className="font-display mb-6 text-5xl md:text-6xl font-bold text-[#1A1A2E]">
                        Travel Planning,
                        <br />
                        Reimagined
                    </h2>

                    <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600">
                        YĀTRĀ combines intelligent trip planning,
                        budget optimization, and real-time travel
                        insights to help you plan better journeys
                        in less time.
                    </p>
                </motion.div>

                {/* Features Grid */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.15,
                            }}
                            viewport={{ once: true }}
                        >
                            <FeatureCard {...feature} />
                        </motion.div>
                    ))}
                </div>
            </div>


        </section>
    );
}

export default WhyChooseYatra;