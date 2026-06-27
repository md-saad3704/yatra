/* ===========================================================
   File       : FadeInSection.jsx
   Folder     : components/ui
   Purpose    : Animates a section when it enters the viewport.
   Author     : Muhammad Saad Kamal
   Project    : YĀTRĀ - AI Travel Planner
=========================================================== */

import { motion } from "framer-motion";

function FadeInSection({
  children,
  delay = 0,
}) {
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 60,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.7,
        delay,
      }}
    >
      {children}
    </motion.section>
  );
}

export default FadeInSection;