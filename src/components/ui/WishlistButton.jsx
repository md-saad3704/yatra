import { Heart } from "lucide-react";
import { motion } from "framer-motion";

import useWishlist from "../../hooks/useWishlist";

import {
  showSuccess,
  showInfo,
} from "../../services/toastService";

function WishlistButton({ id }) {
  const {
    wishlisted,
    toggle,
  } = useWishlist(id);

  const handleClick = (e) => {
    e.stopPropagation();

    if (wishlisted) {
      showInfo("Removed from wishlist");
    } else {
      showSuccess("Added to wishlist ❤️");
    }

    toggle();
  };

  return (
    <motion.button
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.85 }}
      transition={{
        type: "spring",
        stiffness: 300,
      }}
      onClick={handleClick}
    >
      <Heart
        size={22}
        className={`transition-all duration-300 ${
          wishlisted
            ? "fill-red-500 text-red-500"
            : "text-white"
        }`}
      />
    </motion.button>
  );
}

export default WishlistButton;