import { useEffect, useState } from "react";

import {
  getWishlist,
  toggleWishlist,
} from "../services/wishlistService";

export default function useWishlist(id) {

  const [wishlisted, setWishlisted] =
    useState(false);

  useEffect(() => {
    setWishlisted(
      getWishlist().includes(id)
    );
  }, [id]);

  const toggle = () => {
    toggleWishlist(id);

    setWishlisted((prev) => !prev);
  };

  return {
    wishlisted,
    toggle,
  };
}