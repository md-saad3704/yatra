/* ===========================================================
   File       : AnimatedCounter.jsx
   Folder     : components/ui
   Purpose    : Smooth animated counter.
   Author     : Muhammad Saad Kamal
   Project    : YĀTRĀ - AI Travel Planner
=========================================================== */

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

function AnimatedCounter({
    end,
    duration = 1800,
    decimals = 0,
    suffix = "",
    delay = 0,
}) {
    const ref = useRef(null);

    const isInView = useInView(ref, {
        once: true,
        amount: 0.4,
    });

    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isInView) return;

        let animationFrame;
        let startTime = null;

        const timer = setTimeout(() => {
            animationFrame = requestAnimationFrame(animate);
        }, delay);

        // Ease Out Cubic
        const easeOutCubic = (t) =>
            1 - Math.pow(1 - t, 3);

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;

            const progress = Math.min(
                (timestamp - startTime) / duration,
                1
            );

            const eased = easeOutCubic(progress);

            setCount(end * eased);

            if (progress < 1) {
                animationFrame = requestAnimationFrame(
                    animate
                );
            }
        };

        return () => {
            clearTimeout(timer);
            cancelAnimationFrame(animationFrame);
        };

    }, [isInView, end, duration]);

    return (
        <span ref={ref}>
            {count.toFixed(decimals)}
            {suffix}
        </span>
    );
}

export default AnimatedCounter;