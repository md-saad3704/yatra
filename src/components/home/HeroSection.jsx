import SearchPlanner from "./SearchPlanner";

import { ArrowRight, MapPinned } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../ui";

import tajMahal from "../../assets/images/taj-mahal.png";
import kerala from "../../assets/images/kerala.png";
import ladakh from "../../assets/images/ladakh.png";
import goa from "../../assets/images/goa.png";
import rajasthan from "../../assets/images/rajasthan.png";

import { useNavigate } from "react-router-dom";
function HeroSection() {
    const navigate = useNavigate();
    const heroImages = [
        tajMahal,
        kerala,
        ladakh,
        goa,
        rajasthan,
    ];

    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) =>
                prev === heroImages.length - 1 ? 0 : prev + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, [heroImages.length]);

    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
            {/* Background Gradient */}
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
                style={{
                    backgroundImage: `url(${heroImages[currentImage]})`,
                }}
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />
            {/* Content */}
            <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-6 flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md"
                >
                    <MapPinned size={16} className="text-[#FF6B35]" />
                    <span className="font-body text-sm text-white">
                        Discover 5,000+ destinations
                    </span>
                </motion.div>
                {/* Heading */}
                <motion.h1
                    initial={{
                        opacity: 0,
                        y: 40,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.7,
                        delay: 0.2,
                    }}
                    className="font-display mb-6 text-5xl font-bold leading-tight text-white md:text-7xl"
                >
                    Your Next Adventure
                    <br />
                    Starts Here
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{
                        opacity: 0,
                        y: 40,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.7,
                        delay: 0.4,
                    }} className="font-body mb-10 max-w-2xl text-lg text-white/90 md:text-xl">
                    Plan perfect trips across India and the world —
                    personalized to your budget, interests, and travel style.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 40,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.7,
                        delay: 0.6,
                    }}
                    className="flex flex-col gap-4 sm:flex-row"
                >
                    <Button onClick={() => navigate("/plan")}>
                        Plan My Trip
                    </Button>

                    <Button
                        variant="secondary"
                        onClick={() => navigate("/destinations")} 
                        className="bg-white px-8"
                    >
                        Explore Destinations
                        <ArrowRight size={18} />
                    </Button>
                </motion.div>


                {/* Search Container Placeholder */}
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 50,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.7,
                        delay: 0.8,
                    }}
                >
                    <SearchPlanner />
                </motion.div>

            </div>
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white">
                <motion.div
                    animate={{
                        y: [0, 10, 0],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 1.5,
                    }}
                >
                    SCROLL
                </motion.div>
            </div>
        </section >
    );

}
export default HeroSection;