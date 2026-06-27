/* ===========================================================
   File       : PageTransition.jsx
   Folder     : components/ui
   Purpose    : Page wrapper with entrance animation.
   Author     : Muhammad Saad Kamal
   Project    : YĀTRĀ - AI Travel Planner
=========================================================== */

import { motion } from "framer-motion";
import { fadeUp } from "../../utils/animations";

function PageTransition({ children }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.div>
  );
}

export default PageTransition;