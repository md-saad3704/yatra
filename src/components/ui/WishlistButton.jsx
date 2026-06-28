import { Heart } from "lucide-react";

import useWishlist from "../../hooks/useWishlist";

function WishlistButton({ id }) {

  const {
    wishlisted,
    toggle,
  } = useWishlist(id);

  return (
    <button
      onClick={toggle}
      className="transition hover:scale-110"
    >
      <Heart
        size={22}
        className={`${
          wishlisted
            ? "fill-red-500 text-red-500"
            : "text-white"
        }`}
      />
    </button>
  );
}

export default WishlistButton;